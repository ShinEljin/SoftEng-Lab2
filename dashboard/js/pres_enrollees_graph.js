google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    [
      "Current Semester",
      "CAUP",
      "Educ",
      "CET",
      "CHAS",
      "Med",
      "",
      "Nursing",
      "PT",
      "Science",
      "GS Law",
      "Law",
      "BS",
      "Government",
      "PH",
    ],
    ["2022-1", 102, 302, 1203, 823, 521, 0, 213, 94, 540, 94, 201, 150, 98, 76],
  ]);

  var options = {
    title: "University Students Enrolled Tracker",
    vAxis: { title: "Students Enrolled" },
    hAxis: { title: "Semester" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
  };

  var chart = new google.visualization.ComboChart(
    document.getElementById("pres_chart_div_2")
  );
  chart.draw(data, options);
}
