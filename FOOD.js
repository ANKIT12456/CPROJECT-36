class FOOD {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('sprite_0.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=780,y=100;
      
    
      //image(this.image,720,220,70,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=580;
            y=y+50;
          }
          imageMode(CENTER);
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }
}