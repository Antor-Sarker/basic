
// Utility function 
function calculateArea() { 
    return this.width * this.height; 
 } 
 
 // Object 1 
 const rectangle = { 
    width: 10, height: 20 
 }; 
 
 // Object 2 
 const square = { 
    width: 15, height: 15 
 };

 const areaOfRectangel = calculateArea.bind(rectangle)()
 console.log(areaOfRectangel)

 const areaOfSquare = calculateArea.bind(square)()
 console.log(areaOfSquare)


 
 // find the area for the rectangle using both call and bind, output should be: 200
 // find the area for the square using both call and bind, output should be: 225
 
 