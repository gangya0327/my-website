import { createSignal } from 'solid-js'

export function Counter(props: any) {
  const [counter, setCounter] = createSignal(props.counter)

  return (
    <div>
      counter: {counter()}
      <button onClick={() => setCounter(counter() + 1)}>click</button>
    </div>
  )
}
