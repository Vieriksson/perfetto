import { createClassStore } from './class-store'

class StateClass {
  name: string

  constructor() {
    this.name = 'sören'
  }

  setName(name: string) {
    this.name = name
  }
}
const classState = new StateClass()
export const [ClassStateProvider, classStore] = createClassStore<StateClass>(classState)
