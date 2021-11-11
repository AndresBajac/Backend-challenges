class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    
    getFullName (){
        return (`${this.nombre} ${this.apellido}`) 
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        return (this.mascotas.length)
    }

    addBook(libros){
        this.libros.push(libros)
    }

    getBookNames(){
        return this.libros.map((element) =>  element.nombre);   
    }
}

//OBJETO CON VALORES ARBITRARIOS, PARA LUEGO INVOCAR SUS MÉTODOS
const usuario1 = new Usuario ("Andres", "Bajac", [{nombre:'El señor de los anillos', autor:'JRR Tolkien'}], ["Pippin"])

console.log(usuario1)

console.log(usuario1.getFullName());
//console.log(usuario1.addMascota("Coco"));
console.log(usuario1.countMascotas());
//console.log(usuario1.addBook({nombre:'Harry Potter 5', autor:'JKK Rowling'}));
console.log(usuario1.getBookNames());