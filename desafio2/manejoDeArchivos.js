const fs = require('fs')

class Container{
    constructor(fileName){
        this.file = fileName
        this.countID = 0
        this.list = []
    }
    async write(){
        let str = JSON.stringify(this.list)
        await fs.promises.writeFile(this.file, str)
    }
    async save(object){
        this.countID++
        object['id'] = this.countID
        this.list.push(object)
        await this.write()
        return this.countID
    }
    getById(id){
        if(this.list.includes(id)){
            return this.list[id]
        }
        else{
            return `No se encontro el producto ${id}`
        }
    }
    getAll(){
        return this.list
    }
    async deleteById(id){
        let index = this.list.findIndex((element) => element.id == id)
        this.list.lista.splice(index, 1)
        await this.write()
    }
    async deleteAll(){
        await this.list.splice(0, this.list.length)
    }

    async init(){
        try{
            let data = await fs.promises.readFile(this.file)
            this.list = JSON.parse(data)
            for(let element of this.list){
                if(element.id > this.countID) this.countID = element.id
            }
        }
        catch (error){
            console.log('No se encontro el archivo!!, generando...')
        }
    }
}

module.exports = Container