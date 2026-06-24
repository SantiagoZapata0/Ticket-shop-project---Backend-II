export class Common{
    constructor(model){
       this.model = model; 
    }

    async getAll(){
        try{
            const result = await this.model.find();
            return result
        } catch(err){
            return null
        }
    }

    async getById(){
        try{
            const result = await this.model.findById();
            return result
        } catch(err){
            return null
        }
    }

    async getAll(){
        try{
            const result = await this.model.find();
            return result
        } catch(err){
            return null
        }
    }

    async getAll(){
        try{
            const result = await this.model.find();
            return result
        } catch(err){
            return null
        }
    }

    async getAll(){
        try{
            const result = await this.model.find();
            return result
        } catch(err){
            return null
        }
    }
}