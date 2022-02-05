

const input = document.getElementById('input');
const button_add = document.getElementById('button_add');
const list = document.getElementById('list');
let todo_arr = []

function createToDo(){
    
    const list_item = document.createElement('li') 
    const text = document.createElement('span')
    const remove_btn = document.createElement('button')  
    const check_box = document.createElement('input')
    check_box.type = "checkbox";

    text.innerText = input.value;
    remove_btn.addEventListener('click', ()=> {
        list_item.remove();
    });

    remove_btn.innerText = "Delete";
    
    todo_arr.push({id: Date.now(),text: input.value,isDone: false});
    list_item.appendChild(check_box);
    list_item.appendChild(text);
    list_item.appendChild(remove_btn);
    list.appendChild(list_item); 
    input.value = "";
    console.log(todo_arr);
};
 
console.log(todo_arr);
button_add.addEventListener('click', createToDo);