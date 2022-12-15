window.addEventListener('scroll', () => {
    // console.log('scrolling');
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    // console.log(ubicacion);
    if(ubicacion.top < 784) {
        console.log('El elemento ya está visible');
    } else {
        console.log('El elemento no está visible');       
    }
});