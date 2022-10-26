const ids = [
  "nombre",
  "apellido",
  "email",
  "password1",
  "password2",
  "terminos",
];

const formulario = {
  nombre,
  apellido,
  email,
  password1,
  password2,
  terminos,
};

const terminosBtn = document.getElementById("terminosBtn");

function inicializarFormulario(form) {
  ids.forEach((id) => {
    formulario[id] = form[id];
  });
}

function arePasswordsEqual() {
  const { password1, password2 } = formulario;
  if (password1.value === password2.value) {
    formulario["password2"].setCustomValidity("");
  } else {
    formulario["password2"].setCustomValidity("Las contraseñas no coinciden");
  }
}

function terminosValidacion() {
  if (formulario.terminos.checked) {
    terminosBtn.classList.remove("is-invalid");
  } else {
    terminosBtn.classList.add("is-invalid");
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    inicializarFormulario(form);
    form.addEventListener(
      "submit",
      (event) => {	
        formulario.password1.addEventListener("input", arePasswordsEqual);
        formulario.password2.addEventListener("input", arePasswordsEqual);
        formulario.terminos.addEventListener("change", terminosValidacion);
        terminosValidacion();

        console.log(formulario);
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();



