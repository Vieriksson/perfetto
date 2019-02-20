import { Action, createReducerStore } from './reducer-store'

type State = {
  name: string
}

const reducerState = { name: 'janne' }
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
    default:
      return state
  }
}

export const [ReducerProvider, reducerStore] = createReducerStore<State>(reducerState, reducer)
