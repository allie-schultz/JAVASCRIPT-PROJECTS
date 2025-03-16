function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
function add() {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    
}

function show() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;

    var removeButton = document.getElementsByClassName('remove');
    for (var i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', remove_item);
    }
}

function remove_item() {
    var id = this.id;
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    
}

document.getElementById('add').addEventListener('click', add);

//alows add() to be triggered when pressing enter on keyboard
document.getElementById('task').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        add();
    }
});

show();




