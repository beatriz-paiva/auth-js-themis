const auth = new Auth();

const logOut = document.querySelector(".logout");

logOut?.addEventListener("click", () => {
	auth.logOut();
});

/* 
function init(){
    //document.getElementById("entrar").action = "pagina-inicial";
    document.getElementById("cadastrar").href = "cadastro.html";

    document.addEventListener('click', (e) =>{
        
        let elementId = e.target.id;

        if (elementId == 'cadastrar') {
           document.getElementById("cadastrar").href = "cadastro.html";
        
        }else if(elementId == 'teste'){
            document.getElementById("teste").href = "teste.html";

        }else{ 
            console.log("An element without an id was clicked.");
        }
    });
}
*/    





