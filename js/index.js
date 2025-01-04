
document.addEventListener("DOMContentLoaded", function () {
    // Your code here

    document.body.style.backgroundColor = 'green';

    //>  ████████████████████████████████████  CHILDREN






    //>  ███████████████ OPEN WEATHER API d1a7fcdb2d6f38c6b216b37322444de9

    //>  ████████████████████████████████████  BRIGHT BACKGROUND

    function getBrightRandomRGB() {
        const rrr = r(86, 255);
        const ggg = r(86, 255);
        const bbb = r(86, 255);
        const rgbColor = `rgb(${rrr}, ${ggg}, ${bbb})`;
        return rgbColor;
    }

    document.body.style.backgroundColor = getBrightRandomRGB();

    //_ ████████████████████████████████████  DATA STRUCTURES 

    //_ ████████████████████████████████████  DATA STRUCTURES 


    //>  ████████████████████████████████████  QUERY SELECTORS

    const modal = document.querySelector('.modal');
    const openModal = document.querySelector('.button__open');
    const closeModal = document.querySelector('.button__close');

    //>  ████████████████████████████████████  EVENT LISTENERS

    openModal.addEventListener('click', () => {
modal.showModal();
    })

    closeModal.addEventListener('click', () => {
modal.close();
    })

   modal. addEventListener ("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
    e.client < dialogDimensions.left ||
    e.client > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
    ) {
    modal.close()
    }
    })









    //>  ████████████████████████████████████  GENERAL PROGRAM


















})





// console.log(document.documentElement);

//< ████████████████████████████████████  MISC



