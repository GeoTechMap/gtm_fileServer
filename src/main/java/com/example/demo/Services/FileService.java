package com.example.demo.Services;

import java.io.FileOutputStream;
import java.util.Base64;

import org.springframework.stereotype.Service;
import java.io.File;
import java.io.FileOutputStream;
import java.util.Base64;

@Service
public class FileService {
    
    public void saveFile(String nomFichier ,String hashValue, String base64) {
        File file = new File(nomFichier);
        try( FileOutputStream fos = new FileOutputStream(file);)
        {
           
            byte[] decoder = Base64.getDecoder().decode(base64);
            fos.write(decoder);
            System.out.println("PDF Saved");
        }catch(Exception e)
        {
            e.printStackTrace();
        }
        
    }
}
