import React from 'jsx-dom'

import { DemoSection } from '../section'

export default function AlertsDemo() {
  const colors = [null, 'primary', 'success', 'error', 'warning']

  return (
    <DemoSection name="Alerts" class="stack">
      {colors.map((color) => (
        <div class={`alert ${color ?? ''}`}>{color ? color.charAt(0).toUpperCase() + color.slice(1) : 'Default'}</div>
      ))}
    </DemoSection>
  )
}
