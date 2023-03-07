// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator
// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

const NoFloor = "There is no such floor in this building";
const ElevatorFloating = "elevator is floating right now!";
const Right = "Right";
const Left = "Left";


function elevator(_elevatorLeft, _elevatorRight, _currentFloor)
{
    if(_currentFloor >= 0 && _currentFloor <= 2)
    {
        //Distancia actual desde donde se llama al de la derecha
        let distanceRight = Math.abs(_currentFloor - _elevatorRight);
        //Distancia actual desde donde se llama al de la izquierda
        let distanceLeft = Math.abs(_currentFloor - _elevatorLeft);

        // console.log(`DistanciaLeft: ${distanceLeft}\nDistanciaRight: ${distanceRigth}`);

        if(distanceLeft >= distanceRight)
        {
            console.log(Right)
        }
        else
        {
            console.log(Left);
        }
    }
    else
    {
        console.log(NoFloor)
    }

    if(_elevatorLeft < 0 || _elevatorLeft > 2)
    {
        console.log("Left " + ElevatorFloating)
    }

    if (_elevatorRight < 0 || _elevatorRight > 3) 
    {
        console.log("Right" + ElevatorFloating);
    }
}

// elevator(0, 1, 1);
// elevator(1, 1, 1);
// elevator(0, 1, 0);
// elevator(1, 0, 2);

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"