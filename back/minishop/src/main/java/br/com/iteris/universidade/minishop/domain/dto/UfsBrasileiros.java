package br.com.iteris.universidade.minishop.domain.dto;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = ValidadorUF.class)
public @interface UfsBrasileiros {
    String message() default "A Uf Inserida não pertence a nenhum dos 27 estados brasileiros";

    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
