import Token from "./Token";
import AppStorage from './AppStorage'
class User {
    login(data)
    {
        // alert('login')
        axios.post('/api/auth/login',data)
            .then(res =>  this.responseAfterLogin(res))

            .catch(error => console.log(error.response.data))
        // alert('Login')
    }

    responseAfterLogin(res)
    {
        // console.log(res)
        const assess_token = res.data.access_token
        const user_name = res.data.user
        if(Token.isValid(assess_token)){
            AppStorage.store(user_name, assess_token)
        }
    }

    hasToken()
    {
        const storeToken = AppStorage.getToken();
        if(storeToken){
           return Token.isValid(storeToken) ? true : false
        }
        return false
        // console.log(storeToken)
    }

    loggedIn()
    {
        return this.hasToken();
    }
    logout()
    {
        AppStorage.clear();
    }
    name(){
        if(this.loggedIn())
        {
            return AppStorage.getUser()
        }
    }
    id()
    {
        if(this.loggedIn())
        {
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }
}

export default User = new User();