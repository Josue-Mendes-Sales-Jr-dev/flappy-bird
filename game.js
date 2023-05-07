console.log('[Josué Mendes] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


const bird={
    sprites,
    sSprinteX:0, sSprintey:0,
    spaceX: 33, spaceY:24, //tamanho do recorte
    dx:10, dy:5,
    SWidth:33, sHeight:24,
    speed:0,
    gravity:0.25,
    birdDraw(){
        contexto.drawImage(
        bird.sprites, 
        bird.sSprinteX,bird.sSprintey,
        bird.spaceX, bird.spaceY,
        bird.dx,bird.dy,
        bird.SWidth,bird.sHeight
        )
    },
atualiza(){
  bird.speed= bird.speed + bird.gravity
  bird.dy= bird.dy+bird.speed
}
}

const floor={
    sprites,
    sprites,
    sSprinteX:0, sSprintey:610,
    spaceX: 224, spaceY:112, //tamanho do recorte
    dx:0, dy:340,
    SWidth:224, sHeight: 320-112,
    
    floorDraw(){
        contexto.drawImage(
            floor.sprites, 
        floor.sSprinteX,floor.sSprintey,
        floor.spaceX, floor.spaceY,
        floor.dx,floor.dy,
        floor.SWidth,floor.sHeight
        )

        contexto.drawImage(
            floor.sprites, 
        floor.sSprinteX,floor.sSprintey,
        floor.spaceX, floor.spaceY,
        (floor.dx+floor.SWidth),floor.dy,
        floor.SWidth,floor.sHeight
        )
    }
    
}

const backGround={
    sprites,
    sSprinteX:390, sSprintey:0,
    spaceX: 250, spaceY:104, //tamanho do recorte
    dx:0, dy:236,
    SWidth:250, sHeight:104,
    bgDraw(){

        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0,0, canvas.width, canvas.height)

        contexto.drawImage(
            backGround.sprites, 
            backGround.sSprinteX,backGround.sSprintey,
            backGround.spaceX, backGround.spaceY,
            backGround.dx,backGround.dy,
            backGround.spaceX,backGround.spaceY
        )

        contexto.drawImage(
            backGround.sprites, 
            backGround.sSprinteX,backGround.sSprintey,
            backGround.spaceX, backGround.spaceY,
            (backGround.dx+backGround.SWidth),backGround.dy,
            backGround.SWidth,backGround.sHeight
        )
    }
    
}


function loop(){
    
 backGround.bgDraw()
 floor.floorDraw()
 bird.birdDraw()
 bird.atualiza()
 
requestAnimationFrame(loop)
}

loop()