var canvas = new fabric.Canvas('myCanvas');
var block_image_width = 30;
var block_image_height = 30;
var player_x = 10;
var player_y = 10;

var player_object = "";
var block_image_object = "";

updateWidthHeight();

function updateWidthHeight()
{
    console.log("Width= " + block_image_width + " Height= " + block_image_height);
    document.getElementById('current_width').innerHTML = block_image_width;
    document.getElementById('current_height').innerHTML = block_image_height;
}

function player_update()
{
    fabic.Image.fromURL("player.png", 
        function(Img)
        {
            player_object=Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(160);
            player_object.set({
                top:player_y,left:player_x
            });
            canvas.add(player_object);
        }
    );
}

function new_image(get_img)
{
    fabic.Image.fromURL(get_image, 
        function(Img){
            player_object=Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(160);
            player_object.set({
                top:player_y,left:player_x
            });
            canvas.add(player_object);
        }
    );
}
