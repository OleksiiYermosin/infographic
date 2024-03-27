const industries = ['Виробництво', 'Сфера послуг', 'Сільське господарство', 'Торгівля', 'Будівництво', 'Інше'];
const percentages = [35, 12, 25, 10, 8, 10];
const colors = [
    'rgba(64, 255, 67, 0.5)',
    'rgba(255, 99, 99, 0.5)',
    'rgba(54, 84, 235, 0.5)',
    'rgba(255, 159, 64, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
];

const ctx = document.getElementById('myChart').getContext('2d');

const myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: industries,
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
                position: 'bottom',
                labels: {
                    boxWidth: 20,
                    padding: 15
                }
            }
        }
    }
});