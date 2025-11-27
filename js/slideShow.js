/**
 * 
 * Funciones para el funcionamiento del componente slide-show.
 * 
 * Este código permitirá el funcionamiento del componente slide-Show 
 mediante el uso de las flechas. Flecha derecha pasar a la siguiente slide.
 mientras que la flecha izquierda va a retroceder.
 * 
 * Al hacer click en los puntitos se mostrará en el slide asociado a ese epunto.
 * 
 * 
 * El slide funcionará de forma automatica, hasta que el usuario interactue 
 con el.
 */
// Inicializamos un indice o un contador y el slide que 
// se debe mostrar de primeras. 
let slideIndex = 1;


// Seleccionamos todos los puntos y punto lo asociamos en un evento de click
let arrDots = document.querySelectorAll(".dot")

showSlide(slideIndex);

//Creamos el bucle para asociar a cada punto un evento click y que se llama
// a la funcion curretDotSlide()
for (let j = 0; j< arrDots.length; j++){
    arrDots[j].addEventListener("click", function(){
        currentDotsSlide(j);
    })

}

/**
 * 
 * @param {*} dotIndex 
 * 
 * Esta función actualiza la variable slideIndex igualando su valor al indice 
 del punto (dot) que le llegará como parámetro
 * WARNING:  El indice de los puntos empieza en 0;
 */

function currentDotsSlide(dotIndex){
    slideIndex= dotIndex + 1;
    let arrDots = document.querySelector(".dot");
    showSlide(slideIndex);
}

 //Selecionamos los elementos de las flechas. 

 let nextSlideArrow = document.querySelector(".next");
 let prevSlideArrow = document.querySelector(".prev"); 

 nextSlideArrow.addEventListener("click", function() {
    console.log("next")
    nextPrevSlide(1);
 });

 prevSlideArrow.addEventListener("click", function() {
    console.log("prev")
    nextPrevSlide(-1);
 });

 /**
  * 
  * @param {number} slideIndex
  * 
  * Esta función actualiza la variable slideIndex y lo aumenta o disminuye
  de valor dependiendo del parámetron que le llegue en la llamada. 
  */
 function nextPrevSlide(index){
    slideIndex = slideIndex + index;
    console.log(slideIndex);
    showSlide(slideIndex);
 }





 /**
  * 
  * @param {number} slideNumber 
  * 
  * Esta función mostrará el slide correspondiente a la posición que le llegue
  por parámetro.

  También, tendrá que calcular si nos pasamos por arriba o por abajo del índice.
  */

  function showSlide(slideNumber){
    let arrSlides = document.querySelectorAll(".mySlides");
    let maxSlides = arrSlides.length;

    //Si nos pasamos de ir para adelante

    if (slideNumber> maxSlides){
        slideIndex = 1;
    }

    //Si nos pasamos para ir atrás
    if (slideNumber < 1 ){
        slideIndex = maxSlides;
    }

    //ocultamos todos los slides
    for (let i = 0; i <maxSlides; i++){
        arrSlides[i].style.display = "none";
        arrDots[i].className = arrDots[i].className.replace(" active", "");
    }

    //Mostramos el slide que coincide con el indice
    arrSlides[slideIndex - 1].style.display = "block";
    arrDots[slideIndex - 1].className += " active";
  }
    
