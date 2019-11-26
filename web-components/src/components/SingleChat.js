import oneTick from '../assets/oneTick.svg';
import twoTicks from '../assets/twoTicks.svg';

const template = document.createElement('template');
template.innerHTML = `
    <div class="single-chat">
        <div class="single-chat__avatar">

        </div>
        <div class="single-chat__name-and-message">
            <h1 class="chat-name"></h1>
            <p class="message-text"></p>
        </div>
        <div class="single-chat__unread-and-time">
            <p class="message-time"></p>
            <div class="unread-count"></div>
        </div>
    </div>
    <style>
        .single-chat {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #666666;
            margin-top: 4px;
        }

        .single-chat__avatar {
          margin-left: 15px;
        }

        .single-chat__avatar > img {
          clip-path: circle(48px);
          height: 96px;
        }

        .single-chat__name-and-message {
            flex-grow: 1;
        }
        .message-text {
          color: #666666;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .single-chat__unread-and-time {
          margin-right: 20px;
          font-variant-numeric: tabular-nums;
        }

        .message-time {
          text-align: right;
        }

        .unread-count {
          text-align: right;
        }

        .unread-count > svg {
          height: 2em;
          fill: #8e24aa;
        }
        .single-chat__avatar {
          flex-basis: 2em;
        }
        .unread-count__counter {
          color: white;
          background-color: #8e24aa;
          text-align: center;
          border-radius: 1em;
        }
    </style>
`;


class SingleChat extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.chatName = this.getAttribute('chatname');
    this.chatAvatar = this.getAttribute('chatavatar');
    this.lastMessage = this.getAttribute('lastmessage');
    this.sentTime = this.getAttribute('senttime');
    this.isClientMessage = this.getAttribute('isclientmessage');
    this.isRead = this.getAttribute('isread');
    this.isRecieved = this.getAttribute('isrecieved');
    this.messageNumber = this.getAttribute('messagenumber');

    this._shadowRoot.querySelector('.chat-name').innerText = this.chatName;

    this._shadowRoot.querySelector('.message-text').innerText = this.lastMessage;
    this._shadowRoot.querySelector('.message-time').innerText = (new Date(parseInt(this.sentTime, 10))).toTimeString().slice(0, 5);

    this._shadowRoot.querySelector('.single-chat__avatar').innerHTML = `<img src="${this.chatAvatar}">`;

    if (this.isClientMessage === 'true') {
      if (this.isRead === 'true') {
        this._shadowRoot.querySelector('.unread-count').innerHTML = twoTicks;
      } else if (this.isRecieved === 'true') {
        this._shadowRoot.querySelector('.unread-count').innerHTML = oneTick;
      }
    } else {
      this._shadowRoot.querySelector('.unread-count').innerHTML = `<p class="unread-count__counter">${this.messageNumber}</p>`;
    }
  }
}

customElements.define('single-chat', SingleChat);
