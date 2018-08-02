let name_placeholder = "Name: ";
let gender_placeholder = "Gender: ";
let email_placeholder = "Email: ";
let phone_numb_placeholder = "Phone Number: ";

// Starting Divider
let Div = document.getElementById("Person");

// Image Element
let Img = document.createElement("img");
Img.src = data.results[0].picture.large;
Div.appendChild(Img);

// Persons Name Element
let person_firstname = document.createElement("p");
person_firstname.innerHTML = name_placeholder.bold().fontcolor('cyan') + data.results[0].name.first + ' ' + data.results[0].name.last;

Div.appendChild(person_firstname);

// Person Gender Element
let person_gender = document.createElement("p");
person_gender.innerHTML = gender_placeholder.bold().fontcolor('cyan') + data.results[0].gender;
Div.appendChild(person_gender);

// Person Email Element
let person_email = document.createElement("p");
person_email.innerHTML = email_placeholder.bold().fontcolor('cyan') + data.results[0].email;
Div.appendChild(person_email);

// Person Phone Number Element
let person_phone = document.createElement("p");
person_phone.innerHTML = phone_numb_placeholder.bold().fontcolor('cyan') + data.results[0].phone;
Div.appendChild(person_phone);