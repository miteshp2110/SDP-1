import './LearnFirstStyle.css'

import lightbullish from "C:\\Users\\HP\\Desktop\\MSWD\\SDP\\New folder\\SDP-1\\client\\src\\Resources\\lightbullish.png"

import lightbearish from "C:\\Users\\HP\\Desktop\\MSWD\\SDP\\New folder\\SDP-1\\client\\src\\Resources\\lightbearish.png"

import darkbullish from "C:\\Users\\HP\\Desktop\\MSWD\\SDP\\New folder\\SDP-1\\client\\src\\Resources\\darkbullish.png"

import darkbearish from "C:\\Users\\HP\\Desktop\\MSWD\\SDP\\New folder\\SDP-1\\client\\src\\Resources\\darkbearish.png"

import lightbasics from "C:\\Users\\HP\\Desktop\\MSWD\\SDP\\New folder\\SDP-1\\client\\src\\Resources\\lightbasics.png"

const LearnFirst=()=>{
  return(
    <div className='LearnFirst_container'>
      <div className="Journey_card_lf" id="card0_lf">card</div>

      <div className='CommonCard_lf' id='card1_lf'>
        <img src={lightbasics} alt="Basics Logo"  style={{marginLeft: "1%"}}/>
        Basics
      </div>

      <div className='CommonCard_lf' id='card2_lf'>
        <img src={lightbullish} alt="Bullish Pattern Logo" />
        Bullish Patterns
      </div>

      <div className='CommonCard_lf' id='card3_lf'>
        <img src={lightbearish} alt="Bearish Pattern Logo" />
        Bearish Patterns
      </div>

      <div className='CommonCard_lf' id='card4_lf'>
        <img src={darkbearish} alt="Bearish Pattern Logo" />
        Technical Indicators
      </div>
      
      <div className='CommonCard_lf' id='card5_lf'>
        <img src={darkbullish} alt="Bearish Pattern Logo" />
        Fundamental Analysis
      </div>
    </div>
  )
}

export default LearnFirst;
