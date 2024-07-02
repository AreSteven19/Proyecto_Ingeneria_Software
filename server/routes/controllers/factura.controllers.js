import { pool } from "../../db.js";


//All factura
export const getFacturas = async (req, res) => {
    try {
        const [resul] = await pool.query("select * from factura");
        res.json(resul);
        //console.log(resul);
    }
    catch (error) {
       return res.status(500).json({massage:error.message});
    }
}

// Fetch a factura by id
export const getFactura = async (req, res) => {
   
   try {
    const [resul] = await pool.query("select *from factura where id= ?",req.params.id);

    
    res.json(resul);
   } catch (error) {
    return res.status(500).json({massage:error.message});
   }
    
}

// Register a new factura
export const createFactura = async (req, res) => {

    try {
        const { client_id_name, client_id_barber, date, time, price, total} = req.body;
        await pool.query(" insert into factura (client_id_name, client_id_barber, date, time, price, total) values (?,?,?,?,?,?)", 
              [client_id_name, client_id_barber, date, time, price, total]);

        
        res.send('creando services');
        }
    catch (error) {
        return res.status(500).json({massage:error.message});
        
    }

}

// Edit service data
export const updateFactura =  async (req, res) => {
    try {
        const resul = await pool.query("update factura set ? where id = ?",
        [   req.body,
            req.params.id]);
            res.json(resul);
    //res.send('u');
    } catch (error) {
        return res.status(500).json({massage:error.message});
    }
    
}

//Delete a service
export const deleteFactura = async (req, res) => {
    try  {  
        const [resul] = await pool.query("delete from factura where id= ?",
        [req.params.id]);

        if(resul.affectedRows===0)
            return res.status(404).json({message: "factura not found"})
        return res.sendStatus(204);
     
    }
    catch(error){

        return res.status(500).json({massage:error.message})

    }

  
}


