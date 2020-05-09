var canvas=document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var cloud=document.getElementById('cloud');
var rock=document.getElementById('rock');
console.log(rock)
var score=0;
var timer=0;
var h_score=0;
var collided=false;
function Sprite(x,y){
    this.x=x
    this.y=y
    this.dy=0
    
    this.draw=function(){
        c.beginPath();
        c.fillStyle='#000000';
        c.arc(this.x+30,this.y+30,30,0,Math.PI * 2,false)
        c.fill();
        c.closePath();
    }
    
    this.jump=function(){
        if (this.y==(y-1)){
            this.dy=-10
        }
        else if (this.y==(y-201)){
            this.dy=10
        }
        else if (this.y>(y-20) && this.dy==10){
            this.dy=0
            this.y=y
        }
        
        this.y+=this.dy
        sprite.draw();
    }
    
}

function Obstacle(x){
    this.x=x
    this.dx=-5;
    this.draw=function(){
        c.beginPath();
        c.moveTo(this.x, (canvas.height-50));
        c.lineTo(this.x+30, (canvas.height-150));
        c.lineTo(this.x+60, (canvas.height-50));
        c.lineTo(this.x, (canvas.height-50));
        c.closePath();
        c.fillStyle = '#FFFFFF';
        c.fill();
              }

    this.delay=(Math.random()*1000)+80
    this.move=function(){
        this.draw();
        this.x+=this.dx
        if((this.x+this.delay)<0){
            this.x=x+(Math.random()*8000)
        }
    }
}
tree_h=260;
tree_w=60;
function Tree(size,x){
    this.h=tree_h*size
    this.w=tree_w*size
    this.r=this.w*2
    this.x=x
    this.dx=-3;
    this.draw=function(){
        c.fillStyle='#964B00'
        c.fillRect(this.x+200,canvas.height-this.h-5,this.w,(this.h*0.75))
        c.beginPath();
        c.fillStyle='#228B22';
        c.arc(this.x+230,canvas.height-this.h-50,120,0,Math.PI * 2,false)
        c.fill();
        c.closePath();
    }
    this.move=function(){
        this.draw();
        this.x+=this.dx
        if((this.x+500)<0){
            this.x=x+(Math.random()*8000)
        }
    }
}
function display_score(){
    c.font = '30px Courier';
    c.fillStyle = '#ffffff';
    c.fillText('High Score:'+h_score, 800, 50);
    c.fillText('Your Score:'+score, 1100, 50);
    
}
var x =100;
var y=canvas.height-90;
var sprite= new Sprite(x,y);
var obs_s=canvas.width;
function reset_obs(){obs_ar=[]
for (let i=0;i<10;i++){
    var start_disp=(Math.random()*6000);
    obs_ar.push(new Obstacle(obs_s+start_disp));
}}
reset_obs();
var trees=[]
for (let i=0;i<10;i++){
    var start_disp=(Math.random()*6000);
    var size=1
    trees.push(new Tree(size,start_disp));
}
function collision(){
    for (let i = 0; i < obs_ar.length; i++) {
        if(Math.hypot((obs_ar[i].x-sprite.x),(canvas.height-120-sprite.y))<55){
            collided=true;
        }
        
    }
}
function keydown(e){
    if ((e.key==='ArrowUp' || e.key===' ') && sprite.y===y){
        sprite.y=y-1;
    }
};
var c_x=200;
var c_y=200;
function clouds(x,y){
    y-=1;
    c.drawImage(cloud,x, y, 150, 100);
    c.drawImage(cloud,x+500,y+50,150,100);
    c.drawImage(cloud,x+1000,y-50,150,100);
}
function float_clouds(){
    clouds(c_x,c_y);
    if(c_x+1000<0){c_x=canvas.width}
    c_x-=2
}

function bg(){
    c.fillStyle='#87CEEB'
    c.fillRect(0,0,canvas.width,canvas.height);
    c.fillStyle='#228B22'
    c.fillRect(0,canvas.height-70,canvas.width,70);
    c.fillStyle='#61B200'
    c.fillRect(0,canvas.height-50,canvas.width,50);
    c.beginPath();
    c.fillStyle='#FFFF33';
    c.arc(1200,150,70,0,Math.PI * 2,false)
    c.fill();

    c.closePath();
}

function animate(){
    requestAnimationFrame(animate);
    if(collided==false){
    bg();
    if(timer<300){
        c.font = '30px Courier';
    c.fillStyle = 'black';
    c.fillText('Press Space or UpArrow Key to jump', 800, 100);
    timer+=1
    };
    display_score();
    float_clouds();
    collision();
    for (let i=0;i<10;i++){
        trees[i].move();
    }
    sprite.jump();
    for (let i=0;i<10;i++){
        obs_ar[i].move();
    }
    
        score+=1;}
    else {
    c.font = '100px Courier';
    c.fillStyle = 'black';
    c.fillText('GAME OVER', 280, 300);
    c.font = '75px Courier ';
    c.fillText('Press R to restart',200,400)
    document.addEventListener('keydown',(e)=>{
        if (e.key==='r' && collided===true){
            if(score>h_score){
                h_score=score;
            }
            collided=false;
            score=0;
            reset_obs();
        }
    })
    }
    
    
    
};

document.addEventListener('keydown',keydown);
animate();
