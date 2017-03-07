var Context = {
  canvas: null,
  //object to refer to the canvas
  context: null,
  create: function(canvasTagId){
    //take the local parameters
    //grab the canvas element
    this.canvas = document.getElementById(canvasTagId);
    this.context = document.getContext('2d');
    return this.context;
  }

};


$(document).ready(function(){
  //once all html elements have finished loading
  //start code
  //initialize
  Context.create('canvas');
  //beginPath() redraws path properties for different objects
  Context.context.beginPath();
  // Context.context.rect(0, 0, 640, 480);
  Context.context.fillStyle = 'black';
  Context.context.fillRect(0, 0, 640, 430);

});
