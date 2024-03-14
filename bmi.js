//this is super basic and doesnt really do anything super useful.
//i left the console log there so you could test as you implemented in whatever app you are trying to do
function bmiCalculator(weight, height){
    return Math.round( (weight / (height * height)))   
}
var bmi = bmiCalculator(65, 1.8); 
console.log (bmi)    
