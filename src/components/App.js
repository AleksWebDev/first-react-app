import React from "react";
import Header from "./Header";
import Controller from "./Controller";

class App extends React.Component{
    render () {
        return (
            <div className="p-3">
            <Header/>
            <Controller/>
            </div>
        )
    }
}

export default App;