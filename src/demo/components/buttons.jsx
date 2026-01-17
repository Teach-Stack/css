import React from 'jsx-dom'

import { DemoSection } from '../section'

export default function ButtonsDemo() {
  const colors = [null, 'primary', 'success', 'error', 'warning']

  return (
    <DemoSection name="Buttons" class="stack">
      <DemoSection name="Regular Buttons" subsection class="cluster">
        {colors.map((color) => (
          <button type="button" class={color}>
            {color ? color.charAt(0).toUpperCase() + color.slice(1) : 'Default'}
          </button>
        ))}
      </DemoSection>
      <DemoSection name="Small Buttons" subsection class="cluster">
        {colors.map((color) => (
          <button type="button" class={`sm ${color ?? ''}`}>
            {color ? color.charAt(0).toUpperCase() + color.slice(1) : 'Default'}
          </button>
        ))}
      </DemoSection>
    </DemoSection>
  )
}
