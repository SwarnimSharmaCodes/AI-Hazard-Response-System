import analysisData from "../data/analysisData";

function AnalysisTable() {

    return (

         <div className="analysis-table">

        <h2>Recent Analysis</h2>

        <table>

    <thead>

        <tr>

            <th>Hazard</th>

            <th>Severity</th>

            <th>Confidence</th>

            <th>Time</th>

        </tr>

    </thead>

    <tbody>

{
    analysisData.map((item) => (

        <tr key={item.id}>

            <td>{item.hazard}</td>

            <td>{item.severity}</td>

            <td>{item.confidence}</td>

            <td>{item.time}</td>

        </tr>

    ))
}

</tbody>

</table>

    </div>

    );

}

export default AnalysisTable;