import React, { Component } from 'react'
import { Items } from './Items'

export class Container extends Component {
    render() {
        return (
            <div class="container">
                <Items />
            </div>
        )
    }
}

export default Container