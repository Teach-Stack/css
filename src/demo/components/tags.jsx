import React from 'jsx-dom'

import { DemoSection } from '../section'

export default function TagsDemo() {
  const colors = [null, 'primary', 'success', 'error', 'warning']

  return (
    <DemoSection name="Tags" class="stack">
      <DemoSection name="Tag Variants" subsection class="cluster">
        {colors.map((color) => (
          <span class={`tag ${color ?? ''}`}>{color ? color.charAt(0).toUpperCase() + color.slice(1) : 'Default'}</span>
        ))}
      </DemoSection>
      <DemoSection name="Interactive Tags" subsection class="cluster">
        <button type="button" class="primary tag">
          Button
        </button>
        <a href="#!" class="tag success">
          Link
        </a>
      </DemoSection>
    </DemoSection>
  )
}
