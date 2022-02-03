

const input = document.getElementById('input');
const button_add = document.getElementById('button_add');
const list = document.getElementById('list');


button_add.addEventListener('click', () => { const list_item = document.createElement('li') 
list_item.innerHTML = input.value
list.appendChild(list_item)});


 
