function perfectSquares() {
  var arr = document.getElementsByTagName("input");
  var a = arr[0].value;
  var b = arr[1].value;

  for (let i = a; i <= b; i++) {
    if (Math.sqrt(i) == parseInt(Math.sqrt(i))) {
      document.write(i + " ");
    }
  }
}
