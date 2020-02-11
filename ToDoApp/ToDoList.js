var nxtAction = prompt('What would you like to do next?')
var toDoList = ['Demo ToDo item']

while (nxtAction !== 'Quit'){
    if (nxtAction === 'Add'){
        addNewToDo()
    } else if (nxtAction === 'Show'){
        showToDoList()
    } else if (nxtAction === 'Remove'){
        removeToDo()
    }
    nxtAction = prompt('What would you like to do next?')
}
console.log('You have quit the ToDo App')

function addNewToDo(){
    var newToDo = prompt('Add your ToDo item:')
    toDoList.push(newToDo)
    console.log('New ToDo has been added')
}
function showToDoList(){
    toDoList.forEach(function(item, i){
        console.log(i + ': ' + item);
    });
}
function removeToDo(){
    var removeToDo = prompt('Index of the item to remove:')
    let itemRemoved = toDoList[removeToDo]
    toDoList.splice(removeToDo,1);
    console.log(itemRemoved + ' has been deleted')
    console.log('Here is your updated ToDo List:' )
    showToDoList()
}
