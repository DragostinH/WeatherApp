import getRandomNum from "./getRandomNum";
import isLoading from "./isLoading";

export async function changeBodyBackgroundImage(element, weatherDesc, city) {
    const keywords = `${weatherDesc} ${city}`;

    try {
        const randomPage = getRandomNum(100);
        const randomImage = getRandomNum(9);

        const image = await fetch(`https://api.unsplash.com/search/photos?page=${randomPage}&query=${keywords}&client_id=z6n1MJxv6cPcsv2k2k_57DD3etDzVh517LMv1Bwl0rI`);
        const imageList = await image.json();
        element.style.backgroundImage = `url(${imageList.results[randomImage].urls.regular})`;
        console.log(image);
        console.log(imageList);

    } catch (error) {
        console.error("Unsplash didn't work as planned.")
    }



}