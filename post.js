class Post {
  constructor(title) {
    this.title = title
    this.date = new date()
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON()
    })
  }
}