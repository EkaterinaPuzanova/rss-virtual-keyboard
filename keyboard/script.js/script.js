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
textarea.tabIndex = '1';
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
const copyArrKeyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
const arrClassKeyboardEn = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const arrShiftEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', `"`, 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];

// const enArrKeyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
// const enCopyArrKeyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
// const enArrClassKeyboardEn = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
// const enArrShiftEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', `"`, 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];


// const ruArrKeyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
// const ruCopyArrKeyboardEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];
// const ruArrClassKeyboardEn = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
// const ruArrShiftEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', `"`, 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '◀', '▼', '▶', 'Ctrl'];




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

        if (event.key === 'Backspace') {
            event.preventDefault();
            keys[13].click();
        } else if (event.key === 'Alt'){
            if (keys[55].className === 'key ControlLeft active') {
                //перекл яз
            }
        } else if ((event.key === 'Meta') || (event.key === 'Control') || (event.key === 'Alt')){
            textarea.setRangeText(``, textarea.selectionStart, textarea.selectionEnd, "end");
        } else if (event.key === 'Tab') {
            event.preventDefault();
            keys[14].click();
        } else if (event.key === 'Delete') {
            event.preventDefault();
            keys[28].click();
        } else if (event.key === 'Shift')  {
            //event.preventDefault();
            this.document.querySelector(`.${event.code}`).classList.add('active');
            if ((keys[42].className === 'key ShiftLeft active') || (keys[54].className === 'key ShiftRight active')) {
                
                for (let i = 0; i < arrKeyboardEn.length; i += 1) {
                    arrKeyboardEn[i] = arrShiftEn[i];
                    keys[i].textContent = arrShiftEn[i];
                }
            }
            if (keys[29].className === 'key CapsLock active') {
                
                arrKeyboardEn[0] = arrKeyboardEn[0].toLowerCase(); 
                keys[0].textContent = arrKeyboardEn[0].toLowerCase(); 
                for (let i = 15; i < 28; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();      
                }
                for (let i = 30; i < 41; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();   
                }
                for (let i = 43; i < 53; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();
                }
            }
        
        } else if (event.key === 'ArrowUp') {
            textarea.setRangeText(`${arrKeyboardEn[53]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        } else if (event.key === 'ArrowLeft') {
            textarea.setRangeText(`${arrKeyboardEn[60]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        } else if (event.key === 'ArrowDown') {
            textarea.setRangeText(`${arrKeyboardEn[61]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        } else if (event.key === 'ArrowRight') {
            textarea.setRangeText(`${arrKeyboardEn[62]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        } else if (event.key === 'CapsLock') {
            this.document.querySelector(`.${event.code}`).classList.toggle('active');
           
            if (keys[29].className === 'key CapsLock active') {
                arrKeyboardEn[0] = arrKeyboardEn[0].toUpperCase(); 
                keys[0].textContent = arrKeyboardEn[0].toUpperCase(); 
                for (let i = 15; i < 28; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toUpperCase();      
                }
                for (let i = 30; i < 41; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toUpperCase();   
                }
                for (let i = 43; i < 53; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toUpperCase();
                }
            } else {
                arrKeyboardEn[0] = arrKeyboardEn[0].toLowerCase(); 
                keys[0].textContent = arrKeyboardEn[0].toLowerCase(); 
                for (let i = 15; i < 28; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();      
                }
                for (let i = 30; i < 41; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();   
                }
                for (let i = 43; i < 53; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();
                }
            }
             
        } else {
            if ((keys[29].className === 'key CapsLock active') && ((keys[42].className === 'key ShiftLeft active') || (keys[54].className === 'key ShiftRight active'))) {
                textarea.setRangeText(`${event.key.toLowerCase()}`, textarea.selectionStart, textarea.selectionEnd, "end");
            } else if ((keys[29].className === 'key CapsLock active') || (keys[42].className === 'key ShiftLeft active') || (keys[54].className === 'key ShiftRight active')) {
                textarea.setRangeText(`${event.key.toUpperCase()}`, textarea.selectionStart, textarea.selectionEnd, "end");
            } else if ((keys[29].className === 'key CapsLock') || (keys[42].className === 'key ShiftLeft') || (keys[54].className === 'key ShiftRight') ) {
                textarea.setRangeText(`${event.key.toLowerCase()}`, textarea.selectionStart, textarea.selectionEnd, "end");
            } else {
                textarea.setRangeText(`${event.key}`, textarea.selectionStart, textarea.selectionEnd, "end");
            }          
            this.document.querySelector(`.${event.code}`).classList.add('active');
        }
    } else {
        if (event.key === 'Tab') {
            event.preventDefault();
            keys[14].click();
        }
        if (event.key === 'ArrowUp') {
            textarea.setRangeText(`${arrKeyboardEn[53]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        } 
        if (event.key === 'ArrowLeft') {
            textarea.setRangeText(`${arrKeyboardEn[60]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        } 
        if (event.key === 'ArrowDown') {
            textarea.setRangeText(`${arrKeyboardEn[61]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        }
        if (event.key === 'ArrowRight') {
            textarea.setRangeText(`${arrKeyboardEn[62]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        }
        this.document.querySelector(`.${event.code}`).classList.add('active');
    } 
}); 
window.addEventListener('keyup', function(event) {
    if (event.key != 'CapsLock') {
        setTimeout(() => {  
            this.document.querySelector(`.${event.code}`).classList.remove('active');
            this.document.querySelector(`.${event.code}`).classList.add('remove');
            this.setTimeout(() => { 
                this.document.querySelector(`.${event.code}`).classList.remove('remove');
            }, 300)
        }, 400);
        if (event.key === 'Shift') { 
            for (let i = 0; i < arrKeyboardEn.length; i += 1) {
                arrKeyboardEn[i] = copyArrKeyboardEn[i];
                keys[i].textContent = copyArrKeyboardEn[i];
            }
            if (keys[29].className === 'key CapsLock active') {
                arrKeyboardEn[0] = arrKeyboardEn[0].toUpperCase(); 
                keys[0].textContent = arrKeyboardEn[0].toUpperCase(); 
                for (let i = 15; i < 28; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toUpperCase();      
                }
                for (let i = 30; i < 41; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toUpperCase();   
                }
                for (let i = 43; i < 53; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toUpperCase();
                }
            
            }
        }     
    }
    
});
// add input to the textarea when pressing the computer keyboard - end



// add input to the textarea when clicked mouse - start
for (let i = 0; i < keys.length; i += 1) {
    keys[i].addEventListener('mousedown', function() {
        //textarea.focus();
        
        if (arrKeyboardEn[i] === 'Tab') {
            textarea.setRangeText('   ', textarea.selectionStart, textarea.selectionEnd, "end");
        } else if (arrClassKeyboardEn[i] === 'AltLeft'){
            if (keys[55].className === 'key ControlLeft active') {
                //перекл яз
            }
        } else if ((arrClassKeyboardEn[i] === 'MetaLeft') || (arrKeyboardEn[i] === 'Ctrl') || (arrKeyboardEn[i] === 'Alt')){
            textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd+1, "end");
        } else if (arrClassKeyboardEn[i] === 'Delete') {
            textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd+1, "end");
        } else if (arrClassKeyboardEn[i] === 'Backspace') {
            textarea.setRangeText('', textarea.selectionStart-1, textarea.selectionEnd, "end");
        } else if (arrKeyboardEn[i] === 'Shift') {
            textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, "end");
            for (let q = 0; q < arrKeyboardEn.length; q += 1) {
                arrKeyboardEn[q] = arrShiftEn[q];
                keys[q].textContent = arrShiftEn[q];
            }
            
            if (keys[29].className === 'key CapsLock active') {
                
                arrKeyboardEn[0] = arrKeyboardEn[0].toLowerCase(); 
                keys[0].textContent = arrKeyboardEn[0].toLowerCase(); 
                for (let i = 15; i < 28; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();      
                }
                for (let i = 30; i < 41; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();   
                }
                for (let i = 43; i < 53; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();
                }
            }

        } else if (arrClassKeyboardEn[i] === 'CapsLock') {
            keys[i].classList.toggle('active');
            if (keys[29].className === 'key CapsLock active') {
                arrKeyboardEn[0] = arrKeyboardEn[0].toUpperCase();  
                keys[0].textContent = arrKeyboardEn[0].toUpperCase();
                for (let i = 15; i < 28; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase();  
                    keys[i].textContent = arrKeyboardEn[i].toUpperCase();      
                }
                for (let i = 30; i < 41; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase();
                    keys[i].textContent = arrKeyboardEn[i].toUpperCase();   
                }
                for (let i = 43; i < 53; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase();
                    keys[i].textContent = arrKeyboardEn[i].toUpperCase();
                }
            } else {
                arrKeyboardEn[0] = arrKeyboardEn[0].toLowerCase(); 
                keys[0].textContent = arrKeyboardEn[0].toLowerCase(); 
                for (let i = 15; i < 28; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();      
                }
                for (let i = 30; i < 41; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();   
                }
                for (let i = 43; i < 53; i += 1) {
                    arrKeyboardEn[i] = arrKeyboardEn[i].toLowerCase(); 
                    keys[i].textContent = arrKeyboardEn[i].toLowerCase();
                }
            }
            textarea.setRangeText(``, textarea.selectionStart, textarea.selectionEnd, "end");
        } else if (arrClassKeyboardEn[i] === 'Enter') {
            textarea.setRangeText(`\n`, textarea.selectionStart, textarea.selectionEnd, "end");
        } else {
            textarea.setRangeText(`${arrKeyboardEn[i]}`, textarea.selectionStart, textarea.selectionEnd, "end");
        } 
        if (arrClassKeyboardEn[i] != 'CapsLock') {
            keys[i].classList.add('active');
            // setTimeout(() => {  
            //     keys[i].classList.remove('active');
            //     keys[i].classList.add('remove');
            //         setTimeout(() => {
            //             keys[i].classList.remove('remove');
            //         }, 300)
            // }, 400);
        }
        
    }); 

    keys[i].addEventListener('mouseup', function() {
        if (arrClassKeyboardEn[i] != 'CapsLock') {
            setTimeout(() => {  
                keys[i].classList.remove('active');
                keys[i].classList.add('remove');
                    setTimeout(() => {
                        keys[i].classList.remove('remove');
                    }, 300)
            }, 400);
            if (arrKeyboardEn[i] === 'Shift') {
                for (let q = 0; q < arrKeyboardEn.length; q += 1) {
                    arrKeyboardEn[q] = copyArrKeyboardEn[q];
                    keys[q].textContent = copyArrKeyboardEn[q];
                } 
                if (keys[29].className === 'key CapsLock active') {
                    arrKeyboardEn[0] = arrKeyboardEn[0].toUpperCase();  
                    keys[0].textContent = arrKeyboardEn[0].toUpperCase();
                    for (let i = 15; i < 28; i += 1) {
                        arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase();  
                        keys[i].textContent = arrKeyboardEn[i].toUpperCase();      
                    }
                    for (let i = 30; i < 41; i += 1) {
                        arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase();
                        keys[i].textContent = arrKeyboardEn[i].toUpperCase();   
                    }
                    for (let i = 43; i < 53; i += 1) {
                        arrKeyboardEn[i] = arrKeyboardEn[i].toUpperCase();
                        keys[i].textContent = arrKeyboardEn[i].toUpperCase();
                    }
                
                }    
            }
        }
        
    });
}
// add input to the textarea when clicked mouse - end





window.addEventListener('keydown', function(event) {
       console.log(event)
  })
  console.log(keys[53])