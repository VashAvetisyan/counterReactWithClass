import { Component } from "react"

import AppButton from "../app-button/app-button"

import './app-counter.scss'

export default class AppCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increase = () => {

        this.setState((prevState) => ({
            count: prevState.count + 1
        }));

    }

    decrease = () => {
        if (this.state.count > 0) {
            this.setState((prevState) => ({
                count: prevState.count - 1
            }));
        }
    }

    render() {
        let count = this.state.count
        return (
            <div className="app-counter">
                <AppButton innerText="+" onClick={this.increase} />
                <div className="count">
                    {count}
                </div>
                <AppButton innerText="-" onClick={this.decrease} />
            </div>
        )
    }
}