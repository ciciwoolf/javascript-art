const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');


const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#041E42'; //Dark navy blue
    context.fillRect(0, 0, width, height);
    //Burst 1
    context.fillStyle = '#87CEEB'; 

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.13;
    

    const num = 17;
    const radius = width * 0.25;

    for(let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      // x = cx * radius * Math.sin(angle);
      // y = cy * radius * Math.cos(angle);
    
      context.save();
      context.translate(cx,cy);
      context.rotate(-angle);
      context.scale(random.range(1,2), .76);

      context.beginPath();
      context.rect(w, h * 1.4, w, h);
      context.fill();      
      context.restore();
      //start new block - light yellow strokes
      context.save()
      context.translate(cx, cy);
      context.rotate(-angle);

      context.beginPath();
      context.arc(0,0, radius * random.range(.8, 1.3), slice * 0.3, slice * 0.9);
      context.strokeStyle = '#F0E68C';
      context.lineWidth = 4;
      context.stroke();

      context.restore();

       //start new block - dark yellow strokes
       context.save()
       context.translate(cx, cy);
       context.rotate(-angle);
 
       context.beginPath();
       context.arc(0,0, radius * random.range(.8, 1.3), slice * 0.3, slice * 0.9);
       context.strokeStyle = '#FEBE10';
       context.lineWidth = 4;
       context.stroke();
 
       context.restore();

       //start new block - dark yellow strokes
       context.save()
       context.translate(cx + random.range(.9, 1.5), cy);
       context.rotate(-angle);
 
       context.beginPath();
       context.arc(0,0, radius * random.range(.8, 1.3), slice * 0.3, slice * 0.9);
       context.strokeStyle = '#FEBE10';
       context.lineWidth = 4;
       context.stroke();
 
       context.restore();

        //start new block - dark yellow strokes
        
        context.save()
        context.translate(cx, cy);
        context.rotate(-angle);
  
        context.beginPath();
        context.arc(0,0, radius * random.range(1.8, 1.3), slice * 0.3, slice * 0.9);
        context.strokeStyle = '#FEBE10';
        context.lineWidth = 2;
        context.stroke();
  
        context.restore();

        context.save()
        context.translate(cx, cy);
        context.rotate(-angle);
  
        context.beginPath();
        context.arc(0,0, radius * random.range(2, 1.3), slice * 0.13, slice * 0.9);
        context.strokeStyle = '#3AAED8';
        context.lineWidth = 3;
        context.stroke();
  
        context.restore();

        context.save()
        context.translate(cx, cy);
        context.rotate(-angle);
  
        context.beginPath();
        context.arc(0,0, radius * random.range(2, 1.3), slice * 0.13, slice * 0.9);
        context.strokeStyle = '#3AAED8';
        context.lineWidth = 3;
        context.stroke();
  
        context.restore();
    }    
  };
};

canvasSketch(sketch, settings);

