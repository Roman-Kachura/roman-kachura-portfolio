import axios from "axios";

export const contactApi = {
    sendMessage: async (name: string, email: string, message: string) => {
        axios.post('https://gmailsmtp.herokuapp.com/sendMessage', {name, email, message}).then(res => {
            console.log(res);
            alert('asdas')
        });
    }
}