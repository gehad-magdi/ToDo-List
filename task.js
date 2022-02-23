        // the body
        let bodyNote = document.getElementById('Note')
        bodyNote.style.cssText = "height: 100vh;display: flex;justify-content: center;align-items: center;";
        // container note
        let container = document.createElement('div');
        container.classList.add('container');
        container.style.cssText = 'width: 500px;min-height: 500px;max-height: 100%;background: #4caf508c;margin: auto;padding: 20px;';
        // title note
        let titleNote = document.createElement('h1');
        titleNote.innerHTML= "ToDo List";
        titleNote.style.cssText = 'color: #fffce1;font-size: 40px;text-align: center;margin: 5px;font-family: monospace;';
        // form note
        let textNote = document.createElement('form');
        textNote.classList.add('form');
        textNote.style.cssText = 'display: grid;grid-template-rows: 1fr;grid-template-columns: 1fr 30%;gap: 5px;';
       // input note
        let inputNote = document.createElement('input');
        inputNote.setAttribute('type','text');
        inputNote.setAttribute('placeholder','Add to the todo list');
        inputNote.style.cssText = 'font-size: 20px;border: 0px;border-radius: 2px;font-family: monospace;background-color: rgb(255, 252, 225);padding: 10px;';
       // text note
        let hint = document.createElement('p');
        hint.style.cssText = 'text-align: center;font-size: 15px;color: #ff00009e;font-family: monospace;margin: 0;display: none;';
        hint.innerHTML = 'Please Add Your ToDo';
       //button note
        let btnNote = document.createElement('button');
        btnNote.innerHTML = 'Add Item';
        btnNote.style.cssText = 'font-size: 20px;padding: 10px;border: 3px solid rgb(255, 252, 225);border-radius: 2px;font-family: monospace;background-color: transparent;color: rgb(255, 252, 225);cursor: pointer;font-weight: bold;';
        btnNote.setAttribute('type','submit');
        //function submit
        let form = textNote;
        form.onsubmit = function(e){
            if(this.firstChild.value.length == 0){
                this.children[2].style.display = 'block';
                e.preventDefault();
            }
            else{
                e.preventDefault();
                this.children[2].style.display = 'none';
                window.localStorage.setItem('ToDo',this.firstChild.value);
                let item = document.createElement('div');
                item.appendChild(document.createElement('div'))
                item.firstChild.appendChild(document.createElement('p'));
                item.firstChild.firstChild.innerHTML =  window.localStorage.getItem('ToDo');
                item.firstChild.firstChild.style.cssText = 'width: 100%;font-size: 25px;margin: 0;font-family: monospace;color: rgb(76 175 80);line-height: 35px;line-break: anywhere;'
                item.firstChild.appendChild(document.createElement('label'));
                item.firstChild.children[1].style.cssText = 'position: relative;cursor: pointer;font-size: 22px;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;';
                item.firstChild.children[1].appendChild(document.createElement('input'));
                item.firstChild.children[1].appendChild(document.createElement('span'))
                item.firstChild.children[1].children[0].setAttribute('type','checkbox');
                item.firstChild.children[1].children[0].classList.add("checkbox");
                item.firstChild.children[1].children[0].style.cssText = 'position: absolute;opacity: 0;cursor: pointer;height: 0;width: 0;'
                item.firstChild.children[1].children[1].classList.add("checkmark");
                item.firstChild.children[1].children[1].style.cssText ='position: absolute;top: 0;left: 0;height: 25px;width: 25px;background-color: rgba(76, 175, 80, 0.55);transform: translate(-25px, -12px);';
                let check = item.firstChild.children[1].children[0];
                // checkbox function
                check.addEventListener('click',function(){
                    if(this.checked == true){
                        this.parentElement.previousSibling.style.textDecoration = 'line-through';
                    }
                    else{
                        this.parentElement.previousSibling.style.textDecoration = 'none';
                    }
                })
                item.firstChild.appendChild(document.createElement('button'))
                item.firstChild.style.cssText = 'padding: 10px;background: #ddd;margin: 10px;display: flex;align-items: center;';
                container.appendChild(item);
                item.firstChild.lastChild.innerHTML = '<i class="fa fa-trash-o" style="font-size:24px"></i>';
                item.firstChild.lastChild.style.cssText = 'background: transparent;border: 0;color: rgb(76, 175, 80);';
                let trash = item.firstChild.lastChild;
                trash.addEventListener('click',function(){
                    this.parentElement.remove();
                })
                if(this.firstChild.value.length !== 0){
                this.firstChild.value = '';
                }
            }
            
        }
// append elements
textNote.appendChild(inputNote);
textNote.appendChild(btnNote);
textNote.appendChild(hint);
//append perants
container.appendChild(titleNote);
container.appendChild(textNote);
bodyNote.appendChild(container);
