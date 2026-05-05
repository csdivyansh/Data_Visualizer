package com.example.data_visualizer.service;

@Service
@RequiredArgsConstructor
public class FileProcessingService {

    private final CsvParserService csvParserService;
    private final ExcelParserService excelParserService;

    public UploadResponseDTO processFile(MultipartFile file) {

        try {

            String fileName = file.getOriginalFilename();

            List<Map<String, Object>> data;

            if (fileName.endsWith(".csv")) {

                data = csvParserService.parseCSV(file);

            } else if (fileName.endsWith(".xlsx")) {

                data = excelParserService.parseExcel(file);

            } else {

                throw new RuntimeException("Unsupported file type");
            }

            DataCleanerUtil.clean(data);

            List<ColumnInfoDTO> columns =
                    ColumnTypeDetector.detectColumnTypes(data);

            List<ChartConfigDTO> charts =
                    ChartSuggestionEngine.generateCharts(columns);

            UploadResponseDTO response =
                    new UploadResponseDTO();

            response.setColumns(columns);
            response.setCharts(charts);
            response.setData(data);

            return response;

        } catch (Exception e) {

            throw new RuntimeException(e.getMessage());
        }
    }
}
