import React from 'jsx-dom'

export function DemoSection(props) {
  return (
    <section id={props.name} class="stack">
      {props.subsection ? <h5>{props.name}</h5> : <h4>{props.name}</h4>}
      <div class={props.class}>{props.children}</div>
    </section>
  )
}
