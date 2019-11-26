import penSVG from '../assets/pen.svg';

const template = document.createElement('template');
template.innerHTML = `
    <style>
        :root {
          --button-accentcolour: #ffd54f;
        }
        .round-hover-button {
            border-radius: 50%;
            height: 48px;
            width: 48px;
            border: none;
            background-color: var(--button-accentcolour, #ffd54f);
            background: url('data:image/svg+xml;utf8,${penSVG}') #ffd54f;
            background-size: 50%;
            background-repeat: no-repeat;
            background-position: center;
        }
    </style>
    <button class="round-hover-button"></button>
`;

class NewMessageButton extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('new-message', NewMessageButton);
