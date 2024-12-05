// Obtendo elementos do formulário.
const form = document.querySelector("form")
const inputNewItem = document.getElementById("inputNewItem")
const btnSubmit = document.getElementById("btnSubmit")

// Manipula o input para receber somente strings e não permitir espaços no início.
inputNewItem.addEventListener("input", () => {
  inputNewItem.value = inputNewItem.value
    .replace(/[^a-zA-Z\s]/g, "")
    .replace(/\s+/g, " ")
    .trimStart()
})

// Captura o evento de submit do formulário.
form.onsubmit = (event) => {
  event.preventDefault()

  // Verifica se foi digitado pelo menos 3 caracteres.
  if (inputNewItem.value.length < 3) {
    alert("O item deve ter pelo menos 3 caracteres.")
  } else {
    addNewItem()
  }

  inputNewItem.value = ""
}

// Obtendo elementos.
const ul = document.querySelector("ul")

// Variável para incremento do número do id.
let numberId = 1

// Cria novos items dentro da lista.
function addNewItem() {
  // Criando elementos
  const li = document.createElement("li")
  const label = document.createElement("label")
  const input = document.createElement("input")
  const itemName = document.createElement("span")
  const button = document.createElement("button")

  // Adicionado atributos aos elementos.
  li.id = `item-${numberId++}`
  li.classList.add("items")
  input.type = "checkbox"
  button.type = "button"
  button.id = "delete"

  // Obtém todos os span.
  const span = document.querySelectorAll("span")

  // Checar itens existente
  let itemExists = false

  span.forEach((spans) => {
    if (spans.textContent.toUpperCase() == inputNewItem.value.toUpperCase()) {
      itemExists = true
    }
  })

  if (itemExists) {
    alert(`Você já adicionou "${inputNewItem.value}" a lista!`)
  } else {
    // Adiciona os elementos criados ao HTML.
    ul.prepend(li)
    li.append(label, button)
    label.append(input, itemName)

    // Span recebe o valor inserido no input.
    itemName.textContent = inputNewItem.value

    // Formatação para começar com letra maiúscula e o restante com minúsculas.
    let = formatItemName =
      itemName.textContent.charAt(0).toUpperCase() +
      itemName.textContent.slice(1).toLowerCase()

    itemName.textContent = formatItemName
  }
}
