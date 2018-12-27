import axios from 'axios';

export default axios.create({
    
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:
        'Client-ID 54c55b6730b7b01c4d77922299bc6dfeb70b6ffc63ea5f4ed4b0e996ac947506' 
    }
})