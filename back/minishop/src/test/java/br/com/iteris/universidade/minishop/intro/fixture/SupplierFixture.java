package br.com.iteris.universidade.minishop.intro.fixture;

import br.com.iteris.universidade.minishop.domain.dto.SupplierCreateRequest;
import br.com.iteris.universidade.minishop.domain.entity.Supplier;

import lombok.experimental.UtilityClass;

@UtilityClass
public class SupplierFixture {
    public static Supplier supplierValido(){
        return Supplier.builder()
                .id(1)
                .nome("Americanas")
                .CNPJ("14413949000128")
                .email("ppl@gmail.com")
                .cidade("São Paulo")
                .estado("SP")
                .contato("Priscila")
                .telefone("11997659986")
                .build();

    }
    public static SupplierCreateRequest supplierCreateValido(){
        return SupplierCreateRequest.builder()
                .nome("Americanas")
                .CNPJ("14413949000128")
                .email("ppl@gmail.com")
                .cidade("São Paulo")
                .estado("SP")
                .contato("Priscila")
                .telefone("11997659986")
                .build();

    }
    public static SupplierCreateRequest supplierCreateCNPJInvalido(){
        return SupplierCreateRequest.builder()
                .nome("Americanas")
                .CNPJ("14413949000128")
                .email("ppl@gmail.com")
                .cidade("São Paulo")
                .estado("SP")
                .contato("Priscila")
                .telefone("11997659986")
                .build();

    }
    public static SupplierCreateRequest createRequestWithCNPJ(String input) {
        return SupplierCreateRequest.builder()
                .nome("Americanas")
                .CNPJ(input)
                .email("ppl@gmail.com")
                .cidade("São Paulo")
                .estado("SP")
                .contato("Priscila")
                .telefone("11997659986")
                .build();
    }
    public static SupplierCreateRequest createRequestWithEmail(String input) {
        return SupplierCreateRequest.builder()
                .nome("Americanas")
                .CNPJ("14413949000128")
                .email(input)
                .cidade("São Paulo")
                .estado("SP")
                .contato("Priscila")
                .telefone("11997659986")
                .build();
    }

}
