import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:2656/',
    timeout: 1000
})
apiClient.interceptors.request.use(
    (config) => {
        //extraemos el token de los headers
        const userDetails = localStorage.getItem('token')
        if (userDetails) {
            const token = JSON.parse(userDetails)
            config.headers.Authorization = `${token}`
            console.log(`Token ingresado ${token}`)
        }
        return config
    },
    (err) => Promise.reject(err)
)

//Este es un api general pero lo pongo aqui por comodidad
export const loginRequest = async(user)=>{
    try {
        return await apiClient.post('/user/login', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const registerRequest = async(user)=>{
    try {
        return await apiClient.post('/user/register', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const testRequest = async()=>{
    try {
        return await apiClient.get('/user/test')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}