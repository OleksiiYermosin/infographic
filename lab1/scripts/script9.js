const years = ['2020', '2021', '2022', '2023'];
const profitability = [10, 8, 6, 5];
const colors = 'rgba(192, 0, 0, 1)';

const ctx = document.getElementById('myChart').getContext('2d');

const myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [{
            label: 'Прибутковість акцій (%)',
            data: profitability,
            backgroundColor: colors,
            borderColor: colors,
            fill: false,
            pointRadius: 5,
            pointHoverRadius: 10,
            pointBackgroundColor: colors,
            pointHoverBackgroundColor: colors,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Рік',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {top: 10, bottom: 20}
                },
            },
            y: {
                beginAtZero: true,
                min: 0,
                max: 12,
                title: {
                    display: true,
                    text: 'Прибутковість акцій (%)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {top: 20, bottom: 10}
                }
            }
        },
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});