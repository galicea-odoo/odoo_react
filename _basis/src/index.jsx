import React from 'react';
import ReactDOM from 'react-dom';

export default class SimpleComponent extends React.Component {

  render() {
    return (
      <div> Hello World! </div> 
    );
  }    

}

function test(param) {
  ReactDOM.render(<SimpleComponent />, document.getElementById('root'));
}

function test2(param) {
  ReactDOM.render(<div>drugi</div>, document.getElementById('root'));
}


if (!window.reactLink)  window.reactLink=[];
window.reactLink['test']=test;
window.reactLink['test2']=test2;
