function calculateGPA(){

let g1 = parseFloat(document.getElementById("grade1").value) || 0
let g2 = parseFloat(document.getElementById("grade2").value) || 0
let g3 = parseFloat(document.getElementById("grade3").value) || 0

let total = g1 + g2 + g3
let gpa = total / 3

document.getElementById("result").innerText =
"Your GPA is: " + gpa.toFixed(2)

}
