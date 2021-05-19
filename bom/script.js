const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onClick = function addwords() {
    let scripture = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(olistBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.onclick = function(e) {
        list.removeChild(listItem);
    }

    input.focus();

}