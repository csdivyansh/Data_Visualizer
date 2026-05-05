package com.example.data_visualizer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
