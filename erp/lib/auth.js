import axios from 'axios';

axios.defaults.withCredentials = true;

export const loginUser = async (username, email)=>{
    const { data }= await axios.post('https://jsonplaceholder.typicode.com/users',{username, email});
    console.log(data);
    console.log(data.email)
    
}
export const getUserProfile = async ()=>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    return data;
}