package com.example.demo.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import com.example.demo.Services.FileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;


@Data
class FileRequest {
    String nomFichier;
    String hashValue;
    String base64;
}

@Data
class SaveFileRequest {
    String hashNomFichier;
    String base64;
    String nomFichierASuprimmer;
}

@Data
class GetFileRequest {
    String nomFichier;
    String hashNomFichier;
    String hashBase64;
}

@Data
class GetFileResponse{
    private String base64File;
    private String message;

}

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("/api/file")
public class FileController {
    @Autowired
    FileService fichierService;

    @Autowired
    private Environment env;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public String saveFile(@RequestBody SaveFileRequest fileRequest) 
    {
        System.out.println("########### request received: "+ fileRequest);
        fichierService.saveFile(
            fileRequest.getHashNomFichier(), 
            fileRequest.getBase64(), 
            fileRequest.getNomFichierASuprimmer());
        return "POST Done";
       
    }
    @PostMapping(path = "/getfile")
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public GetFileResponse getFile(@RequestBody GetFileRequest fileRequest) throws NoSuchAlgorithmException, InvalidKeySpecException 
    {
        // System.out.println("########### hash du nom de fichier: "+ fileRequest.getHashNomFichier());
        // System.out.println("########### hash du Base64 : "+ fileRequest.getHashBase64());
       String base64 = fichierService.getFile(fileRequest.getNomFichier(),fileRequest.getHashNomFichier(),  fileRequest.getHashBase64());
       GetFileResponse fileResponse = new GetFileResponse();
       fileResponse.setBase64File(base64);
       return fileResponse;

    }

}

// POST
//     1. n ap bezwen secret_salt
//     2. n ap bezwen nom ficher a
//     3. hash(1. + 2.)
//     epi fichier a save hash(1. + 2.).pdf
// GET:
// 1. n ap bezwen nom fichier a
// 2. Hash la
// 3. secret sal

//  4 Creer nom an:  hash(1. + 2.).pdf
//  5. Recupere li
//  6. Calculer hash li (5.)
//  7. si 6. = 2. ou retounen fichier a si non yon message


