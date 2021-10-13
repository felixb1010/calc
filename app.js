let today = new Date('07/14/2007').getDay().toString()
console.log(today)

function action() {

const norsk = Number(document.getElementById("norsk").value)
const engelsk = Number(document.getElementById("engelsk").value)
const naturfag = Number(document.getElementById("naturfag").value)
const mandari = Number(document.getElementById("mandarin").value)
const samfunsfag = Number(document.getElementById("samfunsfag").value)
const gym = Number(document.getElementById("gym").value)
const scene = Number(document.getElementById("scene").value)
const design = Number(document.getElementById("design").value)
const spansk = Number(document.getElementById("spansk").value)

function gradeCalculation(grade) {
  if (grade >= 3 && grade <= 8) {
    if (grade == 3) {
      return 2.37
    } else if (grade == 4) {
      return 3.28
    } else if (grade == 5) {
      return 4.22
    } else if (grade == 6) {
      return 5.23
    } else if (grade == 7) {
      return 6
    } else if (grade == 8) {
      return 6
    } else {
      console.log("Invalid grade")
    }

  } else {
    console.log('${grade} not between 1 and 8')
  }
}

const grades = gradeCalculation(engelsk) + gradeCalculation(norsk) + gradeCalculation(mandari) + gradeCalculation(naturfag) + gradeCalculation(spansk) + gradeCalculation(scene) + gradeCalculation(gym) + gradeCalculation(samfunsfag) + gradeCalculation(design)
finalIbScore = grades/9

document.getElementById("halla").innerHTML = finalIbScore.toFixed(2).toString()
}