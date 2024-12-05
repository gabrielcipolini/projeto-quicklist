// Obtendo elementos do formulário.
const form = document.querySelector("form")
const inputNewItem = document.getElementById("inputNewItem")
const btnSubmit = document.getElementById("btnSubmit")
const ul = document.querySelector("ul")

// Manipula o input para receber somente strings e não permitir espaços no início.
inputNewItem.addEventListener("input", () => {
  inputNewItem.value = inputNewItem.value
    .replace(/[^a-zA-Z\s]/g, "")
    .trimStart()
})

// Captura o evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault()

  // Verifica se foi digitado pelo menos 3 caracteres.
  if (inputNewItem.value.length < 3) {
    toggleAlert("length")
  } else {
    addNewItem()
  }

  inputNewItem.value = ""
}

// Variável de incrimento para o id de cada item criado.
let numberId = 1

function addNewItem() {
  const li = document.createElement("li")
  const label = document.createElement("label")
  const div = document.createElement("div")
  const input = document.createElement("input")
  const itemName = document.createElement("span")
  const button = document.createElement("button")

  // Adicionando atributos aos elementos.
  li.id = `item-${numberId++}`
  li.classList.add("items")
  div.id = "iconCheck"
  input.type = "checkbox"
  button.type = "button"
  button.id = "delete"

  // Verificando se o item já existe na lista
  let itemExists = false
  const spans = document.querySelectorAll("span")
  spans.forEach((spans) => {
    if (spans.textContent.toUpperCase() === inputNewItem.value.toUpperCase()) {
      itemExists = true
    }
  })

  if (itemExists) {
    toggleAlert("itemExists")
  } else {
    // Adiciona os elementos criados ao HTML.
    ul.prepend(li)
    li.append(label, button)
    label.append(div, input, itemName)

    // Span recebe o valor inserido no input.
    itemName.textContent = inputNewItem.value

    // Formatação para começar com letra maiúscula e o restante com minúsculas.
    let formatItemName =
      itemName.textContent.charAt(0).toUpperCase() +
      itemName.textContent.slice(1).toLowerCase()

    itemName.textContent = formatItemName
  }

  // Exclui item da lista ao clicar no botão de delete
  button.addEventListener("click", () => {
    li.remove()
    toggleAlert("itemRemoved")
  })
}

// Obtendo elementos do alerta.
const alert = document.getElementById("alert")
const alertMsg = document.querySelector("#alert p")

// Exibe mensagem de alerta.
function toggleAlert(msg) {
  switch (msg) {
    case "length":
      alert.style.display = "flex"
      alertMsg.textContent = `O item deve conter 3 ou mais caracteres.`
      break

    case "itemExists":
      alert.style.display = "flex"
      alertMsg.textContent = `Você já adicionou o "${inputNewItem.value}" à lista!`
      break

    case "itemRemoved":
      alert.style.display = "flex"
      alertMsg.textContent = `O item foi removido da lista`
      break
  }

  const closeAlert = document.getElementById("closeAlert")

  // Fechar alerta com clique.
  closeAlert.addEventListener("click", () => {
    alert.style.display = "none"
  })

  // Fechar alerta após 5 segundos.
  setTimeout(() => {
    alert.style.display = "none"
  }, 5000)
}
