import './style.css'

export const ChatItemComponent = (nickname, avatar, text, time, id) => {
    return `
      <a class="chat-item" href="/${id}">
        <div class="ava" style="background-image: url(${avatar});"></div>
        <div class="preview">
            <div class="nickname">${nickname}</div>
            <div class="message">${text}</div>
        </div>
        <div class="meta">${time}</div>
      </a>
    `
  }

export const ListenChatClick = (elementWithChats) => {
    elementWithChats.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
        });
    })
}