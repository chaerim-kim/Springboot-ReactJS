import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8000/users"

class UserService {
    
    // this file makes a rest API call to the backend
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserByID(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId)
    }

    updateUser(user, userId){
        //  pass first argument as a post argument, then its the user object to the put method
        return axios.put(USER_API_BASE_URL + '/'+ userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/'+ userId);
    }


}

export default new UserService();