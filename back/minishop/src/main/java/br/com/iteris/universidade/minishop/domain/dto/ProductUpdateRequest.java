package br.com.iteris.universidade.minishop.domain.dto;

import jdk.jfr.BooleanFlag;
import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
public class ProductUpdateRequest {
    @NotEmpty(message = "O nome é obrigatorio")
    @Size(max = 100)
    private String ProductName;

    @NotNull(message = "É necessario informar o fornecedor")
    private Integer SupplierId;

    @NotNull(message = "É necessario informar o preço")
    @Min(0)
    private double UnitPrice;

    @BooleanFlag
    private Boolean IsDiscontinued = false;

    @Size(max = 100)
    private String PackageName;

    private List<String> urlImage;
}
