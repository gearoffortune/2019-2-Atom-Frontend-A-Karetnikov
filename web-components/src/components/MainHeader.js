import hamburger from '../assets/hamburger.svg';
import search from '../assets/search.svg';

const template = document.createElement('template');
template.innerHTML = `
    <style>
        button {
            background-color: transparent;
            border: none;
        }
        header {
            background-color: #8e24aa;
            display: flex;
            justify-content: space-between;
        }
        h1 {
            color: white;
        }
        svg {
            height: 48px;
            fill: white;
        }
    </style>
    <header>
        <button class="button button--hamburger">${hamburger}</button>
        <h1>Messenger</h1>
        <button class="button button--search">${search}</button>
    </header>
`;

class MainHeader extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('main-header', MainHeader);
