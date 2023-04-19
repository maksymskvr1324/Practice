# Practice

This file contains the HTML code of a webpage that includes a navigation menu, a feedback form, and a footer. It also uses an external stylesheet file "style.css" and a script file "script.js" that includes the jQuery library.

HTML tags are used in this file to markup the webpage, describing the structure and content of the page. Visitors can navigate through the webpage using the links in the navigation menu, leave feedback in the feedback form, and view contact information in the footer.

And JavaScript code randomly sets the background and text color of a webpage using an array of predefined colors. The function setRandomColor() selects two colors from the array at random and sets them as the background and text color of the page using JavaScript. The colors are selected using Math.floor(Math.random() * colors.length), which generates a random integer between 0 and the length of the colors array.

The last two lines of the code add event listeners to call the setRandomColor() function when the page loads and when the user leaves the page. This means that the background and text colors will change randomly whenever the page is reloaded or the user navigates away from the page




!!! The JavaScript code responsible for sending an email is throwing an error:
     "cess to XMLHttpRequest at 'https://send.api.mailtrap.io/api/send' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: Response to preflight request doesn't pass access  control check: No 'Access-Control-Allow-Origin' header is present on the requested resource."!!!