class Auth{

    constructor() {
        const auth = [];
        auth[0] = sessionStorage.getItem("email");
        auth[1] = sessionStorage.getItem("senha");
        console.log(auth);
        this.validateAuth(auth);
    }
    
    validateAuth(auth) {
        var email = sessionStorage.email;
        if (auth[0] != email) {
            window.location.replace("/preview-themes/view/pages/index.html");
        }
    }
    
    logOut() {
        sessionStorage?.removeItem(auth[0]);
        window.location.replace("/preview-themes/view/pages/index.html");
        sessionStorage.email = "";
        sessionStorage.senha = "";
    
    }
    
}

