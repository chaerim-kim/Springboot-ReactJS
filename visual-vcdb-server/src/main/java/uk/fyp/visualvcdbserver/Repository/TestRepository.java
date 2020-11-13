package uk.fyp.visualvcdbserver.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;
import uk.fyp.visualvcdbserver.Model.User;

import java.util.List;

// Interface that connects to the db !!!!!!! can do diff queries - can get quite complex
// will extend JPA to get info from db- will need to specify which models it represents
// https://www.baeldung.com/spring-data-jpa-query
@Repository
public interface TestRepository extends JpaRepository<User, Long> {
    List<User> findAll();
//    User findByID();

}
