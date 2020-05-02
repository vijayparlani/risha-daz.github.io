//Hamburger Menu
var isOpen= false;
var mob_nav=document.querySelector('.mob-nav');
console.log(mob_nav);
var hammenu=document.querySelector('.ham');
console.log(hammenu);
var x_button=document.querySelector('.x-button');
hammenu.addEventListener('click', (e) => {
    mob_nav.classList.remove('hidden');
    hammenu.classList.add('hidden');
    });

x_button.addEventListener('click',(e)=>{
    mob_nav.classList.add('hidden');
    hammenu.classList.remove('hidden');
})

//createAI arrow
create_ai=document.querySelector('.createai');
arrow=document.querySelector('.arrow')
window.addEventListener('scroll',(e)=>{
    create_ai.classList.add('vis');
    arrow.classList.remove('vis');
})