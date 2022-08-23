package br.com.iteris.universidade.minishop.controller;
import br.com.iteris.universidade.minishop.service.UrlAwsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UrlAwsController {
    private final UrlAwsService urlAwsService;

    @GetMapping(value = "minishop/urlAWS")
    public ResponseEntity awsPost(String postModel){
        String url = urlAwsService.getPressignedURL(postModel);
        return ResponseEntity.ok(url);
    }
}
