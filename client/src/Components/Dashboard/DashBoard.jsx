import './DashBoardStyle.css';

const Dashboard=()=>{
    return(
        <div className="dashboard-container">
            <center><h1>This is a Dashboard</h1></center>
            <div className="dashboard-grid-container">
                <div id="item0">Vada</div>
                <div id="item1">Main</div>
                <div id="item2">Head</div>
                <div id="item3">Pav</div>
                <div id="item4">Body</div>
            </div>
        </div>
    )
}
export default Dashboard;