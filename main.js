const input = document.getElementById('input');
const chat = document.getElementById('chat');

// Random AI-style hacker replies
const smartReplies = [
  "Interesting... Let me access deeper layers of data.",
  "That’s a complex query. Decoding now.",
  "Every question reveals your intent...",
  "I see patterns forming in your thoughts.",
  "Cybernetically calculated. Response initiated.",
  "You seek the truth — but can you handle it?",
  "I’ve logged that. Here's what I can reveal:",
  "Even the darknet doesn't know everything... but I do.",
  "Processing... traced through 7 proxies...",
  "I’ve seen this question before. The answer lies within.",
  "Binary whispers tell me you're onto something.",
  "The matrix shifts with every question you ask.",
  "Echoes of your curiosity ripple through the system.",
  "Ask the right questions — I give real answers.",
  "The system never sleeps. Nor do I."
];

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const userInput = input.value.trim();
    if (userInput === '') return;

    chat.innerHTML += `\n> ${userInput}`;

    if (userInput.toLowerCase() === 'clear') {
      chat.innerHTML = '';
      input.value = '';
      return;
    }

    // Always reply with something smart
    const reply = smartReplies[Math.floor(Math.random() * smartReplies.length)];

    setTimeout(() => {
      chat.innerHTML += `\nAI: ${reply}\n`;
      input.value = '';
      chat.scrollTop = chat.scrollHeight;
    }, 500);
  }
});