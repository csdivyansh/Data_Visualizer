package com.example.dashboard.util;

import java.util.List;
import java.util.Map;

public class AggregationUtil {

    public static double sum(
            List<Map<String, Object>> data,
            String column
    ) {

        double sum = 0;

        for (Map<String, Object> row : data) {

            Object val = row.get(column);

            if (val != null) {

                sum += Double.parseDouble(
                        val.toString()
                );
            }
        }

        return sum;
    }
}