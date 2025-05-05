

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())               // Converte a resposta em JSON
//   .then(data => {
//     data.forEach(element => {
//         const listaAPI = document.getElementById("listaAPI")

//         const li = document.createElement("li")
//         li.innerHTML = `<strong>titulo</strong>: ${element.title} <br> <strong>body</strong>: ${element.body} <br> <strong>userId</strong>: ${element.userId} <br> <strong>id</strong>: ${element.id}`
//         li.style.textAlign = "justify"
//         listaAPI.appendChild(li)
//     })
//   })       // Exibe os dados no console
//   .catch(err => console.error("Erro:", err))


fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())               // Converte a resposta em JSON
  .then(data => {
    data.forEach(element => {
        const listaAPI = document.getElementById("listaAPI")

        const div = document.createElement("div")
        div.classList.add("caixa")

        const li = document.createElement("li")
        li.innerHTML = `<strong>name</strong>: ${element.name} <br> <strong>username</strong>: ${element.username} <br> <strong>email</strong>: ${element.email}`
        li.style.textAlign = "justify"
        listaAPI.appendChild(div)
        div.appendChild(li)
    })
  })       // Exibe os dados no console
  .catch(err => console.error("Erro:", err))

