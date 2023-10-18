import './style.css';
import createNav from './nav';
import createFooter from './footer';
import createHome from './home';

export default function pageLoad() {
    const content = document.querySelector("#content");

    const main = document.createElement("div");
    main.classList.add("main")

    const mainContent = document.createElement("section");
    mainContent.classList.add("main-content");
    // Add Home content on initial page load
    mainContent.appendChild(createHome());
    mainContent.appendChild(createFooter());

    main.appendChild(createNav());
    main.appendChild(mainContent);

    content.appendChild(main);
}