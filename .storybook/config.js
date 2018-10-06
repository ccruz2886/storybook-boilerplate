import { configure } from '@storybook/react';
import '@storybook/addon-options/register';

function loadStories() {
  require('../stories/stepper.js');
}

configure(loadStories, module);
