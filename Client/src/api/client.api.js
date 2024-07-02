import axios from "axios";

export const createClient = async (client) => {
    try {
        const response = await axios.post("http://localhost:4000/clients", client);
    } catch (error) {
        console.error(
            "Error al hacer la solicitud desde api:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

export const getClients = async () => {
    try {
        const response = await axios.get("http://localhost:4000/clients/");
    } catch (error) {
        console.error(
            "Error al hacer la solicitud desde api:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

export const getClient = async (client) => {
    try {

        const response = await axios.post("http://localhost:4000/clients/:email/:password",client); //se cambio a post
        return response;
        
    } catch (error) {
        console.error(
            "Error al hacer la solicitud desde api:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

export const getBarber = async () => {
    try {
        const response = await axios.get("http://localhost:4000/barbers/");
    } catch (error) {
        console.error(
            "Error al hacer la solicitud desde api:",
            error.response ? error.response.data : error.message
        )
        throw error;
    }
};

export const createFactura = async (factura) => {
    try {
        const response = await axios.post("http://localhost:4000/factura", factura);
    } catch (error) {
        console.error(
            "Error al hacer la solicitud desde api:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

export const getFactura = async (factura) => {
    try {

        const response = await axios.post("http://localhost:4000/factura/:id",factura); //se cambio a post
        return response;
        
    } catch (error) {
        console.error(
            "Error al hacer la solicitud desde api:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

