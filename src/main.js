import './style.css'

import {ChatItemComponent, ListenChatClick} from './components/ChatItem'
import {ActiveChatComponent} from './components/ActiveChat'
import {ChatFormComponent, ListenFormSubmit} from './components/ChatForm'
import {chatsList, chats, addMyMessageToChat} from './api'

const App = () => {
  let activeChatID = 0;

  const render = () => {
      const ChatItems = chatsList.map((chatElement, index) => ChatItemComponent(
          chatElement.name,
          chatElement.avatar,
          chatElement.lastMessage.text,
          chatElement.lastMessage.time,
          index,
      )).join('')

      const ActiveChat = ActiveChatComponent(chats.find((activeChatElement) => activeChatElement.id === activeChatID));

      const ChatForm = ChatFormComponent();

      document.querySelector('#app').innerHTML = `
        <div class="chats">
          ${ChatItems}
        </div>
        <div class="active">
          ${ActiveChat}
          ${ChatForm}
        </div>
      `

      ListenChatClick(document.querySelector('.chats'), (clickedIndex) => {
          activeChatID = clickedIndex;
          render();
      })

      ListenFormSubmit(document.querySelector('form'), (e) => {
          console.log('form submitted', e);
          const myInputForm = e.currentTarget.querySelector('[name="mymessage"]');
          if (!myInputForm || !myInputForm.value) {
              return false;
          }
          addMyMessageToChat(activeChatID, myInputForm.value);
          render();
      })
  }

  render();
}

App();