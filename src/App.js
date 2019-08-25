import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// import local files
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card className="cal-card">
        <CardContent>
          <Calculator />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
