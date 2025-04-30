var mouseEvent = "holla";
var last_position_of_x, last_position_of_y;
Lienzo = document.getElementById("mycanvas");
ctx = Lienzo.getContext("2d");


color = "red";
grosor = 6;

/*ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = grosor;
ctx.moveTo(100, 500);
ctx.lineTo(150, 150)
ctx.stroke();*/

Lienzo.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    grosor = document.getElementById("linea_gros").value;

    mouseEvent = "mousedown";
}



Lienzo.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    mouse_x = e.clientX - Lienzo.offsetLeft
    mouse_y = e.clientY - Lienzo.offsetTop

    if(mouseEvent == "mousedown"){

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.moveTo(last_position_of_x,last_position_of_y);
    ctx.lineTo(mouse_x,mouse_y)
    ctx.stroke();
    }
last_position_of_y = mouse_y;   
last_position_of_x = mouse_x;

}


    Lienzo.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e){
        mouseEvent = "mouseup"
    }


        Lienzo.addEventListener("mouseleave", my_mouseleave);
        function my_mouseleave(e){
            mouseEvent = "mouseleave"
    
        }
    
function refresh(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    }