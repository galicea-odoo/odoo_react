import React from 'react';
import ReactDOM from 'react-dom';

export default class SimpleComponent extends React.Component {

  render() {
    return (
      <div> Hello World! </div> 
    );
  }    

}

function Demo1Render(param) {
  ReactDOM.render(<SimpleComponent />, document.getElementById('Demo1'));
}


if (!window.reactLink)  window.reactLink=[];
window.reactLink['Demo1']=Demo1Render;
