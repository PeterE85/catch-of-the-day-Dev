import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();

    // 2. get the text from that input
    const storeName = this.myInput.current.value; //aki tomo el valor del input
    //console.log(this.myInput.current.value);

    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`); //cuando pulse nos dirigimos a donde decia el input
  };

  render() {
    return(           
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a Store</h2>
        <input 
          type="text"
          ref={this.myInput} //aki es donde le digo k la referencia es el input lo k kiero
          required 
          placeholder="Store Name" 
          defaultValue= {getFunName()} />

        <button type="submit">Visit Store → </button>
      </form>      
    );
  }
}

export default StorePicker;