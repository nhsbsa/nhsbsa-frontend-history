// ES6 or Vanilla JavaScript
 // calculate the amount of services
 var amountServices = document.querySelectorAll(".service__link").length;
 document.getElementById("service-amount").innerHTML = amountServices;

 // calculate amount of technologies used
 var tech = ["Wordpress", "Java", "HTML", "CSS", "JavaScript", "PHP", "JSP"];
 document.getElementById("tech-amount").innerHTML = tech.length;

//  $('.html').html('foo');