import { f } from './fn'

export function f1 (message: string) {
  return `This is the module, calling a common function. ${f(message)}`
}
