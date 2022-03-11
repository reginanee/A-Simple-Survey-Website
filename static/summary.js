const ctx = document.getElementById('myChart');
var count = {};

// var res = [];
// res = {{ data|safe }};


var year_data = [2, 3, 1, 7, 3, 5]; 
// for (item in res) {
//     var year = item['usr_year'];
//     switch(year) {
//         case "freshman":
//             year_data[0]++;
//             break;
//         case "sophomore":
//             year_data[1]++;
//             break;
//         case "junior":
//             year_data[2]++;
//             break;
//         case "senior":
//             year_data[3]++;
//             break;
//         case "graduate":
//             year_data[4]++;
//             break;
//         case "other":
//             year_data[5]++;
//     }
// }

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:['freshman', 'sophomore', 'junior', 'senior', 'graduate', 'other'],
        datasets: [{
            label: 'Year',
            data: year_data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});