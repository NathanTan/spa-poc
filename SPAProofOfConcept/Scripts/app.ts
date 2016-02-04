interface BusStop {
    id: number;
    name: string;
    lat: number;
    lng: number;
    routeNames: Array<string>;
}


function makeDataTable($element: JQuery, usePaging: boolean): GoodDataTable {
    var options: DataTables.Settings = {
        data: testData,
        columns: [
            { data: "id", name: "Stop ID" },
            { data: "name", name: "Stop Name" },
            { data: "lat", name: "Latitude" },
            { data: "lng", name: "Longitude" }
        ],
        paging: usePaging
    };
    var dataTable = <GoodDataTable>$element.DataTable(options);
    dataTable.readOnlyOptions = options;
    return dataTable;
};

interface GoodDataTable extends DataTables.DataTable {
    readOnlyOptions: DataTables.Settings;
}

var tableHTML: string;
var $dataTable: GoodDataTable;
$(document).ready(() => {
    tableHTML = $("#content")[0].outerHTML;
    $dataTable = makeDataTable($("#content"), true);

    $("#button").click(function () {
        var isPaging = $dataTable.readOnlyOptions.paging;
        $dataTable.destroy(true);
        var $table: JQuery = $(tableHTML).insertAfter("#button");
        $dataTable = makeDataTable($table, !isPaging);
    });

    setInterval(function () {
        for (var i = 0; i < testData.length; i++) {
            testData[i].id = parseInt(testData[i].id.toString().split("").reverse().join(""));
        }
        $dataTable.clear()
        $dataTable.rows.add(testData);
        $dataTable.draw(false);
        
    }, 5000);
});