import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportPDF(data) {

    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text("Industrial Hazard Analysis Report", 14, 20);

    autoTable(doc, {

        head: [[
            "Hazard",
            "Severity",
            "Confidence",
            "Time"
        ]],

        body: data.map(item => [

            item.hazard,

            item.severity,

            item.confidence,

            item.time

        ])

    });

    doc.save("hazard-report.pdf");

}