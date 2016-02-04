var testData: Array<BusStop> = [
    {
        id: 10003,
        name: "NW Harrison Blvd & NW Witham Dr",
        lat: 44.57182854,
        lng: -123.2948305,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 10019,
        name: "Benton Oaks RV Park",
        lat: 44.5701824,
        lng: -123.3122203,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 10026,
        name: "NW 53rd St & Benton Oaks RV Park",
        lat: 44.56832567,
        lng: -123.3121976,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 10035,
        name: "NW 53rd St & SW 53rd St",
        lat: 44.56699284,
        lng: -123.3121761,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 10042,
        name: "SW 53rd St & SW Reservoir Ave",
        lat: 44.5638732,
        lng: -123.3121066,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 10057,
        name: "SW 53rd St & SW Cherry Ave",
        lat: 44.56084753,
        lng: -123.312085,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 10061,
        name: "SW 53rd St & SW Willow Ave",
        lat: 44.55886681,
        lng: -123.3120981,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 10074,
        name: "SW 53rd St & SW West Hills Rd",
        lat: 44.556454,
        lng: -123.312123,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 10088,
        name: "SW 53rd St & SW Helen Ave",
        lat: 44.55268783,
        lng: -123.3120931,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 10090,
        name: "SW 53rd St & SW Philomath Blvd",
        lat: 44.55043843,
        lng: -123.312124,
        routeNames: [
            "3",
            "NOSW"
        ]
    },
    {
        id: 10100,
        name: "SW 53rd St & SW Meridian Pl",
        lat: 44.54834935,
        lng: -123.3121108,
        routeNames: [
            "3",
            "NOSW"
        ]
    },
    {
        id: 10116,
        name: "SW 53rd St & SW Country Club Dr",
        lat: 44.5461906,
        lng: -123.3121135,
        routeNames: [
            "3",
            "NOSW"
        ]
    },
    {
        id: 10128,
        name: "SW Country Club Dr & SW Meadow Flower Dr",
        lat: 44.54571241,
        lng: -123.3098098,
        routeNames: [
            "3",
            "NOSW"
        ]
    },
    {
        id: 10137,
        name: "SW 49th St & SW Aster St",
        lat: 44.54602799,
        lng: -123.3066931,
        routeNames: [
            "3",
            "NOSW"
        ]
    },
    {
        id: 10144,
        name: "SW 49th St & SW Aster St",
        lat: 44.54601455,
        lng: -123.3068237,
        routeNames: [
            "8"
        ]
    },
    {
        id: 10159,
        name: "SW 49th St & SW Roseberry St",
        lat: 44.54711707,
        lng: -123.3068174,
        routeNames: [
            "8"
        ]
    },
    {
        id: 10163,
        name: "SW 49th St & Creekside Apartments",
        lat: 44.54713696,
        lng: -123.3066939,
        routeNames: [
            "3",
            "NOSW"
        ]
    },
    {
        id: 10171,
        name: "SW 49th St & Spring Creek Apartments",
        lat: 44.5485014,
        lng: -123.3083761,
        routeNames: [
            "8"
        ]
    },
    {
        id: 10185,
        name: "SW 49th St & SW Technology Loop",
        lat: 44.54896432,
        lng: -123.3082579,
        routeNames: [
            "3",
            "NOSW"
        ]
    },
    {
        id: 10214,
        name: "NW Harrison Blvd & NW 34th St",
        lat: 44.57168123,
        lng: -123.2892082,
        routeNames: [
            "1",
            "C1"
        ]
    },
    {
        id: 10222,
        name: "NW Harrison Blvd & NW 33rd St",
        lat: 44.57170232,
        lng: -123.2874822,
        routeNames: [
            "1",
            "C1"
        ]
    },
    {
        id: 10233,
        name: "NW Harrison Blvd & NW 31st St",
        lat: 44.57169902,
        lng: -123.28552,
        routeNames: [
            "1",
            "C1"
        ]
    },
    {
        id: 10246,
        name: "NW Monroe Ave & SW 26th St",
        lat: 44.5688936,
        lng: -123.2797248,
        routeNames: [
            "1",
            "3",
            "7",
            "8",
            "C1",
            "C3",
            "NOSE"
        ]
    },
    {
        id: 10251,
        name: "NW Monroe Ave & NW 23rd St",
        lat: 44.56837262,
        lng: -123.2773788,
        routeNames: [
            "1",
            "3",
            "7",
            "8",
            "C1",
            "C3",
            "NOSE"
        ]
    },
    {
        id: 10267,
        name: "NW Monroe Ave & NW Kings Blvd",
        lat: 44.56777752,
        lng: -123.2747184,
        routeNames: [
            "1",
            "3",
            "5",
            "7",
            "8",
            "C1",
            "C1R",
            "C3",
            "NON",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 10279,
        name: "NW Monroe Ave & SW 14th St",
        lat: 44.56706542,
        lng: -123.2718587,
        routeNames: [
            "1",
            "3",
            "5",
            "7",
            "8",
            "C1",
            "C1R",
            "C3",
            "NON",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 10280,
        name: "NW Monroe Ave & NW 10th St",
        lat: 44.56623432,
        lng: -123.2685299,
        routeNames: [
            "1",
            "3",
            "5",
            "7",
            "8",
            "C1",
            "C1R",
            "C3",
            "CVA",
            "NON",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 10298,
        name: "NW Monroe Ave & SW 9th St",
        lat: 44.56583555,
        lng: -123.2670069,
        routeNames: [
            "1",
            "2",
            "3",
            "5",
            "6",
            "7",
            "8",
            "C1",
            "C1R",
            "C3",
            "CVA",
            "NON",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 10308,
        name: "NW Monroe Ave & NW 7th St",
        lat: 44.56533603,
        lng: -123.265034,
        routeNames: [
            "1",
            "2",
            "3",
            "5",
            "6",
            "7",
            "8",
            "C1",
            "C1R",
            "C3",
            "CVA",
            "NON",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 10312,
        name: "Downtown Transit Center",
        lat: 44.56490241,
        lng: -123.2633407,
        routeNames: [
            "CVA",
            "NON",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 10331,
        name: "Hewlett-Packard South Entrance",
        lat: 44.58063524,
        lng: -123.2434415,
        routeNames: [
            "C2"
        ]
    },
    {
        id: 10349,
        name: "NW 9th St & NW Grant Ave",
        lat: 44.58060739,
        lng: -123.2595672,
        routeNames: [
            "2",
            "4"
        ]
    },
    {
        id: 10354,
        name: "NW 9th St & NW Cornell Ave",
        lat: 44.57707454,
        lng: -123.2615247,
        routeNames: [
            "2",
            "4"
        ]
    },
    {
        id: 10365,
        name: "NW 9th St & NW Walnut Blvd",
        lat: 44.59442912,
        lng: -123.2516435,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10377,
        name: "NE Conifer Blvd & Meadow Park Mobile Home Park",
        lat: 44.59991678,
        lng: -123.2449808,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 10383,
        name: "NE Conifer Blvd & NE Canterbury Cir",
        lat: 44.59995866,
        lng: -123.24134,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 10396,
        name: "NW 9th St & NW Circle Blvd",
        lat: 44.58912189,
        lng: -123.2545952,
        routeNames: [
            "1",
            "2"
        ]
    },
    {
        id: 10401,
        name: "NW 9th St & NW Spruce Ave",
        lat: 44.58633758,
        lng: -123.2561547,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10417,
        name: "NW 9th St & NW Garfield Ave",
        lat: 44.58335103,
        lng: -123.2578052,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10429,
        name: "NW 9th St & NW Hayes Ave",
        lat: 44.58162895,
        lng: -123.2587522,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10438,
        name: "NW 9th St & NW Grant Ave",
        lat: 44.57991362,
        lng: -123.2596927,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10440,
        name: "NW 9th St & NW Polk Ave",
        lat: 44.570628894,
        lng: -123.265055793,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10455,
        name: "NW 9th St & NW Reiman St",
        lat: 44.57325742,
        lng: -123.2636448,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10464,
        name: "NE Walnut Blvd & NE Conser St",
        lat: 44.59142507,
        lng: -123.2430117,
        routeNames: [
            "1",
            "NON"
        ]
    },
    {
        id: 10472,
        name: "NE Walnut Blvd & NE Jack London St",
        lat: 44.59301324,
        lng: -123.2465407,
        routeNames: [
            "1",
            "NON"
        ]
    },
    {
        id: 10486,
        name: "NW Walnut Blvd & NW 9th St",
        lat: 44.59393451,
        lng: -123.2525186,
        routeNames: [
            "1"
        ]
    },
    {
        id: 10493,
        name: "NW Walnut Blvd & NW Satinwood St",
        lat: 44.5939506,
        lng: -123.2563536,
        routeNames: [
            "1"
        ]
    },
    {
        id: 10504,
        name: "NW Walnut Blvd & NW Oak Ave",
        lat: 44.59350005,
        lng: -123.2606314,
        routeNames: [
            "1",
            "4"
        ]
    },
    {
        id: 10515,
        name: "NW Walnut Blvd & NW Garryanna St",
        lat: 44.59367303,
        lng: -123.2679979,
        routeNames: [
            "1"
        ]
    },
    {
        id: 10527,
        name: "NW Walnut Blvd & NW Kings Blvd",
        lat: 44.59222838,
        lng: -123.2757464,
        routeNames: [
            "1",
            "5"
        ]
    },
    {
        id: 10536,
        name: "NW Walnut Blvd & NW 25th St",
        lat: 44.59254813,
        lng: -123.2782586,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 10543,
        name: "NW Walnut Blvd & NW 29th St",
        lat: 44.59302602,
        lng: -123.2827565,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 10558,
        name: "NW Walnut Blvd & NW Princess St",
        lat: 44.59330555,
        lng: -123.2992041,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 10562,
        name: "Hewlett-Packard",
        lat: 44.58499775,
        lng: -123.2436766,
        routeNames: [
            "1",
            "7"
        ]
    },
    {
        id: 10570,
        name: "NW Walnut Blvd & NW Witham Hill Dr",
        lat: 44.59380054,
        lng: -123.3013888,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 10589,
        name: "NW Walnut Blvd & NW Rolling Green Dr",
        lat: 44.59358374,
        lng: -123.2713287,
        routeNames: [
            "1"
        ]
    },
    {
        id: 10591,
        name: "NW Walnut Blvd & Timberhill Townhouses",
        lat: 44.59319223,
        lng: -123.2855411,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 10602,
        name: "NW Walnut Blvd & Timberhill Townhouses",
        lat: 44.59313196,
        lng: -123.28944,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 10618,
        name: "NW Walnut Blvd & NW Aspen St",
        lat: 44.59309059,
        lng: -123.2935968,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 10625,
        name: "NW Walnut Blvd & NW Walnut Pl",
        lat: 44.59310084,
        lng: -123.2960635,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 10639,
        name: "NW Walnut Blvd & NW Princess St",
        lat: 44.593511,
        lng: -123.2993748,
        routeNames: [
            "1",
            "C1",
            "NON"
        ]
    },
    {
        id: 10641,
        name: "NW Walnut Blvd & NW Aspen St",
        lat: 44.59324573,
        lng: -123.2948563,
        routeNames: [
            "1",
            "C1",
            "NON"
        ]
    },
    {
        id: 10656,
        name: "NW Walnut Blvd & Timberhill Townhouses",
        lat: 44.59324816,
        lng: -123.2899591,
        routeNames: [
            "C1",
            "NON"
        ]
    },
    {
        id: 10660,
        name: "NW Walnut Blvd & NW 29th St",
        lat: 44.59335618,
        lng: -123.2855854,
        routeNames: [
            "C1",
            "NON"
        ]
    },
    {
        id: 10673,
        name: "NW 9th St & NW Garfield Ave",
        lat: 44.582577914,
        lng: -123.258459294,
        routeNames: [
            "2",
            "4"
        ]
    },
    {
        id: 10687,
        name: "NW 9th St & NW Hobart Ave",
        lat: 44.58454422,
        lng: -123.2574168,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10694,
        name: "NW 9th St & NW Beca Ave",
        lat: 44.57850706,
        lng: -123.2607407,
        routeNames: [
            "2",
            "4"
        ]
    },
    {
        id: 10706,
        name: "NW 9th St & NW Buchanan Ave",
        lat: 44.57499568,
        lng: -123.2626824,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10710,
        name: "NW 9th St & NW Van Buren Ave",
        lat: 44.56768472,
        lng: -123.266518,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10723,
        name: "SW 9th St & SW Madison Ave",
        lat: 44.56519693,
        lng: -123.2676078,
        routeNames: [
            "1",
            "2",
            "5",
            "6",
            "7"
        ]
    },
    {
        id: 10734,
        name: "NW 9th St & NW Jackson Ave",
        lat: 44.56720061,
        lng: -123.266595,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10747,
        name: "NW 9th St & NW Polk Ave",
        lat: 44.570575978,
        lng: -123.264911231,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10752,
        name: "NW 9th St & NW Fremont Ave",
        lat: 44.57170194,
        lng: -123.2642512,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10768,
        name: "NW 9th St & NW Reiman St",
        lat: 44.57320197,
        lng: -123.2633692,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10775,
        name: "NW 9th St & NW Buchanan Ave",
        lat: 44.57488955,
        lng: -123.2624736,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10781,
        name: "NW 9th St & NW Cornell Ave",
        lat: 44.57681448,
        lng: -123.2614094,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10799,
        name: "NW 9th St & NW Sequoia Ave",
        lat: 44.59155177,
        lng: -123.2532297,
        routeNames: [
            "1",
            "2"
        ]
    },
    {
        id: 10809,
        name: "NW 9th St & NW Walnut Blvd",
        lat: 44.59368778,
        lng: -123.2523294,
        routeNames: [
            "2",
            "7",
            "NON"
        ]
    },
    {
        id: 10813,
        name: "NW Walnut Blvd & NW 9th St",
        lat: 44.594161,
        lng: -123.2526236,
        routeNames: [
            "1"
        ]
    },
    {
        id: 10821,
        name: "NW Walnut Blvd & NW Satinwood St",
        lat: 44.59398648,
        lng: -123.2583412,
        routeNames: [
            "1",
            "4"
        ]
    },
    {
        id: 10832,
        name: "NW Walnut Blvd & NW Garryanna Dr",
        lat: 44.59384633,
        lng: -123.2679505,
        routeNames: [
            "1"
        ]
    },
    {
        id: 10845,
        name: "NW Walnut Blvd & NW Professional Dr",
        lat: 44.59244749,
        lng: -123.2770221,
        routeNames: [
            "1",
            "C1",
            "NON"
        ]
    },
    {
        id: 10850,
        name: "NW Walnut Blvd & NW 25th St",
        lat: 44.59318275,
        lng: -123.2804195,
        routeNames: [
            "1",
            "C1",
            "NON"
        ]
    },
    {
        id: 10866,
        name: "NW Walnut Blvd & NW Highland Dr",
        lat: 44.59394015,
        lng: -123.2632864,
        routeNames: [
            "1"
        ]
    },
    {
        id: 10878,
        name: "NE Conifer Blvd & NE Glacier Way",
        lat: 44.59940457,
        lng: -123.2349051,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 10884,
        name: "NE Conifer Blvd & NE Dorchester Way",
        lat: 44.6001161,
        lng: -123.238601,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 10897,
        name: "NE Conifer Blvd & NE Cambridge Cir",
        lat: 44.59829647,
        lng: -123.2461176,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 10907,
        name: "NE Conifer Blvd & Pacific Hwy West",
        lat: 44.59691364,
        lng: -123.2483994,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 10911,
        name: "NW 9th St & NW Maxine Ave",
        lat: 44.59756945,
        lng: -123.2499313,
        routeNames: [
            "2"
        ]
    },
    {
        id: 10924,
        name: "NW Samaritan Dr",
        lat: 44.603263102,
        lng: -123.249758555,
        routeNames: [
            "2",
            "7"
        ]
    },
    {
        id: 10930,
        name: "NW Samaritan Dr",
        lat: 44.60376151,
        lng: -123.2531433,
        routeNames: [
            "2",
            "7"
        ]
    },
    {
        id: 10948,
        name: "NW Samaritan Dr",
        lat: 44.60327554,
        lng: -123.2533538,
        routeNames: [
            "4"
        ]
    },
    {
        id: 10953,
        name: "NW Samaritan Dr",
        lat: 44.603361914,
        lng: -123.249968351,
        routeNames: [
            "4"
        ]
    },
    {
        id: 10969,
        name: "Corvallis Clinic",
        lat: 44.60224218,
        lng: -123.255457,
        routeNames: [
            "2",
            "7"
        ]
    },
    {
        id: 10976,
        name: "NW 9th St & NW Maxine Ave",
        lat: 44.59746423,
        lng: -123.2501764,
        routeNames: [
            "2",
            "7"
        ]
    },
    {
        id: 10982,
        name: "NW 9th St & NW Ponderosa Ave",
        lat: 44.59611026,
        lng: -123.2509379,
        routeNames: [
            "2",
            "7",
            "NON"
        ]
    },
    {
        id: 10995,
        name: "NW 9th St & NW Sequoia Ave",
        lat: 44.59097041,
        lng: -123.253828,
        routeNames: [
            "2",
            "7",
            "NON"
        ]
    },
    {
        id: 11004,
        name: "NW 9th St and Circle Blvd",
        lat: 44.58831593,
        lng: -123.2553161,
        routeNames: [
            "2"
        ]
    },
    {
        id: 11015,
        name: "NW 9th St & NW Hobart Ave",
        lat: 44.58607273,
        lng: -123.2565698,
        routeNames: [
            "2"
        ]
    },
    {
        id: 11027,
        name: "NW Circle Blvd & NW Janssen St",
        lat: 44.58879126,
        lng: -123.2589581,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11036,
        name: "Circle & 9th",
        lat: 44.58891487,
        lng: -123.2552497,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11043,
        name: "NE Circle Blvd & NE Four Acre St",
        lat: 44.58895022,
        lng: -123.2515705,
        routeNames: [
            "1"
        ]
    },
    {
        id: 11058,
        name: "NE Circle Blvd & NE Belvue St",
        lat: 44.58900964,
        lng: -123.2482902,
        routeNames: [
            "1"
        ]
    },
    {
        id: 11062,
        name: "NE Circle Blvd & NE Jack London St",
        lat: 44.58883401,
        lng: -123.2472245,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11070,
        name: "NE Circle Blvd & Capri Villa Mobile Home Park",
        lat: 44.58879811,
        lng: -123.2499655,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11089,
        name: "NW Circle Blvd & NW Kings Blvd",
        lat: 44.58626111,
        lng: -123.2753814,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11091,
        name: "NW Circle Blvd & NW Pendleton Pl",
        lat: 44.58630443,
        lng: -123.2796314,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11101,
        name: "NW Circle Blvd & NW 29th St",
        lat: 44.58633964,
        lng: -123.2827501,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11117,
        name: "NW Circle Blvd & NW 27th St",
        lat: 44.58650092,
        lng: -123.2815662,
        routeNames: [
            "7"
        ]
    },
    {
        id: 11129,
        name: "NW Circle Blvd & NW Kings Blvd",
        lat: 44.58644906,
        lng: -123.2763999,
        routeNames: [
            "7"
        ]
    },
    {
        id: 11138,
        name: "NW Circle Blvd & NW 17th St",
        lat: 44.5875082,
        lng: -123.2727596,
        routeNames: [
            "5",
            "7",
            "NON"
        ]
    },
    {
        id: 11140,
        name: "NW Circle Blvd & NW 13th St",
        lat: 44.5887613,
        lng: -123.2675503,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11155,
        name: "NW Circle Blvd & NW 11th St",
        lat: 44.5888115,
        lng: -123.2645574,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11164,
        name: "NW Circle Blvd",
        lat: 44.58870887,
        lng: -123.256298,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11172,
        name: "NW Circle Blvd & NW Janssen St",
        lat: 44.58863434,
        lng: -123.2585099,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11186,
        name: "NW Circle Blvd & NW Highland Dr",
        lat: 44.58866986,
        lng: -123.2620969,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 11193,
        name: "NW Highland Dr & NW Spruce Ave",
        lat: 44.58765007,
        lng: -123.2624855,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11206,
        name: "NW Highland Dr & NW Cleveland Ave",
        lat: 44.58609077,
        lng: -123.2624824,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11210,
        name: "NW Highland Dr & NW Garfield Ave",
        lat: 44.58340174,
        lng: -123.2624729,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11223,
        name: "NW Highland Dr & NW Hayes Ave",
        lat: 44.581754493,
        lng: -123.262475595,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11234,
        name: "NW Highland Dr & NW Hayes Ave",
        lat: 44.581621303,
        lng: -123.262648201,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 11247,
        name: "NW Highland Dr & NW Cleveland Ave",
        lat: 44.58561094,
        lng: -123.2626544,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11252,
        name: "NW Highland Dr & NW Spruce Ave",
        lat: 44.58701307,
        lng: -123.2626508,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11268,
        name: "NW Highland Dr & NW Sycamore Ave",
        lat: 44.58957278,
        lng: -123.2626578,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11275,
        name: "NW Highland Dr & NW Walnut Blvd",
        lat: 44.59339303,
        lng: -123.2626588,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11281,
        name: "NW Highland Dr & NW Angelica Dr",
        lat: 44.5949508,
        lng: -123.2626934,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 11299,
        name: "NW Highland Dr & NW Highland Dell Dr",
        lat: 44.60042077,
        lng: -123.2628949,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 11309,
        name: "NW Highland Dr & NW Meadow Ridge Pl",
        lat: 44.60044119,
        lng: -123.2626793,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 11313,
        name: "NW Highland Dr & NW Anjni Cir",
        lat: 44.59590761,
        lng: -123.2625082,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 11321,
        name: "NW Highland Dr & NW Walnut Blvd",
        lat: 44.59408894,
        lng: -123.2625029,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 11332,
        name: "NW Highland Dr & NW Oak Ave",
        lat: 44.59277019,
        lng: -123.2624802,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11345,
        name: "NW Highland Dr & NW Sequoia Ave",
        lat: 44.59126904,
        lng: -123.262477,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11350,
        name: "NW Highland Dr & NW Circle Blvd",
        lat: 44.58904974,
        lng: -123.2624777,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 11707,
        name: "NW Satinwood St & NW Maxine Cir",
        lat: 44.59760427,
        lng: -123.2575305,
        routeNames: [
            "4"
        ]
    },
    {
        id: 11711,
        name: "NW Satinwood St & NW Maxine Ave",
        lat: 44.59804183,
        lng: -123.2573573,
        routeNames: [
            "4"
        ]
    },
    {
        id: 11724,
        name: "NW Satinwood St",
        lat: 44.59509439,
        lng: -123.2575116,
        routeNames: [
            "4"
        ]
    },
    {
        id: 11730,
        name: "NW Satinwood St",
        lat: 44.59481757,
        lng: -123.2573231,
        routeNames: [
            "4"
        ]
    },
    {
        id: 11748,
        name: "SW Western Blvd & SW Grove St",
        lat: 44.55681246,
        lng: -123.2827232,
        routeNames: [
            "3",
            "8",
            "C3",
            "NOSW"
        ]
    },
    {
        id: 11753,
        name: "SW Western Blvd & SW Poplar Pl",
        lat: 44.55682822,
        lng: -123.2864694,
        routeNames: [
            "3",
            "8",
            "C3",
            "NOSW"
        ]
    },
    {
        id: 11769,
        name: "SW Western Blvd & SW 35th St",
        lat: 44.5568408,
        lng: -123.289208,
        routeNames: [
            "3",
            "8",
            "C3",
            "NOSW"
        ]
    },
    {
        id: 11776,
        name: "SW Western Blvd & SW Hillside Dr",
        lat: 44.55616916,
        lng: -123.2947759,
        routeNames: [
            "3",
            "C3"
        ]
    },
    {
        id: 11782,
        name: "SW 35th St & SW Hil-Wood Pl",
        lat: 44.55535428,
        lng: -123.2895441,
        routeNames: [
            "8",
            "NOSW"
        ]
    },
    {
        id: 11795,
        name: "SW 35th St & SW Birdie Dr",
        lat: 44.55254806,
        lng: -123.2895055,
        routeNames: [
            "8",
            "NOSW"
        ]
    },
    {
        id: 11805,
        name: "SW 35th St",
        lat: 44.54894714,
        lng: -123.2895695,
        routeNames: [
            "8",
            "NOSW"
        ]
    },
    {
        id: 11814,
        name: "SW Country Club Dr & SW Country Club Pl",
        lat: 44.54833209,
        lng: -123.2925244,
        routeNames: [
            "8",
            "NOSW"
        ]
    },
    {
        id: 11822,
        name: "SW Country Club Dr & SW Pinehurst Pl",
        lat: 44.54810362,
        lng: -123.2954209,
        routeNames: [
            "8"
        ]
    },
    {
        id: 11833,
        name: "SW Country Club Dr & SW 45th St",
        lat: 44.54649819,
        lng: -123.3016827,
        routeNames: [
            "8"
        ]
    },
    {
        id: 11846,
        name: "SW Country Club Dr & SW 49th St",
        lat: 44.5456752,
        lng: -123.3054361,
        routeNames: [
            "8"
        ]
    },
    {
        id: 11851,
        name: "SW Western Blvd & SW Ivy Pl",
        lat: 44.5566165,
        lng: -123.2936592,
        routeNames: [
            "3",
            "8",
            "NOSW"
        ]
    },
    {
        id: 11867,
        name: "SW Western Blvd & SW 35th St",
        lat: 44.55701184,
        lng: -123.2901028,
        routeNames: [
            "3",
            "8",
            "NOSW"
        ]
    },
    {
        id: 11879,
        name: "SW Western Blvd & SW Poplar Pl",
        lat: 44.55692624,
        lng: -123.2859116,
        routeNames: [
            "3",
            "8",
            "NOSW"
        ]
    },
    {
        id: 11880,
        name: "SW Western Blvd & SW Grove St",
        lat: 44.55691681,
        lng: -123.2834063,
        routeNames: [
            "3",
            "8",
            "NOSW"
        ]
    },
    {
        id: 11898,
        name: "SW Western Blvd & SW Grove St",
        lat: 44.55713209,
        lng: -123.2816187,
        routeNames: [
            "3",
            "8",
            "NOSW"
        ]
    },
    {
        id: 11908,
        name: "SW Western Blvd & SW 26th St",
        lat: 44.55845937,
        lng: -123.2787796,
        routeNames: [
            "3",
            "8",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 11912,
        name: "SW Western Blvd & SW 16th St",
        lat: 44.55978943,
        lng: -123.2753984,
        routeNames: [
            "3",
            "8",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 11920,
        name: "SW Western Blvd & SW 13th St",
        lat: 44.56015493,
        lng: -123.2718574,
        routeNames: [
            "6",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 11931,
        name: "SW Western Blvd & SW 8th St",
        lat: 44.56046811,
        lng: -123.2683767,
        routeNames: [
            "6",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 11949,
        name: "SW Western Blvd & SW 4th St",
        lat: 44.55983655,
        lng: -123.2647122,
        routeNames: [
            "6",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 11954,
        name: "SW 3rd St & SW Twin Oaks Cir",
        lat: 44.55376888,
        lng: -123.2648142,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 11965,
        name: "SE Crystal Lake Dr & SE Bethel St",
        lat: 44.55187102,
        lng: -123.2583393,
        routeNames: [
            "6"
        ]
    },
    {
        id: 11977,
        name: "SE Bethel St & SE Chester Ave",
        lat: 44.55069513,
        lng: -123.2586356,
        routeNames: [
            "6"
        ]
    },
    {
        id: 11983,
        name: "SE Bethel St & SE Lilly Ave",
        lat: 44.54803521,
        lng: -123.2586247,
        routeNames: [
            "6"
        ]
    },
    {
        id: 11996,
        name: "SE Bethel St & SE Bethel Pl",
        lat: 44.54638375,
        lng: -123.2592549,
        routeNames: [
            "6"
        ]
    },
    {
        id: 12006,
        name: "SE Ryan St & SE Alexander Ave",
        lat: 44.54501652,
        lng: -123.2585509,
        routeNames: [
            "6"
        ]
    },
    {
        id: 12010,
        name: "SE Ryan St & SE Richland Ave",
        lat: 44.54272437,
        lng: -123.2585538,
        routeNames: [
            "6"
        ]
    },
    {
        id: 12023,
        name: "SE Ryan St & SE Powell Ave",
        lat: 44.5408023,
        lng: -123.2585512,
        routeNames: [
            "6"
        ]
    },
    {
        id: 12034,
        name: "SE Park Ave & SE Park Pl",
        lat: 44.53862936,
        lng: -123.2607997,
        routeNames: [
            "6"
        ]
    },
    {
        id: 12386,
        name: "NW Harrison Blvd & NW 30th St",
        lat: 44.57182299,
        lng: -123.2842967,
        routeNames: [
            "1",
            "C1R",
            "C3"
        ]
    },
    {
        id: 12393,
        name: "NW Arnold Way & NW Van Buren Ave",
        lat: 44.57094082,
        lng: -123.2824648,
        routeNames: [
            "1",
            "7",
            "C1"
        ]
    },
    {
        id: 12408,
        name: "NW Arnold Way & NW Short Ave",
        lat: 44.57095786,
        lng: -123.2823536,
        routeNames: [
            "1",
            "7",
            "C1R",
            "C3",
            "NON",
            "NOSW"
        ]
    },
    {
        id: 12412,
        name: "NW Arnold Way & NW 26th St",
        lat: 44.5693561,
        lng: -123.2803743,
        routeNames: [
            "1",
            "7",
            "C1R",
            "C3",
            "NON",
            "NOSW"
        ]
    },
    {
        id: 12420,
        name: "NW Monroe Avenue and NW 23rd Street",
        lat: 44.56860822,
        lng: -123.2777692,
        routeNames: [
            "1",
            "7",
            "C1R",
            "C3",
            "NON"
        ]
    },
    {
        id: 12431,
        name: "SW 26th St & SW A Ave",
        lat: 44.55928582,
        lng: -123.2795194,
        routeNames: [
            "3",
            "8",
            "C3",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 12449,
        name: "NW Monroe Ave & NW Kings Blvd",
        lat: 44.56795864,
        lng: -123.2749396,
        routeNames: [
            "1",
            "7",
            "C1R",
            "C3",
            "NON"
        ]
    },
    {
        id: 12454,
        name: "NW Monroe Ave & NW 15th St",
        lat: 44.56740743,
        lng: -123.2727211,
        routeNames: [
            "1",
            "5",
            "7",
            "C1",
            "C1R",
            "C3",
            "NON"
        ]
    },
    {
        id: 12465,
        name: "NW Monroe Ave & NW 11th St",
        lat: 44.56663989,
        lng: -123.2696009,
        routeNames: [
            "1",
            "5",
            "7",
            "C1",
            "C1R",
            "C3"
        ]
    },
    {
        id: 12477,
        name: "NW Monroe Ave & NW 9th St",
        lat: 44.5661601,
        lng: -123.2676794,
        routeNames: [
            "1",
            "5",
            "7",
            "C1",
            "C1R",
            "C3"
        ]
    },
    {
        id: 12483,
        name: "NW Harrison Blvd & NW 36th St",
        lat: 44.57181054,
        lng: -123.2914071,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 12496,
        name: "NW Harrison Blvd & NW 35th St",
        lat: 44.571752,
        lng: -123.289164,
        routeNames: [
            "1",
            "C1R",
            "C3"
        ]
    },
    {
        id: 12505,
        name: "NW 33rd St & NW Harrison Blvd",
        lat: 44.57176244,
        lng: -123.2878018,
        routeNames: [
            "1",
            "C1R",
            "C3"
        ]
    },
    {
        id: 12514,
        name: "NW 29th St & Timberhill Townhouses",
        lat: 44.5958892,
        lng: -123.2871877,
        routeNames: [
            "1"
        ]
    },
    {
        id: 12522,
        name: "NW 29th St & Hidden Creek Apartments",
        lat: 44.5943713,
        lng: -123.2841812,
        routeNames: [
            "1"
        ]
    },
    {
        id: 12546,
        name: "NW 29th St & NW Garfield Ave",
        lat: 44.58337453,
        lng: -123.283031,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12551,
        name: "NW 29th St & NW Mulkey Ave",
        lat: 44.58095269,
        lng: -123.2830133,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12567,
        name: "NW 29th St & NW Grant Ave",
        lat: 44.579051835,
        lng: -123.282992933,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12579,
        name: "NW 29th St & NW Tyler Ave",
        lat: 44.57241032,
        lng: -123.283495,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12598,
        name: "NW 29th St & NW Fillmore Ave",
        lat: 44.57535013,
        lng: -123.2833373,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12607,
        name: "NW 29th St & NW Lincoln Ave",
        lat: 44.57728129,
        lng: -123.2832173,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12611,
        name: "NW 29th St & NW Grant Ave",
        lat: 44.578993823,
        lng: -123.283154438,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12624,
        name: "NW 29th St & NW Garfield Ave",
        lat: 44.58279243,
        lng: -123.2831962,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12630,
        name: "NW 29th St & NW Circle Blvd",
        lat: 44.586165628,
        lng: -123.283218776,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12648,
        name: "NW Circle Blvd & NW 11th St",
        lat: 44.58864625,
        lng: -123.2639239,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 12653,
        name: "NW Circle Blvd & NW Garryanna St",
        lat: 44.58858094,
        lng: -123.2690124,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 12669,
        name: "NW Circle Blvd & NW 17th St",
        lat: 44.58781128,
        lng: -123.2718717,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 12676,
        name: "NW 29th St & NW Fillmore Ave",
        lat: 44.57578007,
        lng: -123.2831912,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12682,
        name: "NW 29th St & NW Tyler Ave",
        lat: 44.57320261,
        lng: -123.2833238,
        routeNames: [
            "7"
        ]
    },
    {
        id: 12695,
        name: "SW 26th St & SW Jefferson Way",
        lat: 44.56485604,
        lng: -123.2799088,
        routeNames: [
            "3",
            "8",
            "C3",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 12703,
        name: "SW 26th St & SW Campus Way",
        lat: 44.56697024,
        lng: -123.2799016,
        routeNames: [
            "3",
            "8",
            "C3",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 12719,
        name: "SW 26th St & Dixon Recreation Ctr",
        lat: 44.56365439,
        lng: -123.2797016,
        routeNames: [
            "3",
            "8",
            "C3",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 12726,
        name: "NE 2nd St & NE Rennie Pl",
        lat: 44.57270756,
        lng: -123.2547535,
        routeNames: [
            "C2"
        ]
    },
    {
        id: 12735,
        name: "NE 2nd St & NW 2nd St",
        lat: 44.57154422,
        lng: -123.2558123,
        routeNames: [
            "C2"
        ]
    },
    {
        id: 12742,
        name: "NW 2nd St & NW Tyler Ave",
        lat: 44.56841595,
        lng: -123.2577617,
        routeNames: [
            "C2"
        ]
    },
    {
        id: 12757,
        name: "NW 2nd St & NW Harrison Blvd",
        lat: 44.56670701,
        lng: -123.2584061,
        routeNames: [
            "C2"
        ]
    },
    {
        id: 12761,
        name: "NW 2nd St & NW Polk Ave",
        lat: 44.56874659,
        lng: -123.2573721,
        routeNames: [
            "C2"
        ]
    },
    {
        id: 12774,
        name: "NE 2nd St & NW 2nd St",
        lat: 44.57136471,
        lng: -123.255741,
        routeNames: [
            "C2"
        ]
    },
    {
        id: 12788,
        name: "NW Buchanan Ave & NW 9th St",
        lat: 44.57528601,
        lng: -123.2615555,
        routeNames: [
            "4"
        ]
    },
    {
        id: 12790,
        name: "NW Buchanan Ave & NW 9th St",
        lat: 44.57518731,
        lng: -123.2604863,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 12800,
        name: "NW 5th St & NW Buchanan Ave",
        lat: 44.57309906,
        lng: -123.258945,
        routeNames: [
            "4"
        ]
    },
    {
        id: 12816,
        name: "NW 5th St & NW Polk Ave",
        lat: 44.57075126,
        lng: -123.2600781,
        routeNames: [
            "4"
        ]
    },
    {
        id: 12828,
        name: "NW 5th St & NW Polk Ave",
        lat: 44.57007575,
        lng: -123.2602789,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 12837,
        name: "NW 5th St & NW Harrison Blvd",
        lat: 44.56825292,
        lng: -123.2613753,
        routeNames: [
            "4"
        ]
    },
    {
        id: 12844,
        name: "NW 5th St & NW Harrison Blvd",
        lat: 44.56816663,
        lng: -123.2612743,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 12859,
        name: "SW 4th St & SW Washington Ave",
        lat: 44.56092732,
        lng: -123.2640003,
        routeNames: [
            "6"
        ]
    },
    {
        id: 12863,
        name: "SW 4th St & SW Western Blvd",
        lat: 44.55944381,
        lng: -123.2647201,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12871,
        name: "SW 3rd St & SE Bridgeway Ave",
        lat: 44.55017532,
        lng: -123.2654998,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12885,
        name: "SW 3rd St & SE Mayberry Ave",
        lat: 44.54667779,
        lng: -123.2658879,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12892,
        name: "SW 3rd St & SE Alexander Ave",
        lat: 44.54477674,
        lng: -123.2660878,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12902,
        name: "SW 3rd St & SE Richland Ave",
        lat: 44.54216696,
        lng: -123.266351,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12918,
        name: "SW 3rd St & SE Park Ave",
        lat: 44.53938743,
        lng: -123.2666294,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12925,
        name: "SE Rivergreen Ave & SE Villa Dr",
        lat: 44.53111773,
        lng: -123.2657979,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12939,
        name: "SE Rivergreen Ave & Mountain View Apartments",
        lat: 44.53091187,
        lng: -123.258879,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12941,
        name: "SE Rivergreen Ave & SE Hathaway Dr",
        lat: 44.53113454,
        lng: -123.2626735,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12956,
        name: "SE Midvale Dr & SE Brookside Way",
        lat: 44.53135539,
        lng: -123.2568751,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12960,
        name: "SE Midvale Dr & Mountain View Apartments",
        lat: 44.53317027,
        lng: -123.2567127,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12973,
        name: "SE Midvale Dr & Mountain View Apartments",
        lat: 44.53441521,
        lng: -123.2567405,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12987,
        name: "SE Midvale Dr & SE Goodnight Ave",
        lat: 44.53646363,
        lng: -123.2567837,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 12994,
        name: "SW 3rd St & SW Twin Oaks Cir",
        lat: 44.55374753,
        lng: -123.2651079,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 13001,
        name: "SW 3rd St & SW Avery Ave",
        lat: 44.55157196,
        lng: -123.2653462,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 13017,
        name: "SW 3rd St & SW Cummings Ave",
        lat: 44.54851334,
        lng: -123.2656832,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 13029,
        name: "SE Goodnight Ave & SE Goodpark St",
        lat: 44.53672719,
        lng: -123.258798,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 13038,
        name: "SE Goodnight Ave & Summerset Vlg",
        lat: 44.53669972,
        lng: -123.2621415,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 13040,
        name: "SE Goodnight Ave & SE Glenn St",
        lat: 44.53666614,
        lng: -123.2649811,
        routeNames: [
            "6",
            "NOSE"
        ]
    },
    {
        id: 13055,
        name: "SE Park Ave & SE Glenn St",
        lat: 44.53856142,
        lng: -123.2655861,
        routeNames: [
            "6"
        ]
    },
    {
        id: 13064,
        name: "NE Conser St",
        lat: 44.59627932,
        lng: -123.2368187,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 13072,
        name: "NE Conser St & NE Kirsten Pl",
        lat: 44.59444124,
        lng: -123.237398,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 13086,
        name: "NE Conser St & NE Jasper St",
        lat: 44.59306523,
        lng: -123.2402159,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 13093,
        name: "NE Conser St & NE Seavy Ave",
        lat: 44.59187961,
        lng: -123.2421298,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 13103,
        name: "NW Forestgreen Ave & NW 17th St",
        lat: 44.59007277,
        lng: -123.2727631,
        routeNames: [
            "5"
        ]
    },
    {
        id: 13119,
        name: "SW Philomath Blvd",
        lat: 44.55425871,
        lng: -123.3006604,
        routeNames: [
            "3",
            "C3"
        ]
    },
    {
        id: 13126,
        name: "SW Philomath Blvd & SW Timian St",
        lat: 44.55284168,
        lng: -123.3053327,
        routeNames: [
            "3",
            "C3"
        ]
    },
    {
        id: 13135,
        name: "SW Technology Loop & SW Research Way",
        lat: 44.55104075,
        lng: -123.3063891,
        routeNames: [
            "8"
        ]
    },
    {
        id: 13142,
        name: "SW Philomath Blvd & SW Blueberry Dr",
        lat: 44.55166111,
        lng: -123.3091404,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 13157,
        name: "SW Philomath Blvd & SW 53rd St",
        lat: 44.55099922,
        lng: -123.3112744,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 13161,
        name: "SW Philomath Blvd & SW Timian St",
        lat: 44.552846,
        lng: -123.3058195,
        routeNames: [
            "3",
            "8",
            "NOSW"
        ]
    },
    {
        id: 13174,
        name: "SW Philomath Blvd & SW 47th St",
        lat: 44.55369994,
        lng: -123.3030807,
        routeNames: [
            "3",
            "8",
            "NOSW"
        ]
    },
    {
        id: 13188,
        name: "SW 15th St & SW Western Blvd",
        lat: 44.56032606,
        lng: -123.2740156,
        routeNames: [
            "6"
        ]
    },
    {
        id: 13190,
        name: "SW 15th St & SW Washington Way",
        lat: 44.56146475,
        lng: -123.2743809,
        routeNames: [
            "3",
            "8"
        ]
    },
    {
        id: 13208,
        name: "SW 14th St & SW Jefferson Ave",
        lat: 44.5650839,
        lng: -123.2734994,
        routeNames: [
            "NON"
        ]
    },
    {
        id: 13212,
        name: "SW 15th St & SW Jefferson Ave",
        lat: 44.56386673,
        lng: -123.2740693,
        routeNames: [
            "6"
        ]
    },
    {
        id: 13220,
        name: "SW 15th St & SW Jefferson Way",
        lat: 44.56420892,
        lng: -123.2742034,
        routeNames: [
            "3",
            "8"
        ]
    },
    {
        id: 13231,
        name: "SW Jefferson Ave & SW 11th St",
        lat: 44.56454059,
        lng: -123.2713771,
        routeNames: [
            "6"
        ]
    },
    {
        id: 13249,
        name: "SW Jefferson Ave & SW 11th St",
        lat: 44.56464728,
        lng: -123.2722157,
        routeNames: [
            "3",
            "8",
            "NON"
        ]
    },
    {
        id: 13254,
        name: "SW Jefferson Ave & SW 8th St",
        lat: 44.56387996,
        lng: -123.2675789,
        routeNames: [
            "1",
            "2",
            "3",
            "5",
            "7",
            "8",
            "NON"
        ]
    },
    {
        id: 13265,
        name: "SW Jefferson Ave & SW 7th St",
        lat: 44.56342241,
        lng: -123.2657771,
        routeNames: [
            "1",
            "2",
            "3",
            "5",
            "7",
            "8",
            "NON"
        ]
    },
    {
        id: 13277,
        name: "NW Aspen St & NW Arrowood Cir",
        lat: 44.59557108,
        lng: -123.2935538,
        routeNames: [
            "1"
        ]
    },
    {
        id: 13283,
        name: "NW Arrowood Cir & NW Manzanita Pl",
        lat: 44.59650422,
        lng: -123.2884867,
        routeNames: [
            "1"
        ]
    },
    {
        id: 13296,
        name: "NW Rolling Green Dr & NW Forestgreen Ave",
        lat: 44.59079429,
        lng: -123.2726132,
        routeNames: [
            "1",
            "5"
        ]
    },
    {
        id: 13306,
        name: "NW Rolling Green Dr",
        lat: 44.59255899,
        lng: -123.2715757,
        routeNames: [
            "1",
            "5"
        ]
    },
    {
        id: 13310,
        name: "NW Elks Dr & NW Samaritan Dr",
        lat: 44.60086068,
        lng: -123.2504514,
        routeNames: [
            "2",
            "7"
        ]
    },
    {
        id: 13323,
        name: "NW Elks Dr & NW Samaritan Dr",
        lat: 44.60090439,
        lng: -123.2502079,
        routeNames: [
            "4"
        ]
    },
    {
        id: 13334,
        name: "NW Elks Dr",
        lat: 44.60088881,
        lng: -123.2521612,
        routeNames: [
            "2",
            "7"
        ]
    },
    {
        id: 13347,
        name: "NW Elks Dr",
        lat: 44.60111658,
        lng: -123.2526742,
        routeNames: [
            "4"
        ]
    },
    {
        id: 13352,
        name: "NW Elks Dr & NW Coronado St",
        lat: 44.60141449,
        lng: -123.2542886,
        routeNames: [
            "4"
        ]
    },
    {
        id: 13368,
        name: "Corvallis Clinic",
        lat: 44.6022639,
        lng: -123.2553583,
        routeNames: [
            "4"
        ]
    },
    {
        id: 13375,
        name: "NW Elks Dr & NW Coronado St",
        lat: 44.60131272,
        lng: -123.2545926,
        routeNames: [
            "2",
            "7"
        ]
    },
    {
        id: 13381,
        name: "NW Satinwood St & NW Maxine Cir",
        lat: 44.60121772,
        lng: -123.257539,
        routeNames: [
            "4"
        ]
    },
    {
        id: 13399,
        name: "NW Satinwood St & NW Gonzalez Ave",
        lat: 44.60110161,
        lng: -123.2573845,
        routeNames: [
            "4"
        ]
    },
    {
        id: 13404,
        name: "NW 2nd St & NW Monroe Ave",
        lat: 44.56421502,
        lng: -123.259889,
        routeNames: [
            "NON",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 13427,
        name: "NW Harrison Blvd & NW 3rd St",
        lat: 44.56748783,
        lng: -123.2598267,
        routeNames: [
            "C2"
        ]
    },
    {
        id: 13436,
        name: "NW Harrison Blvd & NW 21st St",
        lat: 44.57139873,
        lng: -123.2762491,
        routeNames: [
            "NON",
            "NOSW"
        ]
    },
    {
        id: 13443,
        name: "NW Harrison Blvd & NW 25th St",
        lat: 44.57168337,
        lng: -123.2786128,
        routeNames: [
            "NON",
            "NOSW"
        ]
    },
    {
        id: 13458,
        name: "SW Grand Oaks Dr & Grand Oaks Apartments",
        lat: 44.55773671,
        lng: -123.3240755,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 13462,
        name: "SW Grand Oaks Dr & SW Timber Ridge Dr",
        lat: 44.56002178,
        lng: -123.3246774,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 13470,
        name: "SW Grand Oaks Dr & SW Delwood Ave",
        lat: 44.56129437,
        lng: -123.3190272,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 13489,
        name: "SW Grand Oaks Dr & SW Banyon Cir",
        lat: 44.55872886,
        lng: -123.3192835,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 13491,
        name: "SW West Hills Rd & SW Ten Pas Ln",
        lat: 44.55635894,
        lng: -123.3158803,
        routeNames: [
            "C3"
        ]
    },
    {
        id: 13525,
        name: "SW 3rd St & SE Richland Ave",
        lat: 44.54273728,
        lng: -123.265994,
        routeNames: [
            "NOSE"
        ]
    },
    {
        id: 13539,
        name: "SW 3rd St & SE Park Ave",
        lat: 44.53916663,
        lng: -123.2663474,
        routeNames: [
            "NOSE"
        ]
    },
    {
        id: 13541,
        name: "SW Technology Loop & SW Research Way",
        lat: 44.55096034,
        lng: -123.3061569,
        routeNames: [
            "3",
            "NOSW"
        ]
    },
    {
        id: 13556,
        name: "SW 3rd St & SE Lilly Ave",
        lat: 44.54833193,
        lng: -123.2654132,
        routeNames: [
            "NOSE"
        ]
    },
    {
        id: 13560,
        name: "SW 3rd St & SE Mayberry Ave",
        lat: 44.54674582,
        lng: -123.2655795,
        routeNames: [
            "NOSE"
        ]
    },
    {
        id: 13573,
        name: "Crescent Valley High School",
        lat: 44.61491458,
        lng: -123.2649362,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 13628,
        name: "Corvallis High School",
        lat: 44.57470884,
        lng: -123.2654516,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 13637,
        name: "NW 11th St & NW Fillmore Ave",
        lat: 44.57290642,
        lng: -123.2662999,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 13644,
        name: "NW 11th St & NW Harrison Blvd",
        lat: 44.56994886,
        lng: -123.2677643,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 13659,
        name: "NW 11th St & NW Monroe Ave",
        lat: 44.5667491,
        lng: -123.2693424,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 13663,
        name: "NW Garfield Ave & NW 9th St",
        lat: 44.58308602,
        lng: -123.2597406,
        routeNames: [
            "4"
        ]
    },
    {
        id: 13671,
        name: "NW Garfield Ave & NW Highland Dr",
        lat: 44.58307091,
        lng: -123.2621923,
        routeNames: [
            "4"
        ]
    },
    {
        id: 13685,
        name: "NW 10th St & NW Draper Pl",
        lat: 44.57920363,
        lng: -123.2624924,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 13692,
        name: "NW 10th St & NW Beca Ave",
        lat: 44.57797801,
        lng: -123.2626315,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 13709,
        name: "NW 10th St & NW Beca Ave",
        lat: 44.57735006,
        lng: -123.262558,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 13713,
        name: "NW 10th St & NW Buchanan Ave",
        lat: 44.57605234,
        lng: -123.263304,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 13721,
        name: "NW 5th St & NW Buchanan Ave",
        lat: 44.57267875,
        lng: -123.2589605,
        routeNames: [
            "4",
            "CVA"
        ]
    },
    {
        id: 13732,
        name: "NE Conser St & NE Burke Pl",
        lat: 44.59723874,
        lng: -123.2344365,
        routeNames: [
            "7",
            "NON"
        ]
    },
    {
        id: 14228,
        name: "Downtown Transit Center",
        lat: 44.564661,
        lng: -123.263537,
        routeNames: [
            "5",
            "7"
        ]
    },
    {
        id: 14237,
        name: "Downtown Transit Center",
        lat: 44.564724,
        lng: -123.263277,
        routeNames: [
            "6"
        ]
    },
    {
        id: 14244,
        name: "Downtown Transit Center",
        lat: 44.564628,
        lng: -123.263321,
        routeNames: [
            "1",
            "2",
            "4",
            "C1R"
        ]
    },
    {
        id: 14263,
        name: "SW 5th St & SW Adams Ave",
        lat: 44.56197568496026,
        lng: -123.2644777955399,
        routeNames: [
            "NON"
        ]
    },
    {
        id: 14271,
        name: "Downtown Transit Center",
        lat: 44.564758,
        lng: -123.263738,
        routeNames: [
            "2",
            "C1",
            "C1R",
            "C2",
            "C3"
        ]
    },
    {
        id: 14285,
        name: "NW Kings Blvd & NW Elmwood Dr",
        lat: 44.58769609796372,
        lng: -123.2761101200745,
        routeNames: [
            "C1R"
        ]
    },
    {
        id: 14292,
        name: "NW Professional Dr & NW Kings Blvd",
        lat: 44.59136114359951,
        lng: -123.2761978749585,
        routeNames: [
            "C1R"
        ]
    },
    {
        id: 14339,
        name: "CVHS Park & Ride",
        lat: 44.615308,
        lng: -123.26635,
        routeNames: [
            "CVA"
        ]
    },
    {
        id: 14341,
        name: "Downtown Transit Center",
        lat: 44.56477,
        lng: -123.263459,
        routeNames: [
            "3",
            "8"
        ]
    },
    {
        id: 14356,
        name: "NW Harrison Blvd & NW 27th St",
        lat: 44.57173279,
        lng: -123.281814,
        routeNames: [
            "NON",
            "NOSW"
        ]
    },
    {
        id: 14360,
        name: "SW 26th St & SW Washington Way",
        lat: 44.5615415,
        lng: -123.2795557,
        routeNames: [
            "3",
            "8",
            "C3",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 14394,
        name: "NW Witham Hill Dr & NW Walnut Blvd",
        lat: 44.59344868,
        lng: -123.3022806,
        routeNames: [
            "1",
            "C1",
            "NON"
        ]
    },
    {
        id: 14409,
        name: "SW 2nd St & SW Washington Ave",
        lat: 44.55968602,
        lng: -123.2622157,
        routeNames: [
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 14413,
        name: "SW 2nd St & SW Jefferson Ave",
        lat: 44.56251775,
        lng: -123.2607186,
        routeNames: [
            "NON",
            "NOSE",
            "NOSW"
        ]
    },
    {
        id: 14421,
        name: "NW Kings Blvd & NW Elmwood Dr",
        lat: 44.58769729,
        lng: -123.2759402,
        routeNames: [
            "5",
            "C1",
            "NON"
        ]
    },
    {
        id: 14432,
        name: "Timberhill Shopping Center",
        lat: 44.59056161,
        lng: -123.2759268,
        routeNames: [
            "1",
            "5",
            "C1",
            "NON"
        ]
    },
    {
        id: 14445,
        name: "NW Kings Blvd & NW Circle Blvd",
        lat: 44.5855873,
        lng: -123.2761061,
        routeNames: [
            "5",
            "C1R",
            "NON"
        ]
    },
    {
        id: 14450,
        name: "NW Kings Blvd & NW Garfield Ave",
        lat: 44.58274262,
        lng: -123.2760873,
        routeNames: [
            "5",
            "C1R",
            "NON"
        ]
    },
    {
        id: 14466,
        name: "NW Kings Blvd & NW Mulkey Ave",
        lat: 44.58028443,
        lng: -123.2760678,
        routeNames: [
            "5",
            "C1R",
            "NON"
        ]
    },
    {
        id: 14478,
        name: "NW Kings Blvd & NW Fillmore Ave",
        lat: 44.57568182,
        lng: -123.2753498,
        routeNames: [
            "5",
            "C1R",
            "NON"
        ]
    },
    {
        id: 14484,
        name: "NW Kings Blvd & NW Taylor Ave",
        lat: 44.57406441,
        lng: -123.2752698,
        routeNames: [
            "5",
            "C1R",
            "NON"
        ]
    },
    {
        id: 14497,
        name: "NW Kings Blvd & NW Tyler Ave",
        lat: 44.57276817,
        lng: -123.2752449,
        routeNames: [
            "5",
            "C1R",
            "NON"
        ]
    },
    {
        id: 14506,
        name: "NW Kings Blvd & NW Jackson Ave",
        lat: 44.56948981,
        lng: -123.2751749,
        routeNames: [
            "5",
            "C1R",
            "NON",
            "NOSW"
        ]
    },
    {
        id: 14510,
        name: "NW Kings Blvd & NW Jackson Ave",
        lat: 44.56958285,
        lng: -123.2750507,
        routeNames: [
            "5",
            "C1"
        ]
    },
    {
        id: 14523,
        name: "NW Kings Blvd & NW Tyler Ave",
        lat: 44.57265467,
        lng: -123.2751198,
        routeNames: [
            "5",
            "C1",
            "NON"
        ]
    },
    {
        id: 14534,
        name: "NW Kings Blvd & NW Fillmore Ave",
        lat: 44.57515334,
        lng: -123.2751563,
        routeNames: [
            "5",
            "C1",
            "NON"
        ]
    },
    {
        id: 14547,
        name: "NW Kings Blvd & NW Beca Ave",
        lat: 44.57775162,
        lng: -123.2752283,
        routeNames: [
            "5",
            "C1",
            "NON"
        ]
    },
    {
        id: 14552,
        name: "NW Kings Blvd & NW Kings Pl",
        lat: 44.57982464,
        lng: -123.2758824,
        routeNames: [
            "5",
            "C1",
            "NON"
        ]
    },
    {
        id: 14568,
        name: "NW Kings Blvd & NW Hayes Ave",
        lat: 44.58175097,
        lng: -123.2758982,
        routeNames: [
            "5",
            "C1",
            "NON"
        ]
    },
    {
        id: 14575,
        name: "NW Kings Blvd & NW Arthur Pl",
        lat: 44.58406438,
        lng: -123.2759218,
        routeNames: [
            "5",
            "C1",
            "NON"
        ]
    },
    {
        id: 14581,
        name: "NW Kings Blvd & NW Circle Blvd",
        lat: 44.58556585,
        lng: -123.2759209,
        routeNames: [
            "5",
            "C1",
            "NON"
        ]
    },
    {
        id: 14599,
        name: "NW Kings Blvd & NW Monroe Ave",
        lat: 44.56823199,
        lng: -123.2749992,
        routeNames: [
            "5",
            "C1"
        ]
    },
    {
        id: 14608,
        name: "NW 36th St & NW Tyler Ave",
        lat: 44.57284923,
        lng: -123.2908235,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 14612,
        name: "NW 36th St & NW Fillmore Ave",
        lat: 44.57581334,
        lng: -123.2908671,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 14620,
        name: "NW 36th St & NW Witham Hill Dr",
        lat: 44.57801314,
        lng: -123.2909014,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 14631,
        name: "NW Witham Hill Dr & NW Circle Blvd",
        lat: 44.58168829,
        lng: -123.2955236,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 14649,
        name: "NW Witham Hill Dr at Witham Oaks",
        lat: 44.58394363,
        lng: -123.2981054,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 14654,
        name: "NW Witham Hill Dr & NW Westview Pl",
        lat: 44.58596711,
        lng: -123.3001164,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 14665,
        name: "NW Witham Hill Dr & NW Elmwood Dr",
        lat: 44.5891339,
        lng: -123.3021374,
        routeNames: [
            "1",
            "C1R"
        ]
    },
    {
        id: 14677,
        name: "NW Witham Hill Dr & NW Elmwood Dr",
        lat: 44.58871977,
        lng: -123.3023076,
        routeNames: [
            "1",
            "C1",
            "NON"
        ]
    },
    {
        id: 14683,
        name: "NW Witham Hill Dr & NW Douglas Ave",
        lat: 44.58553017,
        lng: -123.2998395,
        routeNames: [
            "1",
            "C1",
            "NON"
        ]
    },
    {
        id: 14696,
        name: "NW Witham Hill Dr & NW Pinecone Way",
        lat: 44.58347108,
        lng: -123.2978399,
        routeNames: [
            "1",
            "C1",
            "NON"
        ]
    },
    {
        id: 14704,
        name: "NW Witham Hill Dr & NW Woodland Dr",
        lat: 44.58185754,
        lng: -123.296022,
        routeNames: [
            "1",
            "C1",
            "NON"
        ]
    },
    {
        id: 14715,
        name: "NW Witham Hill Dr & NW Fernwood Cir",
        lat: 44.57903649,
        lng: -123.2919393,
        routeNames: [
            "1",
            "C1"
        ]
    },
    {
        id: 14727,
        name: "NW 36th St & NW Lincoln Ave",
        lat: 44.57691092,
        lng: -123.291045,
        routeNames: [
            "1",
            "C1"
        ]
    },
    {
        id: 14736,
        name: "NW 36th St & NW Fillmore Ave",
        lat: 44.5752829,
        lng: -123.2910147,
        routeNames: [
            "1",
            "C1"
        ]
    },
    {
        id: 14743,
        name: "NW 36th St & NW Polk Ave",
        lat: 44.57341083,
        lng: -123.2909818,
        routeNames: [
            "1",
            "C1"
        ]
    },
    {
        id: 14758,
        name: "NE 2nd St & NE Byron Pl",
        lat: 44.57396865,
        lng: -123.2536222,
        routeNames: [
            "C2"
        ]
    }
]