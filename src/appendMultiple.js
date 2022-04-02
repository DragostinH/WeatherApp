export default function appendMultiple(parent, ...elements) {
    if (Array.isArray(elements)) {
        elements.forEach(element => {
            parent.appendChild(element);
        })
    } else {
        parent.appendChild(elements);
    }

}