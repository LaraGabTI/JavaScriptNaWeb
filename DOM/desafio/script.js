const nome = document.getElementById("userName")
const email = document.getElementById("userEmail")
const profession = document.getElementById("userProfession")
const addBtn = document.getElementById("addBtn")
const section = document.getElementById("cards")


//criar card com os usuarios, depois de clicar no botão adicionar
addBtn.addEventListener("click", () => {
    const userName = nome.value
    const userEmail = email.value
    const userProfession = profession.value

    console.log(userName, userEmail, userProfession) //verifica se os valores estão corretos

   if(userName == "" || userEmail == "" || userProfession == "") return //se o campo de texto estiver vazio, não faz nada

    //cria um card de usuario 
    const div = document.createElement("div") // 
    div.className = 'col-md-4'
    div.innerHTML = `
    <div class="card shadow-sm gap-5 p-3">
        <div class="card-body">
            <h2 class="card-title">${userName}</h2>
            <p>${userEmail}</p>
            <p>${userProfession}</p>
        </div>
    </div>
    `

    //cria um botão para remover o card
    const removeBtn = document.createElement("button")
    removeBtn.textContent = "Remover"
    removeBtn.style.marginLeft = "10px"

    //adiciona um evento de clique para remover o card
    removeBtn.addEventListener("click", () => {
        section.removeChild(div) //remove o card da lista
        section.removeChild(removeBtn) //remove o botão da lis  ta
    })

    section.appendChild(div) //adiciona o card dentro da section
    div.appendChild(removeBtn) //adiciona o botão dentro do card
})