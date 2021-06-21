package com.example.demo.Controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Services.FileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/file")
public class FileController {
    @Autowired
    FileService fichierService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public String saveFile(@RequestParam("nomFichier")  String nomFichier, 
        @RequestBody String hashValue,
        @RequestBody String base64)
    {
        System.out.println("================");
        System.out.println(nomFichier);
        // fichierService.saveFile(nomFichier, hashValue, base64);
        return "okok";
    }
    }
  
