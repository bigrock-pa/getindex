import axios from "axios";

export default class LoginAuth {
    static async getAll() {
        try {
            const response = await axios.get('https://getindex.ru/back/api/V1/login')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}