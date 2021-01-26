var canvas = new fabic.Canvas('myCanvas');
player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update();
{
    fabic.Image.fromURL("player.png", function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(160);
player_object.set({
    top:player_y,left:player_x
});
canvas.add(player_object);
});
}
function new_image(get_img)
{
    fabic.Image.fromURL(get_image, function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(160);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add(player_object);
        });
}






