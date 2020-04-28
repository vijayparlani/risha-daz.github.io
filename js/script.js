//Hamburger Menu
var isOpen= false;
var nav2=document.querySelector('.nav2');
console.log(nav2);
var hammenu=document.querySelector('.ham');
console.log(hammenu);
hammenu.addEventListener('click', (e) => {
    isOpen=!isOpen;
    console.log(isOpen);
    if (isOpen==true)
    {nav2.style.display='flex';}
    else{nav2.style.display='none' ;}
    })
window.addEventListener('resize',function(e){
    if(window.innerWidth>1024){nav2.style.display='flex';
}
else{nav2.style.display='none';}
})

//createAI arrow
create_ai=document.querySelector('.createai');
arrow=document.querySelector('.arrow')
window.addEventListener('scroll',(e)=>{
    create_ai.classList.add('vis');
    arrow.classList.remove('vis');
})
