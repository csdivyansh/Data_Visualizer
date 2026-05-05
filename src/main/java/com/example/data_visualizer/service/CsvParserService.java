package com.example.data_visualizer.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CsvParserService {

    public List<Map<String, Object>> parseCSV(MultipartFile file)
            throws Exception {

        List<Map<String, Object>> data = new ArrayList<>();

        CSVReader reader = new CSVReader(
                new InputStreamReader(file.getInputStream())
        );

        List<String[]> rows = reader.readAll();

        String[] headers = rows.get(0);

        for (int i = 1; i < rows.size(); i++) {

            Map<String, Object> rowMap = new HashMap<>();

            for (int j = 0; j < headers.length; j++) {

                rowMap.put(headers[j], rows.get(i)[j]);
            }

            data.add(rowMap);
        }

        return data;
    }
}
