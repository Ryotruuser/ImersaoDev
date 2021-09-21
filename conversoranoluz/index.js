calcula = () => {
  var planeta = document.querySelector(".astro").value;
  var km = document.querySelector(".real").value;
  var anoluz = 9.461e+12;
  var calc = (parseFloat(km) / anoluz);
      
    return document.querySelector(".dindin").innerHTML = `São necessarios ${calc} anos luz para chegar a ${planeta} `;
}