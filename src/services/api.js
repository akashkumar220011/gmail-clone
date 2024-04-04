import axios from 'axios';

const base_url = 'http://localhost:8080';

const API_GMAIL = async (urlObject, payload)=>{
    return await axios({
        method: urlObject.method,
        url: `${base_url}/${urlObject.endpoint}`,
        data: payload
    })
}


export default API_GMAIL;