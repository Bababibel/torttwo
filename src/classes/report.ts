import { ObjectId } from "mongodb"
import Vulnerability from "./vulnerability"

export default class Report {
  _id: ObjectId | undefined
  reference = ''
  client = ''

  vulnerabilities: Vulnerability[] = []

  import(obj: Object) {
    if (Object.keys(obj) === Object.keys(this)) {
      throw new ReferenceError(`Given Report object ${Object.keys(obj)} has not the expected properties ${Object.keys(this)} and can not be converted in the corresponding class.`)
    }
    const rep = obj as Report
    this._id = rep._id
    this.reference = rep.reference.toString()
    this.client = rep.client.toString()
  }
}