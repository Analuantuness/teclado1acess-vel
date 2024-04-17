//adicionar atalhos de teclado
document.addEventListener("keydown", function(event){
    if(event.ctrlKey && event.key === "b") {
        window.location.href = "https://www.sephora.com.br/";
    }
    if (event.ctrlKey && event.key === "i") {
        window.open("https://http2.mlstatic.com/D_NQ_NP_680625-MLB52318518681_112022-O.webp");
    }
    if (event.ctrlKey && event.key === "m") {
        document.getElementById("mensagem-input").focus();
    }
});