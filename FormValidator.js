const inputPhone = document.querySelector("#input-number")

const buttonFormSubmit = document.querySelector(".button-form-submit");

const maskOptions = {
    mask: '+{7}(000)000-00-00'
};

const mask = IMask(inputPhone, maskOptions);

console.log(mask.value)


buttonFormSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();
    console.log(mask.unmaskedValue)
})