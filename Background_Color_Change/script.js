const changeBgColor = () =>{

    let letters = "0123456789ABCDEF";
    
    let color = "#";

    for(let i =0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }

    document.body.style.backgroundColor = color;
    document.h1.style.color = color;

}

document.getElementById('btn').addEventListener('click' , changeBgColor)