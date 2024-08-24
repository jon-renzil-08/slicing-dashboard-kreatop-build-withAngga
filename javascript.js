const options = {
  colors: ["#1A56DB", "#FDBA8C"],
  series: [
    {
      name: "$50,391 Revenue",
      color: "#732ECB",
      data: [
        { x: "Mon", y: 150 },
        { x: "Tue", y: 122 },
        { x: "Wed", y: 63 },
        { x: "Thu", y: 421 },
        { x: "Fri", y: 122 },
        { x: "Sat", y: 323 },
        { x: "Sun", y: 111 },
      ],
    },
    {
      name: "183,309 Reach",
      color: "#2ECB89",
      data: [
        { x: "Mon", y: 231 },
        { x: "Tue", y: 113 },
        { x: "Wed", y: 341 },
        { x: "Thu", y: 224 },
        { x: "Fri", y: 522 },
        { x: "Sat", y: 411 },
        { x: "Sun", y: 243 },
      ],
    },
    {
      name: "82 Clients",
      color: "#2EA5CB",
      data: [
        { x: "Mon", y: 60 },
        { x: "Tue", y: 113 },
        { x: "Wed", y: 341 },
        { x: "Thu", y: 224 },
        { x: "Fri", y: 522 },
        { x: "Sat", y: 411 },
        { x: "Sun", y: 243 },
      ],
    },
  ],
  chart: {
    type: "bar",
    height: "320px",
    fontFamily: "Poppins, sans-serif",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Poppins, sans-serif",
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: true, // Menampilkan grid
    borderColor: '#282828', // Warna garis horizontal
    strokeDashArray: 0, // Garis lurus tanpa patah-patah
    yaxis: {
      lines: {
        show: true // Menampilkan garis horizontal berdasarkan y-axis
      }
    },
    padding: {
      left: 2,
      right: 2,
      top: -14
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Poppins, sans-serif",
        cssClass: ' font-medium text-[#676767] text-[14px]'
      }
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    min: 0, // Skala y-axis dimulai dari 0
    labels: {
      show: true,
      style: {
        fontFamily: "Poppins, sans-serif",
        cssClass: 'font-medium text-[#676767] text-[14px]'
      }
    },
  },
  fill: {
    opacity: 1,
  },
}

if(document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById("column-chart"), options);
  chart.render();
}
