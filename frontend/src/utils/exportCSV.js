import { saveAs } from "file-saver";

export function exportCSV(data) {

    const headers = ["Hazard", "Severity", "Confidence", "Time"];

    const rows = data.map(item => [
        item.hazard,
        item.severity,
        item.confidence,
        item.time
    ]);

    const csvContent = [
        headers,
        ...rows
    ]
        .map(row => row.join(","))
        .join("\n");

    const blob = new Blob([csvContent], {
        type: "text/csv;charset=utf-8;"
    });

    saveAs(blob, "hazard-report.csv");
}