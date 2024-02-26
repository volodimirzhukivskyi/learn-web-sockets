let socket = new WebSocket('ws://localhost:8080/');

socket.onopen = function (e) {
  alert('[open] Соединение установлено');
  alert('Отправляем данные на сервер');
};

socket.onmessage = function (event) {
  console.log(event);
  alert(`[message] Данные получены с сервера: ${event.data}`);
  const title = document.createElement('h1');
  title.textContent = event.data;
  document.body.append(title);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
  } else {
    // например, сервер убил процесс или сеть недоступна
    // обычно в этом случае event.code 1006
    alert('[close] Соединение прервано');
  }
};

socket.onerror = function (error) {
  alert(`[error]`);
};

const button = document.getElementById('button');
button.onclick = () => {
  const name = prompt('Send your name', 'Джон');
  socket.send(`Меня зовут ${name}`);
};
