package com.example.data_visualizer.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/upload")
@CrossOrigin(origins = "http://localhost:5173")
public class UploadController {

    @PostMapping
    public Map<String, Object> uploadFile(@RequestParam("file") MultipartFile file) {
        Map<String, Object> response = new HashMap<>();

        if (file.isEmpty()) {
            response.put("success", false);
            response.put("message", "File is empty");
            return response;
        }

        try {
            String fileName = file.getOriginalFilename();
            long fileSize = file.getSize();
            String contentType = file.getContentType();

            // Validate file type
            if (!isValidFileType(contentType)) {
                response.put("success", false);
                response.put("message", "Invalid file type. Only CSV and Excel files are supported.");
                return response;
            }

            // Validate file size (max 10MB)
            if (fileSize > 10 * 1024 * 1024) {
                response.put("success", false);
                response.put("message", "File size exceeds 10MB limit");
                return response;
            }

            // Process file (parse CSV/Excel)
            // TODO: Implement actual file parsing and storage

            response.put("success", true);
            response.put("message", "File uploaded successfully");
            response.put("fileName", fileName);
            response.put("fileSize", fileSize);
            response.put("contentType", contentType);

            return response;

        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Error processing file: " + e.getMessage());
            return response;
        }
    }

    private boolean isValidFileType(String contentType) {
        if (contentType == null) {
            return false;
        }
        return contentType.equals("text/csv") ||
                contentType.equals("application/vnd.ms-excel") ||
                contentType.equals("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("message", "Upload API is running");
        return response;
    }
}
