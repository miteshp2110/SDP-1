import './DashboardStyle.css'

const Dashboard=()=>{
    return(
        <div className="dashboard-container">
            <div style={{textAlign: "center", fontSize: 50}}>This is a Dashboard</div>
            <br />
            <div className="dashboard-contents">
                <div className="funds">
                    Funds<br /><br />Avl. balance<br />1234.55
                </div>
                <button id="add-btn">+ Add</button>
                <button id="withdraw-btn"><img src=""/>Withdraw</button>
                <table className="positions">
                    <caption style={{textAlign: "left", marginLeft: 10}}>Positions</caption>
                    <tr>
                        <td>Hii</td>
                    </tr>
                </table>
                <table className="holdings" border={1} cellSpacing={0} cellPadding={1}>
                    <caption style={{textAlign: "left", marginLeft: 10}}>Holdings</caption>
                    <tr style={{fontWeight: "bold"}}>
                        <td>Instrument</td>
                        <td>Qty.</td>
                        <td>Avg. cost</td>
                        <td>Invested amt.</td>
                    </tr>
                    <tr>
                        <td>Instrument 1</td>
                        <td>Qty</td>
                        <td>Avg. price</td>
                        <td>Total amt.</td>
                    </tr>
                    <tr>
                        <td>Instrument 2</td>
                        <td>Qty</td>
                        <td>Avg. price</td>
                        <td>Total amt.</td>
                    </tr>
                </table>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            Hii
        </div>
    )
}
export default Dashboard;