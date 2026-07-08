import analysisData from "../data/analysisData";
import { exportCSV } from "../utils/exportCSV";
import { exportPDF } from "../utils/exportPDF";

function ReportTable() {

    return (

        <div className="report-table">

            <h2>Analysis Reports</h2>

            <button
                className="export-btn"
                onClick={() => exportCSV(analysisData)}
            >
                Export CSV
            </button>

            <button

                className="export-btn"

                onClick={() => exportPDF(analysisData)}

            >

                Export PDF

            </button>

            <table>

                <thead>

                    <tr>

                        <th>Date</th>
                        <th>Hazard</th>
                        <th>Severity</th>
                        <th>Confidence</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        analysisData.map((item) => (

                            <tr key={item.id}>

                                <td>08 Jul 2026</td>
                                <td>{item.hazard}</td>
                                <td>

                                    <span

                                        className={`severity ${item.severity.toLowerCase()}`}

                                    >

                                        {item.severity}

                                    </span>

                                </td>
                                <td>{item.confidence}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default ReportTable;