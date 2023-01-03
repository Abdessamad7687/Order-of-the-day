var input = document.getElementById('form3')
let submit = document.getElementById('submit')

let listGroup = document.getElementById("list-group")

if(localStorage.Todos != null){
    Todos = JSON.parse(localStorage.getItem('Todos'))
}
else{
    Todos = []
}


submit.addEventListener('click', function(e) {
    let newTodo = {
        input: input.value
    }
    Todos = [...Todos, newTodo]  
    localStorage.setItem('Todos', JSON.stringify(Todos))
    Display()
    input.value = ''
    e.preventDefault()
})

function Display() {
    let ul = ""

    for (let index = 0; index < Todos.length; index++) {
        ul += 
        `
        <li
            class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            <div class="d-flex align-items-center">
            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
            ${Todos[index].input}
            </div>
            <button class='btn btn-danger' onclick="deleteTodo(${index})">
                Delete
            </button>
      </li>
        `
        listGroup.innerHTML = ul
    }
}
function deleteTodo(id){
    Todos.splice(id, 1)
    localStorage.setItem('Todos', JSON.stringify(Todos))
    Display()
}


Display()
