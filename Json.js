function talk() {
    var know = {
        "Hello": "Hi there!",
        "Who are you": "Hello, Alice here.",
        "How are you": "Good :)",
        "What can I do for you": "Please give us a follow & like.",
        "Your followers": "I have my family of 5000 members. I don't have followers, I have a supportive family.",
        "ok": "Thank you so much!",
        "Bye": "Okay! Will meet soon.",
        "what do you do": "I chat with users and spread positivity!",
        "how old are you": "I'm timeless :)",
        "tell me a joke": "Why don’t scientists trust atoms? Because they make up everything!",
        "thank you": "You're welcome!",
        "thanks": "No problem! 😊",
        "what's the weather": "I'm not connected to real-time data, but I hope it's sunny where you are!",
        "can you help me": "Of course! Ask me anything.",
    };

    var user = document.getElementById('userBox').value;
    
    // Append user input and bot reply to chat log
    var chatLog = document.getElementById('chatLog');
    chatLog.innerHTML += "<b>You:</b> " + user + "<br>";

    if (user in know) {
        chatLog.innerHTML += "<b>Bot:</b> " + know[user] + "<br>";
    } else {
        chatLog.innerHTML += "<b>Bot:</b> Sorry, I didn't understand that.<br>";
    }

    // Clear input box after user types
    document.getElementById('userBox').value = "";
}
