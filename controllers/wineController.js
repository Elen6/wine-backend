import Wine from '../schema/productSchema.js';


export const getWines = async (req, res) => {
    try {
        const wines = await Wine.find()
        
      res.json(wines)
        
    } catch (error) {
        res.json({
            message: "something went wrong"
        })
    }
}

export const getOneWine = async (req, res) => {
    // const id=req.params.id
    // console.log(id)
    
    //  Wine.findOne({_id:id}, (err, wine)=> {
    //     if(err){
    //       "something wrong wrong"
    //     }
    //     else{
    //           res.json({wine});
    //         }
    //     });


    try {
        const id=req.params.id
        const wine = await Wine.findOne({_id:id})
        res.json(wine)
    } catch (error) {
        console.log(error)
        res.json({
            message: "something went wrong"
        })
    }
}

export const updateWine = async (req, res) => {
    try {
        const id=req.params.id
        const updatedWine= {
            title:req.body.title,
            price:req.body.price,
            image:req.body.image,
            description:req.body.description
             
        }
         
        const wine = await Wine.findOneAndUpdate({_id:id}, updatedWine)
        await wine.save()
        res.json(wine)

    } catch (error) {
        console.log(error)
        res.json({
            message: "something went wrong"
        })
    }
}




export const postWine = async (req, res) => {
    try {
        const wine = new Wine({
            title:req.body.title,
            price:req.body.price,
            image:req.body.image,
            description:req.body.description
             
        })
        await wine.save()
        res.json(wine)
    } catch(error) {
        res.json({
            message:"something went wrong"
        })


    }
}


export const deleteWine = async (req, res) => {
    try {
        const id=req.params.id
        const deletedWine = await Wine.findOneAndDelete({_id:id})
        
        res.json(deletedWine)
    } catch(error) {
        res.json({
            message:"something went wrong"
        })


    }
}

