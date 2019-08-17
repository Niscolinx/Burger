import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-1ce01.firebaseio.com/'
})

export default instance;