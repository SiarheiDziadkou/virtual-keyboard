//на onload повесить функцию render которая будет отрисовывать всю клавиатуру


function addRow() {
    var newTr = document.getElementById('start');
    newTr.insertAdjacentHTML('afterBegin', '<tr><td class="cells"></td><td class="cells"></td><td class="cells"></td></tr>');
}