import { Component } from '../core/Component'

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    }

    this.$rootElement = document.createElement('form')
    this.$rootElement.className = 'donate-form'

    const $label = document.createElement('label')
    $label.className = 'donate-form__input-label'
    $label.textContent = 'Введите сумму в $'

    const $input = document.createElement('input')
    $input.type = 'number'
    $input.min = '1'
    $input.max = '100'
    $input.className = 'donate-form__donate-input'

    const $button = document.createElement('button')
    $button.className = 'donate-form__submit-button'
    $button.textContent = 'Задонатить'

    this.$rootElement.appendChild($label)
    this.$rootElement.appendChild($input)
    this.$rootElement.appendChild($button)

    this.$input = $input
    this.$button = $button

    this.$input.addEventListener('input', this.handleInput.bind(this))
    this.$button.addEventListener('click', this.handleSubmit.bind(this))
  }

  handleInput(event) {
    this.state.amount = event.target.value
    this.$button.disabled = !this.isValid
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount))
      this.state.amount = ''
      this.$input.value = ''
    }
  }

  get isValid() {
    return Number(this.state.amount) >= 1 && Number(this.state.amount) <= 100
      ? true
      : false
  }
}
