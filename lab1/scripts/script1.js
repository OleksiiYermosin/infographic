const years = ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034'];
const numberOfSchools = [5000, 4577, 4100, 3830, 3700, 3265, 2700, 2450, 2132, 1823];

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: years,
        datasets: [{
            label: 'Кількість навчальних закладів',
            data: numberOfSchools,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Кількість закладів',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {top: 20, bottom: 10}
                }
            },
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