import axios from "axios";

export default class MyIp {
    static async getAll() {
        try {
            const response = await axios.get('https://getindex.ru/back/api/V1/myip')
            return response.data
        } catch (e) {
            console.log('Не удаётся получить IP-адрес пользователя')
        }
    }

}