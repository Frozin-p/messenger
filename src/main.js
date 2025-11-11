import './style.css'

import {ChatItemComponent, ListenChatClick} from './components/ChatItem'
import {ActiveChatComponent} from './components/ActiveChat'
import {chatsList as chatsApi} from './api'

const App = () => {
  let activeChatID = 0;

  const render = () => {
      const ChatItems = chatsApi.map((chatElement, index) => ChatItemComponent(
          chatElement.name,
          chatElement.avatar,
          chatElement.lastMessage.text,
          chatElement.lastMessage.time,
          index,
      )).join('')

      const ActiveChat = ActiveChatComponent(activeChatID);

      document.querySelector('#app').innerHTML = `
        <div class="chats">
          ${ChatItems}
        </div>
        <div class="active">
          ${ActiveChat}
        </div>
      `

      ListenChatClick(document.querySelector('.chats'), (clickedIndex) => {
          activeChatID = clickedIndex;
          render();
      })
  }

  render();
}

App();