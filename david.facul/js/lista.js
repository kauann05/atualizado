document.addEventListener("DOMContentLoaded", function() {
    var cadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    var listaCadastros = document.getElementById("listaCadastros");

    cadastrados.forEach(function(usuario) {
        var li = document.createElement("li");
        li.textContent = "Nome: " + usuario.nome + ", Telefone: " + usuario.telefone;
        listaCadastros.appendChild(li);
    });
});