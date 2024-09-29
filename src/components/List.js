import { Component } from '../core/Component'

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement('div')
    this.$rootElement.className = 'donates-container'

    const $h2 = document.createElement('h2')
    $h2.className = 'donates-container__title'
    $h2.textContent = 'Список донатов'

    const $div = document.createElement('div')
    $div.className = 'donates-container__donates'

    this.$listContainer = $div

    this.$rootElement.appendChild($h2)
    this.$rootElement.appendChild($div)
  }

  addItem(item) {
    if(this.$listContainer.querySelector('.donates-container__empty')) {
      this.$listContainer.removeChild(this.$span)
    }
    this.$listContainer.appendChild(item.$rootElement)
  }

  emptyList() {
    const $span = document.createElement('span')
    $span.className = 'donates-container__empty'
    $span.textContent = 'Список пуст'

    this.$span = $span

    this.$listContainer.appendChild($span)
  }
}
