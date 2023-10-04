
const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
const xValues1 = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart1", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    }, { 
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    }, { 
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});
// JavaScript to toggle the table and change the icon
const removeIcon = document.getElementById("remove-icon");
const table = document.querySelector(".first");

removeIcon.addEventListener("click", () => {
  if (table.style.display === "none") {
    table.style.display = "block";
    removeIcon.textContent = "remove";
  } else {
    table.style.display = "none";
    removeIcon.textContent = "add"; // You can change this to the plus icon if you have one
  }
});
// JavaScript to set r=40 for medium devices
function updateCircleRadius() {
  const circle = document.querySelector(".progress-bar");
  const circle1 = document.querySelector(".progress-bar1");
  if (window.innerWidth <= 991) {
    // Adjust this breakpoint as needed
    circle.setAttribute("r", "30%");
    circle1.setAttribute("r", "30%");
  } else {
    circle.setAttribute("r", "45%");
    circle1.setAttribute("r", "45%");
  }
}

// Initial call to set the circle radius based on the screen size
updateCircleRadius();

// Listen for window resize events and update the circle radius accordingly
window.addEventListener("resize", updateCircleRadius);

