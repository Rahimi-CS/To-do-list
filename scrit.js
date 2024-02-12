let list = document.getElementById("list");
function fechApi() {
  fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json().then((posts) => {
   posts.forEach(post => {
    list.innerHTML += `<h1>${post.title}</h1> <p>${post.completed}</p>`;
   });
    })
  );
}
fechApi();
