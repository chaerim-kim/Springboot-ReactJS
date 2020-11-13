package uk.fyp.visualvcdbserver.Service.Impl;

import org.springframework.stereotype.Service;
import uk.fyp.visualvcdbserver.Model.User;
import uk.fyp.visualvcdbserver.Repository.TestRepository;
import uk.fyp.visualvcdbserver.Service.UserService;

import java.util.List;


// Logic is here
@Service
public class UserServiceImpl implements UserService {
    private TestRepository testRepository;

    public UserServiceImpl(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    @Override
    public List<User> findUsers() {
        return testRepository.findAll();
    }

//    @Override
//    public User getByID(Long id){
//        return testRepository.findByID(id).orElse(null);
//    }
}
