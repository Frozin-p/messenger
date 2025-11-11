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

let elPool = [
    // [a, () => {}]
    // [a, () => {}]
]

const UnlistenChatClick = () => {
    elPool.forEach(([a, listenerCallback]) => a.removeEventListener('click', listenerCallback))
    elPool = []
}

export const ListenChatClick = (elementWithChats, callback) => {
    UnlistenChatClick()

    elementWithChats.querySelectorAll('a').forEach((a) => {
        const listenerCallback = (e) => {
            e.preventDefault();
            const clickedIndex = a.href.split('/').at(-1);
            callback(+clickedIndex);
        }

        elPool.push([a, listenerCallback])
        a.addEventListener('click', listenerCallback);
    })
}