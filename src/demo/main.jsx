import '@fontsource-variable/space-grotesk'

import React from 'jsx-dom'

import ButtonsDemo from './components/buttons'
import DialogDemo from './components/dialog'
import FormsDemo from './components/forms'

document.body.appendChild(
  <React.Fragment>
    <ButtonsDemo />
    <DialogDemo />
    <FormsDemo />
  </React.Fragment>,
)
