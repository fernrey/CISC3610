let fruits = [
    {name:"Strawberry", quantity:15, color:"red"},
	{name:"Peach", quantity:10, color:"orange"},
    {name: "Banana", quantity: 25, color: "yellow"},
    {name: "Pear", quantity: 10, color: "green"},
    {name: "Grape",quantity: 20, color: "purple"}
];

const canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
// var my_gradient = ctx.createLinearGradient(100, 0, 100, 500);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "grey");
ctx.fillStyle = my_gradient;
ctx.fillRect(0, 0, 1500, 800);


function drawRectangles() {

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        //Data for Strawberry - Quantity 7 - Color Green
        ctx.fillStyle = fruits[0].color;
        ctx.fillRect(100, 110, fruits[0].quantity * 50, 50);
        ctx.font = "40px Ariel";
        ctx.fillText(fruits[0].name, 1125, 145);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(fruits[0].quantity, fruits[0].quantity * 50, 145);

        // Data for Peach - Quantity 20 - Color Red
        ctx.fillStyle = fruits[1].color;
        ctx.fillRect(100, 215, fruits[1].quantity * 50, 50);
        ctx.font = "40px Ariel";
        ctx.fillText(fruits[1].name, 1125, 250);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(fruits[1].quantity, fruits[1].quantity * 50, 250);

        //Data for Banana - Quantity 10, color Orange
        ctx.fillStyle = fruits[2].color;
        ctx.fillRect(100, 315, fruits[2].quantity * 50, 50);
        ctx.font = "40px Ariel ";
        ctx.fillText(fruits[2].name, 1450, 350);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(fruits[2].quantity, fruits[2].quantity * 50, 350);

        //Data for Pear - Quantity 15, color Yellow
        ctx.fillStyle = fruits[3].color;
        ctx.fillRect(100, 415, fruits[3].quantity * 50, 50, );
        ctx.font = "40px Ariel";
        ctx.fillText(fruits[3].name, 1125, 450);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(fruits[3].quantity, fruits[3].quantity * 50, 450);

        //Data for Grape - Quantity 5 - Color Green
        ctx.fillStyle = fruits[4].color;
        ctx.fillRect(100, 515, fruits[4].quantity * 50, 50);
        ctx.font = "40px Ariel";
        ctx.fillText(fruits[4].name, 1125, 550);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(fruits[4].quantity, fruits[4].quantity * 50, 550);
    }
}