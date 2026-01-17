import '@fontsource-variable/space-grotesk'

import React from 'jsx-dom'

import ButtonsDemo from './demos/buttons'
import DialogDemo from './demos/dialog'
import FormsDemo from './demos/forms'

document.body.appendChild(
  <React.Fragment>
    <ButtonsDemo />
    <DialogDemo />
    <FormsDemo />
  </React.Fragment>,
)
