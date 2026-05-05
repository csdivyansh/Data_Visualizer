package com.example.data_visualizer.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ColumnInfoDTO {

    private String name;
    private String type;
}