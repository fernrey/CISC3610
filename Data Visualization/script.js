const donut = document.getElementById("donut");
const hbar = document.getElementById("hBar");

let donutChart = new Chart(donut, {
    type: 'doughnut',
    data: {
        labels: [
            'Princeton University',
            'Massachusetts Institute of Technology',
            'Harvard University',
            'Stanford University',
            'Yale University',
            'University of Chicago',
            'Johns Hopkins University',
            'University of Pennsylvania',
            'California Institute of Technology',
            'Duke University'
        ],
        datasets: [{
            label: 'Fall 2021 Undergraduate Enrollment',
            data: [5321, 4638, 7153, 7645, 6536, 7526, 6132, 9962, 987, 6883],
            backgroundColor: [
                '#6052d8',
                '#6052d8',
                '#6052d8',
                '#6052d8',
                '#6052d8',
                '#6052d8',
                '#6052d8',
                '#6052d8',
                '#6052d8',
                '#6052d8',
            ],
          borderWidth: 1,
          borderColor: [
            'rgb(0,0,0)',
            'rgb(0,0,0)',
            'rgb(0,0,0)',
            'rgb(0,0,0)',
            'rgb(0,0,0)',
            'rgb(0,0,0)',
            'rgb(0,0,0)',
            'rgb(0,0,0)',
            'rgb(0,0,0)',
            'rgb(0,0,0)'
        ],
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Fall 2021 Undergraduate Enrollment',
                font: {
                    size: 20,
                }
            },
            legend: {
                position: 'left',
                labels: {
                    textAlign: 'center',
                    font: {
                        size: 14,
                    }
                }
            }
        }
    }

})

let BarChart = new Chart(hbar, {
    type: 'bar',
    data: {
        labels: [
            'Princeton University',
            'Massachusetts Institute of Technology',
            'Harvard University',
            'Stanford University',
            'Yale University',
            'University of Chicago',
            'Johns Hopkins University',
            'University of Pennsylvania',
            'California Institute of Technology',
            'Duke University'
        ],
        datasets: [{
            label: 'Fall 2021 Undergraduate Enrollment',
            data: [5321, 4638, 7153, 7645, 6536, 7526, 6132, 9962, 987, 6883],
            backgroundColor: [
                '#ff1414',
                '#ff1414',
                '#ff1414',
                '#ff1414',
                '#ff1414',
                '#ff1414',
                '#ff1414',
                '#ff1414',
                '#ff1414',
                '#ff1414',

            ],
            borderWidth: 2,
            borderColor: [
                'rgb(0,0,0)',
                'rgb(0,0,0)',
                'rgb(0,0,0)',
                'rgb(0,0,0)',
                'rgb(0,0,0)',
                'rgb(0,0,0)',
                'rgb(0,0,0)',
                'rgb(0,0,0)',
                'rgb(0,0,0)',
                'rgb(0,0,0)'
            ],
        }]
    },
    options: {
        indexAxis: 'x',
        plugins: {
            title: {
                display: true,
                text: 'Fall 2021 Undergraduate Enrollment',
                font: {
                    size: 25,
                }
            }
        }
    }
})