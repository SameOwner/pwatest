
class Enemy{
  constructor(x,y,w,h,imgf,rx,ry,dirx,diry){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.iobj=new Image();
    this.iobj.src=imgf;
    this.iobj.onload=function(){
      loaded++;
    };
    this.rectx=rx;
    this.recty=ry;
    this.rectw=64;
    this.recth=64;
    this.startx=x;
    this.starty=y;
    this.dirx=dirx;
    this.diry=diry;
    this.anim_pattern=0;
    this.anim_span=0;
    this.anim_span_max=20;

    this.hp=30;
    this._isDead=false;

  }
  update(){
    this.x+=this.dirx;
    this.y+=this.diry;
    let lengthx=this.x-this.startx;
    let lengthy=this.y-this.starty;
    if((lengthx*lengthx+lengthy*lengthy)>=64*64){
      this.changeDir();
    }
    this.anim_span++;
    if(this.anim_span==this.anim_span_max){
      this.anim_span=0;
      this.anim_pattern++;
      if(this.anim_pattern==3)this.anim_pattern=0;
    }
  }
  changeDir(){
    var dirIndex=gpsl.randomValue(4);
    this.dirx=directionArrayX[dirIndex];
    this.diry=directionArrayY[dirIndex];
    this.startx=this.x;
    this.starty=this.y;

    this.anim_dirIndex=dirIndex;
  }
  damage(attack){
    this.hp-=attack;
    this.isDead=true;
  }
  isDead(){
    return this._isDead;
  }
}
