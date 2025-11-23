
function acessarTelaProfessor() {
    let idNome = document.getElementById("name").value;
    let idEmail = document.getElementById("email").value;
    let idSenha = document.getElementById("password").value;

    const Professor = {
        nome: idNome,
        email: idEmail,
        senha: idSenha
    };

    if (idEmail === "" || idSenha === "") {
        alert("Por favor, preencha todos os campos.");
    } else if (idEmail === "gabriel@gmail.com" && idSenha === "123") {
        localStorage.setItem("professorLogado", JSON.stringify(Professor));
        window.open("../paginaProfessor/index.html", "_self");
    } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
        // limpar os campos usando os elementos do DOM (idEmail/idSenha são strings)
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
};
