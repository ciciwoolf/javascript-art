
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#041E42'; //Dark navy blue
    context.fillRect(0, 0, width, height);


    //Burst 1
    context.fillStyle = '#87CEEB'; 

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.0025;
    const h = height * 0.04;
    let x, y;

    const num = 24;
    const radius = width * 0.3;

    for(let i = 0; i < num; i++) {
      const slice = degToRad(360 / num);
      const angle = slice * i;

      x = radius * Math.sin(angle);
      y = radius * Math.cos(angle);
    
      context.save();
      
      context.translate(cx,cy);
      context.rotate(-angle);

      context.beginPath();
      context.rect(w * 0.5, h * 0.5, w, h);
      context.fill();      
      context.restore();

      //End of Burst 1

    }    
  };
};

canvasSketch(sketch, settings);

