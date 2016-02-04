interface BusStop {
    id: number;
    name: string;
    lat: number;
    lng: number;
    routeNames: Array<string>;
}

class BusStopsTable {
    private dataTable: DataTables.DataTable;
    private readOnlyOptions: DataTables.Settings = {
        data: this.busStops,
        columns: [
            { data: "id", name: "Stop ID" },
            { data: "name", name: "Stop Name" },
            { data: "lat", name: "Latitude" },
            { data: "lng", name: "Longitude" }
        ],
        paging: true
    };

    constructor(private table: HTMLElement, private busStops: Array<BusStop>) {
        this.dataTable = this.makeDataTable($(table));
    }

    togglePaging() {
        this.readOnlyOptions.paging = !this.readOnlyOptions.paging;
        this.dataTable.destroy(false);
        this.dataTable = this.makeDataTable($(this.table));
    }

    scrambleIDs() {
        for (var i = 0; i < this.busStops.length; i++) {
            this.busStops[i].id = parseInt(this.busStops[i].id.toString().split("").reverse().join(""));
        }
        this.reloadData();
    }

    reloadData() {
        this.dataTable.clear();
        this.dataTable.rows.add(this.busStops);
        this.dataTable.draw(false);
    }

    setBusStops(busStops: Array<BusStop>) {
        this.readOnlyOptions.data = busStops;
        this.makeDataTable($(this.table));
    }

    makeDataTable($element: JQuery): DataTables.DataTable {
        var dataTable = $element.DataTable(this.readOnlyOptions);
        return dataTable;
    };

}

var tableHTML: string;
var busStopsTable: BusStopsTable;
$(document).ready(() => {
    tableHTML = $("#content")[0].outerHTML;
    busStopsTable = new BusStopsTable(document.getElementById("content"), testData);

    $("#button").click(() => busStopsTable.togglePaging());

    setInterval(() => busStopsTable.scrambleIDs(), 5000);
});