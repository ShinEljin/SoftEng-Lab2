google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Date", "New Cases", "Active Cases"],
    ["10-1", 32, 87],
    ["10-2", 23, 93],
    ["10-3", 43, 102],
    ["10-4", 28, 130],
    ["10-5", 35, 119],
    ["10-6", 49, 141],
    ["10-7", 33, 175],
    ["10-8", 29, 152],
  ]);

  var options = {
    title: "University Covid Tracker",
    hAxis: { title: "Date", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("pres_chart_div")
  );
  chart.draw(data, options);
}
