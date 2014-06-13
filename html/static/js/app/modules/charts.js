define([
    'jquery',
    'libs/base',
    'plugins/jquery.flot',
    'plugins/jquery.flot.pie',
    'plugins/jquery.flot.resize'
],
function($, Base) {
    var optionsDefault = {},
    labelFormatter = function(label, series) {
        return "<div style='font-size:20px; text-align:center; padding:2px; color:white;'>" + Math.round(series.percent) + "%</div>";
    };

    optionsDefault.line = {
        series: {
            lines: { show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: { colors: [ { opacity: 0 }, { opacity: 0 } ] }
                 },
            points: { show: true,
                     lineWidth: 2,
                     radius: 4
                 },
            shadowSize: 0,
            stack: true
        },
        grid: { hoverable: true,
               clickable: true,
               tickColor: "#efefef",
               borderWidth: 0
        },

        legend: {
            // show: false
            labelBoxBorderColor: "#fff"
        },
        colors: ["#c94949", "#29c5de", "ff9900"],
        xaxis: {
            ticks: [
                [1, "JAN"], [2, "FEV"], [3, "MAR"], [4,"ABR"], [5,"MAI"], [6,"JUN"],
                [7,"JUL"], [8,"AGO"], [9,"SET"], [10,"OUT"], [11,"NOV"], [12,"DEZ"]
            ],
            font: {
                size: 12,
                color: "#aaaaaa"
            }
        },
        yaxis: {
            ticks:3,
            tickDecimals: 3,
            font: {size:12, color: "#9da3a9"}
        }
    };

    optionsDefault.pie = {
        series: {
            pie: {
                show: true,
                radius: 1,
                label: {
                    show: true,
                    radius: 1/2,
                    formatter: labelFormatter,
                    threshold: 0.1
                },
                stroke: {
                    width: 0
                }
            }
        },

        legend: {
            show: true
        },

        colors: ["#ffd600", "#6e9ab0"]
    };

    var ChartFactory = Base.extend({
        constructor: function(el, type, data, chartOptions) {
            this.el = $(el);
            this.data = data;
            this.type = typeof type === 'string' ? type : 'line';
            this.options = $.extend(true, {}, optionsDefault[this.type], chartOptions);
            this.init();
        },

        init: function() {
            $.plot(this.el, this.data, this.options);
        }
    });

    return {
        create: function(el, type, data, chartOptions) {
            return new ChartFactory(el, type, data, chartOptions);
        }
    };
});
