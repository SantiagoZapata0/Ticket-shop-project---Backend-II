export class Common{
    constructor(model){
       this.model = model; 
    }

    async getAll(){
        try{
            const result = await this.model.find();
            return result
        } catch(err){
            throw err
        }
    }

    async getById(id){
        try{
            const result = await this.model.findById(id);
            return result
        } catch(err){
            throw err
        }
    }

}