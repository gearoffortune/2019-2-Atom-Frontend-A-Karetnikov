const template = document.createElement('template');
template.innerHTML = `
    <style>
        :root {
          height: 100vh;
        }
        form-input {
          display: block;
        }

        message-header {
          position: fixed;
          top: 0;
          width: 100vw;
          z-index: 1;
        }

        .result {
            --bgcolour: #f5f5f5;
            background-color: var(--bgcolour);
            padding-top: 48px;
            height: calc(100vh - 48px - 36px);
            overflow-y: auto;
        }

        .message-container {
            margin: 5px;
        }

        input[type=submit] {
            visibility: collapse;
        }
    </style>
    <form>
        
      <message-header username="Me"></message-header>
        <div class="result"></div>
        <form-input name="message-text" placeholder="Введите сообщеине"></form-input>
    </form>
`;

const userName = 'Me';

class MessageForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$form = this._shadowRoot.querySelector('form');
    this.$input = this._shadowRoot.querySelector('form-input');
    this.$messages = this._shadowRoot.querySelector('.result');

    this.user = this.getAttribute('user');

    this.$form.addEventListener('submit', this._onSubmit.bind(this));
    this.$form.addEventListener('keypress', this._onKeyPress.bind(this));

    this._loadLocalStorage();
    this._rederMessages();
  }

  _onSubmit(event) {
    event.preventDefault();
    if (this.$input.value.length !== 0) {
      this._newMessage(this.$input.value, userName);
      this._saveLocalStorage();
      this._rederMessages();
      this.$input.reset();
      this._scrollToLast();
    }
  }

  _scrollToLast() {
    this.$messages.lastChild.scrollIntoView({ behavior: 'smooth' });
  }

  _onKeyPress(event) {
    if (event.keyCode === 13) {
      this.$form.dispatchEvent(new Event('submit'));
    }
  }

  _newMessage(value, user) {
    const message = { value, user, date: (Date.now()) };
    this.messages.push(message);
  }

  _loadLocalStorage() {
    this.messages = JSON.parse(localStorage.getItem('chatdata')).chats.filter((x) => x.users[0].userName === this.user)[0].messages;
  }

  _saveLocalStorage() {
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }

  _rederMessages() {
    this.$messages.innerHTML = '';
    this.messages.forEach((elem) => {
      const newMessage = document.createElement('div');
      newMessage.className = 'message-container';
      const date = new Date(elem.date);

      newMessage.innerHTML = `<single-message user="${elem.user}" message="${elem.value}" time="${date.toTimeString().slice(0, 5)}"></single-message>`;
      this.$messages.appendChild(newMessage);
    });
  }
}

customElements.define('message-form', MessageForm);
