export default function removeAllChildNodes(element){
    while(element.hasChildNodes()){
        element.removeChild(element.firstChild)
    }
}