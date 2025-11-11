import './style.css'


const Message = (text, time, isMy) => {
    const isMyClass = isMy ? 'ac-message_right' : 'ac-message_left'
    return `
        <div class="ac-wrapper ${isMyClass}">
            <div class="ac-message">
                <div class="ac-text">${text}</div>
                <div class="ac-text">${time}</div>
            </div>
        </div>
    `
}

export const ActiveChatComponent = ({ messages }) => {

    const MessagesList = messages.map((msg) => Message(msg.text, msg.time, msg.isOurs)).join('')

    return `
        <div class="ac-container">
            ${MessagesList}
        </div>
  `
}