document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

/*let request = new Request({
    url: 'http://bip.franciscocapone.com/api/getSaldo/{id_tarjeta}',
    method: 'GET'
  });
  fetch(request);
  console.log(request);


const inputText = document.querySelector("input") 
inputText.addEventListener("keypress", (event)=> {
    let key = event.which || event.keyCode;
    if (key ===13) { // 13 es válido para enter
    let bip = inputText.value; //cuando apreto enter, rescato el valor del input.
    console.log(bip)  
    inputText.value = "" ;
fetch(`http:bip.franciscocapone.com/api/getSaldo/${id_tarjeta}`) 
.then(response => response.json())
.then(data => {
console.log(data); //Información para mi.
renderInfo(data);
})
}
})*/