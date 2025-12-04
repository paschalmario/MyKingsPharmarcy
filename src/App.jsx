import './App.css'
function Card() {
  const fruits = [
    {id: 1, name:'Zikora', age:21},
    {id: 2, name:'xino', age:22},
    {id: 3, name:'John', age:23}
  ]

  return (
    <>
      <div>
        {fruits.map(fruit => (
          <div key={fruit.id} div className="card">
            <h3>My name is {fruit.name}</h3><br />
            <p>I am {fruit.age} years old</p>
          </div>
        ))}
      </div>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <Card />
      </div>
  );
}

export default App;