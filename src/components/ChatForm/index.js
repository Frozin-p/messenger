export const ChatFormComponent = () => {
    return `
        <form>
            <input type="text" placeholder="Type here..." name="mymessage" />
            <input type="submit" />
        </form>
  `
}

let formUnlistenMap = [] // [form, clb]

const UnlistenFormSubmit = () => {
    if (!formUnlistenMap.length) {
        return;
    }

    const [formElement, listenerCallback] = formUnlistenMap;
    formElement.removeEventListener('submit', listenerCallback)
    formUnlistenMap = [];
}

export const ListenFormSubmit = (formElement, callback) => {
    UnlistenFormSubmit();

    const listenerCallback = (e) => {
        e.preventDefault();
        callback(e)
    }

    formUnlistenMap.push(formElement, listenerCallback)

    formElement.addEventListener('submit', listenerCallback);
}