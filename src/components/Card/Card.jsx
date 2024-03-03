import { WithRuBalance } from "../../helpers/hoc/withRuBalance";
import "./style.css"

const Card=({balance, setBalance, ruBalance})=>{
    console.log({ruBalance})
return (
<div className="card">
    <div className="card-block">
    <p>CRIPTO-FINANSE</p>
    <button 
    onMouseEnter={()=>console.log("---enter---")}
    onClick={ setBalance} >Add money</button>
    </div>


<div className="card-block">
<p>VITALIY</p>
<p>{balance} $</p>
</div>
  

</div>

);
};

export default WithRuBalance(Card);