import React from 'jsx-dom'

import { DemoSection } from '../section'

export default function FormsDemo() {
  return (
    <DemoSection name="Forms">
      <DemoSection name="Input Fields" subsection>
        <label for="textInput">Text Input</label>
        <input id="textInput" type="text" />
        <label for="invalidInput">Invalid Input</label>
        <input id="invalidInput" aria-invalid="true" type="text" />
        <label for="demoSelect">Select</label>
        <select id="demoSelect">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </DemoSection>
    </DemoSection>
  )
}
