


var _PlaceJS = function () {}

_PlaceJS.prototype.img = function ( width, height ) {

    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    var context = canvas.getContext("2d");
    context.fillStyle = "#ccc";
    context.fillRect(0, 0, width, height);

    context.font="lighter 15px Sans-Serif";
    context.fillStyle = "#969696";
    context.textAlign="center";
    context.fillText( width + "x" + height, width/2 , height/2 + 6 , width );

    var img_info = canvas.toDataURL("image/png");

    delete canvas_dom;

    return img_info;

}


var PlaceJS = new _PlaceJS();
