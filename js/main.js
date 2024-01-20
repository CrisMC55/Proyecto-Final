// Función que hace que al pulsar el menu en movil aparezca y al volverlo a pulsar desaparezca, el toggle lo que hace es que si no esta la clase, la ñade y si la clase ya está, la quita //
function menu() {
    var element = document.getElementById("Menu");
    element.classList.toggle("mystyle");
};

// Función que cambia el valor de las variables de color para poder tener el efecto de pagina en blanco y negro //
  
function Dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};

//FETCH PROYECTOS//

var url = "./db/proyectos.json" //creamos una variable para acceder al archivo .json//

if (document.getElementById("divDesing")){
fetch(url)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Error" + response.status);
    }
    return response.json();
  })
  .then(function (data) {

    const divVideo = document.getElementById("video");  //Accede al div mediande Id y lo vacia//
    divVideo.innerHTML = " ";

    const divFoto = document.getElementById("foto");
    divFoto.innerHTML = " "

    const divProyecto = document.getElementById("divDesing");
    divProyecto.innerHTML="";
    //primera seccion desing
    data.design.forEach(function (proyecto) { 
      divProyecto.innerHTML +=
      `<div class="main--design--contenedor">
      <div class="main--design--izquierda">
        <h2>*</h2>
        <img loading=lazy class="main--design--izquierda--imagen" src=${proyecto.imagen[0]} alt="">
        <img loading=lazy class="main--design--izquierda--imagen-centro" src="${proyecto.imagen[1]}" alt="">
        <img loading=lazy class="main--design--izquierda--imagen-variante" src=${proyecto.imagen[2]} alt="">
      </div>
      <div class="main--design--derecha">
        <h2>${proyecto.titulo}</h2>
        <h4>${proyecto.fecha}</h4>
        <p>${proyecto.contenido}</p>
        <h5>${proyecto.tag}</h5>
      </div>
    </div>`;
  });


  //segunda seccion fotografia
  data.fotografia.forEach(function (foto) {
      divFoto.innerHTML +=
      `<div class="main--fotografia--contenedor">
    <div class="main--fotografia--izquierda">
      <h2>*</h2>
      <img loading=lazy src=${foto.imagen[0]} alt="">
      <img loading=lazy src=${foto.imagen[1]} alt="">
      <img loading=lazy src=${foto.imagen[2]} alt="">
    </div>
    <div class="main--fotografia--derecha">
      <h2>${foto.titulo}</h2>
      <h4>${foto.fecha}</h4>
      <p> ${foto.contenido}</p>
      <h5>${foto.tag}</h5>
    </div>
  </div>`;
      
  });


  //tercera seccion videos
  data.video.forEach(function (videos) {
      divVideo.innerHTML +=
      `<div class="main--video--contenedor">
    <div class="main--video--izquierda">
      <h2>*</h2>
      <video controls poster=${videos.portada} src=${videos.video}></video>
    </div>
    <div class="main--video--derecha">
      <h2>${videos.titulo}</h2>
      <h4>${videos.fecha}</h4>
      <p>${videos.contenido}</p>
      <h5>${videos.tag}</h5>
    </div>
  </div>`;
      
  });

}); 

}

//CARRUSEL DE INICIO//

if (document.getElementById("carrusel")){

  let indiceDiapositiva = 1;
  
  // Funcion que hace que al cargarse la pagina aparezca la diapositiva 1
mostrarDiapositiva(indiceDiapositiva);
  
  // Función para cambiar la diapositiva actual
function cambiarDiapositiva(n) {
    mostrarDiapositiva(indiceDiapositiva = n);
}
  
function mostrarDiapositiva(n) {
    let i;
    let diapositivas = document.getElementsByClassName("miDiapositiva");
    let puntosNavegacion = document.getElementsByClassName("puntoNavegacion");
  
    // Oculta todas las diapositivas
    for (i = 0; i < diapositivas.length; i++) {
      diapositivas[i].style.display = "none";
    }
  
    // Muestra la diapositiva actual
    diapositivas[indiceDiapositiva - 1].style.display = "block";
  
    for (i = 0; i < puntosNavegacion.length; i++) {
      puntosNavegacion[i].className = puntosNavegacion[i].className.replace(" activo", "");
    }
    
    // Marca el punto del carrusel que corresponde a la diapositiva que se ve
    puntosNavegacion[indiceDiapositiva - 1].className += " activo";
};

}
