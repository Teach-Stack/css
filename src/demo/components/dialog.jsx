import React from 'jsx-dom'

import { DemoSection } from '../section'

export default function DialogDemo() {
  return (
    <DemoSection name="Dialog">
      <button type="button" command="show-modal" commandfor="dialog-demo">
        Show Dialog
      </button>

      <dialog id="dialog-demo" closedby="any">
        A simple dialog box.
      </dialog>
    </DemoSection>
  )
}
