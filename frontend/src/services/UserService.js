import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8000/users"

class UserService {
    
    // calss list rest API
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserByID(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId)
    }


}

export default new UserService();