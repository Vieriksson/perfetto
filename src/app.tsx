import React from 'react'
import { ClassStateProvider, classStore } from './class-example'
import { ReducerProvider, reducerStore } from './reducer-example'
import { StateProvider, stateStore } from './state-example'

export const App = () => {
  return (
    <>
      <StateProvider>
        <UsesState />
      </StateProvider>
      <ClassStateProvider>
        <UsesClassState />
      </ClassStateProvider>
      <ReducerProvider>
        <UsesReducer />
      </ReducerProvider>
    </>
  )
}

const UsesState = () => {
  const [state, setState] = stateStore()
  return (
    <div>
      {state.name}
      <input
        type="text"
        style={{ width: '100%' }}
        value={state.name}
        onChange={event => setState({ name: event.target.value })}
      />
    </div>
  )
}

const UsesClassState = () => {
  const state = classStore()
  return (
    <div>
      {state.name}
      <input
        type="text"
        style={{ width: '100%' }}
        value={state.name}
        onChange={event => state.setName(event.target.value)}
      />
    </div>
  )
}

const UsesReducer = () => {
  const [state, dispatch] = reducerStore()
  return (
    <div>
      {state.name}
      <input
        type="text"
        style={{ width: '100%' }}
        value={state.name}
        onChange={event => dispatch({ type: 'SET_NAME', payload: event.target.value })}
      />
    </div>
  )
}
