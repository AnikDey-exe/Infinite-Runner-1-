class Form
{
   constructor()
   {
      this.input = createInput('name');
      this.button = createButton("PLAY");
      this.greeting = createElement('h2');
   }

   hide()
   {
     this.input.hide();
     this.button.hide();
     this.greeting.hide();
   }

  /* display()
   {
      var title = createElement('h2');
      title.html("Car Racing Game");
      title.position(160,0);

      this.input.position(160,160);
      
      this.button.position(220,200);


      this.button.mousePressed(()=>
      {
        this.input.hide();
        this.button.hide();
        var name = this.input.value();  
        playerCount = playerCount + 1;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello "+name);
        this.greeting.position(210,200);
      })    
   }*/
   display(){
    var title = createElement('h2')
    title.html("Infinite Runner");
    title.position(displayWidth/2-90,0);

    this.input.position(displayWidth/2-85,displayHeight/2-80);
    this.button.position(displayWidth/2-25,displayHeight/2);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name);
      this.greeting.position(displayWidth/2-60,displayHeight/4);
    });

  }
}