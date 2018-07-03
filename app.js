function saveUsers() {
  //validar que los campos no queden vacíos (ni en nombre ni en comentario.)
  if ((document.getElementById("botoncillos").value ==="") ||
  (document.getElementById("botoncillos").value === "")) {
      alert("no puedes dejar campos vacíos");
      }else {
      //crear variables 
      let name = document.getElementById("botoncillos").value;
      let comment = document.getElementById("botoncillos").value;
      //guardar el valor de ambas variables en localStorage
      localStorage.setItem(name,comment); 
      //localStorage tiene guardado los nombres y los comentarios
      }
  }
  

const user = {
  name: 'user',
  email: 'user@gmail.com',
  photoUrl: 'https://images.com/user.png',
};

/*
* Aquí se guarda el objeto en forma de string
*/
sessionStorage.setItem('loggedUser', JSON.stringify(user));

console.log(sessionStorage.getItem('loggedUser'));
// {"name":"user","email":"user@gmail.com","photoUrl":"https://images.com/user.png"}


// home.html
/*
* Aquí se obtiene el objeto en forma de string y se convierte (parsea) a objeto
*/
const loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
console.log(typeof loggedUser); // "object"


/*document.addEventListener('DOMContentLoaded', function() {
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