import { pool } from "../../db.js";


//All services
export const getServices = async (req, res) => {
    try {
        const [resul] = await pool.query("select * from service");
        res.json(resul);
        //console.log(resul);
    }
    catch (error) {
       return res.status(500).json({massage:error.message});
    }
}

// Fetch a service by id
export const getService = async (req, res) => {
   
   try {
    const [resul] = await pool.query("select *from service where id= ?",req.params.id);

    
    res.json(resul);
   } catch (error) {
    return res.status(500).json({massage:error.message});
   }
    
}

// Register a new service
export const createService = async (req, res) => {

    try {
        const { name,time, description, price} = req.body;
        await pool.query(" insert into service (name, time, description, price) values (?,?,?,?)",
            [name,time, description, price]);
        //console.log([resul]);
        res.send('creando services');
        }
    catch (error) {
        return res.status(500).json({massage:error.message});
        
    }

}

// Edit service data
export const updateService =  async (req, res) => {
    try {
        const resul = await pool.query("update service set ? where id = ?",
        [   req.body,
            req.params.id]);
            res.json(resul);
    //res.send('u');
    } catch (error) {
        return res.status(500).json({massage:error.message});
    }
    
}

//Delete a service
export const deleteService = async (req, res) => {
    try  {  
        const [resul] = await pool.query("delete from service where id= ?",
        [req.params.id]);

        if(resul.affectedRows===0)
            return res.status(404).json({message: "Service not found"})
        return res.sendStatus(204);
        //res.json(resul);


    }
    catch(error){

        return res.status(500).json({massage:error.message})

    }

  
}


