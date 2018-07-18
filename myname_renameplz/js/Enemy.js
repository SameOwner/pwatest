
class Enemy{
  constructor(x,y,w,h,imgf,rx,ry,dirx,diry){
    this._x=x;
    this._y=y;
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
    this._attack=1;

  }
  attack(){
    return this._attack;
  }
  centerX(){
    return this._x+(this.w/2);
  }
  centerY(){
    return this._y+(this.h/2);
  }
  radius(){
    return this.w*0.5;
  }
  x(){return this._x;}
  y(){return this._y;}
  update(){
    this._x+=this.dirx;
    this._y+=this.diry;
    let lengthx=this._x-this.startx;
    let lengthy=this._y-this.starty;
    let dir=gpsl.isoutoffield(this.centerX(),this.centerY());
    if(dir!=-1){
      this.setDir(dir);
    }
    this.anim_span++;
    if(this.anim_span==this.anim_span_max){
      this.anim_span=0;
      this.anim_pattern++;
      if(this.anim_pattern==3)this.anim_pattern=0;
    }
  }
  draw(ctx){
    let dir_index;
    dir_index=ANIM_DIR[this.dirx+this.diry*2+2];
    let rectx=this.rectx+this.anim_pattern*this.rectw;
    let recty=this.recty+dir_index*this.recth;
    ctx.drawImage(this.iobj,rectx,recty,this.rectw,this.recth,this._x,this._y,this.w,this.h);
  };
  changeDir(){
    var dirIndex=gpsl.randomValue(4);
    this.dirx=directionArrayX[dirIndex];
    this.diry=directionArrayY[dirIndex];
    this.startx=this._x;
    this.starty=this._y;

    this.anim_dirIndex=dirIndex;
  }
  setDir(dir){
    this.dirx=directionArrayX[dir];
    this.diry=directionArrayY[dir];
    this.startx=this._x;
    this.starty=this._y;

    this.anim_dirIndex=dir;
  }
  damage(attack){
    this.hp-=attack;
    if(this.hp<=0)this._isDead=true;
  }
  isDead(){
    return this._isDead;
  }
}
