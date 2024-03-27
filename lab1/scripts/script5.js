const activities = ['Обслуговування клієнтів', 'Прийом товару', 'Розміщення товару', 'Ведення обліку', 'Прибирання'];
const percentages = [15, 30, 25, 20, 10];
const colors = [
    'rgba(255, 99, 99, 0.5)',
    'rgba(54, 84, 235, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
];

const ctx = document.getElementById('myChart').getContext('2d');

const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: activities,
        datasets: [{
            data: percentages,
            backgroundColor: colors,
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    padding: 15
                }
            }
        }
    }
});