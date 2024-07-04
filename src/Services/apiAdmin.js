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

export const watchUsersRequest = async()=>{
    try {
        return await apiClient.get('/user/getUser')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const productsRequest = async()=>{
    try{
        return await apiClient.get('/product/getProducts')
    }catch(err){
        error: true,
        err
    }
}

export const deleteUserRequest = async (id) => {
    try {
        return await apiClient.delete(`user/deleteUser/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

///----------------------Parte Fabricciooooooo XD-----------
//Parte de fabricio 
export const deleteAccountRequest = async (id) => {
    try {
      return await apiClient.delete(`account/deleteAccount/${id}`);
    } catch (err) {
      return {
        error: true,
        err
      };
    }
};

export const deleteProductRequest = async (id) =>{
    try{
        return await apiClient.delete(`product/deleteProduct/${id}`);
    }catch(err){
        return {
            error: true,
            err
        }
    }
}



//parte de fabricio
export const accountsRequest = async () => {
    try {
        return await apiClient.get('/account/getAccount')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}


//Parte de agregar usuarios, cuentas y productos
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

export const addProductRequest = async(product)=>{
    try {
        return await apiClient.post('/product/saveProduct', product)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const addAccountRequest = async(account)=>{
    try {
        return await apiClient.post('/account/saveAccount', account)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const depositRequest = async(deposit)=>{
    try {
        return await apiClient.post('/deposit/depositMoney', deposit)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}
