import { DemoSection } from '../section'

const people = [
  ['Ada Lovelace', 'Engineer', 'success', 'Active'],
  ['Grace Hopper', 'Admiral', 'primary', 'Leading'],
  ['Alan Turing', 'Researcher', 'warning', 'Away'],
  ['Linus Torvalds', 'Maintainer', 'error', 'Offline'],
]

function DemoTable({ rows, class: className = '', style }) {
  return (
    <div class={`table ${className}`} style={style}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, role, color, status]) => (
            <tr>
              <td>{name}</td>
              <td>{role}</td>
              <td>
                <span class={`tag ${color}`}>{status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TablesDemo() {
  return (
    <DemoSection name="Table" class="stack">
      <DemoSection name="Basic Table" subsection>
        <DemoTable rows={people} />
      </DemoSection>
      <DemoSection name="Zebra" subsection>
        <DemoTable rows={people} class="zebra" />
      </DemoSection>
      <DemoSection name="Sticky Header" subsection>
        <DemoTable rows={[...people, ...people, ...people, ...people]} class="sticky" style="--table-max-height: 12rem" />
      </DemoSection>
    </DemoSection>
  )
}
