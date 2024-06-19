var data =" ";

data += "<li>  html  </li>";
data += "<li>  css  </li>";
data += "<li> js  </li>";
console.log(data);
document.querySelector("ul").innerHTML = data;

var value = " ";

value += "<option>  html </option>";
value += "<option>  css </option>";
value += "<option> js </option>";
console.log(value);
document.querySelector("select").innerHTML = value;