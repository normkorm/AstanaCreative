const inputPhone = document.querySelector("#input-number");
const inputNumberError = document.querySelector(".input-number-error");
const inputName = document.querySelector("#input-name");
const inputNameError = document.querySelector(".input-name-error");
const checkBox = document.querySelector("#terms-and-conditions")

const buttonFormSubmit = document.querySelector(".button-form-submit");

const modal = document.querySelector('#thank-you');
const closeButton = document.querySelector('#close-button');

const maskOptions = {
    mask: '+{7}(000)000-00-00'
};

const mask = IMask(inputPhone, maskOptions);

function openModal() {
    modal.showModal();
    window.addEventListener('click', closeModalOnClickOutside);
}
function closeModal() {
    modal.close();
    window.removeEventListener('click', closeModalOnClickOutside);
}

function closeModalOnClickOutside(event) {
    if (event.target === modal) {
        closeModal();
    }
}

closeButton.addEventListener('click', () => {
    closeModal();
});

buttonFormSubmit.addEventListener("click", (evt) => {
    evt.preventDefault();
    if (mask.unmaskedValue.length === 11 && inputName.value.length >= 1 && checkBox.checked === true) {
        inputNumberError.style.display = "none";
        inputNameError.style.display = "none";
        document.querySelector(".errors").style.display = "none";
        inputPhone.value = "";
        inputName.value = "";
        checkBox.checked = false;
        openModal();
    } else {
        document.querySelector(".errors").style.display = "block";
        if (mask.unmaskedValue.length !== 11) {
            inputNumberError.style.display = "block"
        } else {
            inputNumberError.style.display = "none";
        }
        if (inputName.value.length >= 1) {
            inputNameError.style.display = "none";
        } else {
            inputNameError.style.display = "block";
        }
    }
})