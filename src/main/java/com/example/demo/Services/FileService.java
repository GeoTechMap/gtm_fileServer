package com.example.demo.Services;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Base64;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;

@Service
public class FileService {
    @Autowired
    private Environment env;
    // final static String gtmBucket = "src/main/resources/static/uploads";
    final static String gtmBucket = "/home/gtm_bucket";
    
    public void saveFile(String hashNomFichier , String base64, String nomFichierASuprimmer) {
        File fileName = new File(hashNomFichier+".pdf");
        String fileLocation = new File(gtmBucket).getAbsolutePath() + "/" + fileName;
        try( FileOutputStream fos = new FileOutputStream(fileLocation);)
        {
            byte[] decoder = Base64.getDecoder().decode(base64);
            fos.write(decoder);
            fos.flush();
            fos.close();
            System.out.println("PDF Saved");
            if(nomFichierASuprimmer.length() > 0){
                File file = new File(gtmBucket+"/"+nomFichierASuprimmer+".pdf");
                if(file.delete()){
                    System.out.println("File deleted successfully");
                } else{
                    System.out.println("Failed to delete the file");
                } 
            }
            
        }catch(Exception e)
        {
            e.printStackTrace();
        }
        
    }

    public String getFile(String  nomFichier, String  hashNomFichier, String hashBase64) throws NoSuchAlgorithmException, InvalidKeySpecException
    {
        //__récupération du fichier en question
       String base64Pdf =  encodeFileToBase64(hashNomFichier + ".pdf");
        //__ fin récupération du fichier en question
        //__ hasher le résultat
        String newHashValueForPDF = hashString(base64Pdf);
        //__ fin hasher le résultat
        
        System.out.println(hashBase64);
        System.out.println(newHashValueForPDF);
        if(hashBase64.equals(newHashValueForPDF))
        {
            
            return base64Pdf;
        }
        else
        {
            return "Error no such File";
        }
    }
    
    public String hashString(String stringToHash) throws NoSuchAlgorithmException, InvalidKeySpecException
    {
        //__generer hash du nom du fichier
        String secretSalt = env.getProperty("secret_salt");
        byte[] secretSaltInBytes = secretSalt.getBytes(Charset.forName("UTF-8"));
        KeySpec spec = new PBEKeySpec(stringToHash.toCharArray(), secretSaltInBytes, 65536, 128);
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        byte[] hash = factory.generateSecret(spec).getEncoded();
        Base64.Encoder enc = Base64.getEncoder();
        String hashToString = enc.encodeToString(hash);
        //__fin generer hash du nom du fichier
        return hashToString;
    }

    private static String encodeFileToBase64(String fileName) {
        System.out.println("======================="+fileName);
        File file = new File(gtmBucket+"/"+fileName);
        try {
            byte[] fileContent = Files.readAllBytes(file.toPath());
            return Base64.getEncoder().encodeToString(fileContent);
        } catch (IOException e) {
            throw new IllegalStateException("could not read file " + file, e);
        }
    }

}
