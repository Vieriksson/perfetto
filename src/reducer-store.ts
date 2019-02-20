import React, { createElement, Reducer, useContext, useMemo, useReducer } from 'react'

export type Action = { type: string; payload: any }
type ProviderType = (children: any) => JSX.Element

type ReducerStoreType<T> = [T, React.Dispatch<Action>]
type ReducerStoreCreator<T> = () => ReducerStoreType<T>
export function createReducerStore<T>(
  initValue: T,
  reducer: (store: T, action: Action) => T
): [ProviderType, ReducerStoreCreator<T>] {
  const context = React.createContext({} as any)

  const store = () => useContext<ReducerStoreType<T>>(context)

  const Provider: ProviderType = ({ children }) => {
    const [state, updater]: ReducerStoreType<T> = useReducer<Reducer<T, Action>, T>(
      reducer,
      initValue,
      () => initValue
    )

    const value = useMemo(() => [state, updater], [state])
    return createElement(context.Provider, { value }, children)
  }

  return [Provider, store]
}
