
import React, {Component} from 'react'


export class Counter extends Component {

  render() {

    let count = this.props.count

    return (
      <div className="counter">
        {count}
      </div>
    )
  }

}
