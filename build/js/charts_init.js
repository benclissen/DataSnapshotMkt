const chart1_labels = ['Alipay', 'Fedex', 'Booking.com', 'VolksWagen', 'Hisense'];
const chart1_images = ['./images/logos/Alipay.png', './images/logos/FedEx.png','./images/logos/Booking.png', './images/logos/VolksWagen.png', './images/logos/Hisense.png'];
const chart1_values = [26.6, 20, 16, 16, 15];

const chart2_labels = ['Vivo', 'Coca Cola', 'Takeaway.com', 'Heineken', 'Qatar Airways', 'Tik Tok'];
const chart2_images = ['./images/logos/Vivo.png', './images/logos/Coca-Cola.png','./images/logos/Just_Eat_Takeaway.png','./images/logos/Heineken.png', './images/logos/Qatar_Airways.png', './images/logos/TikTok.png'];
const chart2_values = [15, 15, 15, 12.5 ,12.5, 12.5];



const chart4_labels = ['Automobile Mfg', 'Telecoms', 'Banking', 'Betting', 'Airlines', 'Electronics', 'Supermarkets', 'Energy Utilities', "Food & Drink Dist.", "Beer", "Insurance"];
const chart4_values = [39.7, 28, 20.8, 20.5, 12.1, 9.9,7,6.5,6.4,5.9,5.5];

//set chart toooltip to bottom
Chart.Tooltip.positioners.custom = function(elements, eventPosition) {
    /** @type {Chart.Tooltip} */
    var tooltip = this;

    return {
        x: eventPosition.x,
        y: eventPosition.y
    };
}

// Chart.defaults.global.defaultFontColor = '#fff';

new Chart(document.getElementById("chart1"), {
  type: "bar",
  plugins: [
    {
        afterDraw: (chart) => {
        var ctx = chart.chart.ctx;
        var xAxis = chart.scales["x-axis-0"];
        var yAxis = chart.scales["y-axis-0"];
        xAxis.ticks.forEach((value, index) => {
          var x = xAxis.getPixelForTick(index);
          var image = new Image();
          image.src = chart1_images[index];
          ctx.drawImage(image, x - 38, yAxis.bottom + 10);
        })
      },
    },
  ],
  data: {
    labels: chart1_labels,
    datasets: [
      {
        label: "",
        data: chart1_values,
        backgroundColor: "rgba(229, 76, 66, 0.7)",
        hoverBackgroundColor: "rgba(229, 76, 66, 0.7)",
      },
    ],
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        bottom: 30,
      },
    },
    legend: {
      display: false,
    },

    interaction: {
        intersect: true,
        mode: 'index',
      },

      tooltips: { 
        position : 'custom',    
        callbacks: {
          label: function(tooltipItem, data) {
           return '';
          }
        }
    },

    scales: {
        yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
                max:30,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
      xAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    "hover": {
        "animationDuration": 0
      },
      "animation": {
        "duration": 800,
        "onComplete": function() {
          var chartInstance = this.chart
          ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
          ctx.fillStyle = this.chart.config.options.defaultFontColor;
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';
          this.data.datasets.forEach(function(dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function(bar, index) {
                  var data = "€" + dataset.data[index] + "m";
                  ctx.fillText(data, bar._model.x - 15, bar._model.y - 5);
            });
          });
        }
      },

  },
});

new Chart(document.getElementById("chart2"), {
    type: "bar",
    plugins: [
      {
          afterDraw: (chart) => {
          var ctx = chart.chart.ctx;
          var xAxis = chart.scales["x-axis-0"];
          var yAxis = chart.scales["y-axis-0"];
          xAxis.ticks.forEach((value, index) => {
            var x = xAxis.getPixelForTick(index);
            var image = new Image();
            (image.src = chart2_images[index]),
            ctx.drawImage(image, x - 38, yAxis.bottom + 10);
          })
        },
      },
    ],
    data: {
      labels: chart2_labels,
      datasets: [
        {
          label: "",
          data: chart2_values,
          backgroundColor: "rgba(0, 159, 219, 0.7)",
          hoverBackgroundColor: "rgba(0, 159, 219, 0.7)",
        },
      ],
    },
    options: {
      responsive: true,
      layout: {
        padding: {
          bottom: 30,
        },
      },
      legend: {
        display: false,
      },
  
      interaction: {
          intersect: true,
          mode: 'index',
        },
  
        tooltips: { 
          position : 'custom',    
          callbacks: {
            label: function(tooltipItem, data) {
             return '';
            }
          }
      },
  
      scales: {
          yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  display: false,
                  max:30,
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
              },
            ],
        xAxes: [
          {
            ticks: {
              display: false,
            },
            gridLines: {
              display: false,
            },
          },
        ],
      },
      "hover": {
          "animationDuration": 0
        },
        "animation": {
          "duration": 800,
          "onComplete": function() {
            var chartInstance = this.chart
            ctx = chartInstance.ctx;
            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
            ctx.fillStyle = this.chart.config.options.defaultFontColor;
            ctx.textAlign = 'left';
            ctx.textBaseline = 'bottom';
            this.data.datasets.forEach(function(dataset, i) {
              var meta = chartInstance.controller.getDatasetMeta(i);
              meta.data.forEach(function(bar, index) {
                    var data = "€" + dataset.data[index] + "m";
                    ctx.fillText(data, bar._model.x - 15, bar._model.y - 5);
              });
            });
          }
        },
  
    },
  });


new Chart(document.getElementById("chart3"), {
  type: "bar",
  plugins: [
    {
        afterDraw: (chart) => {
        var ctx = chart.chart.ctx;
        var xAxis = chart.scales["x-axis-0"];
        var yAxis = chart.scales["y-axis-0"];
        xAxis.ticks.forEach((value, index) => {
          var x = xAxis.getPixelForTick(index);
          var image = new Image();
          (image.src = chart2_images[index]),
          ctx.drawImage(image, x - 38, yAxis.bottom + 10);
        })
      },
    },
  ],
  data: {
    labels: chart2_labels,
    datasets: [
      {
        label: "",
        data: chart2_values,
        backgroundColor: "rgba(0, 159, 219, 0.7)",
        hoverBackgroundColor: "rgba(0, 159, 219, 0.7)",
      },
    ],
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        bottom: 30,
      },
    },
    legend: {
      display: false,
    },

    interaction: {
        intersect: true,
        mode: 'index',
      },

      tooltips: { 
        position : 'custom',    
        callbacks: {
          label: function(tooltipItem, data) {
           return '';
          }
        }
    },

    scales: {
        yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
              },
              gridLines: {
                display: false,
                drawBorder: false,
              },
            },
          ],
      xAxes: [
        {
          ticks: {
            display: true,
          },
          gridLines: {
            display: false,
          },
        },
      ],
    },
    "hover": {
        "animationDuration": 0
      },
      "animation": {
        "duration": 800,
        "onComplete": function() {
          var chartInstance = this.chart
          ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
          ctx.fillStyle = this.chart.config.options.defaultFontColor;
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';
          this.data.datasets.forEach(function(dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function(bar, index) {
                  var data = "€" + dataset.data[index] + "m";
                  ctx.fillText(data, bar._model.x - 15, bar._model.y - 5);
            });
          });
        }
      },

  },
});

// new Chart(document.getElementById("myChart2"), {
//     type: "bar",
//     plugins: [
//       {
//           afterDraw: (chart) => {
//           var ctx = chart.chart.ctx;
//           var xAxis = chart.scales["x-axis-0"];
//           var yAxis = chart.scales["y-axis-0"];
//           xAxis.ticks.forEach((value, index) => {
//             var x = xAxis.getPixelForTick(index);
//             var image = new Image();
//             (image.src = images[index]),
//             ctx.drawImage(image, x - 12, yAxis.bottom + 10);
//           })
//         },
//       },
//     ],
//     data: {
//       labels: labels,
//       datasets: [
//         {
//           label: "",
//           data: values2,
//           backgroundColor: "rgba(0, 159, 219, 0.7)",
//           hoverBackgroundColor: "rgba(0, 159, 219, 0.7)",
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       layout: {
//         padding: {
//           bottom: 30,
//         },
//       },
//       legend: {
//         display: false,
//       },
  
//       tooltips: {
//           enabled: false
//      },
  
//       scales: {
//         yAxes: [
//           {
//             ticks: {
//               beginAtZero: true,
//               display: false,
//             },
//             gridLines: {
//               display: false,
//               drawBorder: false,
//             },
//           },
//         ],
//         xAxes: [
//           {
//             ticks: {
//               display: false,
//             },
//             gridLines: {
//               display: false,
//             },
//           },
//         ],
//       },
//       hover: {mode: null},
//       "hover": {
//           "animationDuration": 0,
//         },
//         "animation": {
//           "duration": 800,
//           "onComplete": function() {
//             var chartInstance = this.chart
//             ctx = chartInstance.ctx;
//             ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
//             ctx.fillStyle = this.chart.config.options.defaultFontColor;
//             ctx.textAlign = 'left';
//             ctx.textBaseline = 'bottom';
//             this.data.datasets.forEach(function(dataset, i) {
//               var meta = chartInstance.controller.getDatasetMeta(i);
//               meta.data.forEach(function(bar, index) {
//                     var data = dataset.data[index];
//                     ctx.fillText(data, bar._model.x, bar._model.y - 5);
//               });
//             });
//           }
//         },
  
//     },
//   });


new Chart(document.getElementById("chart4"), {
  type: "doughnut",
  data: {
    labels: chart4_labels,
    datasets: [
      {
        label: "",
        data: chart4_values,
        backgroundColor: [
          "#883e72",
          "#6a4597",
          "#24376f",
          "#00509e",
          "#3e67b1",
          "#13759b",
          "#46a4d7",
          "#59c1a7",
          "#f8a286",
          "#f4c875",
          "#a7685a",
        ],
        borderWidth:1,
      },
    ],
  },
  options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'white',
            }
        }
}
});