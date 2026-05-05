package com.example.data_visualizer.controller;

import com.example.data_visualizer.DTO.UploadResponseDTO;
import com.example.data_visualizer.service.FileProcessingService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin
public class FileUploadController {

    private final FileProcessingService fileProcessingService;

    @PostMapping("/upload")
    public ResponseEntity<UploadResponseDTO> uploadFile(
            @RequestParam("file") MultipartFile file
    ) {

        return ResponseEntity.ok(
                fileProcessingService.processFile(file)
        );
    }
}
