function createElements(){
    const container = document.getElementById('hotel-card-container');
    let isOpen = false;

    //contenedor
    const card = document.createElement('div');
    card.className = 'hotel-card';

    // Imagen
    const image = document.createElement('img');
    image.src = 'https://i.pinimg.com/736x/80/0a/f0/800af0101b474de67b3d36ea7cac4711.jpg';
    image.className = 'hotel-image';
    image.style.cursor = 'pointer';

    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'hotel-details';
    detailsContainer.style.display = 'none';

    const details = [
        { title: "Capacidad", field: "4 personas" },
        { title: "Cama", field: "King-size" },
        { title: "Incluye", field: "Desayuno, WiFi y closet" },
        { title: "Precio", field: "$300 la noche" }
    ];

    details.forEach(detail => {
        //agregar el titulo del campo
        const title = document.createElement('h3');
        title.className = 'detail-title';
        title.textContent = detail.title;

        //agregar el campo
        const field = document.createElement('p');
        field.className = 'detail-field';
        field.textContent = detail.field;

        detailsContainer.appendChild(title);
        detailsContainer.appendChild(field);
    });

    //boton
    const button = document.createElement('button');
    button.className = 'reserve-button';
    button.textContent = 'Reservar';
    detailsContainer.appendChild(button);

    // Evento para mostrar detalles
    image.addEventListener('click', function() {
        isOpen = !isOpen;
        detailsContainer.style.display = isOpen ? 'flex' : 'none';
    });

    card.appendChild(image);
    card.appendChild(detailsContainer);
    container.appendChild(card);
}

createElements();