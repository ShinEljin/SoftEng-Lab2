google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ["Semester", "Students"],
    ["2020-1", 1203],
    ["2020-2", 1123],
    ["2021-1", 1032],
    ["2021-2", 843],
    ["2022-1", 932],
  ]);

  var options = {
    title: "CET Students Enrolled Tracker",
    vAxis: { title: "Students Enrolled" },
    hAxis: { title: "SY and SEM" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("chart_div_2")
  );
  chart.draw(data, options);
}
