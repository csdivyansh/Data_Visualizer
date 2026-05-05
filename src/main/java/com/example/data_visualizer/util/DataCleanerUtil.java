package com.example.dashboard.util;

import java.util.List;
import java.util.Map;

public class DataCleanerUtil {

    public static void clean(
            List<Map<String, Object>> data
    ) {

        for (Map<String, Object> row : data) {

            for (String key : row.keySet()) {

                Object value = row.get(key);

                if (value == null ||
                        value.toString().trim().isEmpty()) {

                    row.put(key, "0");
                }
            }
        }
    }
}