export default function createImg(className = '') {
    const img = document.createElement('img');
    const arr = className.split(' ');
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        img.classList.add(`${element}`);
    }

    return img;
}