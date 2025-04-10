document.getElementById("form").addEventListener('submit', function(e){
    e.preventDefault();
    let inputs = Array.from(document.getElementsByClassName("formulario"));
    let texto = []
    for(let i = 0; i<inputs.length; i++){
        texto.push(inputs[i].value.trim())
    }

    alert(`Te contactaremos pronto ${texto[0]}`)
    document.getElementById("form").reset()
})