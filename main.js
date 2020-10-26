const arrayOfStudents = []

// function to hide jumbo and show form
const hideJumbo = () => {
  document.getElementById('myJumbo').classList.add('invisible')
  document.getElementById('studentForm').classList.remove('invisible')
}
  document.getElementById('startSorting').addEventListener('click', hideJumbo);

const sortStudent = () => {
  let name = document.getElementById('firstYearsName').value
  let randomHouse = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  let houseNumber = Math.floor(Math.random()*randomHouse.length)
  let house = randomHouse[houseNumber]
  let id = Math.random().toString(36).substring(2, 8)
  arrayOfStudents.push({name, house, id})
  console.log(arrayOfStudents)
  studentPrinter(arrayOfStudents)
}

document.getElementById('sortButton').addEventListener('click', sortStudent)

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint
};

const studentPrinter = (arrayOfStudents) => {
    console.log("student print please", arrayOfStudents)
  
   
  let domString = '';
  for(let i = 0; i< arrayOfStudents.length; i++){
    domString += '<div class="col-md-6 col-lg-4 card-separation">'
    domString += '<div class="card ">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${arrayOfStudents[i].name}</h5>`;
    domString += `<p class="card-text">${arrayOfStudents[i].house}</p>`;
    domString += `<button type="button" class = "expel" id="${arrayOfStudents[i].id}" class="btn btn-light">Expel</button>`
    domString += '  </div>';
    domString += '</div>';
    domString += '</div>';
  }
  printToDom('allStudents', domString);
  activateExpel();
  houseColor()
};


const houseColor = () => {
  const elements = document.getElementsByClassName("card-text")

  for (let i = 0; i <elements.length; i++) {
   
    for (let i = 0; i <arrayOfStudents.length; i++) {
      console.log(arrayOfStudents[i].house);
     if (arrayOfStudents[i].house === 'Gryffindor') {
       elements[i].classList.add("red");
     } else if (arrayOfStudents[i].house === 'Hufflepuff') {
       elements[i].classList.add("blue");
     }
     else if (arrayOfStudents[i].house === 'Ravenclaw') {
       elements[i].classList.add("green");
     }
     else if (arrayOfStudents[i].house === 'Slytherin') {
       elements[i].classList.add("orange");
     };
    }
  }
}

const expelStudent = (e) => {
  console.log(e);
  console.log(e.target.id)
  for (let i = 0; i < arrayOfStudents.length; i++) {
    if (e.target.id === arrayOfStudents[i].id) {
      arrayOfStudents.splice(i, 1);
    };
  };
  studentPrinter(arrayOfStudents);
  console.log(arrayOfStudents);
}

const activateExpel = () => {
  let getButton = document.getElementsByClassName("expel")
  for (let i = 0; i < getButton.length; i++) {
    getButton[i].addEventListener('click', expelStudent)
  }
}