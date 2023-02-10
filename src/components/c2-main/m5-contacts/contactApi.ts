import axios from "axios";
// http:localhost:5000/
// https://portfolio-app-server.herokuapp.com

export const instance = axios.create({
    baseURL:'https://portfolio-app-server.herokuapp.com'
})

export const contactApi = {
    sendMessage: async (name: string, email: string, message: string) => {
        return instance.post('/sendMessage', {name, email, message});
    }
}