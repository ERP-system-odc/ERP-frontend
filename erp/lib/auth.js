import axios from 'axios';

axios.defaults.withCredentials = true;

export const loginUser = async (email, password)=>{
    const { data }= await axios.post('http://localhost:5001/api/auth/signin',{email, password});
    console.log(data);
    console.log(data.email)
    
}
export const getUserProfile = async ()=>{
    const {data} = await axios.get('http://localhost:5001/api/auth/signin');
    return data;
}


export const signinUser = async (signin)=>{
    const { data }= await axios.post('http://localhost:5001/api/auth/signup',{signin});
    console.log(data);
    
} 