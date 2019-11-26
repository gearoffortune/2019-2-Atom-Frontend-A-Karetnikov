import avatarMe from '../assets/personavatar_me.png';
import avatarAnn from '../assets/personavatar_ann.png';
import avatarSasha from '../assets/personavatar_sasha.png';

const template = document.createElement('template');
template.innerHTML = `
    <main-header></main-header>
    <div class="all-chats"></div>
    <new-message></new-message>
    <style>
      new-message {
        position: fixed;
        bottom: 50px;
        right: 50px;
      }
    </style>
`;

class MainScreen extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this._chats = this._shadowRoot.querySelector('.all-chats');
    this._loadLocalStorage();
    this._loadChats();
  }

  _loadLocalStorage() {
    this._chatData = JSON.parse(localStorage.getItem('chatdata')) || {
      chats:
        [{
          type: 'oneByOne',
          users: [{ userName: 'Me', avatar: avatarMe }],
          unreadCount: 0,
          messages:
            [{
              value: 'try',
              user: 'Me',
              date: 1572186026733,
              isClientMessage: false,
              isRead: false,
              isRecieved: true,
            }],
        },
        {
          type: 'oneByOne',
          users: [{ userName: 'Ann', avatar: avatarAnn }],
          unreadCount: 1,
          messages:
          [{
            value: 'Where the hell are you?',
            user: 'Me',
            date: 1574771940093,
            isClientMessage: true,
            isRead: true,
            isRecieved: true,
          }],
        },
        {
          type: 'oneByOne',
          users: [{ userName: 'Sasha', avatar: avatarSasha }],
          unreadCount: 1,
          messages:
          [{
            value: "What's your ETA?",
            user: 'Me',
            date: 1574777062635,
            isClientMessage: true,
            isRead: false,
            isRecieved: true,
          }],
        }],
    };
  }

  _saveLocalStorage() {
    localStorage.setItem('chatdata', JSON.stringify(this._chatData));
  }

  _loadChats() {
    this._chatData.chats.forEach((chat) => {
      this._chats.innerHTML += `<single-chat 
        chatname="${chat.users[0].userName}" 
        chatavatar="${chat.users[0].avatar}" 
        lastmessage="${chat.messages[chat.messages.length - 1].value}" 
        senttime="${chat.messages[chat.messages.length - 1].date}"
        isclientmessage="${chat.messages[chat.messages.length - 1].isClientMessage}"
        isread="${chat.messages[chat.messages.length - 1].isRead}"
        isrecieved="${chat.messages[chat.messages.length - 1].isRecieved}"
        chatavatar=""
        messagenumber="${chat.messages.filter((x) => x.isRecieved && !x.isRead).length}"></single-chat>`;
    });
  }
}

customElements.define('main-screen', MainScreen);
