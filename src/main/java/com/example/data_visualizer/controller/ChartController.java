package com.example.data_visualizer.controller;

import com.example.data_visualizer.DTO.ChartConfigDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/charts")
@CrossOrigin(origins = "http://localhost:5173")
public class ChartController {

    // Demo data - in production, this would come from MongoDB
    private static final List<Map<String, Object>> demoCharts = new ArrayList<>();

    static {
        Map<String, Object> chart1 = new HashMap<>();
        chart1.put("id", 1);
        chart1.put("title", "Sales Overview");
        chart1.put("type", "line");
        demoCharts.add(chart1);

        Map<String, Object> chart2 = new HashMap<>();
        chart2.put("id", 2);
        chart2.put("title", "Revenue by Category");
        chart2.put("type", "bar");
        demoCharts.add(chart2);
    }

    @GetMapping
    public List<Map<String, Object>> getAllCharts() {
        return demoCharts;
    }

    @GetMapping("/{id}")
    public Map<String, Object> getChartById(@PathVariable Long id) {
        return demoCharts.stream()
                .filter(chart -> chart.get("id").equals(id))
                .findFirst()
                .orElse(new HashMap<>());
    }

    @PostMapping
    public Map<String, Object> createChart(@RequestBody ChartConfigDTO config) {
        Map<String, Object> newChart = new HashMap<>();
        newChart.put("id", demoCharts.size() + 1L);
        newChart.put("title", "New Chart");
        newChart.put("type", config.getChartType());
        newChart.put("xAxis", config.getXAxis());
        newChart.put("yAxis", config.getYAxis());
        
        demoCharts.add(newChart);
        return newChart;
    }

    @DeleteMapping("/{id}")
    public Map<String, String> deleteChart(@PathVariable Long id) {
        demoCharts.removeIf(chart -> chart.get("id").equals(id));
        Map<String, String> response = new HashMap<>();
        response.put("message", "Chart deleted successfully");
        return response;
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("message", "Data Visualizer API is running");
        return response;
    }
}
