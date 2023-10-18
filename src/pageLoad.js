import './style.css';
import createNav from './nav';
import createFooter from './footer';

export default function pageLoad() {
    const content = document.querySelector("#content");

    const main = document.createElement("div");
    main.classList.add("main")

    main.appendChild(createNav());
    main.appendChild(createFooter());


    content.appendChild(main);
}