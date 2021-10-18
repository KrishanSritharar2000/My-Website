export const languageChartState = {
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff'],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    xaxis: {
      // categories: ['C', 'Java', 'Python', 'Golang', 'Haskell', 'Kotlin', 'JavaScript', 'HTML', 'CSS'],
      categories: ['Haskell', 'C', 'HTML/CSS', 'Dart', 'Java', 'Kotlin', 'JavaScript', 'Python'],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  },

  series: [
    {
      name: 'series-1',
      data: [50, 65, 70, 70, 75, 80, 85, 90],
    },
  ],
};

export const frameworkChartState = {
  options: {
    chart: {
      height: 390,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Flutter', 'React/VueJS', 'Bootstrap', 'SpringBoot'],
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 50,
      offsetY: 10,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  },
  series: [95, 82, 76, 65],
};

export const toolsChartState = {
  options: {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      textAnchor: 'start',
      style: {
        colors: ['#fff'],
      },
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    xaxis: {
      categories: ['VS Code', 'Git', 'Linux', 'Databases', 'Devops', 'Assembly', 'Shell scripts'],
    },
    yaxis: {
      reversed: true,
      labels: {
        show: false,
      },
    },
  },
  series: [
    {
      data: [97, 95, 85, 82, 75, 74, 70],
    },
  ],
};
