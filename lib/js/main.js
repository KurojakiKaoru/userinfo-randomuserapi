let name_placeholder = "Name: ";
let gender_placeholder = "Gender: ";
let email_placeholder = "Email: ";
let phone_numb_placeholder = "Phone Number: ";

// Starting Divider
let Div = document.getElementById("Person");

for(i = 0; i < data.results.length; i++) {
// Create New Div
let NewDiv = document.createElement("div");

// Image Element
let Img = document.createElement("img");
Img.src = data.results[i].picture.large;
Div.appendChild(Img);

// Persons Name Element
let person_firstname = document.createElement("p");
person_firstname.innerHTML = name_placeholder.bold().fontcolor('cyan') + data.results[i].name.first.charAt(0).toUpperCase() + data.results[i].name.first.substr(1) + ' ' + data.results[i].name.last.charAt(0).toUpperCase() + data.results[i].name.last.substr(1);

Div.appendChild(person_firstname);

// Person Gender Element
let person_gender = document.createElement("p");
person_gender.innerHTML = gender_placeholder.bold().fontcolor('cyan') + data.results[i].gender.charAt(0).toUpperCase() + data.results[i].gender.substr(1);
Div.appendChild(person_gender);

// Person Email Element
let person_email = document.createElement("p");
person_email.innerHTML = email_placeholder.bold().fontcolor('cyan') + data.results[i].email;
Div.appendChild(person_email);

// Person Phone Number Element
let person_phone = document.createElement("p");
person_phone.innerHTML = phone_numb_placeholder.bold().fontcolor('cyan') + data.results[i].phone;
Div.appendChild(person_phone);

// Divider
let divider = document.createElement("hr");
Div.appendChild(divider);
}