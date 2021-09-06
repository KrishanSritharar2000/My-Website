export const languageChartState = {
	options: {
		chart: {
			type: 'bar',
			height: 350
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				horizontal: true,
			}
		},
		dataLabels: {
			enabled: true,
			textAnchor: 'start',
			style: {
				colors: ['#fff']
			},
			formatter: function (val, opt) {
				return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
			},
			offsetX: 0,
			dropShadow: {
				enabled: true
			}
		},
		xaxis: {
			categories: ['C', 'Java', 'Python', 'Golang', 'Haskell', 'Kotlin', 'JavaScript', 'HTML', 'CSS'
			],
		}
	},
	series: [
		{
			name: "series-1",
			data: [30, 40, 45, 50, 49, 60, 70, 91, 98]
		}
	]
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
					}
				}
			}
		},
		colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5', '#0077B5'],
		labels: ['Flutter', 'Bootstrap', 'SpringBoot', 'React/VueJS', 'Nodemon'],
		legend: {
			show: true,
			floating: true,
			fontSize: '16px',
			position: 'left',
			offsetX: 50,
			offsetY: -5,
			labels: {
				useSeriesColors: true,
			},
			markers: {
				size: 0
			},
			formatter: function (seriesName, opts) {
				return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
				vertical: 3
			}
		},
		responsive: [{
			breakpoint: 480,
			options: {
				legend: {
					show: false
				}
			},
		}]
	},
	series: [82, 67, 60, 45, 82],
};

export const toolsChartState = {
	options: {
		chart: {
			type: 'bar',
			height: 350
		},
		plotOptions: {
			bar: {
				horizontal: true,
			}
		},
		dataLabels: {
			enabled: true,
			textAnchor: 'start',
			style: {
				colors: ['#fff']
			},
			formatter: function (val, opt) {
				return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
			},
			offsetX: 0,
			dropShadow: {
				enabled: true
			}
		},
		xaxis: {
			categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
		},
		yaxis: {
			reversed: true,
		}
	},
	series: [{
		data: [400, 430, 448, 470, 540, 580, 690]
	}],
};
