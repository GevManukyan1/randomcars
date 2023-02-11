
let div = document.getElementById("div1")
let ok = document.getElementById("ok")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let btn = document.querySelector(".btn")
function init()
    {
        sec = 0
        setInterval(tick1, 1);
    }

    function tick1(){
       sec = sec + (Math.random()*2);
        div.style.marginLeft = `${sec}px`;
    }  
    function ini()
    {
        sec1 = 0;
        setInterval(tick, 1);
    }
    function tick(){
       sec1 = sec1+(Math.random()*2);
        div2.style.marginLeft = `${sec1}px`;
    }  
    function ini7()
    {
        sec2 = 0;
        setInterval(tick7, 1);
    }
    function tick7(){
       sec2 = sec2+(Math.random()*2);
        div3.style.marginLeft = `${sec2}px`;
    }  

let win = document.querySelector(".win")
let two =document.querySelector(".two")
let tree = document.querySelector(".tree")
ok.addEventListener("click",function(){ 
    ok.style.display ="none"
    ini()
    ini7()
    init();
  


   let vw = window.innerWidth
   
    setInterval(() => {
        
        let x = div.getBoundingClientRect().left
        let y = div2.getBoundingClientRect().left
        let z = div3.getBoundingClientRect().left
        
        if(x > vw || y > vw || z > vw){
            if(x>y && x>z && y>z){
                win.innerHTML = "RED WIN"
                win.style.color = "red"
                two.innerHTML = "2.Yellow"
                tree.innerHTML = "3.Blue"
            }else if(x>y && x>z && y<z){
                win.innerHTML = "RED WIN"
                win.style.color = "red"
                two.innerHTML = "2.Blue"
                tree.innerHTML = "3.Yellow"
            }
            else if(y>z && y>x && z<x){
                win.innerHTML = "YELLOW WIN";
                win.style.color = "yellow"
                two.innerHTML = "2.Red"
                tree.innerHTML = "3.Blue"
            }
            else if(y>z && y>x && z>x){
                win.innerHTML = "YELLOW WIN";
                win.style.color = "yellow"
                two.innerHTML = "2.Blue"
                tree.innerHTML = "3.Red"
            }else if(z>x && z>y && y<x){
                win.innerHTML = "BLUE WIN"
                win.style.color = "blue"
                two.innerHTML = "2.Red"
                tree.innerHTML = "3.Yellow"
            }
            else if(z>x && z>y && y>x){
                win.innerHTML = "BLUE WIN"
                win.style.color = "blue"
                two.innerHTML = "2.Yellow"
                tree.innerHTML = "3.Red"
            }
            div.style.display = "none";
            div2.style.display = "none" ;
            div3.style.display = "none" ;
            btn.style.display = "block"
            btn.addEventListener("click",function(){
                location.reload()
            })
        }
        
    }, 1);
    
})    

