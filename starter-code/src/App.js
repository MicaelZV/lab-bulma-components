import React, { Component } from "react";
import "./App.css";
import Navbar from "./Navbar";
import FormField from "./FormField";
import CoolButton from "./CoolButton";

class App extends Component {
    constructor() {
        super()
               
    }

    render() {
        return (
            <div className="App">
                <Navbar />
                <FormField />          
            </div>
        );
    }
}

export default App;
