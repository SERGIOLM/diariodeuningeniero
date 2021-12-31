const form = document. getElementById('nombre')
botón const = documento. getElementById('numero')

const nombre = documento. getElementById('nom')
const email = documento. getElementById('email')
género const  = documento. getElementById('género')
términos const  = documento. getElementById('términos')

const formIsValid = {
    nombre: false,
    correo electrónico: false,
    género: falso,
    términos: falsos
}

formulario. addEventListener('enviar', (e) => {
    e. prevenirDefault()
    validarForm()
})

nombre. addEventListener('change', (e) => {
    if(e. objetivo. valor. trim(). longitud > 0) formIsValid. nombre = verdadero
})

correo electrónico. addEventListener('change', (e) => {
    if(e. objetivo. valor. trim(). longitud > 0) formIsValid. correo electrónico = verdadero
})

género. addEventListener('change', (e) => {
    consola. log(e. objetivo. comprobado)
    if(e. objetivo. checked == true) formIsValid. género = verdadero
})

términos. addEventListener('change', (e) => {
    formIsValid. términos = e. objetivo. comprobado
    e. objetivo. comprobado ? botón. removeAttribute('disabled') : botón. setAttribute('disabled', true)
})

const validateForm = () => {
    const formValues = Objeto. valores(formIsValid)
    const válido = formValues. findIndex(valor => valor == false)
    if(válido == -1) formulario. presentar()
    otra alerta('Formulario no válido')
}