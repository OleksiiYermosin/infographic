const fuelTypes = ['A-92', 'A-95', 'A-98', 'ДТ'];
const prices = [48, 42, 45, 40];
const quality = [83, 92, 88, 95];

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: fuelTypes,
        datasets: [{
            label: 'Ціна за літр (грн)',
            data: prices,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'x',
        scales: {
            x: {
                stacked: true,
                beginAtZero: true,
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Ціна за літр (грн)',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {top: 20, bottom: 10}
                }
            },
            'y-axis-1': {
                type: 'linear',
                display: true,
                position: 'right',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Якість (%)',
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
                position: 'top'
            }
        }
    }
});

myChart.data.datasets.push({
    type: 'line',
    label: 'Якість (%)',
    data: quality,
    yAxisID: 'y-axis-1',
    fill: false,
    borderColor: 'rgb(255, 99, 132)',
    borderWidth: 2,
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: 'rgb(255, 99, 132)',
    pointRadius: 5,
    cubicInterpolationMode: 'monotone',
});

myChart.update();