# Calculator
This program is a simple calculator web page that allows users to perform basic arithmetic operations.The calculator allows users to input numbers and operators using buttons, and displays the result of the calculation on the screen. The program uses event listeners to handle user input and evaluate expressions, and provides error handling for invalid input. Overall, this program is a basic example of how to create a calculator using web technologies.

#Demo
https://github.com/ElreyhalmX/Calculator/assets/87812364/c88b7e99-21c7-4b13-9899-3acd42c2dbee


# About
GitHub Copilot: Sure, here's a documentation of the code you provided:

## HTML

The HTML file (`index.html`) contains the structure and content of the calculator web page. Here's a breakdown of the elements in the file:

- `<div class="calculadora">`: This element is the main container for the calculator.
- `<div class="pantalla">0</div>`: This element displays the current value of the calculator.

## CSS

The CSS file (`style.css`) contains the styles for the calculator web page. Here's a breakdown of the styles in the file:

- `.calculadora`: This selector styles the main container for the calculator.
- `.pantalla`: This selector styles the display area for the calculator.
- `.boton`: This selector styles the buttons for the calculator.
- `.boton:hover`: This selector styles the buttons when the mouse hovers over them.

## JavaScript

The JavaScript file (`script.js`) contains the logic for the calculator. Here's a breakdown of the code in the file:

- `const botones = document.querySelectorAll(".boton")`: This line selects all elements with the class "boton" and stores them in an array called `botones`.
- `botones.forEach(boton => {...})`: This line iterates over each element in the `botones` array and adds a click event listener to it.
- `if (botonApretado==="C"){...})`: This block of code handles the "C" button, which clears the calculator display.
- `if (botonApretado==="="){...})`: This block of code handles the "=" button, which evaluates the expression on the calculator display.
- `if (pantalla.textContent==="0" || pantalla.textContent==="Error!"){...}`: This block of code handles input of numbers and operators. If the display is currently "0" or "Error!", the input replaces the display. Otherwise, the input is appended to the display.

I hope this documentation helps! 
