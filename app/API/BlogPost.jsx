import axios from "axios";

export default class BlogPost {
    static async getAll() {
        try {
            const response = await axios.get('https://getindex.ru/back/api/V1/blog')
            return response.data
        } catch (e) {
            console.log('Невозможно загрузить список постов')
        }
    }
}