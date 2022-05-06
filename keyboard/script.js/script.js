const body = document.body;
const divContainer = document.createElement('div');
const pTitle = document.createElement('p');
const textarea = document.createElement('textarea');
const divKeyboard = document.createElement('div');
const pDiscription = document.createElement('p');
const pLanguage = document.createElement('p');


divContainer.classList.add('container');
pTitle.textContent = 'RSS Виртуальная клавиатура';
pTitle.classList.add('title');
textarea.classList.add('textarea');
textarea.id = 'textarea';
textarea.rows = '8';
textarea.cols = '50';
divKeyboard.classList.add('keyboard');
divKeyboard.id = 'keyboard';
pDiscription.classList.add('discription');
pDiscription.textContent = 'Клавиатура создана в операционной системе Windows';
pLanguage.classList.add('language');
pLanguage.textContent = 'Для переключения языка комбинация: левые ctrl + alt';


body.appendChild(divContainer);
divContainer.appendChild(pTitle);
divContainer.appendChild(textarea);
divContainer.appendChild(divKeyboard);
divContainer.appendChild(pDiscription);
divContainer.appendChild(pLanguage);

const arrKeyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
const arrClassKeyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'delete', 'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter', 'shift-left', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'arrow-up', 'shift-right', 'control', 'meta', 'alt', 'space', 'alt', 'arrow-left', 'arrow-down', 'arrow-right', 'control'];
// document.onkeydown = function (event) {
//     arrKeyboardEn.push(event.key);
//     console.log(arrKeyboardEn);
// }

// key: "q"
// keyCode: 81
console.log(arrKeyboardEn[20]);

for (let i = 0; i < arrKeyboardEn.length; i += 1) {
    divKeyboard.innerHTML += `     
                <div class="key ${arrClassKeyboardEn[i]}">
                    ${arrKeyboardEn[i]}
                </div>
            `;
}