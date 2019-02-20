import React, { createElement, useContext, useMemo, useState } from 'react'
type ProviderType = (children: any) => JSX.Element

export function createClassStore<T>(classInstance: T): [ProviderType, () => T] {
  let setState: any

  const context = React.createContext({} as any)
  const functionNames = getInstanceFunctions(classInstance as any)
  const fns = functionNames.reduce(
    (tutti: object, name) => ({
      ...tutti,
      [name]: function(...args: any) {
        ;(classInstance as any)[name](...args)
        setState(toStateObject(classInstance))
      }
    }),
    {} as object
  )

  const store = () => useContext<T>(context)

  const Provider: ProviderType = ({ children }) => {
    let state
    ;[state, setState] = useState(toStateObject(classInstance))
    const value = useMemo(() => ({ ...classInstance, ...fns } as T), [state])
    return createElement(context.Provider, { value }, children)
  }

  return [Provider, store]
}

function toStateObject(obj: any) {
  return Reflect.ownKeys(obj).reduce((a: any, b) => {
    a[b] = obj[b]
    return a
  }, {})
}

function getInstanceFunctions(obj: any) {
  const proto = Object.getPrototypeOf(obj)
  const names = Object.getOwnPropertyNames(proto)
  return names
    .filter(name => name !== 'constructor')
    .filter(name => typeof obj[name] === 'function')
}
