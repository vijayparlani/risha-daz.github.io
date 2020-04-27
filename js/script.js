var isOpen= false;
var nav2=document.querySelector('.nav2');
console.log(nav2);
var hammenu=document.querySelector('.ham');
console.log(hammenu);
hammenu.addEventListener('click', (e) => {
    isOpen=!isOpen;
    console.log(isOpen);
    if (isOpen==true)
    {nav2.style.display='block';
    console.log('block');}
    else{nav2.style.display='none' ;
console.log('hidden')}
    }
    )
