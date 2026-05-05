package com.example.dashboard.util;

import com.example.dashboard.dto.ColumnInfoDTO;

import java.time.LocalDate;
import java.util.*;

public class ColumnTypeDetector {

    public static List<ColumnInfoDTO> detectColumnTypes(
            List<Map<String, Object>> data
    ) {

        List<ColumnInfoDTO> columns = new ArrayList<>();

        if (data.isEmpty()) return columns;

        Map<String, Object> firstRow = data.get(0);

        for (String key : firstRow.keySet()) {

            Object value = firstRow.get(key);

            String type = detectType(value);

            columns.add(
                    new ColumnInfoDTO(key, type)
            );
        }

        return columns;
    }

    private static String detectType(Object value) {

        if (value == null) {
            return "CATEGORY";
        }

        String str = value.toString();

        try {

            Double.parseDouble(str);

            return "NUMBER";

        } catch (Exception ignored) {
        }

        try {

            LocalDate.parse(str);

            return "DATE";

        } catch (Exception ignored) {
        }

        return "CATEGORY";
    }
}