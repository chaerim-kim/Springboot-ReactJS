package uk.fyp.visualvcdbserver.Service;

import uk.fyp.visualvcdbserver.Model.User;

import java.util.List;


// just name all the methods here - better for scalability
public interface UserService {
    // User is a class name
    public List<User> findUsers();


}
