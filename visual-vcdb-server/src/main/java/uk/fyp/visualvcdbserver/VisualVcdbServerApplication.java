package uk.fyp.visualvcdbserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// added below to disable default spring login
@SpringBootApplication(exclude = {org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class, org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class})
public class VisualVcdbServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(VisualVcdbServerApplication.class, args);
    }

}
