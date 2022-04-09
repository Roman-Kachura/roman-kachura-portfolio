import axios from "axios";

export const instance = axios.create({
    baseURL:'https://portfolio-app-server.herokuapp.com'
})

export const contactApi = {
    sendMessage: async (name: string, email: string, message: string) => {
        return instance.post('/sendMessage', {name, email, message});
    }
}