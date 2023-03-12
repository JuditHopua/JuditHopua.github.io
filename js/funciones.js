// Se inyectan datos personales al HTML y aptitudes
fetch('https://randomuser.me/api/?nat=es')
    .then(response => response.json())
    .then(json => {
        document.getElementById('foto').src= json.results[0].picture.large;
        document.getElementById('nombre').innerHTML = json.results[0].name.first + " " 
                                                     + json.results[0].name.last;
        document.getElementById('nombreApellido').innerHTML = json.results[0].name.first + " " 
                                                              + json.results[0].name.last;
        document.getElementById('direccion').innerHTML = json.results[0].location.street.name + " " 
                                                         + json.results[0].location.street.number;
        document.getElementById('localidad').innerHTML = json.results[0].location.postcode + " " 
                                                        + json.results[0].location.city + " - " 
                                                        + json.results[0].location.state + " - " 
                                                        + json.results[0].location.country;
        document.getElementById('telefono').innerHTML = json.results[0].cell;
        document.getElementById('email').innerHTML = json.results[0].email;
        switch (json.results[0].gender) {
            case "female":
                fetch('data.json')
                    .then(response =>response.json())
                    .then(json2 => {
                            document.getElementById('aptitud2').innerHTML = json2.aptitudes[1].dos;
                            document.getElementById('aptitud4').innerHTML = json2.aptitudes[4].cinco;});
                break;
            case "male":
                fetch('data.json')
                    .then(response =>response.json())
                    .then(json2 => {
                            document.getElementById('aptitud2').innerHTML = json2.aptitudes[2].tres;
                            document.getElementById('aptitud4').innerHTML = json2.aptitudes[5].seis;});
                break;
        }
});
                               
fetch('data.json')
    .then(response => response.json())
    .then(json => {
        //Se inyecta profesión al HTML
        document.getElementById('profesion').innerHTML = json.profesion;
        //Se inyectan aptitudes al HTML
        document.getElementById('aptitud1').innerHTML = json.aptitudes[0].uno;
        document.getElementById('aptitud3').innerHTML = json.aptitudes[3].cuatro;
        document.getElementById('aptitud5').innerHTML = json.aptitudes[6].siete;
        document.getElementById('aptitud6').innerHTML = json.aptitudes[7].ocho;
        document.getElementById('aptitud7').innerHTML = json.aptitudes[8].nueve;
        document.getElementById('aptitud8').innerHTML = json.aptitudes[9].diez;
        // Se inyecta experiencia al HTML
        document.getElementById('empresa1').innerHTML = json.experiencia[0].empresa;
        document.getElementById('puesto1').innerHTML = json.experiencia[0].puesto;
        document.getElementById('desde_hasta1').innerHTML = json.experiencia[0].desde + " - " + json.experiencia[0].hasta;
        document.getElementById('descripcion1').innerHTML = json.experiencia[0].descripcion;
        document.getElementById('empresa2').innerHTML = json.experiencia[1].empresa;
        document.getElementById('puesto2').innerHTML = json.experiencia[1].puesto;
        document.getElementById('desde_hasta2').innerHTML = json.experiencia[1].desde + " - " + json.experiencia[1].hasta;
        document.getElementById('descripcion2').innerHTML = json.experiencia[1].descripcion;
        document.getElementById('empresa3').innerHTML = json.experiencia[2].empresa;
        document.getElementById('puesto3').innerHTML = json.experiencia[2].puesto;
        document.getElementById('desde_hasta3').innerHTML = json.experiencia[2].desde + " - " + json.experiencia[2].hasta;
        document.getElementById('descripcion3').innerHTML = json.experiencia[2].descripcion;
        document.getElementById('empresa4').innerHTML = json.experiencia[3].empresa;
        document.getElementById('puesto4').innerHTML = json.experiencia[3].puesto;
        document.getElementById('desde_hasta4').innerHTML = json.experiencia[3].desde + " - " + json.experiencia[3].hasta;
        document.getElementById('descripcion4').innerHTML = json.experiencia[3].descripcion;
        document.getElementById('empresa5').innerHTML = json.experiencia[4].empresa;
        document.getElementById('puesto5').innerHTML = json.experiencia[4].puesto;
        document.getElementById('desde_hasta5').innerHTML = json.experiencia[4].desde + " - " + json.experiencia[4].hasta;
        document.getElementById('descripcion5').innerHTML = json.experiencia[4].descripcion;
        document.getElementById('empresa6').innerHTML = json.experiencia[5].empresa;
        document.getElementById('puesto6').innerHTML = json.experiencia[5].puesto;
        document.getElementById('desde_hasta6').innerHTML = json.experiencia[5].desde + " - " + json.experiencia[5].hasta;
        document.getElementById('descripcion6').innerHTML = json.experiencia[5].descripcion;
        document.getElementById('empresa7').innerHTML = json.experiencia[6].empresa;
        document.getElementById('puesto7').innerHTML = json.experiencia[6].puesto;
        document.getElementById('desde_hasta7').innerHTML = json.experiencia[6].desde + " - " + json.experiencia[6].hasta;
        document.getElementById('descripcion7').innerHTML = json.experiencia[6].descripcion;
        document.getElementById('empresa8').innerHTML = json.experiencia[7].empresa;
        document.getElementById('puesto8').innerHTML = json.experiencia[7].puesto;
        document.getElementById('desde_hasta8').innerHTML = json.experiencia[7].desde + " - " + json.experiencia[7].hasta;
        document.getElementById('descripcion8').innerHTML = json.experiencia[7].descripcion;
        document.getElementById('empresa9').innerHTML = json.experiencia[8].empresa;
        document.getElementById('puesto9').innerHTML = json.experiencia[8].puesto;
        document.getElementById('desde_hasta9').innerHTML = json.experiencia[8].desde + " - " + json.experiencia[8].hasta;
        document.getElementById('descripcion9').innerHTML = json.experiencia[8].descripcion;
        document.getElementById('empresa10').innerHTML = json.experiencia[9].empresa;
        document.getElementById('puesto10').innerHTML = json.experiencia[9].puesto;
        document.getElementById('desde_hasta10').innerHTML = json.experiencia[9].desde + " - " + json.experiencia[9].hasta;
        document.getElementById('descripcion10').innerHTML = json.experiencia[9].descripcion;
        document.getElementById('empresa11').innerHTML = json.experiencia[10].empresa;
        document.getElementById('puesto11').innerHTML = json.experiencia[10].puesto;
        document.getElementById('desde_hasta11').innerHTML = json.experiencia[10].desde + " - " + json.experiencia[10].hasta;
        document.getElementById('descripcion11').innerHTML = json.experiencia[10].descripcion;
        document.getElementById('empresa12').innerHTML = json.experiencia[11].empresa;
        document.getElementById('puesto12').innerHTML = json.experiencia[11].puesto;
        document.getElementById('desde_hasta12').innerHTML = json.experiencia[11].desde + " - " + json.experiencia[11].hasta;
        document.getElementById('descripcion12').innerHTML = json.experiencia[11].descripcion;
        document.getElementById('empresa13').innerHTML = json.experiencia[12].empresa;
        document.getElementById('puesto13').innerHTML = json.experiencia[12].puesto;
        document.getElementById('desde_hasta13').innerHTML = json.experiencia[12].desde + " - " + json.experiencia[12].hasta;
        document.getElementById('descripcion13').innerHTML = json.experiencia[12].descripcion;
        document.getElementById('empresa14').innerHTML = json.experiencia[13].empresa;
        document.getElementById('puesto14').innerHTML = json.experiencia[13].puesto;
        document.getElementById('desde_hasta14').innerHTML = json.experiencia[13].desde + " - " + json.experiencia[13].hasta;
        document.getElementById('descripcion14').innerHTML = json.experiencia[13].descripcion;
        document.getElementById('empresa15').innerHTML = json.experiencia[14].empresa;
        document.getElementById('puesto15').innerHTML = json.experiencia[14].puesto;
        document.getElementById('desde_hasta15').innerHTML = json.experiencia[14].desde + " - " + json.experiencia[14].hasta;
        document.getElementById('descripcion15').innerHTML = json.experiencia[14].descripcion;
        //Se inyecta formación al HTML
        document.getElementById('institucion1').innerHTML = json.formacion[0].institucion;
        document.getElementById('titulo1').innerHTML = json.formacion[0].titulo;
        document.getElementById('desde_hasta16').innerHTML = json.formacion[0].desde + " - " + json.formacion[0].hasta;
        document.getElementById('descripcion16').innerHTML = json.formacion[0].descripcion;
        document.getElementById('institucion2').innerHTML = json.formacion[1].institucion;
        document.getElementById('titulo2').innerHTML = json.formacion[1].titulo;
        document.getElementById('desde_hasta17').innerHTML = json.formacion[1].desde + " - " + json.formacion[1].hasta;
        document.getElementById('descripcion17').innerHTML = json.formacion[1].descripcion;
        document.getElementById('institucion3').innerHTML = json.formacion[2].institucion;
        document.getElementById('titulo3').innerHTML = json.formacion[2].titulo;
        document.getElementById('desde_hasta18').innerHTML = json.formacion[2].desde + " - " + json.formacion[2].hasta;
        document.getElementById('descripcion18').innerHTML = json.formacion[2].descripcion;
        document.getElementById('institucion4').innerHTML = json.formacion[3].institucion;
        document.getElementById('titulo4').innerHTML = json.formacion[3].titulo;
        document.getElementById('desde_hasta19').innerHTML = json.formacion[3].desde + " - " + json.formacion[3].hasta;
        document.getElementById('descripcion19').innerHTML = json.formacion[3].descripcion;
        //Se intectan actualizaciones al HTML
        document.getElementById('institucion5').innerHTML = json.actualizaciones[0].institucion;
        document.getElementById('titulo5').innerHTML = json.actualizaciones[0].titulo;
        document.getElementById('desde_hasta20').innerHTML = json.actualizaciones[0].desde + " - " + json.actualizaciones[0].hasta;
        document.getElementById('descripcion20').innerHTML = json.actualizaciones[0].descripcion;
        document.getElementById('institucion6').innerHTML = json.actualizaciones[1].institucion;
        document.getElementById('titulo6').innerHTML = json.actualizaciones[1].titulo;
        document.getElementById('desde_hasta21').innerHTML = json.actualizaciones[1].desde + " - " + json.actualizaciones[1].hasta;
        document.getElementById('descripcion21').innerHTML = json.actualizaciones[1].descripcion;
        document.getElementById('institucion7').innerHTML = json.actualizaciones[2].institucion;
        document.getElementById('titulo7').innerHTML = json.actualizaciones[2].titulo;
        document.getElementById('desde_hasta22').innerHTML = json.actualizaciones[2].desde + " - " + json.actualizaciones[2].hasta;
        document.getElementById('descripcion22').innerHTML = json.actualizaciones[2].descripcion;
        document.getElementById('institucion8').innerHTML = json.actualizaciones[3].institucion;
        document.getElementById('titulo8').innerHTML = json.actualizaciones[3].titulo;
        document.getElementById('desde_hasta23').innerHTML = json.actualizaciones[3].desde + " - " + json.actualizaciones[3].hasta;
        document.getElementById('descripcion23').innerHTML = json.actualizaciones[3].descripcion;
        document.getElementById('institucion9').innerHTML = json.actualizaciones[4].institucion;
        document.getElementById('titulo9').innerHTML = json.actualizaciones[4].titulo;
        document.getElementById('desde_hasta24').innerHTML = json.actualizaciones[4].desde + " - " + json.actualizaciones[4].hasta;
        document.getElementById('descripcion24').innerHTML = json.actualizaciones[4].descripcion;
        document.getElementById('institucion10').innerHTML = json.actualizaciones[5].institucion;
        document.getElementById('titulo10').innerHTML = json.actualizaciones[5].titulo;
        document.getElementById('desde_hasta25').innerHTML = json.actualizaciones[5].desde + " - " + json.actualizaciones[5].hasta;
        document.getElementById('descripcion25').innerHTML = json.actualizaciones[5].descripcion;
        document.getElementById('institucion11').innerHTML = json.actualizaciones[6].institucion;
        document.getElementById('titulo11').innerHTML = json.actualizaciones[6].titulo;
        document.getElementById('desde_hasta26').innerHTML = json.actualizaciones[6].desde + " - " + json.actualizaciones[6].hasta;
        document.getElementById('descripcion26').innerHTML = json.actualizaciones[6].descripcion;
        document.getElementById('institucion12').innerHTML = json.actualizaciones[7].institucion;
        document.getElementById('titulo12').innerHTML = json.actualizaciones[7].titulo;
        document.getElementById('desde_hasta27').innerHTML = json.actualizaciones[7].desde + " - " + json.actualizaciones[7].hasta;
        document.getElementById('descripcion27').innerHTML = json.actualizaciones[7].descripcion;
        document.getElementById('institucion13').innerHTML = json.actualizaciones[8].institucion;
        document.getElementById('titulo13').innerHTML = json.actualizaciones[8].titulo;
        document.getElementById('desde_hasta28').innerHTML = json.actualizaciones[8].desde + " - " + json.actualizaciones[8].hasta;
        document.getElementById('descripcion28').innerHTML = json.actualizaciones[8].descripcion;
        document.getElementById('institucion14').innerHTML = json.actualizaciones[9].institucion;
        document.getElementById('titulo14').innerHTML = json.actualizaciones[9].titulo;
        document.getElementById('desde_hasta29').innerHTML = json.actualizaciones[9].desde + " - " + json.actualizaciones[9].hasta;
        document.getElementById('descripcion29').innerHTML = json.actualizaciones[9].descripcion;
        document.getElementById('institucion15').innerHTML = json.actualizaciones[10].institucion;
        document.getElementById('titulo15').innerHTML = json.actualizaciones[10].titulo;
        document.getElementById('desde_hasta30').innerHTML = json.actualizaciones[10].desde + " - " + json.actualizaciones[10].hasta;
        document.getElementById('descripcion30').innerHTML = json.actualizaciones[10].descripcion;
        document.getElementById('institucion16').innerHTML = json.actualizaciones[11].institucion;
        document.getElementById('titulo16').innerHTML = json.actualizaciones[11].titulo;
        document.getElementById('desde_hasta31').innerHTML = json.actualizaciones[11].desde + " - " + json.actualizaciones[11].hasta;
        document.getElementById('descripcion31').innerHTML = json.actualizaciones[11].descripcion;
        document.getElementById('institucion17').innerHTML = json.actualizaciones[12].institucion;
        document.getElementById('titulo17').innerHTML = json.actualizaciones[12].titulo;
        document.getElementById('desde_hasta32').innerHTML = json.actualizaciones[12].desde + " - " + json.actualizaciones[12].hasta;
        document.getElementById('descripcion32').innerHTML = json.actualizaciones[12].descripcion;
        document.getElementById('institucion18').innerHTML = json.actualizaciones[13].institucion;
        document.getElementById('titulo18').innerHTML = json.actualizaciones[13].titulo;
        document.getElementById('desde_hasta33').innerHTML = json.actualizaciones[13].desde + " - " + json.actualizaciones[13].hasta;
        document.getElementById('descripcion33').innerHTML = json.actualizaciones[13].descripcion;
        //Se inyectan idiomas al HTML
        document.getElementById('idioma1').innerHTML = json.idiomas[0].nombre + " nivel " 
                                                      + json.idiomas[0].nivel;
        document.getElementById('idioma2').innerHTML =json.idiomas[1].nombre + " nivel " 
                                                      + json.idiomas[1].nivel;
    });

const btn_scrolltop = document.getElementById('btn-scrolltop');
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

// Registrar el service worker para poder utilizar el sitio offline

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/JuditHopua.github.io/js/sw.js')
      .then(() => { console.log('Service Worker Registrado'); });
  }
  
  // Código para manejar la instalación de escritorio
  
  let deferredPrompt;
  const addBtn = document.querySelector('.add-button');
  addBtn.style.display = 'none';
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevenir de mostrar automáticamente el prompt en Chrome 67 y versiones anteriores
    e.preventDefault();
    // Guardar el evento para que pueda activarse más tarde.
    deferredPrompt = e;
    // Actualizar UI para notificar al usuario de que puede agregarlo a la pantalla de inicio
    addBtn.style.display = 'block';
  
    addBtn.addEventListener('click', () => {
      // Ocultar nuestra interface de usuario que muestra nuestro botón de CV
      addBtn.style.display = 'none';
      // mostrar el prompt
      deferredPrompt.prompt();
      // Esperar a que el usuario acepte el prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó el prompt de CV');
        } else {
          console.log('El usuario no aprobó el prompt de CV');
        }
        deferredPrompt = null;
      });
    });
  });