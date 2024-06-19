import axios from 'axios';

export const createClient = async (client)=>{

await axios.post('http://localhost:4000/client', client)
}

try {
    const response = await createClient(values)
    console.log(response)
} catch (error) {
    console.error(error)
}















