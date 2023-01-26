// Get the register button and dropdown elements
var registerBtn = document.getElementById("register-btn");
var registerDropdown = document.getElementById("register-dropdown");
// Add click event to the button
registerBtn.addEventListener("click", function() {
    // toggle the display of the dropdown
    if(registerDropdown.style.display === "none") {
        registerDropdown.style.display = "flex";
    } else {
        registerDropdown.style.display = "none";
    }
});
