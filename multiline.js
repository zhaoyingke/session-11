Vue.component('my-multibar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [
        {
          label: "Touristes chinois à l'étranger",
          borderColor: '#A0B7C1',
          backgroundColor: '#A0B7C1',
          data: [12,15,18,22,28,34,41,49,59,71,86]
        },
        {
          label: 'Marché doméstique',
          borderColor: '#D7E1CA',
          backgroundColor: '#D7E1CA',
          data: [9,12,14,18,22,28,34,41,50,61,74]
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
            stacked: true,
            categoryPercentage: 1/2,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
