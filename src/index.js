import pageLoad from "./pageLoad";
import createHome from "./home";
import createMenu from "./menu";
import createFooter from "./footer";

pageLoad();

const btnHome = document.querySelector("#btn-home");
const btnMenu = document.querySelector("#btn-menu");
const btnContent = document.querySelector("#btn-content");
const mainContent = document.querySelector(".main-content");

btnHome.addEventListener("click", () => {
    mainContent.replaceChildren();
    mainContent.appendChild(createHome());
    mainContent.appendChild(createFooter());
});

btnMenu.addEventListener("click", () => {
    mainContent.replaceChildren();
    mainContent.appendChild(createMenu());
    mainContent.appendChild(createFooter());
});