import Api from "./Api";

interface LoginResponse{
    token:string
}

export const login=async (email:string,password:string):Promise<string|null>=>{
    try{
       const response=await Api.post<LoginResponse>("/login",{email,password})
       if(response.data.token)
       {
        console.log('Login Success')
        localStorage.setItem("token",response.data.token)
        console.log('Generated Token:',response.data.token)
        return response.data.token
       }
    }catch(error)
    {
        console.error('Login Failed',error)
    }

    return null
}

export const fetchProtectedData=async ():Promise<string>=>{
    const token=localStorage.getItem("token")
    if(!token)
    {
        return "Access Denied. Please login"
    }
    try{
        const response=await Api.get('/users?page=1')
        return JSON.stringify(response.data,null,2)
    }catch(error)
    {
        console.error("Access Denied:",error)
        return "Error While Fetching Data"
    }
}