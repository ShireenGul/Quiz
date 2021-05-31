import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import PData from './data.json';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Result from './Result';
import FormCheck from 'react-bootstrap/FormCheck';




function Question() {

    const [Counter, setCounter] = useState(0)
    const [i, seti] = useState(0)

    function NextFun() {
        // if(FormCheck.name == PData[i].answer){
        //     setCounter( Counter => Counter+1)
        // }
        if (i < 4) {
            seti(i => i + 1)
        }
        else {
            alert("End of Quiz! Press Result.")
        }
       
    }
    function PrevFun() {
        if (i > 0) {
            seti(i => i - 1)
        }
        else {
            alert("This is Start of Quiz")
        }
    }
    function Result() {
alert("Your Score is ", Counter)
    }




    return (
        <div>
           
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title><h2><center>Quiz</center></h2></Card.Title>
                        <Card.Text>
                           <center> {PData[i].question}</center>
                        </Card.Text>
                        
   <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
       
      </Form.Label>
      
      <Col sm={10}>
        <Form.Check
         type="radio"
         label={PData[i].options[0].a}
         //name={this.state.selectedOption == PData[i].option[0].a}
         id="option3"
        /> 
        <Form.Check
        type="radio"
        label={PData[i].options[0].b}
       // name={this.state.selectedOption == PData[i].option[0].b}
        id="option3"
        
       />
        <Form.Check
          type="radio"
          label={PData[i].options[0].c}
         // name={this.state.selectedOption == PData[i].option[0].c}
          id="option3"
         
        />
        <Form.Check
          type="radio"
          label={PData[i].options[0].d}
          //name={this.state.selectedOption == PData[i].option[0].d}
          id="option3"
         
        />
      </Col>
    </Form.Group>
  </fieldset>
                        <Button class="btn btn-primary mr-2" variant="primary" onClick={() => PrevFun()}>Previous</Button>
                        <Button class="btn btn-primary mr-2" variant="primary" onClick={() => NextFun()}>Next</Button>
                        <Button class="btn btn-success mr-2" variant="primary" onClick={() => Result()}>Result</Button>

                    </Card.Body>
                </Card>
            

        </div>
    )
}
export default Question;
