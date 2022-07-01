const defaultNoRadio = document.querySelector('#default-no'); // радио-кнопка "нет" в первой строке
const row2not = document.querySelector('#row2not'); // вторая строка Дозвониться не удалось появляется после нажатия нет в первой строке
const remDefaultNo = () => { // функция убирает d-none у второй строки row2not и добавляет остальным
  row2not.classList.remove('d-none');
  defaultYesString.classList.add('d-none');
  row3yes.classList.add('d-none');
  row3not.classList.add('d-none');
  row3yesRow4not.classList.add('d-none');
  row2notRow3notRow4.classList.add('d-none');
  row4row5.classList.add('d-none');
  row3yesRow4.classList.add('d-none');
  row5.classList.add('d-none');
  row4yesRow5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
defaultNoRadio.addEventListener('change', remDefaultNo); // нажатие на радио-кнопку "нет" в первой строке

const defaultYeRadio = document.querySelector('#default-ye'); // радио-кнопка "да" в первой строке
const defaultYesString = document.querySelector('#row2yes'); // вторая строка Соединение состоялось
const remDefaultYe = () => { // функция удаляет d-none у row2yes и добавляет остальным
  defaultYesString.classList.remove('d-none');
  row2not.classList.add('d-none');
  row3yesRow4not.classList.add('d-none');
  row2notRow3notRow4.classList.add('d-none');
  row4row5.classList.add('d-none');
  row3yesRow4.classList.add('d-none');
  row5.classList.add('d-none');
  row4yesRow5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
defaultYeRadio.addEventListener('change', remDefaultYe); // нажатие на радио-кнопку "да" в первой строке

const row2yesNo = document.querySelector('#row2yes-no'); // радио-кнопка "нет" во второй строке я разговариваю с клиентом нет
const row3not = document.querySelector('#row3not'); // третья строка не клиент появляется после нажатия нет во второй строке
const remRow3not = () => { // функция убирает d-none у третей строки row3not и добавляет остальным
  row3not.classList.remove('d-none');
  row3yes.classList.add('d-none');
  row3yesRow4not.classList.add('d-none');
  row2notRow3notRow4.classList.add('d-none');
  row4row5.classList.add('d-none');
  row3yesRow4.classList.add('d-none');
  row5.classList.add('d-none');
  row4yesRow5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
row2yesNo.addEventListener('change', remRow3not); // нажатие на радио-кнопку "нет" во второй строке

const row2yesYe = document.querySelector('#row2yes-ye'); // радио-кнопка "да" во второй строке я разговариваю с клиентом да
const row3yes = document.querySelector('#row3yes'); // третья строка клиент появляется после нажатия да во второй строке
const remRow3yes = () => { // функция убирает d-none у третей строки row3yes и добавляет остальным
  row3yes.classList.remove('d-none');
  row3not.classList.add('d-none');
  row3yesRow4not.classList.add('d-none');
  row2notRow3notRow4.classList.add('d-none');
  row4row5.classList.add('d-none');
  row3yesRow4.classList.add('d-none');
  row5.classList.add('d-none');
  row4yesRow5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
row2yesYe.addEventListener('change', remRow3yes); // нажатие на радио-кнопку "нет" во второй строке


// 3 строка клиент не готов уделить время или не клиент знаком
const row3notYe = document.querySelector('#row3not-ye'); // радио-кнопка "да" в третьей строке не клиент но знаком
const row3yesNo = document.querySelector('#row3yes-no'); // радио-кнопка "нет" в третьей строке клиент не готов
const row3yesRow4not = document.querySelector('#row3yes-row4not'); // 4 строка когда перезвонить после да знаком или не готов
const remRow3yesRow4not = () => { // функция убирает d-none у 4 строки row3yes-row4not и добавляет остальным
  row3yesRow4not.classList.remove('d-none');
  row2notRow3notRow4.classList.add('d-none');
  row4row5.classList.add('d-none');
  row3yesRow4.classList.add('d-none');
  row5.classList.add('d-none');
  row4yesRow5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
row3notYe.addEventListener('change', remRow3yesRow4not); // нажатие на радио-кнопку "да" в третьей строке не клиент но знаком
row3yesNo.addEventListener('change', remRow3yesRow4not); // нажатие на радио-кнопку "нет" в третьей строке клиент не готов


// Четвертая строка, вторая нет не клиент третья нет не знаком
const row3notNo = document.querySelector('#row3not-no'); // радио-кнопка "нет" в третьей строке не клиент не знаком
const row2notRow3notRow4 = document.querySelector('#row2not-row3not-row4'); // 4 строка приношу извинения
const remRow2notRow3notRow4 = () => { // функция убирает d-none у 4 строки row3yes-row4not и добавляет остальным
  row2notRow3notRow4.classList.remove('d-none');
  row3yesRow4not.classList.add('d-none');
  row4row5.classList.add('d-none');
  row3yesRow4.classList.add('d-none');
  row5.classList.add('d-none');
  row4yesRow5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
row3notNo.addEventListener('change', remRow2notRow3notRow4); // нажатие на радио-кнопку "нет" в третьей строке клиент не готов

// Пятая строка после четвертой сообщает / не сообщает
const row4notYe = document.querySelector('#row4not-ye'); // радио-кнопка "сообщает" в четвертой строке подскажите
const row4notNo = document.querySelector('#row4not-no'); // радио-кнопка "не сообщает" в четвертой строке подскажите
const row4row5 = document.querySelector('#row4-row5'); // 5 строка перезвон
const remRow4row5 = () => { // функция убирает d-none у 5 строки row3yes-row4not и добавляет остальным
  row4row5.classList.remove('d-none');
  row3yesRow4.classList.add('d-none');
  row5.classList.add('d-none');
  row4yesRow5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
row4notYe.addEventListener('change', remRow4row5); // нажатие на радио-кнопку "сообщает"
row4notNo.addEventListener('change', remRow4row5); // нажатие на радио-кнопку "не сообщает"


// 4 строка клиент готов уделить время
const row3yesYe = document.querySelector('#row3yes-ye'); // радио-кнопка "да" в третьей строке клиент готов
const row3yesRow4 = document.querySelector('#row3yes-row4'); // 4 строка спасибо после да готов
const remRow3yesRow4 = () => { // функция убирает d-none у 4 строки row3yes-ye и добавляет 5й строке и др четвертым
  row3yesRow4.classList.remove('d-none');
  row2notRow3notRow4.classList.add('d-none');
  row4row5.classList.add('d-none');
  row3yesRow4not.classList.add('d-none');
  row5.classList.add('d-none');
  row4yesRow5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
row3yesYe.addEventListener('change', remRow3yesRow4); // нажатие на радио-кнопку "да" в третьей строке


// 5 строка отказ
const row3yesRow4no = document.querySelector('#row3yes-row4-no'); // радио-кнопка "нет" в 4 строке после да в 3
const row5 = document.querySelector('#row5'); // 5 строка отказ после нет в 4
const remRow5 = () => { // функция убирает d-none у 5 строки row5
  row5.classList.remove('d-none');
  row4yesRow5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
row3yesRow4no.addEventListener('change', remRow5); // нажатие на радио-кнопку "нет" в 4 строке после да в 3 отказ


// 5 строка да после да в 4
const row4yesRow5no = document.querySelector('#row4yes-row5-no'); // радио-кнопка "нет" в 5 строке отказ
const row3yesRow4Ye = document.querySelector('#row3yes-row4-ye'); // радио-кнопка "да" в 4 строке клиент готов защитить
const row4yesRow5 = document.querySelector('#row4yes-row5'); // 5 строка плата за услугу после да готов в 4й
const remRow4yesRow5 = () => { // функция убирает d-none у 5 строки row4yes-row5
  row4yesRow5.classList.remove('d-none');
  row5.classList.add('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
row3yesRow4Ye.addEventListener('change', remRow4yesRow5); // нажатие на радио-кнопку "да" в 4 строке

const remRow5addRow5 = () => { // функция убирает d-none у 5 строки row5 отказ но оставляет 5 строку согласен
  row5.classList.remove('d-none');
  row5yesRow6.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}

row4yesRow5no.addEventListener('change', remRow5addRow5); // нажатие на радио-кнопку "нет" в 5 строке после да в 4 отказ

// 6 строка да после да в 5
const row5yesRow6no = document.querySelector('#row5yes-row6-no'); // радио-кнопка "нет" в 6 строке отказ
const row4yesRow5Ye = document.querySelector('#row4yes-row5-ye'); // радио-кнопка "да" в 5 строке согласен
const row5yesRow6 = document.querySelector('#row5yes-row6'); // 6 строка 75лет
const remRow5yesRow6 = () => { // функция убирает d-none у 6 строки
  row5yesRow6.classList.remove('d-none');
  row5.classList.add('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}
row4yesRow5Ye.addEventListener('change', remRow5yesRow6); // нажатие на радио-кнопку "да" в 5 строке

const remRow5addRow6 = () => { // функция убирает d-none у 5 строки row5 отказ но оставляет 6 строку согласен
  row5.classList.remove('d-none');
  row6yesRow7.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}

row5yesRow6no.addEventListener('change', remRow5addRow6); // нажатие на радио-кнопку "нет" в 6 строке после да в 5 отказ


// 7 строка да после да в 6
const row6yesRow7no = document.querySelector('#row6yes-row7-no'); // радио-кнопка "нет" в 7 строке отказ
const row5yesRow6Ye = document.querySelector('#row5yes-row6-ye'); // радио-кнопка "да" в 6 строке согласен
const row6yesRow7 = document.querySelector('#row6yes-row7'); // 7 строка в таком случае
const remRow6yesRow7 = () => { // функция убирает d-none у 7 строки
  row6yesRow7.classList.remove('d-none');
  row5.classList.add('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}

row5yesRow6Ye.addEventListener('change', remRow6yesRow7); // нажатие на радио-кнопку "да" в 6 строке

const remRow5addRow7 = () => { // функция убирает d-none у 5 строки row5 отказ но оставляет 7 строку согласен
  row5.classList.remove('d-none');
  row7yesRow8.classList.add('d-none');
  row9.classList.add('d-none');
}

row6yesRow7no.addEventListener('change', remRow5addRow7); // нажатие на радио-кнопку "нет" в 7 строке после да в 6 отказ


// 8 строка да после да в 7
const row7yesRow8no = document.querySelector('#row7yes-row8-no'); // радио-кнопка "нет" в 8 строке отказ
const row6yesRow7Ye = document.querySelector('#row6yes-row7-ye'); // радио-кнопка "да" в 7 строке согласен
const row7yesRow8 = document.querySelector('#row7yes-row8'); // 8 строка Плата за страхование
const remRow7yesRow8 = () => { // функция убирает d-none у 8 строки
  row7yesRow8.classList.remove('d-none');
  row5.classList.add('d-none');
  row9.classList.add('d-none');
}

row6yesRow7Ye.addEventListener('change', remRow7yesRow8); // нажатие на радио-кнопку "да" в 7 строке

const remRow5addRow8 = () => { // функция убирает d-none у 5 строки row5 отказ но оставляет 8 строку согласен
  row5.classList.remove('d-none');
  row9.classList.add('d-none');
}

row7yesRow8no.addEventListener('change', remRow5addRow8); // нажатие на радио-кнопку "нет" в 8 строке после да в 7 отказ

// 9 строка да после да в 8
const row7yesRow8Ye = document.querySelector('#row7yes-row8-ye'); // радио-кнопка "да" в 8 строке согласен
const row9 = document.querySelector('#row9'); // 9 строка Перейти в дозвон
const remRow9 = () => { // функция убирает d-none у 9 строки
  row9.classList.remove('d-none');
  row5.classList.add('d-none');
}

row7yesRow8Ye.addEventListener('change', remRow9); // нажатие на радио-кнопку "да" в 8 строке

// модальное окно
window.addEventListener('load', function () {
  // элемент, содержащий контент модального окна (например, имеющий id="modal")
  const elemModal = document.querySelector('#exampleModal');
  // активируем элемент в качестве модального окна с параметрами по умолчанию
  const modal = new bootstrap.Modal(elemModal);
  // откроем модальное окно
  modal.show();
});
// модальное окно

// отправка данных без перезагрузки
function sendData() {
  document.querySelector('.operator-name').textContent = nameOperator.value;
  document.querySelector('.client-name').textContent = nameClient.value;
  document.querySelector('.client-name1').textContent = nameClient.value;
  document.querySelector('.client-name2').textContent = nameClient.value;
  document.querySelector('.client-name3').textContent = nameClient.value;
  document.querySelector('.client-name4').textContent = nameClient.value;
  document.querySelector('.client-name5').textContent = nameClient.value;
  document.querySelector('.client-name6').textContent = nameClient.value;
  document.querySelector('.client-name7').textContent = nameClient.value;
}