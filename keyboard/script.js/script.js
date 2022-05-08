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
const arrClassKeyboardEn = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];


for (let i = 0; i < arrKeyboardEn.length; i += 1) {
    divKeyboard.innerHTML += `     
                <div class="key ${arrClassKeyboardEn[i]}">
                    ${arrKeyboardEn[i]}
                </div>
            `;
}

const keys = document.querySelectorAll('.key');

let valueFocus = false;
//let clickKey = false;



textarea.addEventListener('focus', function() {
    valueFocus = true;
});
textarea.addEventListener('focusout', function() {
    valueFocus = false;
    //textarea.selectionStart = textarea.value.length;
});



// add input to the textarea when pressing the computer keyboard - start
window.addEventListener('keydown', function(event) {
    if (valueFocus === false) {
        this.document.querySelector(`.${event.code}`).classList.add('active');
        textarea.setRangeText(`${event.key}`, textarea.selectionStart, textarea.selectionEnd, "end");
    } else {
        this.document.querySelector(`.${event.code}`).classList.add('active');
    } 
}); 
window.addEventListener('keyup', function(event) {
    setTimeout(() => {  
        this.document.querySelector(`.${event.code}`).classList.remove('active');
        this.document.querySelector(`.${event.code}`).classList.add('remove');
        this.setTimeout(() => { 
            this.document.querySelector(`.${event.code}`).classList.remove('remove');
        }, 300)
    }, 400);    
});
// add input to the textarea when pressing the computer keyboard - end



// add input to the textarea when clicked mouse - start
for (let i = 0; i < keys.length; i += 1) {
    keys[i].addEventListener('click', function() {
        //textarea.focus();
        keys[i].classList.add('active');
        textarea.setRangeText(`${arrKeyboardEn[i]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        setTimeout(() => {       
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
                setTimeout(() => {
                    keys[i].classList.remove('remove');
                }, 300)
        }, 400);
    }); 
}
// add input to the textarea when clicked mouse - end



