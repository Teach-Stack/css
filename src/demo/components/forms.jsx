import React from 'jsx-dom'

import { DemoSection } from '../section'

export default function FormsDemo() {
  return (
    <DemoSection name="Forms" class="stack">
      <DemoSection name="Fields" subsection>
        <label for="textInput">Text Input</label>
        <input id="textInput" type="text" />

        <label for="helpInput">Input Help Text</label>
        <input id="helpInput" type="text" />
        <small>Description</small>

        <label for="demoTextarea">Textarea</label>
        <textarea class="fixed" id="demoTextarea" rows="4"></textarea>

        <label for="invalidInput">Invalid Input</label>
        <input id="invalidInput" aria-invalid="true" type="text" />

        <label for="successInput">Success Input</label>
        <input id="successInput" class="success" type="text" />

        <label for="demoSelect">Select</label>
        <select id="demoSelect">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </DemoSection>
      <DemoSection name="Checkboxes & Radios" subsection>
        <label>
          <input type="checkbox" />
          Checkbox
        </label>
        <label>
          <input type="checkbox" checked />
          Checked Checkbox
        </label>

        <label>
          <input type="radio" name="demoRadio" checked />
          Radio 1
        </label>
        <label>
          <input type="radio" name="demoRadio" />
          Radio 2
        </label>
      </DemoSection>
    </DemoSection>
  )
}
