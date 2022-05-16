import React, { Component } from 'react'
import axios from 'axios';
import { response } from 'express';
import express from 'express';


class app extends Component {
    constructor(props){
        super(props)
        this.state = {
           Solution: []
        }
    
      this.getData = this.getData.bind(this)
      this.getSolution = this.getSolution.bind(this)
}

getData(event)
    {
      console.log(event.target.id)
      console.log(event.target.value)
    this.setState({
      [event.target.id]: (event.target.value)
     })
  }
  getSolution()
  {

let arraySolve = [];
let numbers = document.querySelectorAll('input')
numbers.forEach(number =>{
if(number.value){
    arraySolve.push(number.value)
} else {
    arraySolve.push('.')
}})
let positionsdata = arraySolve.join('')
console.log(positionsdata)

const options = {
    method: 'POST',
    url: 'https://solve-sudoku.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com',
      'X-RapidAPI-Key': 'fd80f2f77dmsh45f7ca41f5a4876p1c58aejsnf02de5018953'
    },
    data: `{"puzzle": "${positionsdata}"}`
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

}



  render() {
    return (
    <div>
    
    <h1>Sodoku Solver</h1>
        
        <div className="grid9x9">
            <input className="square bg-dark" id="0" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="1" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="2" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="3" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="4" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="5" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="6" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="7" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="8" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="9" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="10" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="11" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="12" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="13" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="14" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="15" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="16" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="17" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="18" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="19" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="20" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="21" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="22" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="23" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="24" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="25" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="26" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="27" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="28" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="29" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="30" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="31" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="32" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="33" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="34" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="35" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="36" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="37" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="38" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="39" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="40" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="41" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="42" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="43" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="44" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="45" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="46" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="47" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="48" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="49" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="50" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="51" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="52" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="53" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="54" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="55" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="56" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="57" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="58" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="59" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="60" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="61" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="62" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="63" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="64" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="65" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square " id="66" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square " id="67" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square " id="68" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="69" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="70" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="71" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="72" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="73" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="74" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="75" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="76" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square" id="77" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="78" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="79" type="number" min="1" max="9" onChange={this.getData}></input>
            <input className="square bg-dark" id="80" type="number" min="1" max="9" onChange={this.getData}></input>


        </div>
    <button type="button" onClick={()=>this.getSolution()}>Solve</button>


    </div>
    )
  }};


export default app;
