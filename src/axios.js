import axios from 'axios';

const instance = axios.create({
    console.log('axios')
    baseURL: 'https://my-react-burger-1ce01.firebaseio.com/'
})

export default instance;
