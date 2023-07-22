import { Link } from "react-router-dom";
function Parking() {  
  return (
    <>      
      <h1>Lotação Estacionamento</h1>
      <div>
        <label htmlFor="">Localizar</label>
        <input type="text" name="" id="" placeholder="ABC-9A99"/>
      </div>
      <table>
        <tr>
          <th>Placa</th>
          <th>Entrada</th>
          <th>Saida</th>
        </tr>
        <tr>
          <td>ACD9C987</td>
          <td>10:00</td>
          <td>-</td>
        </tr>
        <tr>
          <td>ABC9A00</td>
          <td>10:00</td>
          <td>11:30</td>
        </tr>
        <tr>
          <td>ACD9C987</td>
          <td>10:00</td>
          <td>11:30</td>
        </tr>
        <tr>
          <td>ABC9A00</td>
          <td>10:00</td>
          <td>-</td>
        </tr>
      </table>
      <Link to='/'>Home</Link><br />
      <Link to='/output'>Saida</Link>    
    </>
  )
}

export default Parking;