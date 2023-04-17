
    let y=Math.floor(Math.random()*6)+1;
    let ys="images/"+y+".png";
    document.querySelector('.img1').setAttribute("src",ys);
   


    let k=Math.floor(Math.random()*6)+1;
    

    let j=document.querySelector('.img2');

    let ks="images/"+k+".png";

    j.setAttribute("src",ks);
    
    
    if(y>k){
        document.getElementsByTagName("h1")[0].innerHTML="Plyer 1 wines";
    }

    else if(y<k){
        document.getElementsByTagName("h1")[0].innerHTML="Plyer 2 wines";
    } 
    else{
        document.getElementsByTagName("h1")[0].innerHTML="draw";

    }


