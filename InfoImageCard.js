class InfoImageCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        this.isOpen = false;

        // Estilos
        const link = document.createElement('link');
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./InfoImageCard.css");
        shadow.appendChild(link);

        //contenedor
        let container = document.createElement("div");
        container.setAttribute("class", "container");

        //imagen
        let image = document.createElement("img");
        image.setAttribute("id", "image");
        image.style.cursor = "pointer";

        let detailsContainer = document.createElement("div");
        detailsContainer.setAttribute("id", "details");
        detailsContainer.style.display = "none";

        const details = [
            { title: "Capacidad", field: "4 personas" },
            { title: "Cama", field: "King-size" },
            { title: "Incluye", field: "Desayuno, WiFi y closet" },
            { title: "Precio", field: "$300 la noche" }
        ];

        details.forEach(detail => {
            //agregar el titulo del campo
            let title = document.createElement("h3");
            title.setAttribute("id", "title");
            title.textContent = detail.title;

            //agregar el campo
            let field = document.createElement("p");
            field.setAttribute("id", "field")
            field.textContent = detail.field;

            detailsContainer.appendChild(title);
            detailsContainer.appendChild(field);
        });
        
        //boton
        let button = document.createElement("button");
        button.setAttribute("id", "reserve-button");
        button.textContent = "Reservar";

        detailsContainer.appendChild(button);

        container.appendChild(image);
        container.appendChild(detailsContainer);
        shadow.appendChild(link);
        shadow.appendChild(container);

        //hacer que la imágen sea clickeable
        image.addEventListener("click", () => this.showDetails());
    }

    showDetails() {
        this.isOpen = !this.isOpen;
        let details = this.shadowRoot.querySelector("#details");
        details.style.display = this.isOpen ? "block" : "none";
    }

    //se añade un info image al documento 
    connectedCallback() {

        const src = this.getAttribute("src") || "https://www.hotelmarbellamexico.com/wp-content/uploads/2024/09/habitacion-king-size-estandar-hotel-marbella-mexico-01-1.webp";
        this.shadowRoot.querySelector("#image").src = src;

        console.log("info image element added to page.");
    }

    // se llama cuando un info image se desconecta del dom del documento 
    disconnectedCallback() {

        console.log("info image element removed from page.");

    }

    //cuando el elemento se mueve de un documento a otro
    adoptedCallback() {
        console.log("info image element moved to new page.");
    }

    //Se invoca cada vez que los atributos del elemento se añaden, quitan o cambian
    attributeChangedCallback(name, oldValue, newValue) {
        console.log("info image element attributes changed.");

    }
}

customElements.define("info-image", InfoImageCard);

