package uk.fyp.visualvcdbserver.Controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import uk.fyp.visualvcdbserver.Model.User;
import uk.fyp.visualvcdbserver.Service.UserService;

import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

//service calls repository and controller calls service

// declaring URIs
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    // declare the service to call
    private final UserService userService;

    // controller handles the HTTP requests
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(path="/", method = RequestMethod.GET)
    public String index(Model model) {
        // if i do @Controller, it renders properly but it doesnt render the /user pagec
        return "index.html";
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        return userService.findUsers();
    }

//    @GetMapping("/title/{bookTitle}")
//    public List findByTitle(@PathVariable String bookTitle) {
//        return bookRepository.findByTitle(bookTitle);
//    }
}

