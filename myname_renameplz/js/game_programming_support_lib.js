var gpsl=gpsl||{};

gpsl.$=function(id){
  return document.getElementById(id);
};
gpsl.randomValue=function(num){
  return Math.floor(Math.random()*num);
}
gpsl.mathlength=function(x1,y1,x2,y2){
  distx=x2-x1;
  disty=y2-y1;
  let dirLength=Math.sqrt(distx*distx+disty*disty);
  return dirLength;
}
gpsl.hittest=function(x1,y1,r1,x2,y2,r2){
  let raddist=((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1));
  let circdist=(r2+r1)*(r2+r1);
  return (circdist>=raddist);
}

gpsl.isoutoffield=function(x,y){
  if(x>=gpsl.$("c1").width)return 1;
  if(y>=gpsl.$("c1").height)return 3;
  if(x<=0)return 2;
  if(y<=0)return 0;

  return -1;
}
