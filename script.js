//на onload повесить функцию render которая будет отрисовывать всю клавиатуру
const body = document.getElementsByTagName('body'),
    tagBody = body[0];

tagBody.insertAdjacentHTML('afterBegin', '<div id="screen"></div>');
tagBody.insertAdjacentHTML('beforeend', '<div id="keyboard"></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="fifth-line"><div class="key">Ctrl</div><div class="key">Win</div><div class="key">Alt</div><div class="space-key"> </div><div class="key">Alt</div><div class="key">Ctrl</div><div class="key">&larr;</div><div class="key">&darr;</div><div class="key">&rarr;</div><div class="key">&#8726;</div></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="fourth-line"><div class="special-key">Shift</div><div class="key">z</div><div class="key">x</div><div class="key">c</div><div class="key">v</div><div class="key">b</div><div class="key">n</div><div class="key">m</div><div class="key">,</div><div class="key">.</div><div class="key">/</div><div class="key">&uarr;</div><div class="special-key">Shift</div></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="third-line"><div class="special-key">Caps Lock</div><div class="key">a</div><div class="key">s</div><div class="key">d</div><div class="key">f</div><div class="key">g</div><div class="key">h</div><div class="key">j</div><div class="key">k</div><div class="key">l</div><div class="key">;</div><div class="key">&prime;</div><div class="special-key">Enter</div></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="second-line"><div class="special-key">Tab</div><div class="key">q</div><div class="key">w</div><div class="key">e</div><div class="key">r</div><div class="key">t</div><div class="key">y</div><div class="key">u</div><div class="key">i</div><div class="key">o</div><div class="key">p</div><div class="key">[</div><div class="key">]</div><div class="key">Del</div></div>');
keyboard.insertAdjacentHTML('afterbegin', '<div class="first-line"><div class="key">`</div><div class="key">1</div><div class="key">2</div><div class="key">3</div><div class="key">4</div><div class="key">5</div><div class="key">6</div><div class="key">7</div><div class="key">8</div><div class="key">9</div><div class="key">0</div><div class="key">-</div><div class="key">=</div><div class="special-key">Backspace</div></div>');

/*
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