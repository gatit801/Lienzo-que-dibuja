Lienzo = document.getElementById("mycanvas");

ctx = Lienzo.getContext("2d");

color = "blue";
relleno = "#0c16ac";
grosor = "5";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = grosor;
ctx.fillStyle = relleno;
ctx.arc(700, 103, 40, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();


Lienzo.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    relleno = document.getElementById("color_relleno").value;
    grosor = document.getElementById("linea_gros").value;
    mouse_x = e.clientX - Lienzo.offsetLeft
    mouse_y = e.clientY - Lienzo.offsetTop
    circle(mouse_x,mouse_y)
}

function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.fillStyle = relleno;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();

}   


function refresh(){
    
    ctx.clearRect(0,0, Lienzo.width, Lienzo.height);
    
}

