package com.example.data_visualizer.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChartConfigDTO {

    private String chartType;
    private String xAxis;
    private String yAxis;
}