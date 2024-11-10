function changeBackground(color) {
    document.body.style.backgroundColor = color;
  }
  
  function addColor() {
    
    const newColor = prompt("Enter the name of the color you want to add:");
   
    if (newColor) {
       
      const newButton = document.createElement("button");
   
      newButton.textContent = newColor.charAt(0).toUpperCase() + newColor.slice(1);
      newButton.classList.add("color-btn");
      newButton.style.backgroundColor = newColor;
      newButton.style.color = "white";
   
      newButton.onclick = function () {
        changeBackground(newColor);
      };
   
      const buttonContainer = document.getElementById("colorButtons");
      buttonContainer.appendChild(newButton);
    } else {
      alert("Please enter a valid color.");
    }
  }
  