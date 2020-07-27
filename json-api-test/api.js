class Api {
  constructor() {
    this.URL = "https://api-test-dragon.herokuapp.com/objects/0"
    this.number = 0;
  }

  async patch(number) {
    this.number += number
    const response = await this._patchData()
    console.log(response);
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
    var result = this.number
    const response = await fetch(this.URL, {
      method: 'PATCH',
      body: JSON.stringify({
        "id": 0,
        "title": "First post!",
        "content": "Second post!",
        "number": result
      }),
      headers: {
        "Content-type": "application/json",
      }
    })
    return response
  }
}
