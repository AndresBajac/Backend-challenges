const Container = require('./manejoDeArchivos')

const run = async function(){
    const file = new Container('notes.json')
    await file.init()

    let save = await file.save({nombre:'Andrés', apellido:'Bajac', edad: 29})
    console.log(`Nuevo item con id ${save}`)

    let all = file.getAll()
    console.log(`el tamaño de la lista es de ${all.length}`)

    let getId = file.getById(3)
    console.log(`el objeto es ${getId}`)
}

run()