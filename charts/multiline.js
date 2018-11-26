Vue.component('chinese-luxury-spending-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
      datasets: [
        {
          label: 'Marché domestique',
          borderColor: '#82adc0',
          backgroundColor: '#82adc0',
          data: [9, 12, 14, 18, 22, 28, 34, 41, 50, 61, 74]
        },
        {
          label: "Touristes chinois à l'étranger",
          borderColor: '#385f70',
          backgroundColor: '#385f70',
          data: [12, 15, 18, 22, 28, 34, 41, 49, 59, 71, 86]
        }
      ]
    };

    var options = this.options || {
      scales: {
        yAxes:  [
          {
            display: true,
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            stacked: false,
            categoryPercentage: 1/2,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})