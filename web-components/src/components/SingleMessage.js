const template = document.createElement('template');

template.innerHTML = `
<style>
.message {
    --basic-colour: #f3e5f5;
    --main-textcolour: #383539;
    --timestamp-textcolour: #a9a0ab;
    --tick-colour: #9d41b5;
    --border-colour: #e9dceb;


    display: inline-block;
    max-width: 200px;
    background-color: var(--basic-colour);
    padding: 5px;
    border-radius: 4px 4px 0 4px;
    position: relative;
    border-width: 1px;
    border-style: solid;
    border-color: var(--border-colour);
    text-align: right;
}


.message.right:after {
    content: "";
    display: inline-block;
    position: absolute;
    right: -4px;
    bottom: 0px;
    height: 0px;
    width: 0px;
    border-top: 6px solid transparent;
    border-left: 4px solid var(--basic-colour);
}

.message.right:before {
    content: "";
    display: inline-block;
    position: absolute;
    right: -5px;
    bottom: -1px;
    height: 0px;
    width: 0px;
    border-top: 6px solid transparent;
    border-left: 4px solid var(--border-colour);
}

.message.right {
    float: right;
}

.message-text {
    color: var(--main-textcolour);
    font-size: 0.8rem;
}

.message-timestamp {
    color: var(--timestamp-textcolour);
    font-size: 0.5rem;
}

.message-username {
    display: none;
}

.message-clearfix {
    clear: both;
}
</style>
<div class="message right">
    <div class="message-username"></div>
    <div class="message-text"></div>
    <div class="message-timestamp"></div>
</div>
<div class="message-clearfix"></div>`;

class SingleMessage extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this._shadowRoot.querySelector('.message-text').textContent = this.getAttribute('message');
    this._shadowRoot.querySelector('.message-timestamp').textContent = this.getAttribute('time');
    this._shadowRoot.querySelector('.message-username').textContent = this.getAttribute('user');
  }
}

customElements.define('single-message', SingleMessage);
