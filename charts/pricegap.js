Vue.component('price-gap-chart', {
  extends: VueChartJs.HorizontalBar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Chine","Corée du Sud", "Hong Kong", "Japon", "Etats-Unis", "Russie", "Royaume Uni", "Italie", "France"],
      datasets: [
        {
          label: 'France = 1',
          borderColor: '#b05080',
          backgroundColor: '#b05080',
          data: [1.55, 1.46, 1.38, 1.38, 1.37, 1.35, 1.05, 1.00, 1.00]
        }
      ]
    };

    var options = this.options || {
      scales: {
        yAxes:  [
          {
            display: true,
            stacked: false,
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