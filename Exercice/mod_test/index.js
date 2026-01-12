const toutLesLiens = document.querySelectorAll('a');
toutLesLiens.forEach(lien => {
    console.log(lien)
});

const toutLesServices = document.querySelectorAll('.service-card');
toutLesServices.forEach(service => {
    console.log(service);
});

const temoignages = document.querySelector('.testimonial[data-author="Pierre"]');
console.log(temoignages);