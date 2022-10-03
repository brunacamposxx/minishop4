package br.com.iteris.universidade.minishop.component;

import lombok.Getter;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManagerFactory;

/**
 * Essa classe executa algumas operações para recuperar uma instância de conexão com o banco
 * @see <a href="https://stackoverflow.com/a/25064080/7467989">Spring Boot - Handle to Hibernate SessionFactory</a>
 */
@Getter
@Configuration
public class DatabaseSession {
    private final SessionFactory hibernateFactory;

    @Autowired
    public DatabaseSession(EntityManagerFactory factory) {
        if(factory.unwrap(SessionFactory.class) == null){
            throw new NullPointerException("factory is not a hibernate factory");
        }
        hibernateFactory = factory.unwrap(SessionFactory.class);
    }
}
