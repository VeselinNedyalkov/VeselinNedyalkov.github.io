document.addEventListener("DOMContentLoaded", function() {

    const checkbox = document.getElementById("myCheckbox");
    const targetElement = document.getElementById("targetElement");

    
    checkbox.addEventListener("change", function() {
        
        if (checkbox.checked) {
            
            targetElement.style.backgroundColor = "#222";
        } else {
            
            targetElement.style.backgroundColor = "";
        }
    });
});