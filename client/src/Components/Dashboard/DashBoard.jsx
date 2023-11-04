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
                    <span className="avl-bal-name">Avl. balance:&nbsp;</span>
                    <span id="avl-balance">
                        1234.55
                    </span>
                    <br />
                    <button className="btn" id="add-btn">+ Add</button>
                    <button className="btn" id="withdraw-btn"><img src=""/>Withdraw</button>
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
                        <td>Instrument 1</td>
                        <td>Qty</td>
                        <td>Avg. price</td>
                        <td>Last Trade Price</td>
                        <td>%chng</td>
                    </tr>
                    <tr>
                        <td>Instrument 2</td>
                        <td>Qty</td>
                        <td>Avg. price</td>
                        <td>Last Trade Price</td>
                        <td>%chng</td>
                    </tr>
                </table>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            Hii
        </div>
    )
}
export default Dashboard;