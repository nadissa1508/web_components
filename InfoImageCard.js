class InfoImageCard extends HTMLElement {
    constructor() {
        super();

        // Estilos
        const link = document.createElement('link');
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./InfoImageCard.css");
        shadowDOM.appendChild(link);

        var shadow = this.attachShadow({ mode: "open" });

        //contenedor
        var container = document.createElement("div");
        card.setAttribute("class", "container");

        //imagen
        var image = document.createElement("img");
        image.setAttribute("id", "image");

        //titulo del campo
        var title = document.createElement("h3");
        title.setAttribute("id", "title");

        //campo
        var field = document.createElement("label");
        field.setAttribute("id", "field")

        //boton
        var button = document.createElement("button");
        button.setAttribute("id", "reserve-button");

        shadow.appendChild(link);
        shadow.appendChild(container);
        container.appendChild(image);
        container.appendChild(title);
        container.appendChild(field);
        container.appendChild(title);
        container.appendChild(field);
        container.appendChild(title);
        container.appendChild(field);
        container.appendChild(title);
        container.appendChild(field);
        container.appendChild(button);
    }
}

customElements.define("info-image", InfoImageCard);
