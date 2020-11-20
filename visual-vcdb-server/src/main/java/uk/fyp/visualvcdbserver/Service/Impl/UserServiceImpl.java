package uk.fyp.visualvcdbserver.Service.Impl;

import org.springframework.stereotype.Service;
import uk.fyp.visualvcdbserver.Model.User;
import uk.fyp.visualvcdbserver.Repository.UserRepository;
import uk.fyp.visualvcdbserver.Service.UserService;

import java.util.List;


// Logic is here
@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findUsers() {
        return userRepository.findAll();
    }


    // save user
//    User user1 = new User();
//    user1.setFirstname("john"); user1.setLastname("dew");
//    user1.setAge(16);
//
//    userService.saveUser(user1);/


//    @Override
//    public User getByID(Long id){
//        return testRepository.findByID(id).orElse(null);
//    }
}
