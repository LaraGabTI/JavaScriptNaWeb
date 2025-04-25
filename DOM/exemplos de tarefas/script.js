

const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

//adiciona um evento de clique ao botão "Adicionar Tarefa"
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value 
    if(taskText =="") return //se o campo de texto estiver vazio, não faz nada
    //cria uma lista de tarefas
    const li = document.createElement("li")
    li.innerText = taskText

    //cria um botão para remover a tarefa
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remover Tarefa"
    removeBtn.style.marginLeft = "10px"

    //adiciona um evento de clique para remover a tarefa
    removeBtn.addEventListener("click", () => {
        taskList.removeChild(li) //remove a tarefa da lista
        taskList.removeChild(removeBtn) //remove o botão da lista
    })
    
    //adiciona a tarefa e o botão à lista de tarefas
    taskList.appendChild(li); 
    taskList.appendChild(removeBtn)

    taskInput.value = "" 
})


// addBtn.addEventListener("click", () => {
//     const taskText = taskInput.value 
//     alert(taskText)
//     taskInput.value = ""
// })