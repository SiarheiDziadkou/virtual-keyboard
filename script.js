const body = document.getElementsByTagName('body'),
    tagBody = body[0];

tagBody.insertAdjacentHTML('afterBegin', '<div id="screen"></div>');
tagBody.insertAdjacentHTML('beforeend', '<div id="keyboard"></div>');

const screenInput = document.getElementById('screen');
screenInput.insertAdjacentHTML('afterbegin', '<textarea id="input-area" autofocus></textarea>');
const screenArea = document.getElementById('input-area');

const keyCode = [
    { id: 'Backquote', printable: true, value: '\`', shift: '~' },
    { id: 'Digit1', printable: true, value: '1', shift: '!' },
    { id: 'Digit2', printable: true, value: '2', shift: '@' },
    { id: 'Digit3', printable: true, value: '3', shift: '#' },
    { id: 'Digit4', printable: true, value: '4', shift: '$' },
    { id: 'Digit5', printable: true, value: '5', shift: '%' },
    { id: 'Digit6', printable: true, value: '6', shift: '^' },
    { id: 'Digit7', printable: true, value: '7', shift: '&' },
    { id: 'Digit8', printable: true, value: '8', shift: '*' },
    { id: 'Digit9', printable: true, value: '9', shift: '(' },
    { id: 'Digit0', printable: true, value: '0', shift: ')' },
    { id: 'Minus', printable: true, value: '-', shift: '_' },
    { id: 'Equal', printable: true, value: '=', shift: '+' },
    { id: 'Backspace', value: 'Backspace', class: 'special-key' },
    { id: 'Tab', value: 'Tab', class: 'special-key' },
    { id: 'KeyQ', printable: true, value: 'q', rus: 'й', num: '+' },
    { id: 'KeyW', printable: true, value: 'w', rus: 'ц', num: '*' },
    { id: 'KeyE', printable: true, value: 'e', rus: 'у', num: '÷' },
    { id: 'KeyR', printable: true, value: 'r', rus: 'к', num: '=' },
    { id: 'KeyT', printable: true, value: 't', rus: 'е', num: '\/' },
    { id: 'KeyY', printable: true, value: 'y', rus: 'н', num: '_' },
    { id: 'KeyU', printable: true, value: 'u', rus: 'г', num: '€' },
    { id: 'KeyI', printable: true, value: 'i', rus: 'ш', num: '£' },
    { id: 'KeyO', printable: true, value: 'o', rus: 'щ', num: '￥' },
    { id: 'KeyP', printable: true, value: 'p', rus: 'з', num: '₩' },
    { id: 'BracketLeft', printable: true, value: '[', rus: 'х', shift: '{' },
    { id: 'BracketRight', printable: true, value: ']', rus: 'ъ', shift: '}' },
    { id: 'Delete', value: 'Del' },
    { id: 'CapsLock', value: 'Caps', class: 'special-key' },
    { id: 'KeyA', printable: true, value: 'a', rus: 'ф', num: '!' },
    { id: 'KeyS', printable: true, value: 's', rus: 'ы', num: '@' },
    { id: 'KeyD', printable: true, value: 'd', rus: 'в', num: '#' },
    { id: 'KeyF', printable: true, value: 'f', rus: 'а', num: '$' },
    { id: 'KeyG', printable: true, value: 'g', rus: 'п', num: '%' },
    { id: 'KeyH', printable: true, value: 'h', rus: 'р', num: '^' },
    { id: 'KeyJ', printable: true, value: 'j', rus: 'о', num: '&' },
    { id: 'KeyK', printable: true, value: 'k', rus: 'л', num: '*' },
    { id: 'KeyL', printable: true, value: 'l', rus: 'д', num: '(' },
    { id: 'Semicolon', printable: true, value: ';', rus: 'ж', shift: ':' },
    { id: 'Quote', printable: true, value: '\'', rus: 'э', shift: '\"' },
    { id: 'Enter', value: 'Enter', class: 'special-key' },
    { id: 'ShiftLeft', value: 'Shift', class: 'special-key' },
    { id: 'KeyZ', printable: true, value: 'z', rus: 'я', num: ')' },
    { id: 'KeyX', printable: true, value: 'x', rus: 'ч', num: '-' },
    { id: 'KeyC', printable: true, value: 'c', rus: 'с', num: '\'' },
    { id: 'KeyV', printable: true, value: 'v', rus: 'м', num: '\"' },
    { id: 'KeyB', printable: true, value: 'b', rus: 'и', num: ':' },
    { id: 'KeyN', printable: true, value: 'n', rus: 'т', num: ';' },
    { id: 'KeyM', printable: true, value: 'm', rus: 'ь', num: ',' },
    { id: 'Comma', printable: true, value: ',', rus: 'б', shift: '<' },
    { id: 'Period', printable: true, value: '.', rus: 'ю', shift: '>' },
    { id: 'Slash', printable: true, value: '/', shift: '?' },
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

// ОТРИСОВКА КЛАВИШЬ
function drawButton(justSymbols) {
    keyCode.forEach(el => {
                if (justSymbols) {
                    if (el.printable) {
                        document.getElementById(el.id).innerText = caps && shift || !caps && !shift ? keysDisplay(el) : el.shift ? el.shift : keysDisplay(el).toUpperCase();
                    }
                } else {
                    container.innerHTML += `<div id="${el.id}" ${el.printable ? `data-printable="${el.printable}"` : ''} class="key ${el.class || ''}">${el.value}</div>`;
        }
    });
}

// ПОДСВЕТКА КЛАВИШЬ КЛАВИАТУРОЙ
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
    } else { // ПОДСВЕТКА КЛАВИШЬ МЫШКОЙ
        let key = event.target;
        event.preventDefault();
        if (key.classList.contains('key')) {
            if (action) {
                key.classList.add('active');
                key.onmouseleave = ()=> {
                    removeKeyClass(key);
                };
                if (key.dataset.printable === 'true') {
                    screenArea.value += key.innerText;
                } else {
                    checkNotPrintableButton(key);
                    keyboardLayout(key);
                }
            } else {
                screenArea.focus();
                removeKeyClass(key);
            }
        }
    }
}

// СМЕНА ЯЗЫКА И ШИФТ С КАПСЛОКОМ И т.д.
function keyboardLayout(key) {
        if(key.id === 'MetaRight') {
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

function checkNotPrintableButton(key) {
    if (key.id === 'Enter') {
        key.classList.add('border-select');
        return typeInTextarea ('\n');
    } else if (key.id === 'Space') {
        return typeInTextarea (' ');
    } else if (key.id === 'ArrowLeft') {
        input.selectionEnd = input.selectionStart - 1;
    } else if (key.id === 'ArrowRight') {
        input.selectionStart = input.selectionEnd + 1;
    } else if (key.id === 'Delete') {
        deleteChar('Delete');
    } else if (key.id === 'ArrowUp') {
        input.selectionEnd = moveUpAndDown(input.selectionStart, 'up');
    } else if (key.id === 'ArrowDown') {
        input.selectionStart = moveUpAndDown(input.selectionEnd, 'down');
    } else if (key.id === 'F11') {
        document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? closeFullscreen() : openFullscreen();
    }
    
}




/*
const body = document.getElementsByTagName('body'),
    tagBody = body[0];

tagBody.insertAdjacentHTML('afterBegin', '<div id="screen"></div>');
tagBody.insertAdjacentHTML('beforeend', '<div id="keyboard"></div>');


const allKeys = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 91, 93, 13, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39, 220];


function renderKeys() {
    let out = '';
    for (let i = 0; i < allKeys.length; i++) {
        if (i === 13 || i === 27 || i === 40 || i === 53) {
            out += '<div class="clearfix"></div>';
        }
        out += '<div class="key">' + String.fromCharCode(allKeys[i]) + '</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}

renderKeys();


document.onkeypress = function(event) {
    console.log(event);
}

document.onkeydown = function(event) {
    console.log(event);
}
*/


// const body = document.getElementsByTagName('body'),
//     tagBody = body[0];

// tagBody.insertAdjacentHTML('afterBegin', '<div id="screen"></div>');
// tagBody.insertAdjacentHTML('beforeend', '<div id="keyboard"></div>');
// keyboard.insertAdjacentHTML('afterbegin', '<div class="fifth-line"><div class="key">Ctrl</div><div class="key">Win</div><div class="key">Alt</div><div class="space-key"> </div><div class="key">Alt</div><div class="key">Ctrl</div><div class="key">&larr;</div><div class="key">&darr;</div><div class="key">&rarr;</div><div class="key">&#8726;</div></div>');
// keyboard.insertAdjacentHTML('afterbegin', '<div class="fourth-line"><div class="special-key">Shift</div><div class="key">z</div><div class="key">x</div><div class="key">c</div><div class="key">v</div><div class="key">b</div><div class="key">n</div><div class="key">m</div><div class="key">,</div><div class="key">.</div><div class="key">/</div><div class="key">&uarr;</div><div class="special-key">Shift</div></div>');
// keyboard.insertAdjacentHTML('afterbegin', '<div class="third-line"><div id="caps-lock" class="special-key">Caps Lock</div><div class="key">a</div><div class="key">s</div><div class="key">d</div><div class="key">f</div><div class="key">g</div><div class="key">h</div><div class="key">j</div><div class="key">k</div><div class="key">l</div><div class="key">;</div><div class="key">&prime;</div><div class="special-key">Enter</div></div>');
// keyboard.insertAdjacentHTML('afterbegin', '<div class="second-line"><div class="special-key">Tab</div><div class="key" data="81">q</div><div class="key">w</div><div class="key">e</div><div class="key">r</div><div class="key">t</div><div class="key">y</div><div class="key">u</div><div class="key">i</div><div class="key">o</div><div class="key">p</div><div class="key">[</div><div class="key">]</div><div class="key">Del</div></div>');
// keyboard.insertAdjacentHTML('afterbegin', '<div class="first-line"><div class="key">`</div><div class="key"><span class="original">1</span><span class="alternative">!</span></div><div class="key">2</div><div class="key">3</div><div class="key">4</div><div class="key">5</div><div class="key">6</div><div class="key">7</div><div class="key">8</div><div class="key">9</div><div class="key">0</div><div class="key">-</div><div class="key">=</div><div class="special-key">Backspace</div></div>');

// const screenInput = document.getElementById('screen');

// screenInput.insertAdjacentHTML('afterbegin', '<textarea id="input-area" autofocus></textarea>');

// const screenArea = document.getElementById('input-area');



// ///////////////////// CAPSLOCK ///////////////////////////
// let capsLock = document.getElementById('caps-lock');

// document.onkeydown = function(event) {
//         if (event.key == 'CapsLock') {
//             capsLock.classList.toggle('active');
//         }
//     }
//     ///////////////////////////////////////////////////////////

// let languageEn = true;

// document.onkeydown = function(event) {
//     if (event.code === 'Altleft') {

//         document.onkeyup = function(event) {
//             if (event.code === 'ShiftLeft') {
//                 languageEn = false;
//             } else {
//                 document.onkeyup = null;
//             }
//         }
//     }



// }




////////////////// СТАРЫЙ ВВОД ЧЕРЕЗ textContent //////////
//document.onkeypress = function(event) {
//    screenArea.textContent += event.key;
//}
///////////////////////////////////////////////////////////


//.document.onkeypress = function(event) {
//    document.querySelector('#keyboard .key[data="' + event.keyCode + '"]').classList.add('active')
//}

/*
let key = document.querySelectorAll('first-line');

document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {
        key.classList.toggle('original');
        key.classList.toggle('alternative');
    }
})
*/






/*
document.addEventListener('keydown', function(event) {
    //if (event.code == 'KeyA' && (event.shiftKey || event.metaKey)) {
    //    alert(event.key);
    //}
    if (event.code == 'KeyA') {
        //alert(event.key);
        //sceenInput.innerText('event.key');
        screenArea.innerText += event.key;
    }
});

function renderScreen() {
    tagBody.insertAdjacentHTML('afterBegin', '<div id="screen"></div>');
}

const inputScreen = document.getElementById('screen');

function renderKeyboard() {

    tagBody.insertAdjacentHTML('beforeend', '<div id="keyboard"></div>');
}

function renderLaptop() {
    renderScreen();
    renderKeyboard();
    renderKeys();
}
*/

//для вывода букв (символы, зависящие от раскладки)использовать event.key для работы сочетания клавишь event.code