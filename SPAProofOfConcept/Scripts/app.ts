/// <reference path="typings/jquery/jquery.d.ts"/>
/// <reference path="testData.ts"/>

interface BusStop {
    id: number;
    name: string;
    lat: number;
    lng: number;
    routeNames: Array<string>;
}

$(document).ready(() => {
    $("#content").DataTable({
        data: testData,
        columns: [
            { data: "id", name: "Stop ID" },
            { data: "name", name: "Stop Name" },
            { data: "lat", name: "Latitude" },
            { data: "lng", name: "Longitude" }
        ]
    });
    $("#reverse-button").click(function () {
        for (var i = 0; i < testData.length; i++) {
            testData[i].id = parseInt(testData[i].id.toString().split("").reverse().join(""));
        }

        var dataTable = $("#content").DataTable();
        dataTable.clear()
        dataTable.rows.add(testData);
        dataTable.draw();
    });
});