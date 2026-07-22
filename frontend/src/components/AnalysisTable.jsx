function AnalysisTable({ reports }) {

    return (

        <div className="analysis-table">

            <h2>Recent Analysis</h2>

            <table>

                <thead>

                    <tr>

                        <th>Hazard</th>
                        <th>Severity</th>
                        <th>Confidence</th>
                        <th>Date</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        reports.length === 0 ? (

                            <tr>

                                <td colSpan="4" style={{ textAlign: "center" }}>
                                    No reports found.
                                </td>

                            </tr>

                        ) : (

                            reports.map((report) => (

                                <tr key={report._id}>

                                    <td>{report.hazardType}</td>

                                    <td>{report.severity}</td>

                                    <td>{report.confidence}%</td>

                                    <td>
                                        {new Date(report.createdAt).toLocaleDateString()}
                                    </td>

                                </tr>

                            ))

                        )
                    }

                </tbody>

            </table>

        </div>

    );

}

export default AnalysisTable;