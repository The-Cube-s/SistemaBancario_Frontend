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
            console.log(token)
        }
        return config
    },
    (err) => Promise.reject(err)
)

export const transferRequest = async(transfer)=>{
    try {
        return await apiClient.post('/transfer/transferAmount', transfer)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const myAccountRequest = async () => {
    try {
        return await apiClient.get('/account/getAccountsByUser')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const transferinfoRequest = async () => {
    try {
        return await apiClient.get('/transfer/getAccountInfo')        
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const depositinfoRequest = async () => {
    try {
        return await apiClient.get('/deposit/getUserDeposits')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const myBuysRequest = async () => {
    try {
        return await apiClient.get('/buy/getUserBuys')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const MyUserRequest = async (user) => {
    try {
        return await apiClient.put(`/user/update/${user._id}`, user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (err) {
        return {
            error: true,
            err
        };
    }
};
