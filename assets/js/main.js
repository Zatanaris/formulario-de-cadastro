const form = document.getElementById("form");
const usuario = document.getElementById("Usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const CurretPass = document.getElementById("new-password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkForm();
});

usuario.addEventListener("blur", () => {
    ValidateInputs();
});

email.addEventListener("blur", () => {
    ValidateInputs();
});

const setError = (element, message) => {
    const InputControl = element.parentElement;
    const errorDisplay = InputControl.querySelector(".error");
    errorDisplay.innerText = message;
    InputControl.classList.add("error");
    InputControl.classList.remove("sucesso");
};

const setSucess = (element) => {
    const InputControl = element.parentElement;
    const errorDisplay = InputControl.querySelector(".error");
    errorDisplay.innerText = "";
    InputControl.classList.add("sucesso");
    InputControl.classList.remove("error");
};

const IsValidemail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const ValidateInputs = () => {
    const UserValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const ConfirmpassValue = CurretPass.value.trim();

    if (UserValue === "") {
        setError(usuario, "Username é obrigatorio");
    } else {
        setSucess(usuario);
    }

    if (emailValue === "") {
        setError(email, "email é obrigatorio");
    } else if (!IsValidemail(emailValue)) {
        setError(email, "use um email valido");
    } else {
        setSucess(email);
    }

    if (passwordValue === "") {
        setError(password, "Senha é obrigatorio");
    } else if (passwordValue.length < 8) {
        setError(password, "A Senha deve ter no minimo 8 caracteres");
    } else {
        setSucess(password);
    }

    if (ConfirmpassValue === "") {
        setError(CurretPass, "Confirme sua senha");
    } else if (ConfirmpassValue !== passwordValue) {
        setError(CurretPass, "As senhas tem que ser iguais");
    } else {
        setSucess(CurretPass);
    }
};

function checkForm() {
    ValidateInputs();

    const formItems = form.querySelectorAll(".form__control");

    const isValid = [...formItems].every((item) => {
        return item.classList.contains("sucesso");
    });

    if (isValid) {
        alert("CADASTRADO COM SUCESSO!");
    }
}
