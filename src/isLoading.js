export default function isLoading(value) {
    const spinnerContainer = document.querySelector('.spinner-container');
    
    value ? spinnerContainer.style.display = "flex" :
        spinnerContainer.style.display = "none";


}