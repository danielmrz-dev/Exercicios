const ctx = document.querySelector(".chart__chart");

const plugin = {
    id: "customCanvasBackgroundColor",
    beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = options.color || "#99ffff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    },
};

let labelsX = [];

new Chart(ctx, {

    type: "bar",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Teste"],
        datasets: [
            {
                label: "",
                data: [12, 1, 3, 5, 2, 3, 7],
                borderWidth: 0,
                borderRadius: 3,
                borderSkipped: false,
                backgroundColor: '#ec775f',
            },
        ],
    },
    options: {
        plugins: {
            customCanvasBackgroundColor: {
                color: "transparent",
            },
            legend: false,
        },
        scales: {
            y: {
                display: false,
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
    },
    plugins: [plugin],
});
