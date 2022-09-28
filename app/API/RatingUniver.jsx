import axios from "axios";

export default class RatingUniver {
    static async getAll() {
        try {
            const response = await axios.get('https://getindex.ru/back/api/V1/rating')
            return response.data
        } catch (e) {
            console.log('Невозможно загрузить список')
        }
    }
}