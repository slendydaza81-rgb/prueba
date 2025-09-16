const formulario = document.getElementById("miFormulario");
const btnLimpiar = document.getElementById("btnLimpiar");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const tipoId = document.getElementById("tipoId").value;
    const numeroId = document.getElementById("numeroId").value;
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const sexo = document.querySelector('input[name="sexo"]:checked');
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // 🔹 Validaciones
    if (!tipoId) {
        Swal.fire("Error", "Debes seleccionar el tipo de identificación.", "error");
        return;
    }

    if (numeroId.trim() === "") {
        Swal.fire("Error", "Debes ingresar tu número de identificación.", "error");
        return;
    }

    if (isNaN(numeroId)) {
        Swal.fire("Error", "El número de identificación solo debe contener dígitos.", "error");
        return;
    }

    if (nombres.trim() === "") {
        Swal.fire("Error", "Debes ingresar tus nombres.", "error");
        return;
    }

    if (apellidos.trim() === "") {
        Swal.fire("Error", "Debes ingresar tus apellidos.", "error");
        return;
    }

    if (fechaNacimiento === "") {
        Swal.fire("Error", "Debes seleccionar tu fecha de nacimiento.", "error");
        return;
    }

    if (!sexo) {
        Swal.fire("Error", "Debes seleccionar tu sexo.", "error");
        return;
    }

    if (email.trim() === "" || confirmEmail.trim() === "") {
        Swal.fire("Error", "Debes ingresar y confirmar tu correo electrónico.", "error");
        return;
    }

    if (email !== confirmEmail) {
        Swal.fire("Error", "Los correos electrónicos no coinciden.", "error");
        return;
    }

    if (password.trim() === "" || confirmPassword.trim() === "") {
        Swal.fire("Error", "Debes ingresar y confirmar tu contraseña.", "error");
        return;
    }

    if (password !== confirmPassword) {
        Swal.fire("Error", "Las contraseñas no coinciden.", "error");
        return;
    }


    document.getElementById("resultado").innerHTML = `
      <p><b>Tipo de ID:</b> ${tipoId}</p>
      <p><b>Número de ID:</b> ${numeroId}</p>
      <p><b>Nombres:</b> ${nombres}</p>
      <p><b>Apellidos:</b> ${apellidos}</p>
      <p><b>Fecha de Nacimiento:</b> ${fechaNacimiento}</p>
      <p><b>Sexo:</b> ${sexo.value}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Contraseña:</b> ******</p>
    `;


    // 🔹 Confirmación con SweetAlert
    Swal.fire({
        title: "Confirmar Datos",
        html: `
      <p><b>Tipo de ID:</b> ${tipoId}</p>
      <p><b>Número de ID:</b> ${numeroId}</p>
      <p><b>Nombres:</b> ${nombres}</p>
      <p><b>Apellidos:</b> ${apellidos}</p>
      <p><b>Fecha de Nacimiento:</b> ${fechaNacimiento}</p>
      <p><b>Sexo:</b> ${sexo.value}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Contraseña:</b> ******</p>
    `,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Corregir",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire("Éxito", "Formulario enviado correctamente ✅", "success");
            formulario.reset();
        }
    });
});

// 🔹 Botón limpiar
btnLimpiar.addEventListener("click", function () {
    formulario.reset();
});