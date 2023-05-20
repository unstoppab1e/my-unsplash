import Picture from '../models/Picture.js'

class PictureController{
    async create(req,res){
        try{
            const { title, description, imageUrl, uploadedBy } = req.body
            const picture = await Picture.create({title, description, imageUrl, uploadedBy})
            console.log(req.query);
            res.json(picture);
        } catch(e){
            res.status(500).json(e);
        }
    }

    async getAll(req,res){
        try{
            const pictures = await Picture.find();
            return res.json(pictures);
        } catch(e){
           res.status(500).json(e); 
        }
    }
    async getOne(req,res){
        try{
            const {id} = req.params;
            if(!id){
                res.status(400).json({message: "ID not found"})
            } 
            const picture = await Picture.findById(id);
            return res.json(picture);
        } catch(e){
           res.status(500).json(e); 
        }
    }
    async update(req,res){
        try{
            const { title, description, imageUrl} = req.body;
            if(!req.params.id){
                res.status(400).json({message: "ID not found"})
            }
            const updatedPicture = await Picture.findByIdAndUpdate(req.params.id, { title, description, imageUrl}, {new: true})
            return res.json(updatedPicture);
        } catch(e){
           res.status(500).json(e); 
        }
    }
    async delete(req,res){
        try{
            const {id} = req.params;
            if(!id){
                res.status(400).json({message: "ID not found"})
            }
            const picture = await Picture.findByIdAndDelete(id);
            return res.json(picture);
        } catch(e){
           res.status(500).json(e); 
        }
    }
}

export default new PictureController();