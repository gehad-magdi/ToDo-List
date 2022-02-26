function creating(elem,name,to){
    let create = document.createElement(elem);
    create.classList.add(name);
    let selector = document.querySelector(to);
    selector.appendChild(create);
}
creating('div','container','#Note');
creating('h1','titleNote','.container');
document.querySelector('.titleNote').innerHTML = "ToDo List";
creating('form','form','.container');
creating('input','input','.form');
let change  = document.querySelector('.input');
change.setAttribute('type','text');
change.setAttribute('placeholder','Add to the todo list');
creating('button','button','.form');
document.querySelector('.button').innerHTML = 'Add Item';
creating('p','hint','.form');
document.querySelector('.hint').innerHTML = 'Please Add Your ToDo';
change = document.querySelector('.button');
change.setAttribute('type','submit');
creating('div','mainTodo','.container');
// end of
let outbox = [];

function draw (){
    let toDoBox = `toDoBox${outbox.length - 1}`;
    creating('div',toDoBox,'.mainTodo');
    document.querySelector(`.${toDoBox}`).classList.add('boxTodo')
    let todoText = `todoText${outbox.length - 1}`;
    creating('p',todoText,`.${toDoBox}`);
    document.querySelector(`.${todoText}`).innerHTML = `${outbox[outbox.length -1]}`;
    document.querySelector(`.${todoText}`).classList.add('textTodo');
    let label = `label${outbox.length - 1}`;
    creating('label',`${label}`,`.${toDoBox}`);
    document.querySelector(`.${label}`).classList.add('label');
    let checkbox = `checkbox${outbox.length - 1}`;
    creating('input',`${checkbox}`,`.${label}`);
    document.querySelector(`.${checkbox}`).classList.add('checkbox');
    document.querySelector(`.${checkbox}`).setAttribute('type','checkbox');
    creating('span','checkmark',`.${label}`);
    let check = document.querySelector(`.${checkbox}`);
    check.addEventListener('click',function(){
            if(this.checked == true){
                this.parentElement.previousSibling.style.textDecoration = 'line-through';
            }
            else{
                this.parentElement.previousSibling.style.textDecoration = 'none';
            }
        });
    let Delete = `Delete${outbox.length - 1}`;
    creating('button',`${Delete}`,`.${toDoBox}`);
    let trash =  document.querySelector(`.${Delete}`);
    trash.classList.add('delete');
    trash.innerHTML = '<i class="fa fa-trash-o" style="font-size:24px"></i>';
    trash.addEventListener('click',function(){
        this.parentElement.remove();
        let inclouds = outbox.length;        
    })
}
function drawFromLocalStorage() {
    for (let i = 0; i < window.localStorage.length; i++) {
        outbox.push(JSON.parse(window.localStorage.getItem(localStorage.key(i))));
        draw();
    }
}
drawFromLocalStorage();
let form = document.querySelector('.form');
form.onsubmit = function(e){
    if(this.firstChild.value.length == 0){
        this.children[2].style.display = 'block';
        e.preventDefault();
    }
    else{
        e.preventDefault();
        this.children[2].style.display = 'none';
        window.localStorage.setItem(`ToDo${outbox.length}`,JSON.stringify(this.firstChild.value));
        outbox.push(this.firstChild.value)
        draw();
        if(this.firstChild.value.length !== 0){
            this.firstChild.value = '';
            }
    }
}