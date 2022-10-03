package br.com.iteris.universidade.minishop.domain.dto;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ValidadorUF implements ConstraintValidator<UfsBrasileiros, String>{


    @Override
    public boolean isValid(String estado, ConstraintValidatorContext constraintValidatorContext) {

        ArrayList<String>UfDosEstados = new ArrayList<>(
                Arrays.asList("AC",
                        "AL",
                        "AP",
                        "AM",
                        "BA",
                        "CE",
                        "DF",
                        "ES",
                        "GO",
                        "MA",
                        "MS",
                        "MT",
                        "MG",
                        "PA",
                        "PB",
                        "PR",
                        "PE",
                        "PI",
                        "RJ",
                        "RN",
                        "RS",
                        "RO",
                        "RR",
                        "SC",
                        "SP",
                        "SE",
                        "TO"));

        return  UfDosEstados.contains(estado);
    }
}
