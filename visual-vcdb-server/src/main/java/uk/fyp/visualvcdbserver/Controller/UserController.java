package uk.fyp.visualvcdbserver.Controller;


import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import uk.fyp.visualvcdbserver.Model.User;
import uk.fyp.visualvcdbserver.Repository.UserRepository;
import uk.fyp.visualvcdbserver.Service.UserService;

import java.util.List;

//service calls repository and controller calls service

// declaring URIs
@RestController
@CrossOrigin(origins = "http://localhost:3000")     //allow the frontend to access the backend app
public class UserController {

    // declare the service to call
    private final UserService userService;
    private final UserRepository userRepository;

    // controller handles the HTTP requests
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String index(Model model) {
        // if i do @Controller, it renders properly but it doesnt render the /user pagec
        return "index.html";
    }

    // get all users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.findUsers();
    }

    // create user rest api
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // get user by ID
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(("User with id " +id+ " does not exist")));
        return ResponseEntity.ok(user);
    }



}
