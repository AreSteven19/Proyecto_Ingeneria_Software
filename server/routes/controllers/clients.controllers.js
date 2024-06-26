import { pool } from "../../db.js";


//All clients
export const getClients = async (req, res) => {
    try {
        const [resul] = await pool.query("select * from client");
        res.json(resul);
        //console.log(resul);
    }
    catch (error) {
       return res.status(500).json({massage:error.message});
    }
}

// Fetch a client by email and password, Function for login
export const getClient = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const [result] = await pool.query(
        "SELECT * FROM client WHERE email = ? AND password = ?",
        [email, password]
      );
  
      if (result.length === 0) {
        return res.status(404).json({ message: "Usuario o contraseña incorrectos" });
      }
  
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

// Fetch only users who are admins and barbers for the barbers' cards
export const getBarber = async (req, res) => {
   
    try {
     const [resul] = await pool.query("select *from client where fk_id_role in (3,2) ");
 
     
     res.json(resul);
    } catch (error) {
     return res.status(500).json({massage:error.message});
    }
     
 }

// Register a new client
export const createClient = async (req, res) => {

    try {
        const { name, lastname1, lastname2,email,password, telefono,fk_id_role } = req.body;
        const resul = await pool.query(" insert into client(name, lastname1, lastname2,email,password, telefono,fk_id_role) values (?,?,?,?,?,?,?)",
            [name, lastname1, lastname2,email,password, telefono,fk_id_role ]);
        //console.log([resul]);
        res.send('creando clientes');
        

    }
    catch (error) {
        return res.status(500).json({massage:error.message});
        
    }

}

// Edit client data
export const updateClient =  async (req, res) => {
    try {
        const resul = await pool.query("update client set ? where id = ?",
        [   req.body,
            req.params.id]);
            res.json(resul);
    //res.send('u');
    } catch (error) {
        return res.status(500).json({massage:error.message});
    }
    
}

//Delete a client
export const deleteClient = async (req, res) => {
    try  {  
        const [resul] = await pool.query("delete *from client where id= ?",
        [req.params.id]);

        if(resul.affectedRows===0)
            return res.status(404).json({message: "Client not found"})
        return res.sendStatus(204);
        //res.json(resul);


    }
    catch(error){

        return res.status(500).json({massage:error.message})

    }

  
}


