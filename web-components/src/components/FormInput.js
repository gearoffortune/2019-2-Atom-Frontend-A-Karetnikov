const template = document.createElement('template');
template.innerHTML = `
    <style>
        input {
            border: 0;
            outline: none;
            width: calc(100% - 2px);
        }

        :host {
            display: inline-block;
            border: 1px solid rgba(25, 25, 25, 0.32);
        }
        .input-block {
            display: flex;
            font-size: 1.5rem;
            padding: 5px 0;
        }
        .input-clip {
          transform: rotate(90deg);
          height: 1em;
          margin-right: 10px;
        }
    </style>
    <div class="input-block">
      <input type="text">
      <img class="input-clip" src="../../assets/clip.svg" >
    </div>
`;

class FormInput extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$input = this.shadowRoot.querySelector('input');
  }

  static get observedAttributes() {
    return ['name', 'value', 'placeholder', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.$input.setAttribute(name, newValue);
  }

  get value() {
    return this.$input.value;
  }

  reset() {
      this.$input.value = '';
  }
}

customElements.define('form-input', FormInput);
