const workExperience = ['0 - 5 років', '6 - 10 років', '11 - 15 років', '16 - 20 років', '21 і більше років'];
const bonusSize = [12, 18, 10, 15, 20];
const colors = 'rgba(75, 192, 192, 1)';

const ctx = document.getElementById('myChart').getContext('2d');

const myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: workExperience,
        datasets: [{
            label: 'Розмір надбавки (%)',
            data: bonusSize,
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
                    text: 'Трудовий стаж',
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
                max: 30,
                title: {
                    display: true,
                    text: 'Розмір надбавки (%)',
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