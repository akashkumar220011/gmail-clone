import axios from 'axios';

const base_url = 'http://localhost:8080';

const API_GMAIL = async ()=>{
    return await axios({
        method: 'delete',
        url: `${base_url}/endpoint`,
        data: {}
    })
}


export default API_GMAIL;