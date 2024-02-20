import React from "react";
import ReactDOM from "react-dom/client";
import ListItems from "./daugther";

class App extends React.Component {
    render() {
        let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
        
        return (
            <div>
                <h1>My Fruits List</h1>
                <ListItems fruits={fruits} /> 
            </div>
        );
    }
}


var root = document.getElementById("root");

ReactDOM.createRoot(root).render(<App></App>);      
  