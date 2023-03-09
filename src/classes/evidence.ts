export default class Evidence {
  caption = ''
  imagePath = ''

  constructor(evidence: Evidence) {
    this.caption = evidence.caption.toString()
    this.imagePath = evidence.imagePath.toString()
  }
}