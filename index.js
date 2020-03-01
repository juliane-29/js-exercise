var rover = {
    direction: "W",
    // direction can be either North(N), East (E), South (S), West (W)
    x: 0,
    y: 0,
    // current position on 10x10 array
  };
  //function when the rover turns left --> direction changes
  function turnLeft(rover){
    switch (rover.direction){
      case "N":
        rover.direction === "W";
     //console.log("The rover is facing West");
        break; 
      case "W":
        rover.direction === "S";
     //console.log("The rover is facing South");
        break; 
      case "E":
        rover.dirction === "N"; 
     //console.log("The rover is facing North");
        break; 
      case "S":
        rover.direction === "W"
      //console.log("The rover is facing West");
        break;
    }
    console.log("turnLeft was called!");
  }

  //turnLeft()
  
  //function when the rover turns right --> direction changes

  function turnRight(rover){
    switch(rover.direction){
      case "N":
        rover.direction === "E";
       //console.log("The rover is facing East");
        break; 
      case "E":
        rover.direction === "S";
       //console.log("The rover is facing South");
        break; 
      case "S":
        rover.direction === "W";
        //console.log("The rover is facing West");
        break; 
      case "W": 
        rover.direction === "N"; 
        //console.log("The rover is facing North");
        break;
    }
    console.log("turnRight was called!");
    }
    
  //turnRight(rover);

  
  //function when the robot moves forward 
  function moveForward(rover){
    switch(rover.direction){
      case "W": 
        rover.x--;
        console.log(`The rover has now parked on ${rover.x} and ${rover.y}`);
        break;
      case "E": 
        rover.x++;
        console.log(`The rover has now parked on ${rover.x} and ${rover.y}`);
        break;
      case "N": 
        rover.y--;
        console.log(`The rover has now parked on ${rover.x} and ${rover.y}`);
        break;
      case "S": 
        rover.y++;
        console.log(`The rover has now parked on ${rover.x} and ${rover.y}`);
        break;
    }
      console.log("moveForward was called")
  }
  
  moveForward(rover);
  
  function command(rover, order){
    for (i=0; i<orders.length; i++){
      let order = order[i];
      switch (order){
        case "f":
          function moveForward(rover);
          break; 
        case "r":
          function tunrRight(rover);
          break; 
        case "l":
          function turnLeft(rover);
          break;         
      }
    }
  }

  command(rover, "rffrfflfrff");
  
