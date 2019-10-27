const template = document.createElement('template');
template.innerHTML = `
    <main-header></main-header>
`

class MainScreen extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('main-screen', MainScreen);