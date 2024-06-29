import React from "react";

class Controller extends React.Component{

    state = {
        num: 0
    }

    plus = () => {
        this.setState((state) => {
            return state.num += 1
        })
    }

    minus = () => {
        this.setState((state) => {
            return state.num -= 1
        })
    }

    reset = () => {
        this.setState((state) => {
            return state.num = 0
        })
    }

    render() {
        return (
            <div>
                <input type="number"  className="form-control mb-3" id="input" disabled  value={this.state.num}/>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={this.minus} type="button" className="btn btn-outline-primary" disabled={this.state.num === 0 ? true : false}  id="btnMinus">Minus</button>
                    <button onClick={this.reset} type="button" className="btn btn-outline-primary" disabled={this.state.num === 0 ? true : false} id="btnReset">Reset</button>
                    <button onClick={this.plus} type="button" className="btn btn-outline-primary" id="btnPlus">Plus</button>
                </div>
            </div>
        )
    }
}

export default Controller;