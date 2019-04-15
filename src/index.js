const NUMBER_OF_IMAGES_PER_LINE = 17;

const requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.webkitCancelAnimationFrame ||
                              window.msRequestAnimationFrame;



window.onload = function() {
  let canvas, context;
  let step = 0; 
  let gridStep = 0;

  let trainStep = 0;
  let truckStep = 0;
  let africaStep = 0;
  let australiaStep = 0;
  let airplaneStep = 0;
  let shipStep = 0;
  let eyeStep = 0;

  let xScaleTrain = 0;
  let yScaleTrain = 0;
  let xScaleTruck = 0;
  let yScaleTruck = 0;
  let xScaleAfrica = 0;
  let yScaleAfrica = 0;
  let xScaleAustralia = 0;
  let yScaleAustralia = 0;
  let xScaleAirplane = 0;
  let yScaleAirplane = 0;
  let xScaleShip= 0;
  let yScaleShip = 0;
  let xScaleEye= 0;
  let yScaleEye = 0;

  canvas = document.getElementById('canvas');
  context = canvas.getContext('2d');

  canvasLayer = document.getElementById('canvasBase');
  contextLayer = canvasLayer.getContext('2d');

  canvasMiddle = document.getElementById('canvasMiddle');
  contextMiddle = canvasLayer.getContext('2d');

  canvasMiddle.height = window.innerHeight;
  canvasMiddle.width = window.innerHeight;

  canvasLayer.height = window.innerHeight;
  canvasLayer.width = window.innerWidth;

  canvas.height = window.innerHeight;
  canvas.width = window.innerHeight;

  animateGlobe();
  globeArea();
  drawImages();
  grid();
 
  
function drawImages() {
  velocity = 2;
  const trainImageSpeed = .4;
  const truckImageSpeed = .33;
  const africaImageSpeed = .5;
  const australiaImageSpeed = .3;
  const airplaneImageSpeed = .18;
  const shipImageSpeed = .14;
  const eyeImageSpeed = .2;
  

  let africa = new Image()

  africa.onload = function() {
    contextMiddle.drawImage(africa, canvasLayer.width / 2 + canvas.width / 40 + africaStep - xScaleAfrica / 20, 6 * canvas.width / 10 - yScaleAfrica / 5, xScaleAfrica+= africaImageSpeed, yScaleAfrica += africaImageSpeed);
  };

  africa.src = '../images/africa.png';

  let train = new Image()

  if (xScaleTrain < 200) {
    train.onload = function() {
      contextMiddle.drawImage(train, canvasLayer.width / 2 + canvas.width / 4 + trainStep - xScaleTrain / 20, 3 * canvas.width / 10 - yScaleTrain / 5, xScaleTrain += trainImageSpeed, yScaleTrain += trainImageSpeed);
    };
  } else {
    train.onload = function() {
      contextMiddle.drawImage(train, canvasLayer.width / 2 + canvas.width / 4 + trainStep - xScaleTrain / 20, 3 * canvas.width / 10 - yScaleTrain / 5, xScaleTrain, yScaleTrain);
    };
  }
 
  train.src = '../images/train.png';

  let truck = new Image()

  truck.onload = function() {
    contextMiddle.drawImage(truck, canvasLayer.width / 2 + canvas.width / 3 + truckStep - xScaleTruck / 20, 4 * canvas.width / 10 - yScaleTruck / 5, xScaleTruck += truckImageSpeed, yScaleTruck += truckImageSpeed);
  };

  truck.src = '../images/truck.png';

  
  let australia = new Image()

  australia.onload = function() {
    contextMiddle.drawImage(australia, canvasLayer.width / 2 + canvas.width + australiaStep - xScaleAustralia / 20, 6 * canvas.width / 10 - yScaleAustralia / 5, xScaleAustralia += australiaImageSpeed, yScaleAustralia += australiaImageSpeed);
  };

  australia.src = '../images/australia.png';

  let airplane = new Image()

  airplane.onload = function() {
    contextMiddle.drawImage(airplane, canvasLayer.width / 2 +  canvasLayer.width / 1.5 + airplaneStep - xScaleAirplane / 20, 2 * canvas.width / 10 - yScaleAirplane / 5, xScaleAirplane += airplaneImageSpeed, yScaleAirplane += airplaneImageSpeed);
  };

  airplane.src = '../images/airplane.png';

  let ship = new Image()

  ship.onload = function() {
    contextMiddle.drawImage(ship, canvasLayer.width / 2 + 1.5 * canvas.width + shipStep - xScaleShip / 20, 5 * canvas.width / 10 - yScaleShip / 5, xScaleShip += shipImageSpeed, yScaleShip += shipImageSpeed);
  };

  ship.src = '../images/ship.png';

  let eye = new Image()

  eye.onload = function() {
    contextMiddle.drawImage(eye, canvasLayer.width / 2 + canvas.width / 15 + eyeStep - xScaleEye/ 20, 2.5 * canvas.width / 10 - yScaleEye / 5, xScaleEye += eyeImageSpeed, yScaleEye += eyeImageSpeed);
  };

  eye.src = '../images/eye.png';


  trainStep -= velocity;
  truckStep -= velocity;
  australiaStep -= velocity;
  airplaneStep -= velocity;
  africaStep -= velocity;
  shipStep -= velocity;
  eyeStep -= velocity;

  window.requestAnimationFrame(drawImages);

  if (trainStep <= -canvasLayer.width ) {
    xScaleTrain = 10;
    yScaleTrain = 10;
    trainStep = 0;
  } 

  if (truckStep <= -canvasLayer.width) {
    xScaleTruck = 0;
    yScaleTruck = 0;
    truckStep = 0;
  }

  if (australiaStep <= -canvasLayer.width) {
    xScaleAustralia= 0;
    yScaleAustralia = 0;
    australiaStep = 0;
  }

  if (africaStep <= -canvasLayer.width) {
    xScaleAfrica = 0;
    yScaleAfrica = 0;
    africaStep = 0;
  }

  if (airplaneStep <= -canvasLayer.width) {
    xScaleAirplane= 0;
    yScaleAirplane = 0;
    airplaneStep = 0;
  }

  if (shipStep <= - 2 * canvasLayer.width ) {
    xScaleShip= 0;
    yScaleShip = 0;
    shipStep = 0;
  }

  if (eyeStep <= -canvasLayer.width) {
    xScaleEye= 0;
    yScaleEye = 0;
    eyeStep = 0;
  }
}

  function animateGlobe() {
    const velocity = 2;
    let map = new Image()

    map.onload = function() {
      contextLayer.drawImage(map, -canvasLayer.width + step, 0, canvasLayer.width * 3, canvasLayer.height);
    };
  
    map.src = '../images/map.png';


    step -= velocity;
    window.requestAnimationFrame(animateGlobe);
    if (step <= -canvasLayer.width) {
      // xScaleTrain = 10;
      // yScaleTrain = 10;
      // xScaleTruck = 10;
      // yScaleTruck = 10;
      // xScaleAfrica = 10;
      // yScaleAfrica = 10;
      // xScaleAustralia= 0;
      // yScaleAustralia = 0;
      // xScaleAirplane= 0;
      // yScaleAirplane = 0;
      // xScaleShip= 0;
      // yScaleShip = 0;
      // xScaleEye= 0;
      // yScaleEye = 0;
      step = 0;
    } 
  }
  
  function grid () {
    context.lineWidth = 0.7;
    const velocity = 2;
    context.clearRect(0, 0, canvas.width, canvas.height);

    let height = canvas.height / 20;
    let width = canvas.width / 20;
    context.strokeStyle = '#FFFFFF';
  
    while (height < canvas.height) {
      context.beginPath();
      context.moveTo(- width / 2 + canvas.width / 80, height);
      context.lineTo(canvas.width, height);
      context.stroke();
      context.closePath();
  
      height += canvas.height / 20;
    }

    
    const numberOfSteps = canvas.width / (canvas.width / 20) / 2 + 1;
    for (let i = 0; i <= numberOfSteps; i++) {
      if (i === 0) {
        context.beginPath();
        context.moveTo(canvas.width / 2 , 0);
        context.quadraticCurveTo(canvas.width / 2 - i * canvas.width / 20 + gridStep, canvas.height / 30, canvas.width / 2 - i * canvas.width / 20 + gridStep, canvas.height / 2 );
        context.stroke();

        context.beginPath();
        context.moveTo(canvas.width / 2 , canvas.height);
        context.quadraticCurveTo(canvas.width / 2 - i * canvas.width / 20 + gridStep, canvas.height - canvas.height / 30, canvas.width / 2 - i * canvas.width / 20 + gridStep, canvas.height / 2 );
        context.stroke();
      } else {
        context.beginPath();
        context.moveTo(canvas.width / 2 , 0);
        context.quadraticCurveTo(canvas.width / 2 - i * canvas.width / 20 + gridStep, canvas.height / 30, canvas.width / 2 - i * canvas.width / 20 + gridStep, canvas.height / 2 );
        context.stroke();
    
        context.beginPath();
        context.moveTo(canvas.width / 2 , 0);
        context.quadraticCurveTo(canvas.width / 2 + i * canvas.width / 20 + gridStep, canvas.height / 30, canvas.width / 2 + i * canvas.width / 20 + gridStep, canvas.height / 2 );
        context.stroke();
  
        context.beginPath();
        context.moveTo(canvas.width / 2 , canvas.height);
        context.quadraticCurveTo(canvas.width / 2 - i * canvas.width / 20 + gridStep, canvas.height - canvas.height / 30, canvas.width / 2 - i * canvas.width / 20 + gridStep, canvas.height / 2 );
        context.stroke();
    
        context.beginPath();
        context.moveTo(canvas.width / 2 , canvas.height);
        context.quadraticCurveTo(canvas.width / 2 + i * canvas.width / 20 + gridStep, canvas.height - canvas.height / 30, canvas.width / 2 + i * canvas.width / 20 + gridStep, canvas.height / 2 );
        context.stroke();
      }
    }
    gridStep -= velocity;
    window.requestAnimationFrame(grid);
    if (gridStep <= -canvas.width / 10 + 0.1) {
      gridStep = 0;
    } 
  }
  
  function globeArea() {
    context.lineWidth = 2;
    context.strokeStyle = "#ffffff";
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0,  2 * Math.PI);
    context.stroke();
    context.clip();

    contextLayer.lineWidth = 2;
    contextLayer.strokeStyle = "#ffffff";
    contextLayer.beginPath();
    contextLayer.arc(canvasLayer.width / 2, canvas.height / 2, canvas.width / 2, 0,  2 * Math.PI);
    contextLayer.stroke();
    contextLayer.clip();
  }
  
  function drawMap (callback) {
    const stepNumY = Math.floor(canvas.height / (canvas.height / 10));
    const stepNumX = Math.floor(canvas.width / (canvas.width / 10));
    context.strokeStyle = "#ffffff";
    
    const velocity = 2;
  
    let imageNum = 1;
  
    for ( let i = 0; i < stepNumY; i++) {
      for ( let k = 0; k < stepNumX; k++) {
        let piece = new Image();
  
        piece.onload = function() {
          context.drawImage(piece, 
                      x = canvas.width / 10  * k + context.lineWidth / 2 + step, 
                      y = canvas.height / 10  * i + context.lineWidth / 2, 
                      canvas.width / 10, 
                      canvas.height / 10);
          
  
          //puzzle effect
          context.fillStyle = "rgba(255, 255, 255, 0.0)";
          context.lineWidth = .5;
          context.beginPath();
          context.arc(canvas.width / 10  * (k + 1), canvas.height / 10  * i - canvas.height / 20 , canvas.width / 80, Math.PI / 2, (3/2) *  Math.PI, true);
          context.stroke();
          context.closePath();
          context.fill();
  
          i === 0 ? null : (
            context.fillStyle = "rgba(255, 255, 255, 0.0)",
            context.lineWidth = .5,
            context.beginPath(),
            context.arc(canvas.width / 10  * (k) + canvas.width / 20, canvas.height / 10  * (i + 1) - canvas.height / 10 , canvas.width / 80, 0, Math.PI),
            context.stroke(),
            context.closePath(),
            context.fill()
          )
  
          i === stepNumY - 1 ?  (
          context.fillStyle = "rgba(255, 255, 255, 0.0)",
          context.lineWidth = .5,
          context.beginPath(),
          context.arc(canvas.width / 10  * k, canvas.height / 10  * (i + 1) - canvas.height / 20 , canvas.width / 80, Math.PI / 2, (3/2) *  Math.PI, true),
          context.stroke(),
          context.closePath(),
          context.fill()
          ) : null;  
        }
  
        piece.src = `../images/image_part_${imageNum}.jpg`;
        imageNum++;
      }
      imageNum += NUMBER_OF_IMAGES_PER_LINE - stepNumY;
    }
  
    
  
    if (step < canvas.width) {
      step += velocity;
      console.log(step)
      window.requestAnimationFrame(drawMap);
    }
  }
  
}


