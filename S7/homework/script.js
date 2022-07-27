let radius1 = prompt("please enter first radius");
let radius2 = prompt("please enter second radius");
let radius3 = prompt("please enter third radius");

// first circle
let area1 = Math.PI * Math.pow(radius1, 2);
let perimeter1 = Math.PI * 2 * radius1;
console.log("first circle: " + "area = " + area1.toFixed(2) + " perimeter = " + perimeter1.toFixed(2));

// second circle
let area2 = Math.PI * Math.pow(radius2, 2);
let perimeter2 = Math.PI * 2 * radius2;
console.log("second circle: " + "area = " + area2.toFixed(2) + " perimeter = " + perimeter2.toFixed(2));

// third circle
let area3 = Math.PI * Math.pow(radius3, 2);
let perimeter3 = Math.PI * 2 * radius3;
console.log("third circle: " + "area = " + area3.toFixed(2) + " perimeter = " + perimeter3.toFixed(2));

// max and min area
let maxArea = Math.max(area1, area2, area3);
let minArea = Math.min(area1, area2, area3);
console.log("max area = " + maxArea.toFixed(2));
console.log("min area = " + minArea.toFixed(2));

// max and min perimeter
let maxPerimeter = Math.max(perimeter1, perimeter2, perimeter3);
let minPerimeter = Math.min(perimeter1, perimeter2, perimeter3);
console.log("max perimeter = " + maxPerimeter.toFixed(2));
console.log("min perimeter = " + minPerimeter.toFixed(2));
alert("max area = " + maxArea.toFixed(2) + "\n" + "max perimeter = " + maxPerimeter.toFixed(2));