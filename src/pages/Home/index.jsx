import { Link } from "react-router-dom";
function Home() { 
  
  return (
    <>      
      <h1>Entrada Veiculo</h1>      
      <div>
        <form action="">
          <input type="text" name="" id="" />
          <input type="button" value="Entrada" />
        </form>
      </div>
      <Link to='/parking'>Estacionamento</Link> <br /> 
      <Link to='/output'>Saida</Link>    
    </>
  )
}

export default Home;