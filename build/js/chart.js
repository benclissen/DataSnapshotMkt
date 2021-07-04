// For ES modules
//import bar from 'https://cdn.jsdelivr.net/npm/britecharts@2/dist/bundled/britecharts.min.js';

const container = d3.select('.chart1');
const barChart = britecharts.bar();

const barData = [
  { name: 'Luminous', value: 2 },
  { name: 'Glittering', value: 5 },
  { name: 'Intense', value: 4 },
  { name: 'Radiant', value: 3 }
];

barChart
    .margin({left: 100})
    .enableLabels(true)
    .labelsNumberFormat('')
    .labelsMargin(10)
    .height(400)
    .width(600);

container.datum(barData).call(barChart);

// barChart
//     .width(300)
//     .height(300)
//     .hasPercentage(true)
//     .enableLabels(true)
//     .labelsNumberFormat('.0%')
//     .isAnimated(true)

// container.datum(barData).call(barChart);