interface BusStop {
    id: number;
    name: string;
    lat: number;
    lng: number;
    routeNames: Array<string>;
}

function makeComplexCell(data: BusStop) {
    const mySpecialBlueLines = data.routeNames.map(row => "<span style='color: blue;'>" + row + "</span>").join("<br>");
    const link = "<a href='https://corvallisb.us/#" + data.id + "' target='_blank'>" + mySpecialBlueLines + "</a>";
    const dif1 = 45 + Math.floor(Math.random() * 10);
    const dif2 = 45 + Math.floor(Math.random() * 10);
    return link + "<br>" + "<img src='http://www.fillmurray.com/" + dif1 + "/" + dif2 + "'></img>";
}

class BusStopsTable {
    private dataTable: DataTables.DataTable;
    private readOnlyOptions: DataTables.Settings = {
        data: this.busStops,
        columns: [
            { data: "id", title: "Stop ID" },
            { data: "name", title: "Stop Name" },
            { data: "lat", title: "Latitude" },
            { data: "lng", title: "Longitude" },
            {
                data: "routeNames", title: "Ba'al Names",
                render: (_, __, stop: BusStop) => {
                    return makeComplexCell(stop);
                }
            }
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
        //for (var i = 0; i < this.busStops.length; i++) {
        //    this.busStops[i].id = parseInt(this.busStops[i].id.toString().split("").reverse().join(""));
        //}
        //this.reloadData();
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