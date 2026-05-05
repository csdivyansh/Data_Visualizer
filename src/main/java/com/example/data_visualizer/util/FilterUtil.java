package com.example.dashboard.util;

import java.util.*;
import java.util.stream.Collectors;

public class FilterUtil {

    public static List<Map<String, Object>> applyFilters(
            List<Map<String, Object>> data,
            Map<String, String> filters
    ) {

        return data.stream()
                .filter(row -> {

                    for (Map.Entry<String, String> filter
                            : filters.entrySet()) {

                        String key = filter.getKey();
                        String value = filter.getValue();

                        if (!row.get(key)
                                .toString()
                                .equalsIgnoreCase(value)) {

                            return false;
                        }
                    }

                    return true;
                })
                .collect(Collectors.toList());
    }
}