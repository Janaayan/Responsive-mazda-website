// JavaScript to toggle the containers and change the icon
// const expandIcon = document.getElementById("expand-icon");
// const radioContainer = document.getElementById("radio-container");
// const formContainer = document.getElementById("form-container");
// const formbuttons = document.getElementById("form-buttons");

// expandIcon.addEventListener("click", () => {
//   if (radioContainer.style.display === "none") {
//     radioContainer.style.display = "flex";
//     formContainer.style.display = "flex";
//     formbuttons.style.display = "flex";
//     expandIcon.textContent = "expand_more";
//   } else {
//     radioContainer.style.display = "none";
//     formContainer.style.display = "none";
//     formbuttons.style.display = "none";
//     expandIcon.textContent = "expand_less";
//   }
// });
// JavaScript to hide the form-container when the close icon is clicked
// const closeIcon = document.getElementById("close-icon");
// closeIcon.addEventListener("click", () => {
//   if (closeIcon.classList.contains("close")) {
//     // Close the form-container
//     closeIcon.classList.remove("close");
//     closeIcon.classList.add("visible");
//     closeIcon.textContent = "visibility";
//     formContainer.style.display = "none";
//     formbuttons.style.display = "none";
//   } else {
    // Show the form-container
//     closeIcon.classList.remove("visible");
//     closeIcon.classList.add("close");
//     closeIcon.textContent = "close";
//     formContainer.style.display = "flex";
//   }
// });


// JavaScript to toggle the containers and change the icon with transitions
const expandIcon = document.getElementById("expand-icon");
const radioContainer = document.getElementById("radio-container");
const formContainer = document.getElementById("form-container");
const formbuttons = document.getElementById("form-buttons");
// Add a transitionend event listener to reset transitions after completion
expandIcon.addEventListener("click", () => {
  if (expandIcon.classList.contains("expand_more")) {
    // Close the form-container with transition
    radioContainer.style.transition = "transform 0.5s ease-in-out";
    radioContainer.style.transform = "translateX(-100%)";
    formContainer.style.transition = "transform 0.5s ease-in-out";
    formContainer.style.transform = "translateX(-100%)";
    formbuttons.style.transition = "transform 0.5s ease-in-out";
    formbuttons.style.transform = "translateX(-100%)";
    expandIcon.classList.remove("expand_more");
    expandIcon.classList.add("expand_less");
    expandIcon.textContent = "expand_less";
  } 
  else {
    // Show the form-container with transition
    radioContainer.style.transition = "transform 0.5s ease-in-out";
    radioContainer.style.transform = "translateX(0)";
    formContainer.style.transition = "transform 0.5s ease-in-out";
    formContainer.style.transform = "translateX(0)";
    formbuttons.style.transition = "transform 0.5s ease-in-out";
    formbuttons.style.transform = "translateX(0)";
    expandIcon.classList.remove("expand_less");
    expandIcon.classList.add("expand_more");
    expandIcon.textContent = "expand_more";
  }
});
radioContainer.addEventListener("transitionend", () => {
  radioContainer.style.transition = "";
  formContainer.style.transition = "";
  formbuttons.style.transition = "";
});




// JavaScript to hide the form-container when the close icon is clicked
const closeIcon = document.getElementById("close-icon");

closeIcon.addEventListener("click", () => {
  if (closeIcon.classList.contains("close")) {
    // Close the form-container with transition
    formContainer.style.transition = "all 0.5s ease-in-out";
    formContainer.style.transform = "translateX(-100%)";
    formbuttons.style.transition = "all 0.5s ease-in-out";
    formbuttons.style.transform = "translateX(-100%)";
    closeIcon.classList.remove("close");
    closeIcon.classList.add("visible");
    closeIcon.textContent = "visibility";
  } else {
    // Show the form-container with transition
    formContainer.style.transition = "all 0.5s ease-in-out";
    formContainer.style.transform = "translateX(0)";
    formbuttons.style.transition = "all 0.5s ease-in-out";
    formbuttons.style.transform = "translateX(0)";
    closeIcon.classList.remove("visible");
    closeIcon.classList.add("close");
    closeIcon.textContent = "close";
  }
});

// Add a transitionend event listener to reset transitions after completion
formContainer.addEventListener("transitionend", () => {
  formContainer.style.transition = "";
  formbuttons.style.transition = "";
});


