const income = [0, 20, 25, 30, 35, 40, 45, 50];
const salary = [null, 5, 6, 7, 8, 10, 13, 16];
const colors = 'rgba(75, 192, 192, 1)';

const ctx = document.getElementById('myChart').getContext('2d');

const myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: income,
        datasets: [{
            label: 'Зарплата (тис. грн)',
            data: salary,
            backgroundColor: colors,
            borderColor: colors,
            fill: false,
            pointRadius: 5,
            pointHoverRadius: 10,
            pointBackgroundColor: colors,
            pointHoverBackgroundColor: colors,
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            cubicInterpolationMode: 'monotone',
        }]
    },
    options: {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Дохід (тис. грн)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {top: 10, bottom: 20}
                },
            },
            y: {
                beginAtZero: true,
                max: 18,
                title: {
                    display: true,
                    text: 'Зарплата (тис. грн)',
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