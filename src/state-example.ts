import { createStateStore } from './state-store'

type State = {
  name: string
}

const stateState = { name: 'josef' }
export const [StateProvider, stateStore] = createStateStore<State>(stateState)
