"use strict";

const chat = {
    author: "yourName",
    init() {
        this.fetchMessages();
        this.sendMessage();
    },
    sendMessage() {
        fetch('')
            .then.json
    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                //sort
                data.sort((a, b) => {
                    if (a.id < b.id) {
                        return -1;

                    } else {
                        resturn - 1
                    }
                });
                data.forEach((msg) => {
                    let htmlString =
                        ` <div class="header">
        <span class="author">${msg.author}</span>
        <span class="time">00:00</span>
    </div>
    <p>
    ${msg.message}
    </p>
</div>`
                    document.querySelector('#messageContainer').insertAdjacentHTML("beforeend", htmlString)
                })


            });
    },


    renderMessage(message) {}

};

chat.init();