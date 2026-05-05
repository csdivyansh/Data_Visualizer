package com.example.data_visualizer.DTO;
package com.example.dashboard.dto;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class UploadResponseDTO {

    private List<ColumnInfoDTO> columns;

    private List<ChartConfigDTO> charts;

    private List<Map<String, Object>> data;
}
