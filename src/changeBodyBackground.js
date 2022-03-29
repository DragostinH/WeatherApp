import getRandomNum from "./getRandomNum";

export async function changeBodyBackgroundImage(element, keyword){
    // unsplash API key: z6n1MJxv6cPcsv2k2k_57DD3etDzVh517LMv1Bwl0rI
    // Get a random image using a specific keyword and change the element's background

    try {
    const randomNum = getRandomNum(9);

        const image = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keyword}&client_id=z6n1MJxv6cPcsv2k2k_57DD3etDzVh517LMv1Bwl0rI`);
        const imageList = await image.json();
        element.style.backgroundImage = `url(${imageList.results[randomNum].urls.regular})`;
        
    } catch (error) {
        console.error("Unsplash didn't work as planned.")
    }

    

}