//this is super basic and doesnt really do anything super useful.
//i left the console log there so you could test as you implemented in whatever app you are trying to do
var weight = prompt("what is your weight? (in KG)")
var height = prompt("What is your height? (in meters)")
function bmiCalculator(weight, height) {
    var interpretation = (weight / Math.pow(height, 2));
    if (interpretation <= 18.5) {
        return "Your BMI is " + interpretation + ", so you are underweight.";
    }
    else if (interpretation > 18.5 && interpretation <= 24.9) {
        return "Your BMI is " + interpretation + ", so you have a normal weight.";
    }
    else if (interpretation > 24.9) {
        return "Your BMI is " + interpretation + ", so you are overweight.";
    }
    return interpretation;
}
console.log(interpretation)
