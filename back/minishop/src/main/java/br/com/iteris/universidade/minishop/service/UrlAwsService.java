package br.com.iteris.universidade.minishop.service;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;





import java.net.URI;
import java.time.Duration;


@Service
public class UrlAwsService {
    public String getPressignedURL(String fileName) {

        try {
            // Objetos necessários
            String bucketName = "minishop-imagens";
            // Get an Amazon S3 Client
            // Endpoint do nosso ambiente de testes: http://localhost:4566
            S3Presigner presigner = S3Presigner.builder()
                    .endpointOverride(URI.create("http://localhost:4566"))
                    .build();

            // Criando objetos de requisição
            PutObjectRequest objectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(fileName)
                    .build();

            PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
                    .signatureDuration(Duration.ofMinutes(10))
                    .putObjectRequest(objectRequest)
                    .build();

            // Gera URL e retorna
            PresignedPutObjectRequest presignedRequest = presigner.presignPutObject(presignRequest);
            return presignedRequest.url().toString();

        } catch (S3Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
}
