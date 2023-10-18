import trexImage from './trex_pajama.jpeg';

export default function createContact() {
    const contact = document.createElement("section");
    contact.classList.add("contact")
    contact.setAttribute("id", "contact");

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const pTel = document.createElement("p");
    const pEmail = document.createElement("p");

    pTel.textContent = "Tel: 889-112-TREX";
    pEmail.textContent = "Email: coffeesaurus@trex.din";

    const image = new Image();
    image.src = trexImage;
    image.id = "trex-pajama";

    const contactMailbox = document.createElement("div");
    contactMailbox.classList.add("contact-mailbox");

    const nameDiv = document.createElement("div");
    const nameLabel = document.createElement("label");
    const nameInput = document.createElement("input");

    const emailDiv = document.createElement("div");
    const emailLabel = document.createElement("label");
    const emailInput = document.createElement("input");

    const descriptionDiv = document.createElement("div");
    const descriptionLabel = document.createElement("label");
    const descriptionTextArea = document.createElement("textarea");

    nameLabel.textContent = "Name:";
    emailLabel.textContent = "Email:";
    descriptionLabel.textContent = "Description:";

    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    descriptionDiv.appendChild(descriptionLabel);
    descriptionDiv.appendChild(descriptionTextArea);

    contactInfo.appendChild(image);
    contactInfo.appendChild(pTel);
    contactInfo.appendChild(pEmail);

    contactMailbox.appendChild(nameDiv);
    contactMailbox.appendChild(emailDiv);
    contactMailbox.appendChild(descriptionDiv);

    contact.appendChild(contactInfo);
    contact.appendChild(contactMailbox);

    return contact;
}