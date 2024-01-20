// Menu de la Ia que aparece
function menu() {
    var element = document.getElementById("Menu");
    element.classList.toggle("mystyle");
};
  
function Dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};

//FETCH PROYECTOS//

var url = "./db/proyectos.json"

const divProyecto = document.getElementById("divDesing");
divProyecto.innerHTML="";

const divFoto = document.getElementById("foto");
divFoto.innerHTML = " ";

const divVideo = document.getElementById("video");
divVideo.innerHTML = " ";

fetch(url)
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Error" + response.status);
    }
    return response.json();
  })
  .then(function (data) {
    //imprimirInformacion(data.diseño);
    data.diseño.forEach(function (proyecto) {
      divProyecto.innerHTML +=
      `<div class="main--diseño--contenedor">
      <div class="main--diseño--izquierda">
        <h2>*</h2>
        <img loading=lazy class="main--diseño--izquierda--imagen" src=${proyecto.imagen[0]} alt="">
        <img loading=lazy class="main--diseño--izquierda--imagen-centro" src="${proyecto.imagen[1]}" alt="">
        <img loading=lazy class="main--diseño--izquierda--imagen-variante" src=${proyecto.imagen[2]} alt="">
      </div>
      <div class="main--diseño--derecha">
        <h2>${proyecto.titulo}</h2>
        <h4>${proyecto.fecha}</h4>
        <p>${proyecto.contenido}</p>
        <h5>${proyecto.tag}</h5>
      </div>
    </div>`;
  });

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