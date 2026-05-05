package com.example.dashboard.util;

import com.example.dashboard.dto.ChartConfigDTO;
import com.example.dashboard.dto.ColumnInfoDTO;

import java.util.ArrayList;
import java.util.List;

public class ChartSuggestionEngine {

    public static List<ChartConfigDTO> generateCharts(
            List<ColumnInfoDTO> columns
    ) {

        List<ChartConfigDTO> charts = new ArrayList<>();

        String categoryColumn = null;
        String numberColumn = null;
        String dateColumn = null;

        for (ColumnInfoDTO column : columns) {

            if (column.getType().equals("CATEGORY")
                    && categoryColumn == null) {

                categoryColumn = column.getName();
            }

            if (column.getType().equals("NUMBER")
                    && numberColumn == null) {

                numberColumn = column.getName();
            }

            if (column.getType().equals("DATE")
                    && dateColumn == null) {

                dateColumn = column.getName();
            }
        }

        if (categoryColumn != null && numberColumn != null) {

            charts.add(
                    new ChartConfigDTO(
                            "BAR",
                            categoryColumn,
                            numberColumn
                    )
            );

            charts.add(
                    new ChartConfigDTO(
                            "PIE",
                            categoryColumn,
                            numberColumn
                    )
            );
        }

        if (dateColumn != null && numberColumn != null) {

            charts.add(
                    new ChartConfigDTO(
                            "LINE",
                            dateColumn,
                            numberColumn
                    )
            );
        }

        return charts;
    }
}