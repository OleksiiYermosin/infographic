const salaryRanges = ['0-5 тис. грн', '5-10 тис. грн', '10-15 тис. грн', '15-20 тис. грн', '20-25 тис. грн', '25 тис. грн і більше'];
const numberOfEmployees = [100, 200, 500, 300, 100, 50];
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
    'rgba(64, 255, 67, 1)',
];

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: salaryRanges,
        datasets: [{
            label: 'Кількість співробітників',
            data: numberOfEmployees,
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
                    text: 'Кількість співробітників',
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
                display: true,
                position: 'right',
                labels: {
                    generateLabels: function(chart) {
                        const data = chart.data;
                        if (data.labels.length && data.datasets.length) {
                            return data.labels.map(function(label, i) {
                                return {
                                    text: label,
                                    fillStyle: data.datasets[0].backgroundColor[i],
                                    hidden: isNaN(data.datasets[0].data[i]),
                                    index: i
                                };
                            });
                        }
                        return [];
                    }
                }
            }
        }
    }
});