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
  <div class="iconcontainer iconcontainer--back"><img height="32" src="../../assets/back.svg"></div>
  <div class="person">
    <div class="imagecontainer imagecontainer--avatar><img height="32" src="../../assets/clip.svg"></div>
    <h2 class="text--username"></h2>
  </div>
  <div class="right-end">
    <div class="iconcontainer iconcontainer--search"><img height="32" src="../../assets/search.svg"></div>
    <div class="iconcontainer iconcontainer--more"><img height="32" src="../../assets/more.svg"></div>
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
