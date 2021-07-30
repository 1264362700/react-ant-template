// import logo from './logo.svg';
import React from 'react';
import '@/styles/App.scss';
import { Button, Skeleton } from 'antd'

function App() {
  return (
    <div className="App">
      <Button onClick={() => {
        alert('hello cli')
      }} block type="primary">hello</Button>
      <Skeleton active loading>
      </Skeleton>
      <Skeleton active loading>
      </Skeleton>
      <Skeleton active loading>
      </Skeleton>
    </div>
  );
}

export default App;
