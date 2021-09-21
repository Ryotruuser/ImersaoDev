calcula = () => {
  var nota = document.querySelector(".real").value;
    var euro = parseFloat(nota) * 0.16;
      var dollar = parseFloat(nota) * 0.19;
    return document.querySelector(".dindin").innerHTML = `Sendo o valor do real R$: ${nota} o euro ficaria a  ${euro} €, e claro isso em dollar e $ ${dollar}`;
}
