function addRandom() {
    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);
    var c = a + b;
    document.getElementById("a").value = a;
    document.getElementById("b").value = b;
    document.getElementById("c").value = c;
    alert("Das Ergebnis der Addition ist: " + c);
  }
  