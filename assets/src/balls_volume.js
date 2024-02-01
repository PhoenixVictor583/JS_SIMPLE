let quantityBalls=12;
let diameterSmallBall=0.5;
let thicknessBall=0.01;
let volumeBall=0;

for(nBalls=1;nBalls<13;nBalls++){
volumeBall=volumeBall+((4/3)*Math.PI*(Math.pow(thicknessBall*nBalls+diameterSmallBall/2,3)));
};
console.log(Math.trunc(volumeBall*100)/100+'m');