self.onmessage = function(event) {
console.log("Recibo " + event.data);
  var n = 1;
  var cont = 0;
  primelist = "";
  search: while (n<event.data) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
    cont++;
    if(cont==100){
      self.postMessage(primelist);
      cont=0;
      primelist=""
    }
  }
}
