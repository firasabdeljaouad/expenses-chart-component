function generateChart() {
    fetch('/data.json')
        .then((result) => result.json())
        .then((data) => {
            const info = {
                labels: data.map((chart) => chart.day),
                datasets: [
                    {
                        data: data.map((chart) => chart.amount),
                        backgroundColor: "hsl(10,79%,65%)",
                        borderRadius: 5,
                        hoverBackgroundColor: "hsl(186, 34%, 60%)",
                        
                    }
                ]

            }
            const titleTooltip = (e) => `$${e[0].formattedValue}`;
            const labelTooltip = (e) => ``;
            const options = {
                scales: {
                    y: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                            drawTiks: false,
                            drawBorder: false
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false,
                        }
                    }

                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        yAlin: "bottom",
                        displayColor: false,
                        callbacks: {
                            title: titleTooltip,
                            label: labelTooltip,
                        }

                    }
                }
            }
            const config = {
                type: "bar",
                data: info,
                options
            }
            const myChar = new Chart(document.getElementById("my_chart"), config)


        })

} generateChart()