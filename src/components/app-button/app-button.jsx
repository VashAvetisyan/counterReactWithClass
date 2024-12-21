import { Component } from "react"

import './app-button.scss'

export default class AppButton extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { onClick } = this.props
        return (
            <div className="app-button" onClick={onClick}>
                {this.props.innerText}
            </div>
        )
    }
}