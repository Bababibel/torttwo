export default class Instance {
  url = ''

  constructor(instance: Instance) {
    this.url = instance.url.toString()
  }
}