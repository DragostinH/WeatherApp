export default function isLoading(value) {
    const spinnerContainer = document.querySelector('.spinner-container');
    if (value === true) {
        spinnerContainer.style.display = "flex";

    } else {
        spinnerContainer.style.display = "none";

    }


}