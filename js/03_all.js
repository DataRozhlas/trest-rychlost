function changeChart() {
    var ed = document.getElementById('all_sel');
    e = ed.options[ed.selectedIndex].value;
    document.getElementsByClassName('all_chart')[0].id = e;
    drawChart(e);
};

var sel = '';
Object.keys(data).forEach(function(f) {
    sel += '<option value="' + f + '">' + getCol(f)[0] + '</option>'
});

document.getElementById('all_sel').innerHTML = sel;
document.getElementById('all_sel').onchange = function() {
    changeChart();
};

changeChart();