import Hello from'./assets/Hello.jsx'
import Contact from'./Contact.jsx'
import Counter from './assets/Counter.jsx'
function App() {
  const helloData =[
    {name: 'Pornchanit', message:'Hi There'},
    {name: 'Money', message:'Hello'}
  ]
  return(
    <div class ="App"> 
    <Counter/>
    
      {helloData.map((data, index)=> (
        <Hello key={index} name={data.name} message={data.message}/>
      ))}
      <Contact email="Pornchanit.money@gmail.com" phone="0928848137"/>
    </div>
  );
}

export default App;
