var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;

function preload(){
  // Cargar imagen del camino (path)
  pathImg = loadImage("path.png");

  // Cargar animación del niño (boy)
  boyImg = loadAnimation("boy1.png", "boy2.png");
}

function setup(){
  createCanvas(400,400);

  // Crear sprite del camino (path)
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  // Crear sprite del niño (boy)
  boy = createSprite(200, 300, 20, 50);
  boy.addAnimation("running", boyImg);
  boy.scale = 0.08;
  
  // Crear límite izquierdo (left Boundary)
  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false; // Hacer invisible el límite izquierdo

  // Crear límite derecho (right Boundary)
  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false; // Hacer invisible el límite derecho
}

function draw() {
  background(0);

  // El niño se mueve en el eje X con el mouse
  boy.x = World.mouseX;
  
  // Colisión del niño con los límites derecho e izquierdo invisibles
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  // Código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}

