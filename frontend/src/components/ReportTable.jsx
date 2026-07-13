import { exportCSV } from "../utils/exportCSV";
import { exportPDF } from "../utils/exportPDF";

function ReportTable({ reports }) {

    return (

        <div className="report-table">

            <h2>Analysis Reports</h2>

            <button
                className="export-btn"
                onClick={() => exportCSV(reports)}
            >
                Export CSV
            </button>

            <button

                className="export-btn"

                onClick={() => exportPDF(reports)}

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
                        reports.map((item) => (

                            <tr key={item._id}>

                                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                <td>{item.hazardType}</td>
                                <td>

                                    <span

                                        className={`severity ${item.severity.toLowerCase()}`}

                                    >

                                        {item.severity}

                                    </span>

                                </td>
                                <td>{item.confidence || "96%"}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default ReportTable;