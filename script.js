const body = document.getElementsByTagName('body'),
    tagBody = body[0];

tagBody.insertAdjacentHTML('afterBegin', '<div id="screen"></div>');
tagBody.insertAdjacentHTML('beforeend', '<div id="keyboard"></div>');


const screenInput = document.getElementById('screen');
screenInput.insertAdjacentHTML('afterbegin', '<textarea id="input-area" autofocus></textarea>');

const screenArea = document.getElementById('input-area');

const allKeys = [
    { id: 'Backquote', printable: true, value: '\`', rus: 'ё', shift: '~', shiftRu: 'Ё' },
    { id: 'Digit1', printable: true, value: '1', shift: '!', shiftRu: '!' },
    { id: 'Digit2', printable: true, value: '2', shift: '@', shiftRu: '"' },
    { id: 'Digit3', printable: true, value: '3', shift: '#', shiftRu: '№' },
    { id: 'Digit4', printable: true, value: '4', shift: '$', shiftRu: ';' },
    { id: 'Digit5', printable: true, value: '5', shift: '%', shiftRu: '%' },
    { id: 'Digit6', printable: true, value: '6', shift: '^', shiftRu: ':' },
    { id: 'Digit7', printable: true, value: '7', shift: '&', shiftRu: '?' },
    { id: 'Digit8', printable: true, value: '8', shift: '*', shiftRu: '*' },
    { id: 'Digit9', printable: true, value: '9', shift: '(', shiftRu: '(' },
    { id: 'Digit0', printable: true, value: '0', shift: ')', shiftRu: ')' },
    { id: 'Minus', printable: true, value: '-', shift: '_', shiftRu: '_' },
    { id: 'Equal', printable: true, value: '=', shift: '+', shiftRu: '+' },
    { id: 'Backspace', value: 'Backspace', class: 'special-key' },
    { id: 'Tab', value: 'Tab', class: 'special-key' },
    { id: 'KeyQ', printable: true, value: 'q', rus: 'й' },
    { id: 'KeyW', printable: true, value: 'w', rus: 'ц' },
    { id: 'KeyE', printable: true, value: 'e', rus: 'у' },
    { id: 'KeyR', printable: true, value: 'r', rus: 'к' },
    { id: 'KeyT', printable: true, value: 't', rus: 'е' },
    { id: 'KeyY', printable: true, value: 'y', rus: 'н' },
    { id: 'KeyU', printable: true, value: 'u', rus: 'г' },
    { id: 'KeyI', printable: true, value: 'i', rus: 'ш' },
    { id: 'KeyO', printable: true, value: 'o', rus: 'щ' },
    { id: 'KeyP', printable: true, value: 'p', rus: 'з' },
    { id: 'BracketLeft', printable: true, value: '[', rus: 'х', shift: '{' },
    { id: 'BracketRight', printable: true, value: ']', rus: 'ъ', shift: '}' },
    { id: 'Delete', value: 'Del' },
    { id: 'CapsLock', value: 'Caps', class: 'special-key' },
    { id: 'KeyA', printable: true, value: 'a', rus: 'ф' },
    { id: 'KeyS', printable: true, value: 's', rus: 'ы' },
    { id: 'KeyD', printable: true, value: 'd', rus: 'в' },
    { id: 'KeyF', printable: true, value: 'f', rus: 'а' },
    { id: 'KeyG', printable: true, value: 'g', rus: 'п' },
    { id: 'KeyH', printable: true, value: 'h', rus: 'р' },
    { id: 'KeyJ', printable: true, value: 'j', rus: 'о' },
    { id: 'KeyK', printable: true, value: 'k', rus: 'л' },
    { id: 'KeyL', printable: true, value: 'l', rus: 'д' },
    { id: 'Semicolon', printable: true, value: ';', rus: 'ж', shift: ':' },
    { id: 'Quote', printable: true, value: '\'', rus: 'э', shift: '\"' },
    { id: 'Enter', value: 'Enter', class: 'special-key' },
    { id: 'ShiftLeft', value: 'Shift', class: 'special-key' },
    { id: 'KeyZ', printable: true, value: 'z', rus: 'я' },
    { id: 'KeyX', printable: true, value: 'x', rus: 'ч' },
    { id: 'KeyC', printable: true, value: 'c', rus: 'с' },
    { id: 'KeyV', printable: true, value: 'v', rus: 'м' },
    { id: 'KeyB', printable: true, value: 'b', rus: 'и' },
    { id: 'KeyN', printable: true, value: 'n', rus: 'т' },
    { id: 'KeyM', printable: true, value: 'm', rus: 'ь' },
    { id: 'Comma', printable: true, value: ',', rus: 'б', shift: '<' },
    { id: 'Period', printable: true, value: '.', rus: 'ю', shift: '>' },
    { id: 'Slash', printable: true, value: '/', rus: '.', shift: '?', shiftRu: ',' },
    { id: 'ArrowUp', value: '&#8593;' },
    { id: 'ShiftRight', value: 'Shift', class: 'special-key' },
    { id: 'ControlLeft', value: 'Crtl' },
    { id: 'MetaRight', value: 'Win' },
    { id: 'AltLeft', value: 'Alt' },
    { id: 'Space', value: '', class: 'space-key' },
    { id: 'AltRight', value: 'Alt' },
    { id: 'ControlRight', value: 'Crtl' },
    { id: 'ArrowLeft', value: '&#8592;' },
    { id: 'ArrowDown', value: '&#8595;' },
    { id: 'ArrowRight', value: '&#8594;' },
    { id: 'Backslash', printable: true, value: '\\', shift: '\|' }
];

let container = document.getElementById('keyboard'),
    input = document.getElementById('screen'),
    display = false,
    caps = false,
    shift = false;

document.addEventListener('keydown', event => keypress(true, event));
document.addEventListener('keyup', event => keypress(false, event));
container.addEventListener('mousedown', event => keypress(true, event));
container.addEventListener('mouseup', event => keypress(false, event));

drawButton();

function drawButton(justSymbols) {
    allKeys.forEach(el => {
                if (justSymbols) {
                    if (el.printable) {
                        if (display !== 'rus') {
                            if (caps && shift || !caps && !shift) {
                                document.getElementById(el.id).innerText = keysDisplay(el);
                            } else {
                                document.getElementById(el.id).innerText = el.shift ? el.shift : keysDisplay(el).toUpperCase();
                            }
                        } else {
                            if (caps && shift || !caps && !shift) {
                                document.getElementById(el.id).innerText = keysDisplay(el);
                            } else {
                                document.getElementById(el.id).innerText = el.shiftRu ? el.shiftRu : keysDisplay(el).toUpperCase();
                            }
                        }
                    }
                } else {
                    container.innerHTML += `<div id="${el.id}" ${el.printable ? `data-printable="${el.printable}"` : ''} class="key ${el.class || ''}">${el.value}</div>`;
            }
        });
    }

container.insertAdjacentHTML('afterend', '<div id="description"><p>Клавиатура сделана на Windows, переключение языков Ctrl+Shift и Alt+Shift. Используйте тот метот который установлен у вас.</p></div>');

function keypress (action, event) {
    if (event.code && document.getElementById(event.code)) {
        let key = document.getElementById(event.code);
        if (action) {
            key.classList.add('active');
            screenArea.focus();
            keyboardLayout(key);
        } else {
            removeKeyClass(key);
        }
    } 
}

function keyboardLayout(key) {
    if (key.id === 'AltLeft' && document.getElementById('ShiftLeft').classList.contains('active') || key.id === 'ShiftLeft' && document.getElementById('AltLeft').classList.contains('active')) {
        display === 'rus' ? display = false : display = 'rus';
        drawButton(true);
    }
    if (key.id === 'ControlLeft' && document.getElementById('ShiftLeft').classList.contains('active') || key.id === 'ShiftLeft' && document.getElementById('ControlLeft').classList.contains('active')) {
        display === 'rus' ? display = false : display = 'rus';
        drawButton(true);
    } else if (key.id === 'CapsLock') {
        caps = !caps;
        drawButton(true);
    } else if (key.id === 'ShiftLeft' || key.id === 'ShiftRight') {
        shift = true;
        drawButton(true);
    } else if (key.id === 'Tab') {
        event.preventDefault();
        screenArea.value += '     ';
    } else if (key.id === 'AltLeft' || key.id === 'AltRight') {
        event.preventDefault();
    }
}

function keysDisplay(el) {
    if (!display) {
        return el.value;
    } else if (display === 'rus') {
        return el.rus ? el.rus : el.value;
    } else if (display === 'num') {
        return el.num ? el.num : el.value;
    }
}

function removeKeyClass(key) {
    key.classList.remove('active');
    if (key.id === 'ShiftLeft' || key.id === 'ShiftRight') {
        shift = false;
        drawButton(true);
    }
}