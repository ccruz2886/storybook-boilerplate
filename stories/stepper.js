import React from 'react'
import {storiesOf} from '@storybook/react'
import Stepper from '../components/Stepper/Stepper'

storiesOf('Stepper', module)
  .add('limit to 5', () => (
    <Stepper limit={5} />
  ))
