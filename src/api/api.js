import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "8696c844-7167-4319-bc36-0e8015172c12"
    }

})

export const usersAPI = {

    // Получаем всех пользователей
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    // Авторизация пользователя
    getMe() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    },

    // Запрашиваем ID пользователя
    getUserId(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    }
}





