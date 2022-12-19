const donut = document.getElementById("donut");
const hbar = document.getElementById("hBar");

let donutChart = new Chart(donut, {
    type: 'doughnut',
    data: {
        labels: [
            'HENRY STREET SCHOOL FOR INTERNATIONAL STUDIES',
            'UNIVERSITY NEIGHBORHOOD HIGH SCHOOL',
            'Edward R. Murrow High School',
            'Forest Hills High School',
            'Fort Hamilton High School',
            'Franklin Delano Roosevelt High School',
            'James Madison High School',
            'John Dewey High School',
            'Midwood High School',
            'Stuyvesant High School'
        ],
        datasets: [{
            label: '2012 SAT Test Takers',
            data: [29, 91, 725, 686, 641, 627, 694, 385, 349, 68],
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
                text: '2012 SAT Test Takers',
                font: {
                    size: 20,
                }
            },
            legend: {
                position: 'right',
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
            'HENRY STREET SCHOOL FOR INTERNATIONAL STUDIES',
            'UNIVERSITY NEIGHBORHOOD HIGH SCHOOL',
            'Midwood High School',
            'Edward R. Murrow High School',
            'James Madison High School',
            'Forest Hills High School',
            'Fort Hamilton High School',
            'Franklin Delano Roosevelt High School',
            'John Dewey High School',
            'Brooklyn Studio Secondary School'
        ],
        datasets: [{
            label: '2010 SAT Test Takers by School',
            data: [29, 91, 725, 686, 641, 627, 694, 385, 349, 68],
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
                text: '2010 SAT Test Takers',
                font: {
                    size: 25,
                }
            }
        }
    }
})