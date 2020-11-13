package uk.fyp.visualvcdbserver.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import uk.fyp.visualvcdbserver.Model.User;
import uk.fyp.visualvcdbserver.Service.UserService;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

//service calls repository and controller calls service
// wnat this to be minimal

// declaring URIs
@RestController
public class TestController {
    private final UserService userService;

    // controller handles the HTTP requests
    public TestController(UserService userService) {
        this.userService = userService;
    }

    // main page
    @RequestMapping("/")
    public String index() {
        return "Welcome to Chae's Springbooot!";
    }

//    private static final String template = "Hello, %s!";
//    private final AtomicLong counter = new AtomicLong();
//
//    @RequestMapping("/greeting")
//    public Greeting greeting (@RequestParam(value="name", defaultValue = "World") String name){
//        return new Greeting (counter.incrementAndGet(), String.format (template,name))
//    }

    // the url of the website
    // getMapping ensures that /user is mapped to the user()method
    @GetMapping("/user")
    public List<User> getUsers() {
        return userService.findUsers();
    }

//    @GetMapping("/title/{bookTitle}")
//    public List findByTitle(@PathVariable String bookTitle) {
//        return bookRepository.findByTitle(bookTitle);
//    }
}

