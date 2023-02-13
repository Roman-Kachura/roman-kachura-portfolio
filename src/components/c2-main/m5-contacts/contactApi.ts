import axios from "axios";
// http://localhost:5000/
// https://roman-kachura-portfolio.herokuapp.com/

export const instance = axios.create({
    baseURL:'http://localhost:5000/',
    withCredentials: true
})

export const contactApi = {
    sendMessage: async (name: string, email: string, message: string) => {
        return instance.post('/message', {name, email, message});
    }
}