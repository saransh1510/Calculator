import React, { Component, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function Calculator() {
  const [getValues, setValues] = useState('');
  const keys = [{
    label: "(",
    value: "(",
    handleValue: function(){
      setValues(`${getValues}(`)
    },
  }, {
    label: "CE",
    value: "CE",
    handleValue: function(){
      setValues(`${getValues.slice(0, -1)}`)
    },
  }, {
    label: ")",
    value: ")",
    handleValue: function(){
      setValues(`${getValues})`)
    },
  }, {
    label: "C",
    value: "C",
    handleValue: function(){
      setValues('')
    },
  }, {
    label: "1",
    value: "1",
    handleValue: function(){
      setValues(`${getValues}1`)
    },
  }, {
    label: "2",
    value: "2",
    handleValue: function(){
      setValues(`${getValues}2`)
    },
  }, {
    label: "3",
    value: "3",
    handleValue: function(){
      setValues(`${getValues}3`)
    },
  }, {
    label: "+",
    value: "+",
    handleValue: function(){
      setValues(`${getValues}+`)
    },
  }, {
    label: "4",
    value: "4",
    handleValue: function(){
      setValues(`${getValues}4`)
    },
  }, {
    label: "5",
    value: "5",
    handleValue: function(){
      setValues(`${getValues}5`)
    },
  }, {
    label: "6",
    value: "6",
    handleValue: function(){
      setValues(`${getValues}6`)
    },
  }, {
    label: "-",
    value: "-",
    handleValue: function(){
      setValues(`${getValues}-`)
    },
  }, {
    label: "7",
    value: "7",
    handleValue: function(){
      setValues(`${getValues}7`)
    },
  }, {
    label: "8",
    value: "8",
    handleValue: function(){
      setValues(`${getValues}8`)
    },
  }, {
    label: "9",
    value: "9",
    handleValue: function(){
      setValues(`${getValues}9`)
    },
  }, {
    label: "X",
    value: "*",
    handleValue: function(){
      setValues(`${getValues}X`)
    },
  }, {
    label: ".",
    value: ".",
    handleValue: function(){
      setValues(`${getValues}.`)
    },
  }, {
    label: "0",
    value: "0",
    handleValue: function(){
      setValues(`${getValues}0`)
    },
  }, {
    label: "=",
    value: "=",
    handleValue: function(){
      if(getValues.includes('--'))
        getValues.replace('--', '+');
      try{
        setValues(`${eval(getValues.replace('X','*').replace('÷','/')) || ''}`)  
      } catch {
        setValues(`Error`)
      }
      
    },
  }, {
    label: "÷",
    value: "/",
    handleValue: function(){
      setValues(`${getValues}÷`)
    },
  }]

  return (
    <React.Fragment>
      <Typography style={{height: '2em'}}>
        {getValues}
      </Typography> 
      <Grid container spacing={3} >
        {
          keys.map((val, index) =>(
            <Grid key={index} item xs={3}>
              <Button
                color="inherit"
                onClick={() => {
                  val.handleValue()
                }}
              >
                {val.label}
              </Button>
            </Grid>
          ))
        }
      </Grid> 
    </React.Fragment>   
  );
}


export default Calculator;
