import { Component } from '../core/Component'

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      amount: props.amount,
    }

    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donate-item'

    this.$rootElement.innerHTML = `${this.state.date} - <b>$${this.state.amount}</b>`

    const $button = document.createElement('button')
    $button.className = 'delete-button'
    $button.textContent = 'Удалить'

    this.$rootElement.appendChild($button)

    this.$rootElement.addEventListener('click', this.handleRemove.bind(this))
  }

  handleRemove(event) {
    if (event.target.className === 'delete-button') {
      this.props.onRemove(this.state.id, this.state.amount)
      this.$rootElement.remove()
    }
  }
}
