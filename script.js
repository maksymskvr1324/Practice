'use strict'


$( document ).ready(function() {
  // setup request to send email using Mailtrap API
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://send.api.mailtrap.io/api/send',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': 'd8528616d028b6c8bc86a075c6846f3f',
      'Access-Control-Allow-Origin': 'https://send.api.mailtrap.io/api/send'
    },
    data: '{\n  "to": [\n    {\n      "email": "maksym.skvr@gmail.com",\n      "name": "Orest"\n    }\n  ],\n  "from": {\n    "email": "maksym.skvr@gmail.com",\n    "name": "Vasya"\n  },\n  "attachments": [\n    {\n      "content": "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==",\n      "filename": "index.html",\n      "type": "text/html",\n      "disposition": "attachment"\n    }\n  ],\n  "custom_variables": {\n    "user_id": "45982",\n    "batch_id": "PSJ-12"\n  },\n  "headers": {\n    "X-Message-Source": "dev.mydomain.com"\n    \'Access-Control-Allow-Origin\':\'https://send.api.mailtrap.io/api/send\'\n  },\n  "subject": "Your Example Order Confirmation",\n  "text": "Congratulations on your order no. 1234",\n  "category": "API Test"\n}'
  };
  // send request
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
});
// process the form submission event
document.querySelector('#contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  let obj = {
      name: $('[name=name]').val(),
      mail: $('[name=email]').val(),
      text: $('[name=feedback]').val()
  }
  sessionStorage.setItem('form', JSON.stringify(obj))

});

function setRandomColor() {
  const colors = ["red", "blue", "green", "yellow", "purple", "pink"];

  // Randomly select background and text colors from an array of colors.
  const randomBackgroundColor = colors[Math.floor(Math.random() * colors.length)];
  const randomTextColor = colors[Math.floor(Math.random() * colors.length)];

  // Setting random background and text colors on the page.
  document.body.style.backgroundColor = randomBackgroundColor;
  document.body.style.color = randomTextColor;
}

// Calls the setRandomColor() function on page load and on every refresh.
window.onload = setRandomColor;
window.onbeforeunload = setRandomColor;

  