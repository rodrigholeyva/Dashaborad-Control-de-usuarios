/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Semana 1',
        'Semana 2',
        'Semana 3',
        'Semana 4',
        'Semana 5',
        'Semana 6',
        'Semana 7',
        'Semana 8',
        'Semana 9',
        'Semana 10',
        'Semana 11',
        'Semana 12'
      ],
      datasets: [{
        data: [
          48,
          47,
          46,
          45,
          44,
          43,
          42,
          41,
          40,
          39,
          38,
          37,
          36,
          35,
          34,
          33,
          32,
          31,
          30,
          29,
          28,
          27,
          26,
          25,
          24,
          23,
          22,
          21,
          20,
          
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 5,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()
