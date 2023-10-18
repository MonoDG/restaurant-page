export default function createFooter() {
    const footer = document.createElement("section");
    footer.classList.add("footer");

    const aIcons = document.createElement("a");
    const aImage = document.createElement("a");

    aIcons.setAttribute("href", "https://www.flaticon.com/icons");
    aImage.setAttribute("href", "https://www.freepik.com/free-vector/coffee-shop-with-wooden-counter-stools-sofas-tables_9886872.htm#query=anime%20cafe%20background&position=27&from_view=search&track=ais");

    aIcons.textContent = "Background Icons created by Freepik - Flaticon";
    aImage.textContent = "Image by upklyak on Freepik";

    footer.appendChild(aIcons);
    footer.appendChild(aImage);

    return footer;
}