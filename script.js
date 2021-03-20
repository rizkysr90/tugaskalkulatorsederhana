
// seleksi semua tombol
const buttons = document.querySelectorAll('button');
// seleksi <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// add eventListener ke setiap tombol
buttons.forEach(function(button) {
   //ketika()
  button.addEventListener('click', calculate);
});

// Calculate function
function calculate(event) {
  console.log(event)
  // nilai terkini saat tombol di klik
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue == '=') {
    // cek jika display tidak kosong  maka lakukan calculate
    if (display.value != '') {
      // calculate dan keluarkan output ke display
      display.value = eval(display.value);
    }
  }
  if (clickedButtonValue === 'C')
   {
    // menghapus / mereset
    display.value = '';
  } else {
  
    display.value += clickedButtonValue;
  }
}


