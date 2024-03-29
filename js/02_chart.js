var paragrafy = {
    '140': 'vražda',
    '145146': 'ublížení na zdraví',
    '173': 'loupež',
    '175': 'vydírání',
    '185': 'znásilnění',
    '196': 'zanedbání povinné výživy',
    '205': 'krádež',
    '209': 'podvod',
    '210': 'pojistný podvod',
    '219': 'zatajení věci',
    '228_2': ' - sprejerství',
    '228': 'poškození cizí věci',
    '274': 'ohrožení pod vlivem',
    '283': 'výroba drog',
    '337': 'maření výkonu úředního rozhodnutí',
    '358': 'výtržnictví'
};

var trvani = {
    'delkaodspachanidopm': ['od spáchání činu do právní moci rozsudku', 'rok právní moci'],
    'delkaodstihanidorozhodnuti': ['od zahájení stíhání do rozsudku', 'rok rozsudku'],
    'odspachanidorozhodnuti': ['od spáchání činu do rozsudku', 'rok rozsudku'],
    'odspachanidostihani': ['od spáchání činu do zahájení stíhání', 'rok zahájení stíhání']
};

var typy = {
    'aggbezTP': 'mimo trestní příkazy',
    'aggTP': 'jen trestní příkazy'
};

function getCol(srs) {
    var out = '';
    var subOut = '';
    var rk;

    Object.keys(paragrafy).forEach(function(v) { // paragraf
        if (srs.includes(v)) {
            subOut += paragrafy[v];
        }
    });

    Object.keys(trvani).forEach(function(v) { // období trvání
        if (srs.includes(v)) {
            out += trvani[v][0];
            rk = trvani[v][1];
        };
    });

    Object.keys(typy).forEach(function(v) { // bez příkazů nebo s
        if (srs.includes(v)) {
            subOut += ' (' + typy[v] + ')'
        };
    });

    if ((srs.split('_')[0] == 'agg') | (srs.split('_')[0] == 'aggbezTP') | (srs.split('_')[0] == 'aggTP'))  {
        subOut = 'všechny trestné činy' + subOut;
    };

    return [out, rk, subOut];
};

function drawChart(srs) {
    Highcharts.chart(srs, {
        title: {
            text: 'Kolik dnů uplyne ' +  getCol(srs)[0]
        },
        subtitle: {
            text: getCol(srs)[2]
        },
        xAxis: {
            categories: data[srs].roky,
            title: {
                text: getCol(srs)[1]
            }
        },
        yAxis: {
            title: {
                text: 'počet dní'
            }
        },
        credits: {
            enabled: false,
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            valueDecimals: 0,
            valueSuffix: ' dní'
        },
        legend: {
            enabled: false
        },
        series: [{
            name: '80 % všech případů',
            data: data[srs].int10_90,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: '#3182bd',
            fillOpacity: 0.2,
            zIndex: 0,
            marker: {
                symbol: 'circle',
                radius: 2,
                enabled: false
            }
        },
        {
            name: '50 % všech případů',
            data: data[srs].int25_75,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: '#3182bd',
            fillOpacity: 0.6,
            zIndex: 0,
            marker: {
                symbol: 'circle',
                radius: 2,
                enabled: false
            }
        },
        {
            name: 'průměr',
            data: data[srs].mean,
            zIndex: 1,
            marker: {
                symbol: 'circle',
                fillColor: 'white',
                radius: 2,
                lineWidth: 2,
                lineColor: '#3182bd'
            }
        }
        ]
    });
};

var charts = document.getElementsByClassName('chart');
for(var i = 0; i < charts.length; i++) {
    drawChart(charts.item(i)['id']);
};