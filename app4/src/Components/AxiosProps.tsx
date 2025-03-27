import Axios from "axios";

const axiosObj=Axios.create({
    baseURL:'http://localhost:3200/'
})

axiosObj.interceptors.request.use(
    (config)=>{
        console.log('Request Sent:','Url:',config.url,'Method:',config.method,'Data:',config.data)
    return config
    },
    (error)=>{
    console.log('Error Occured:',error)
    return Promise.reject(error)
    }
)

axiosObj.interceptors.response.use(
    (response)=>{
        console.log('Response Received:','Data:',response.data)
        return response
    },
    (error)=>{
    console.log('Error Occured:',error)
    return Promise.reject(error)
    }
)

export default axiosObj