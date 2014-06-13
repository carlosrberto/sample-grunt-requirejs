define([
    'jquery',
    'modules/charts'
],
function($, charts) {
    return {
        init: function() {
            this.initCharts();
        },

        initCharts: function () {
            var salesData = [
                {
                    data: [[1, 50], [2, 40], [3, 45], [4, 23],[5, 55],[6, 65],[7, 61],[8, 70],[9, 65],[10, 75],[11, 57],[12, 59]],
                    label: "2011"
                },
                {
                    data: [[1, 25], [2, 50], [3, 23], [4, 48],[5, 38],[6, 40],[7, 47],[8, 55],[9, 43],[10,50],[11,47]],
                    label: "2012"
                }
            ];

            var pieData = [
                { label: "Novos clientes efetuando seu primeiro pedido.",  data: 28},
                { label: "Pedidos efetuados por clientes antigos.",  data: 72}
            ];

            // sales chart
            charts.create(".chart-sales", "line", salesData);

            // orders/customers chart
            charts.create(".chart-customers", "pie", pieData);
        }
    };
});
