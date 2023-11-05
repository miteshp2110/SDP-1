import './DashboardStyle.css'

const space = ' ';
const Dashboard=()=>{
    return(
        <div className="dashboard-container">
            <div className="title">
                Dashboard
                <hr style={{backgroundColor: "lightgray", height: 1, border: "none"}} />
            </div>
            <div className="dashboard-contents">
                <div className="funds">
                    <div className="funds-subtitle">
                        Funds
                    </div>
                    <span className="avl-bal-name">
                        Avl. balance:&nbsp;
                    </span>
                    <span id="avl-balance">
                        12567.40
                    </span>
                    <br />
                    <button className="btn" id="add-btn">+ Add</button>
                    <button className="btn" id="withdraw-btn">Withdraw</button>
                </div>
                <table className="tables" id="positions" border={1} cellSpacing={0} cellPadding={1}>
                    <caption style={{textAlign: "left", fontSize: 25}}>Positions</caption>
                    <tr style={{fontWeight: "bold"}}>
                        <td>Instrument</td>
                        <td>Type</td>
                        <td>Qty.</td>
                        <td>Avg. cost</td>
                        <td>LTP</td>
                        <td>Change</td>
                    </tr>
                    <tr>
                        <td>IOLCP</td>
                        <td>NRML</td>
                        <td>18</td>
                        <td>356.7</td>
                        <td>351.33</td>
                        <td style={{color: 'green', fontWeight: 'bold'}}>+1.76 %</td>
                    </tr>
                    <tr>
                        <td>CONCORDBIO</td>
                        <td>NRML</td>
                        <td>10</td>
                        <td>904.67</td>
                        <td>932.43</td>
                        <td style={{color: 'red', fontWeight: 'bold'}}>-3.40 %</td>
                    </tr>
                </table>
                <table className="tables" id="holdings" border={1} cellSpacing={0} cellPadding={1}>
                    <caption style={{textAlign: "left", fontSize: 25}}>Holdings</caption>
                    <tr style={{fontWeight: "bold"}}>
                        <td>Instrument</td>
                        <td>Qty.</td>
                        <td>Avg. cost</td>
                        <td>LTP</td>
                        <td>Change</td>
                    </tr>
                    <tr>
                        <td>SBIN</td>
                        <td>18</td>
                        <td>567.7</td>
                        <td>580</td>
                        <td style={{color: 'green', fontWeight: 'bold'}}>+2.16 %</td>
                    </tr>
                    <tr>
                        <td>CHAMBLFERT</td>
                        <td>58</td>
                        <td>264.9</td>
                        <td>289.78</td>
                        <td style={{color: 'green', fontWeight: 'bold'}}>+9.40 %</td>
                    </tr>
                </table>
            </div>
            <br /><br /><br /><br /><br />
            Hii
        </div>
    )
}
export default Dashboard;