let d = new Date();
document.getElementById("date").innerHTML =
  "<h1>Current time: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()  + "</h1>"


  document.getElementById("date").innerHTML =
  `<h1>Current time: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} </h1>`


  