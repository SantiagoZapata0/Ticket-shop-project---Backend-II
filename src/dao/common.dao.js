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

    async create(data){
        try{
            const result = await this.model.create(data);
            return result
        } catch(err){
            throw err
        }
    }

    async update(id, data){
        try{
            const result = await this.model.findByIdAndUpdate(id, data, { returnDocument: "after" });
            return result
        } catch(err){
            throw err
        }
    }

    async delete(id){
        try{
            const result = await this.model.findByIdAndDelete(id);
            return result
        } catch(err){
            throw err
        }
    }
}