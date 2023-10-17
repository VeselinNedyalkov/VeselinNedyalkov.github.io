document.addEventListener("DOMContentLoaded", function() {
    // Get the checkbox and target element
    const checkbox = document.getElementById("myCheckbox");
    const targetElement = document.getElementById("targetElement");

    // Add event listener to the checkbox
    checkbox.addEventListener("change", function() {
        // Check if the checkbox is checked
        if (checkbox.checked) {
            // Change the background color when the checkbox is checked
            targetElement.style.backgroundColor = "#222";
        } else {
            // Reset the background color when the checkbox is unchecked
            targetElement.style.backgroundColor = "";
        }
    });
});