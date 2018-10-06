import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Stepper.css'
import happyFace from './happy-face.svg'
import sadFace from './sad-face.svg'

class Stepper extends Component {
  state = {
    currentStep: 0
  }

  propTypes = {
    limit: PropTypes.number.isRequired
  }

  render() {
    const { limit } = this.props;
    const { currentStep } = this.state;

    return (
      <div className="StepperContainer">
        <img className="IconStepper" src={sadFace} alt="I don't know but I'm sad"/>
        <ul className="Steps">
          <input
            type="range"
            min="1"
            max={limit}
            value={currentStep}
            onChange={this.selectStep}
            className="slider"
            id="myRange"
           />
        </ul>
        <img className="IconStepper" src={happyFace} alt="Because I'm Happy"/>
      </div>
    )
  }

  selectStep = ({ target }) => {
    const { value } = target
    this.setState(() => ({ currentStep: parseInt(value, 10)}))
  }
}

export default Stepper
