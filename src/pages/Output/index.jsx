import { Link } from "react-router-dom";
function Output() { 
  
  return (
    <>      
      <h1>Saida Veiculo</h1>      
      <div>
        <form action="">
          <input type="text" name="" id="" />
          <input type="button" value="Saida" />
        </form>
      </div>
      <Link to='/'>Home</Link><br />
      <Link to='/parking'>Estacionamento</Link>     
    </>
  )
}

export default Output;