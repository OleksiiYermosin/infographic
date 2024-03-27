

const departments = ['Відділ продажу', 'Відділ маркетингу', 'Фінансовий відділ', 'Відділ персоналу', 'Технічний відділ', 'Відділ роботи з клієнтами'];
const percentages = [18, 20, 19, 21, 20, 18];
const colors = [
    'rgba(255, 99, 99, 0.2)',
    'rgba(54, 84, 235, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(64, 255, 67, 0.2)',
];
const borderColors = [
    'rgba(255, 99, 99, 1)',
    'rgba(54, 84, 235, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(64, 255, 67, 0.2)',
    'rgba(64, 255, 67, 1)',
];

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: departments,
        datasets: [{
            label: 'Рівень плинності кадрів (%)',
            data: percentages,
            backgroundColor: colors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Рівень плинності кадрів (%)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {top: 10, bottom: 20}
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