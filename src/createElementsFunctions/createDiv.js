export default function createDiv(className = '') {
    const div = document.createElement('div');
    const arr = className.split(' ');
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        div.classList.add(`${element}`);
    }

    return div;
}