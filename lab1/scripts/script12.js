const students = ['Студент C', 'Студент A', 'Студент B','Студент E', 'Студент D', 'Студент F', 'Student H', 'Student G'];
const marks = [80, 97, 89, 65, 72, 59, 83, 69];
const colors = [
    'rgba(54, 84, 235, 0.2)',
    'rgba(64, 255, 67, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 99, 99, 0.2)',
    'rgba(39, 119, 30, 0.2)',
    'rgba(255, 99, 208, 0.2)',

];
const borderColors = [
    'rgba(54, 84, 235, 1)',
    'rgba(64, 255, 67, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(255, 159, 64, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 99, 99, 1)',
    'rgba(39, 119, 30, 1)',
    'rgba(255, 99, 208, 1)',
];

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: students,
        datasets: [{
            label: 'Успішність (середній бал)',
            data: marks,
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
                    text: 'Успішність (середній бал)',
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