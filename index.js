// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    let distanceInBlocks = 0;
    if(pickup < 42){
        distanceInBlocks = 42 - pickup;
    }
    else{
        distanceInBlocks = pickup - 42;
    }
    return distanceInBlocks;
}

function distanceFromHqInFeet(someValue){

    return distanceFromHqInBlocks(someValue) * 264;
}




function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if(start > destination){
        return (start - destination) * 264;
    }
    else{
        return (destination - start) * 264;
    }
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer

    let distance = distanceTravelledInFeet(start, destination);
    let price = 0;

    if(distance <= 400){
        price = 0;
    }
    else if(distance > 400 && distance <= 2000){
        price = (distance - 400) * 0.02;
    }
    else if(distance > 2000 && distance < 2500){
        price = 25;
    }
    else{
        return 'cannot travel that far'
    }
    return price;
  }