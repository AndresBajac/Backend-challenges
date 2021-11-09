class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    
    getFullName (){
        console.log(`Mi nombre es ${this.nombre}, mi apellido es ${this.apellido}`) 
    }

    addMascota(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBook(libros){
        this.libros.push(libros)
    }

    getBookNames(){
        return this.libros.forEach(element => {console.log(element.name)});
        
    }
}

//OBJETO CON VALORES ARBITRARIOS, PARA LUEGO INVOCAR SUS MÉTODOS
const usuario1 = new Usuario ("Andres", "Bajac", [{name:'El señor de los anillos', autor:'JRR Tolkien'}], ["Pippin"])

console.log(usuario1)

usuario1.getFullName();
usuario1.addMascota("Coco");
usuario1.countMascotas();
usuario1.addBook({name:'Harry Potter 5', autor:'JKK Rowling'});
usuario1.getBookNames()