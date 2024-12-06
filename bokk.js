let navbar=document.querySelector(".details");
let logofor=document.querySelector(".logo")
console.log(logofor)
console.log(navbar)
let b=document.querySelector(".navbar")
let chek= 0;



logofor.addEventListener("click" , function(){
     if(chek==0){
        navbar.style.display="block";
        
        chek=1
    }
   

    else{
        navbar.style.display="none"

        chek=0
    }
    
} 


)
