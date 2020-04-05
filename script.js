const body = document.getElementsByTagName('body'),
    tagBody = body[0];

tagBody.insertAdjacentHTML('afterBegin', '<div id="screen"></div>');
tagBody.insertAdjacentHTML('beforeend', '<div id="keyboard"></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="fifth-line"><div class="key">Ctrl</div><div class="key">Win</div><div class="key">Alt</div><div class="space-key"> </div><div class="key">Alt</div><div class="key">Ctrl</div><div class="key">&larr;</div><div class="key">&darr;</div><div class="key">&rarr;</div><div class="key">&#8726;</div></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="fourth-line"><div class="special-key">Shift</div><div class="key">z</div><div class="key">x</div><div class="key">c</div><div class="key">v</div><div class="key">b</div><div class="key">n</div><div class="key">m</div><div class="key">,</div><div class="key">.</div><div class="key">/</div><div class="key">&uarr;</div><div class="special-key">Shift</div></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="third-line"><div id="caps-lock" class="special-key">Caps Lock</div><div class="key">a</div><div class="key">s</div><div class="key">d</div><div class="key">f</div><div class="key">g</div><div class="key">h</div><div class="key">j</div><div class="key">k</div><div class="key">l</div><div class="key">;</div><div class="key">&prime;</div><div class="special-key">Enter</div></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="second-line"><div class="special-key">Tab</div><div class="key" data="81">q</div><div class="key">w</div><div class="key">e</div><div class="key">r</div><div class="key">t</div><div class="key">y</div><div class="key">u</div><div class="key">i</div><div class="key">o</div><div class="key">p</div><div class="key">[</div><div class="key">]</div><div class="key">Del</div></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="first-line"><div class="key">`</div><div class="key"><span class="original">1</span><span class="alternative">!</span></div><div class="key">2</div><div class="key">3</div><div class="key">4</div><div class="key">5</div><div class="key">6</div><div class="key">7</div><div class="key">8</div><div class="key">9</div><div class="key">0</div><div class="key">-</div><div class="key">=</div><div class="special-key">Backspace</div></div>');

const screenInput = document.getElementById('screen');

screenInput.insertAdjacentHTML('afterbegin', '<textarea id="input-area" autofocus></textarea>');

const screenArea = document.getElementById('input-area');



///////////////////// CAPSLOCK ///////////////////////////
let capsLock = document.getElementById('caps-lock');

document.onkeydown = function(event) {
        if (event.key == 'CapsLock') {
            capsLock.classList.toggle('active');
        }
    }
    ///////////////////////////////////////////////////////////


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

/*
КРИВАЯ ОТРИСОВКА ЧЕРЕЗ ЦИКЛ И МАССИВ
const body = document.getElementsByTagName('body'),
    tagBody = body[0];

tagBody.insertAdjacentHTML('afterBegin', '<div id="screen"></div>');
tagBody.insertAdjacentHTML('beforeend', '<div id="keyboard"></div>');


const allKeys = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 17, 37, 40, 39, 220];


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
*/