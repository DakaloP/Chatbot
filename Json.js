function talk() {
    var know = {
        "Hello": "Hi there!",
        "Who are you": "Hello, Alice here.",
        "How are you": "Good :)",
        "What can I do for you": "Please give us a follow & like.",
        "Your followers": "I have my family of 5000 members. I don't have followers, I have a supportive family.",
        "ok": "Thank you so much!",
        "Bye": "Okay! Will meet soon."
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
