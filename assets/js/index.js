import { Leon, Lobo, Oso, Serpiente, Aguila } from './animales.js';

const animalData = [
    { name: "Leon", imagen: "Leon.png", sonido: "Rugido.mp3" },
    { name: "Lobo", imagen: "Lobo.jpg", sonido: "Aullido.mp3" },
    { name: "Oso", imagen: "Oso.jpg", sonido: "Grunido.mp3" },
    { name: "Serpiente", imagen: "Serpiente.jpg", sonido: "Siseo.mp3" },
    { name: "Aguila", imagen: "Aguila.png", sonido: "Chillido.mp3" }
];

document.getElementById('animal').addEventListener('change', () => {
    const animalName = document.getElementById('animal').value;
    const selectedAnimal = animalData.find(a => a.name === animalName);

    if (selectedAnimal) {
        document.getElementById('preview').style.backgroundImage = `url(assets/imgs/${selectedAnimal.imagen})`;
    } else {
        document.getElementById('preview').style.backgroundImage = "url(assets/imgs/lion.svg)";
    }
});

document.getElementById('btnRegistrar').addEventListener('click', () => {
    const animalName = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;

    // Validación de campos vacíos
    if (!animalName || !edad || !comentarios) {
        alert('Por favor, completa todos los campos antes de registrar el animal.');
        return;
    }

    let selectedAnimal = animalData.find(a => a.name === animalName);
    if (!selectedAnimal) return;

    let animal;
    switch (animalName) {
        case 'Leon':
            animal = new Leon(animalName, edad, selectedAnimal.imagen, comentarios, selectedAnimal.sonido);
            break;
        case 'Lobo':
            animal = new Lobo(animalName, edad, selectedAnimal.imagen, comentarios, selectedAnimal.sonido);
            break;
        case 'Oso':
            animal = new Oso(animalName, edad, selectedAnimal.imagen, comentarios, selectedAnimal.sonido);
            break;
        case 'Serpiente':
            animal = new Serpiente(animalName, edad, selectedAnimal.imagen, comentarios, selectedAnimal.sonido);
            break;
        case 'Aguila':
            animal = new Aguila(animalName, edad, selectedAnimal.imagen, comentarios, selectedAnimal.sonido);
            break;
    }

    if (animal) {
        addAnimalToTable(animal);
        clearForm();
        document.getElementById('preview').style.backgroundImage = "url('assets/imgs/lion.svg')";
    }
});

function addAnimalToTable(animal) {
    const animalContainer = document.getElementById('Animales');
    const animalCard = document.createElement('div');
    animalCard.classList.add('animal-card', 'bg-light', 'm-2', 'p-2', 'text-center');
    
    const img = document.createElement('img');
    img.src = `assets/imgs/${animal.getImg()}`;
    img.alt = animal.getNombre();
    img.classList.add('animal-img');
    img.addEventListener('click', () => showAnimalDetails(animal));

    const audioBtn = document.createElement('button');
    audioBtn.classList.add('btn', 'btn-dark', 'mt-2', 'd-flex', 'justify-content-center', 'align-items-center');

    const audioIcon = document.createElement('img');
    audioIcon.src = 'assets/imgs/audio.svg';
    audioIcon.alt = 'Reproducir sonido';
    audioIcon.classList.add('audio-icon');
    
    audioBtn.appendChild(audioIcon);
    audioBtn.addEventListener('click', () => playSound(animal.getSonido()));

    animalCard.appendChild(img);
    animalCard.appendChild(audioBtn);
    animalContainer.appendChild(animalCard);
}


function showAnimalDetails(animal) {
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h5>${animal.getNombre()}</h5>
        <img src="assets/imgs/${animal.getImg()}"></img>
        <p>Edad: ${animal.getEdad()}</p>
        <p>Comentarios: ${animal.comentarios}</p>
    `;
    $('#exampleModal').modal('show');
}

function playSound(sound) {
    const audioPlayer = document.getElementById('player');
    audioPlayer.src = `assets/sounds/${sound}`;
    audioPlayer.play();
}

function clearForm() {
    document.getElementById('animal').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('comentarios').value = '';
    document.getElementById('preview').style.backgroundImage = '';
}
