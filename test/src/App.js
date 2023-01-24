import React ,{useEffect,useState}from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import { get_prod } from "./redux/Action/apiaction";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(get_prod())
  },[])
  const data =useSelector(state=>state.post)
  console.log(data)
  return (
    <div className="App">
      {data.map((e,index)=>
      <div key={index}>
 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  

      </div>
      )}











    </div>
  );
}

export default App;
