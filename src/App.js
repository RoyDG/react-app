import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  let style = {
      color: 'lightblue'
  }

  let name = 'A Fuzzy Project.';
  let myName = {name: 'React', lastName: 'Experiment'};

  const myStyle = {
        border: '1px solid red',
        padding:'10px'
  }

  const books = [
    {name:'Biology', color: 'red'},
    {name:'Programming C', color:'pink'},
    {name:'Data structure',  color: 'green'}
    ];

  const cricketers =['Tamim', 'mushfiq', 'mash', 'sakib', 'mahamudullah', 'liton', 'saifuddin', 'fiz'];

  const products = [
    {Name: 'Photoshop', Price: '$90.00'},
    { Name: 'Illustrator', Price: '$30.00'},
    { Name: 'PhotoshopXD', Price: '$290.00'},
    { Name: 'Adobe Reader', Price: '$5.00'}
  ];

  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Users></Users>

        <p style = {style}>What is that? - {name}</p>
        <p style = {{backgroundColor:'brown', padding:'10px'}}>This is my : {myName.name+ " "+myName.lastName}</p>
        <h3 style={myStyle}>Banglsdesh Cricketers</h3>

        <ul>
          {
            cricketers.map(cricketer => <li>{cricketer}</li>)
          }
          {
            products.map(product => <li>{product.Name} - {product.Price}</li>)
          }
        </ul>
        {
          books.map(book => <Books book={book}></Books>)
        } 
        {
          products.map(pd => <Products product = {pd}></Products>)
        }
        
      </header>
    </div>
  );
}
  // <Books name={books[1]} color = 'Red'></Books>
        // <Books name='English' color='Green'></Books>
        // <Books name='Math' color='Blue'></Books>
        // <Books name='Computer' color='Yellow'></Books>

        // <Products name={products[0].Name}
        //   price={products[0].Price}></Products>
        // <Products name={products[1].Name}
        //   price={products[1].Price}></Products>

        // <Products product={products[0]}></Products>
        // <Products product={products[1]}></Products>
        // <Products product={products[2]}></Products>
        // <Products product={products[3]}></Products>

function Books(props) {
  const { name, color } = props.book;
  return (
    <div style={{ border: '1px solid green', padding: '10px', margin: '20px' }}>
      <h3>My Books Name: {name}</h3>
      <h3>My Books color: {color}</h3>
    </div>
  )
}

function Products(props){
  const productStyle = {
    border:'1px solid pink', 
    padding:'10px', 
    margin:'20px',
    height: '200px',
    width: '200px',
    float: 'left',
    color:'orange',
    borderRadius:'20px'
  }

  const {Name, Price} = props.product;

    return(
      <div style={productStyle}>
        <h3>{Name}</h3>
        <h4>{Price}</h4>
        <button>Buy Now</button>
      </div>
    )
  // return (
  //   <div style= {productStyle}>
  //     <h3>{props.product.Name}</h3>
  //     <h4>{props.product.Price}</h4>
  //     <button>Buy Now</button>   
  //   </div>
  // )
   //<h3>{props.name}</h3>
    //<h4>{props.price}</h4>
}
function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
    <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>up</button>
      <button onClick={() => setCount(count - 1)}>down</button>
    </div>
  )
}

function Users(){

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  },[])

  return(
    <div>
    <h4>Dynamic Users: {users.length}</h4>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </ul>
    </div>
  )
}

export default App;


