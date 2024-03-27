const ageRanges = ['18 - 25 років', '26 - 30 років', '31 - 35 років', '36 - 40 років', '41 і більше років'];
const percentages = [12, 15, 20, 14, 9];
const colors = [
    'rgba(255, 99, 99, 0.2)',
    'rgba(54, 84, 235, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
];
const borderColors = [
    'rgba(255, 99, 99, 1)',
    'rgba(54, 84, 235, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
];

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ageRanges,
        datasets: [{
            label: 'Рівень плинності кадрів (%)',
            data: percentages,
            backgroundColor: colors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Рівень плинності кадрів (%)',
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
                display: false,
                position: 'right'
            }
        }
    }
});