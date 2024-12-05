var boxElm = document.getElementsByClassName('box')[0];
function ListData(itemValue){
  this.listText = itemValue;
  this.done = false
  this.id = Math.floor((Math.random()*1000 + Number((new Date().getTime().toString()).slice(-4))) ) 
}
function saveData(data) {
  localStorage.setItem('todo_items', JSON.stringify(data))
  boxElm.innerHTML = ''
  renderListItems(); 
}
function readData() {
  return JSON.parse(localStorage.getItem('todo_items'));
}

var todoData =  (readData()) ?  [...readData()] : []  ; 

function submitInput(e) {
  e.preventDefault();
  var inpValue = document.getElementById('input-text');
  var showError = document.getElementById('error')
  if (inpValue.value!=='') {
    var obj = new ListData(inpValue.value);
    todoData = [...todoData, obj]
    console.log(todoData);
    saveData(todoData) 
    showError.style.display = "none"
    inpValue.value = ''
    return
  }
  showError.innerText= 'please input to add'
  showError.style.display = "block"
}

function renderListItems() {
  for (let i = 0; i < todoData.length; i++) {
    boxElm.innerHTML += `<div class='list-item' style='display:flex;'>
    <input type='text' value='${todoData[i].listText}' class='hide'/>
    <p >${todoData[i].listText}</p>
    <button class="edit-btn" onClick='editItem(event,${todoData[i].id})'>Edit</button>
    <button class="save-btn" onClick='updatedItem(event,${todoData[i].id})' style='display:none;'>Save</button>
    <button class="delete-btn" onClick = 'deleteItem(${todoData[i].id})'>Delete</button>
    <button class="complete-btn" onClick = ' completeItem(${todoData[i].id})'>Done</button>
    </div>`
    if (todoData[i].done) {
      var editButton = document.getElementsByClassName('edit-btn')[i]
      var doneButton = document.getElementsByClassName('complete-btn')[i]
      var saveButton = document.getElementsByClassName('complete-btn')[i]
      editButton.style.display = 'none'
      saveButton.style.display = 'none'
      doneButton.style.display = 'none'
    }
  }
}

renderListItems();

function editItem(e){
  e.target.previousElementSibling.style.display ='none'
  e.target.previousElementSibling.style.display ='none'
  e.target.previousElementSibling.previousElementSibling.style.display ='block'
  e.target.nextElementSibling.style.display = 'block'
  e.target.style.display = 'none'
}

function updatedItem(e,id,inpValue){
  e.target.style.display = 'none'
  e.target.previousElementSibling.style.display = 'block'
  e.target.previousElementSibling.previousElementSibling.previousElementSibling.style.display = 'none'
  var inpValue =  e.target.previousElementSibling.previousElementSibling.previousElementSibling.value
  for (let i = 0; i < todoData.length; i++) {
    if(todoData[i].id === id){
      todoData[i] = {...todoData[i], listText:  inpValue}
      todoData[i] = {...todoData[i], listText:  inpValue}
      saveData(todoData)
      return
      }
    }
  }
  
  function deleteItem(id){
    var toDelete = [] ;
    for (let i = 0; i < todoData.length; i++) {
      if(todoData[i].id !== id){
        toDelete = [...toDelete,todoData[i]]
      }
    }
    todoData = toDelete
    localStorage.setItem('todo_items',JSON.stringify(todoData))
    boxElm.innerHTML = ''
    renderListItems()
  }
  function completeItem(id){
    for (let i = 0; i < todoData.length; i++) {
      if(todoData[i].id === id){
        console.log(id);
        console.log(todoData[i].id);
        todoData[i] = {...todoData[i], done:  true}
        saveData(todoData)
        // return
      }
      boxElm.innerHTML = ''
      renderListItems();
    }
  }