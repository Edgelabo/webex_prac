const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// 追加ボタンの処理
addButton.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ''
}
//エンターキー押したら追加
inputElement.onkeydown = function (e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement.value)
    container.append(card)

    inputElement.value = ''
  }
}

//カード作成
const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)

  return card
}