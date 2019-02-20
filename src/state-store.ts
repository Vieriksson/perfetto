import React, { createElement, useContext, useMemo, useState } from 'react'

type ProviderType = (children: any) => JSX.Element

type StateStoreType<T> = [T, React.Dispatch<T | ((prevState: T) => T)>]
type StateStoreCreator<T> = () => StateStoreType<T>
export function createStateStore<T>(initValue: T): [ProviderType, StateStoreCreator<T>] {
  const context = React.createContext({} as any)

  const store = () => useContext<StateStoreType<T>>(context)

  const Provider: ProviderType = ({ children }) => {
    const [state, updater]: StateStoreType<T> = useState<T>(initValue)

    const value = useMemo(() => [state, updater], [state])
    return createElement(context.Provider, { value }, children)
  }

  return [Provider, store]
}
