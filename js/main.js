document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value
  let dayLowerCase = day.toLowerCase();
  //Conditionals go here
 
if (dayLowerCase === 'tuesday' || dayLowerCase === 'thursday') {
  document.querySelector('#placeToSee').innerHTML = 'You have a class!';
} else if (dayLowerCase === 'saturday' || dayLowerCase === 'sunday') {
  document.querySelector('#placeToSee').innerHTML = 'It is weekend!';
} else {
  document.querySelector('#placeToSee').innerHTML = 'No class, BOOOring';
}
 
}

