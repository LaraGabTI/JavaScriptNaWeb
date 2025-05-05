

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterInput = document.getElementById("filterInput");

//adiciona um escutador de evento de clique ao botão "Adicionar Tarefa"
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value 
    if(taskText =="") return //se o campo de texto estiver vazio, não faz nada

    //cria uma lista de tarefas
    const li = document.createElement("li")
    li.innerText = taskText

    //cria um botão para remover a tarefa
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remover"
    removeBtn.style.marginLeft = "10px"

    //adiciona um evento de clique para remover a tarefa
    removeBtn.addEventListener("click", () => {
        taskList.removeChild(li) //remove a tarefa da lista
        taskList.removeChild(removeBtn) //remove o botão da lista
    })


    
    //adiciona a tarefa e o botão à lista de tarefas
    taskList.appendChild(li); 
    li.appendChild(removeBtn)

    taskInput.value = "" 
})

filterInput.addEventListener("input", () => {
    const filterText = filterInput.value.toLowerCase(); //obtém o texto do filtro em minúsculas
    const tasks = taskList.querySelectorAll("li"); //seleciona todas as tarefas da lista

    //forEach para cada tarefa, ele recebe uma função de callback
    tasks.forEach((task) => {
        const taskName = task.firstChild.textContent.toLowerCase(); //obtém o texto da tarefa em minúsculas

        if(taskName.includes(filterText)) { //verifica se o texto da tarefa inclui o texto do filtro
            task.classList.remove("hidden") //remove a classe hidden para exibir a tarefa
        }
        else {
            task.classList.add("hidden") //adiciona a classe hidden para ocultar a tarefa
        }


        // if (taskName.includes(filterText)) { //verifica se o texto da tarefa inclui o texto do filtro
        //     task.style.display = ""; //se sim, exibe a tarefa
        // } else {
        //     task.style.display = "none"; //se não, oculta a tarefa
        // }

    
    })

})


// addBtn.addEventListener("click", () => {
//     const taskText = taskInput.value 
//     alert(taskText)
//     taskInput.value = ""
// })