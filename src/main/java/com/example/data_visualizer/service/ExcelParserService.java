package com.example.data_visualizer.service;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.util.*;

@Service
public class ExcelParserService {

    public List<Map<String, Object>> parseExcel(MultipartFile file) {

        List<Map<String, Object>> data = new ArrayList<>();

        try (InputStream inputStream = file.getInputStream();
             Workbook workbook = new XSSFWorkbook(inputStream)) {

            Sheet sheet = workbook.getSheetAt(0);

            Row headerRow = sheet.getRow(0);

            if (headerRow == null) {
                throw new RuntimeException("Excel file has no header row");
            }

            List<String> headers = new ArrayList<>();

            for (Cell cell : headerRow) {
                headers.add(cell.getStringCellValue());
            }

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {

                Row row = sheet.getRow(i);

                if (row == null) continue;

                Map<String, Object> rowData = new HashMap<>();

                for (int j = 0; j < headers.size(); j++) {

                    Cell cell = row.getCell(j);

                    if (cell == null) {
                        rowData.put(headers.get(j), "");
                        continue;
                    }

                    switch (cell.getCellType()) {

                        case STRING:
                            rowData.put(headers.get(j),
                                    cell.getStringCellValue());
                            break;

                        case NUMERIC:
                            if (DateUtil.isCellDateFormatted(cell)) {
                                rowData.put(headers.get(j),
                                        cell.getDateCellValue());
                            } else {
                                rowData.put(headers.get(j),
                                        cell.getNumericCellValue());
                            }
                            break;

                        case BOOLEAN:
                            rowData.put(headers.get(j),
                                    cell.getBooleanCellValue());
                            break;

                        default:
                            rowData.put(headers.get(j),
                                    cell.toString());
                    }
                }

                data.add(rowData);
            }

        } catch (Exception e) {
            throw new RuntimeException("Error parsing Excel file: " + e.getMessage(), e);
        }

        return data;
    }
}