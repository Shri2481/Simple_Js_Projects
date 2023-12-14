const clock = () =>{
    let date = new Date();

    let currDate = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let fullDate = currDate + "  /  " +  month + "  /  " + year;

    document.getElementById('date').innerText = fullDate;

    let hour = date.getHours();
    document.getElementById('hrs').innerText = hour;

    let min = date.getMinutes();
    document.getElementById('mins').innerText= min;

    let sec = date.getSeconds();
    document.getElementById('secs').innerText = sec;
}


const changeColor = () =>{

    let letters = "0123456789ABCDEF";
    
    let color = "#";

    for(let i =0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }

    document.getElementById('secs').style.color = color;

   

}

clock();
changeColor();

setInterval(clock, 1000);
setInterval(changeColor , 1000)