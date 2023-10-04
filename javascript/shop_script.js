// JavaScript to toggle the table and change the icon
const removeIcon = document.getElementById('remove-icon');
const table = document.querySelector('.table-responsive');

removeIcon.addEventListener('click', () => {
    if (table.style.display === 'none') {
        table.style.display = 'block';
        removeIcon.textContent = 'remove';
    } else {
        table.style.display = 'none';
        removeIcon.textContent = 'add'; // You can change this to the plus icon if you have one
    }
});
// JavaScript to set r=40 for medium devices
function updateCircleRadius() {
    const circle = document.querySelector('.progress-bar');
    const circle2 = document.querySelector('.two');
    const circle3 = document.querySelector('.three');
    const circle4 = document.querySelector('.four');
    const circle5 = document.querySelector('.five');
    const circle6 = document.querySelector('.six');
    const circle7 = document.querySelector('.seven');
    const circle8 = document.querySelector('.eight');
    const circle9 = document.querySelector('.progress-full-circle');
    if (window.innerWidth <= 991) { // Adjust this breakpoint as needed
        circle.setAttribute('r', '30%');
        circle2.setAttribute('r', '30%');
        circle3.setAttribute('r', '30%');
        circle4.setAttribute('r', '30%');
        circle5.setAttribute('r', '30%');
        circle6.setAttribute('r', '30%');
        circle7.setAttribute('r', '30%');
        circle8.setAttribute('r', '30%');
        circle9.setAttribute('r', '30%');

    } else {
        circle.setAttribute('r', '45%');
        circle2.setAttribute('r', '45%');
        circle3.setAttribute('r', '45%');
        circle4.setAttribute('r', '45%');
        circle5.setAttribute('r', '45%');
        circle6.setAttribute('r', '45%');
        circle7.setAttribute('r', '45%');
        circle8.setAttribute('r', '45%');
        circle9.setAttribute('r', '45%');
    }
}

// Initial call to set the circle radius based on the screen size
updateCircleRadius();

// Listen for window resize events and update the circle radius accordingly
window.addEventListener('resize', updateCircleRadius);