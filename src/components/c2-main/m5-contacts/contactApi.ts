import axios from "axios";

export const contactApi = {
    sendMessage: async (name: string, email: string, message: string) => {
        return axios.post('https://portfolio-app-server.herokuapp.com/sendMessage', {name, email, message});
    }
}