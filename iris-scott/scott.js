const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');


const settings = {
  dimensions: [ 1080, 1080 ],
   // Enable an animation loop
   //animate: true,
   // Set loop duration to 3
   duration: 3,
   fps: 60
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle =  "#00008B"; //Dark navy blue
    context.fillRect(0, 0, width, height);

    //Burst 1
    context.fillStyle = "#0247FE"; 

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.13;
    

    const num = 17;
    const radius = width * 0.25;

    for(let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;
    
      context.save();
      context.translate(cx,cy);
      context.rotate(-angle);
      context.scale(random.range(1,2), .76);

      context.beginPath();
      context.rect(w, h * 1.7, w, h);
      context.fill();      
      context.restore();

      //New Block
      context.save()
      context.translate(cx, cy);
      context.rotate(-angle);

      context.beginPath();
      context.arc(0,0, radius * random.range(0.8, 1.3), slice * random.range(1,-8), slice * random.range(1, 5));
      context.strokeStyle = "#0CAFFF";
      context.lineWidth = 4;
      context.stroke();

      context.restore();

      //New block
       context.save()
       context.translate(cx, cy);
       context.rotate(-angle);
 
       context.beginPath();
       context.arc(0,0, radius * random.range(0.5, 1), slice * .5, slice * .9);
       context.strokeStyle = "#0CAFFF";
       context.lineWidth = 20;
       context.stroke();
 
       context.restore();

       //New block
       context.save()
       context.translate(cx + random.range(.9, 1.5), cy);
       context.rotate(-angle);
 
       context.beginPath();
       context.arc(0,0, radius * random.range(.8, 1.3), slice * 0.3, slice * random.range(0.9, 3));
       context.strokeStyle = "#E200CA";
       context.lineWidth = random.range(4, 30);
       context.stroke();
 
       context.restore();

        //New block        
        context.save()
        context.translate(cx, cy);
        context.rotate(-angle);
  
        context.beginPath();
        context.arc(0,0, radius * random.range(1.8, 1.3), slice * 0.3, slice * 0.9);
        context.strokeStyle = "#FDFF00";
        context.lineWidth = random.range(4, 30);
        context.stroke();
  
        context.restore();

         //New block
        context.save()
        context.translate(cx, cy);
        context.rotate(-angle);
  
        context.beginPath();
        context.arc(0,0, radius * random.range(2, 1.3), slice * 0.13, slice * 0.9);
        context.strokeStyle = "#FFEF00";
        context.lineWidth = 3;
        context.stroke();
  
        context.restore();

        context.save()
        context.translate(cx, cy);
        context.rotate(-angle);
  
        context.beginPath();
        context.arc(0,0, radius * random.range(2, 1.3), slice * random.range(0.13, -6), slice * 0.9);
        context.strokeStyle = "#FFFFE0";
        context.lineWidth = random.range(2, 45);
        context.stroke();
  
        context.restore();
    }    
  };
};

canvasSketch(sketch, settings);

