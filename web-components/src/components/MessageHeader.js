import backSVG from '../assets/back.svg';
import moreSVG from '../assets/more.svg';
import searchSVG from '../assets/search.svg';

const template = document.createElement('template');
template.innerHTML = `
<style>
  .header {
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #8e24aa;
    color: #f3e8f6;
  }
  .iconcontainer {
    margin: 0 10px;
  }

  .iconcontainer > svg {
    height: 32px;
  }
  .right-end > .iconcontainer {
    display: inline-block;
  }
  .text--username {
    font-size: 20px;
    line-height: 20px;
    height: 20px;
  }
</style>
<div class="header">
  <div class="iconcontainer iconcontainer--back">${backSVG}</div>
  <div class="person">
    <div class="imagecontainer imagecontainer--avatar"></div>
    <h2 class="text--username"></h2>
  </div>
  <div class="right-end">
    <div class="iconcontainer iconcontainer--search">${searchSVG}</div>
    <div class="iconcontainer iconcontainer--more">${moreSVG}</div>
  </div>
</div>`;

class MessageHeader extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this._username = this.getAttribute('username');
    this._shadowRoot.querySelector('.text--username').textContent = this._username;
  }
}

customElements.define('message-header', MessageHeader);
