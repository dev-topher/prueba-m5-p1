// assets/js/animals.js
class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
    }

    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getImg() {
        return this.img;
    }

    setComentarios(comentarios) {
        this.comentarios = comentarios;
    }

    getSonido() {
        return this.sonido;
    }
}

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Rugir() {
        return this.sonido;
    }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Aullar() {
        return this.sonido;
    }
}

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Grunir() {
        return this.sonido;
    }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Sisear() {
        return this.sonido;
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    Chillar() {
        return this.sonido;
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila };
