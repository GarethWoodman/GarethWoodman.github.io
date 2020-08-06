class Api {
  constructor() {
    this.URL = "https://api-test-dragon.herokuapp.com/objects/0"
    this.maxHP = 400
  }

  async patch(number) {
    this.number += number
    this._patchData()
    this._calculateHealth()
  }

  async get() {
    const data = await this._getData();
    console.log(data);
    this.number = data.number
    $("#content").text(data.number)
  }

  async _getData() {
    const response = await fetch(this.URL)
    return response.json()
  }

  async _patchData() {
    fetch(this.URL, {
      method: 'PATCH',
      body: JSON.stringify({
        "id": 0,
        "title": "First post!",
        "content": "Second post!",
        "number": this.number
      }),
      headers: {
        "Content-type": "application/json",
      }
    })
  }

  async _calculateHealth() {
    let current_width = (100 / this.maxHP) * this.number
    $('#health').width(current_width)
  }
}
