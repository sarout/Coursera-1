var a = 1;
var b = 4;
var c = 1;

var discriminant = function (a, b, c) {
	return ((b * b) - (a * b * c));
}

var root1 = (-b - Math.sqrt(discriminant(a, b, c))) / (2 * a);
var root2 = (-b + Math.sqrt(discriminant(a, b, c))) / (2 * a);

console.log("Roots are " + root1 + " " + root2);