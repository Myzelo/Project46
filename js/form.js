class Form{
    constructor(){
      this.name = createInput("").attribute("placeholder", "Enter your name...")
      
      this.gender = createSelect("");
      this.gender.option("Male");
      this.gender.option("Female");
      
      this.difficulty = createSelect("");
      this.difficulty.option("Easy")
      this.difficulty.option("Medium")
      this.difficulty.option("Hard")
      
      
      this.sport = createSelect("");
      this.sport.option("Tennis");
      this.sport.option("American Football");
      this.sport.option("Soccer");
      this.sport.option("Volleyball");
    
      this.submitButton = createButton("Submit!!");
    }

    displayElements(){
      this.name.position(400, 200);
      this.name.class("customInput");
      
      this.difficulty.position(400, 250);
      this.difficulty.class("customButton");
      
      this.sport.position(400, 330);
      this.sport.class("customButton");

      this.gender.position(400, 410);
      this.gender.class("customButton");

      this.submitButton.position(400, 500);
      this.submitButton.class("customButton");
    }

    handleSubmitButton(){
      this.submitButton.mousePressed(()=>{
        this.name.hide();
        this.difficulty.hide();
        this.gender.hide();
        this.sport.hide();
        this.submitButton.hide();
        game.updateGameState("play");
      })
    }

    display(){
      this.displayElements();
      this.handleSubmitButton();
    }
}
