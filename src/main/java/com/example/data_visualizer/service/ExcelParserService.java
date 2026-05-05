package com.example.data_visualizer.service;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@Service
public class ExcelParserService {

    public List<Map<String, Object>> parseExcel(MultipartFile file)
            throws Exception {

        List<Map<String, Object>> data = new ArrayList<>();

        Workbook workbook = new XSSFWorkbook(file.getInputStream());

        Sheet sheet = workbook.getSheetAt(0);

        Row headerRow = sheet.getRow(0);

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
                        rowData.put(headers.get(j),
                                cell.getNumericCellValue());
                        break;

                    default:
                        rowData.put(headers.get(j),
                                cell.toString());
                }
            }

            data.add(rowData);
        }

        workbook.close();

        return data;
    }
}
