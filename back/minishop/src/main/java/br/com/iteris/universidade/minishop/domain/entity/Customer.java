package br.com.iteris.universidade.minishop.domain.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.List;

@Data
@Builder
@Accessors(chain = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(name = "FirstName", length = 100, nullable = false)
    private String firstName;
    @Column(name = "LastName", length = 100, nullable = false)
    private String lastName;
    @CPF
    @Column(name = "CPF", length = 11, nullable = false)
    private String cpf;
    @Email
    @Column(name = "Email", nullable = false)
    private String email;
    @Column(name = "Phone", length = 15)
    private String phone;
}
