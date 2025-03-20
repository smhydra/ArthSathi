// Chat Interface Functionality
class ChatInterface {
    constructor() {
        this.chatContainer = document.getElementById('chatContainer');
        this.chatToggle = document.getElementById('chatToggle');
        this.closeChat = document.getElementById('closeChat');
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendMessage');
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.chatToggle.addEventListener('click', () => this.toggleChat());
        this.closeChat.addEventListener('click', () => this.toggleChat());
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        this.chatContainer.classList.toggle('active');
        if (this.chatContainer.classList.contains('active')) {
            this.userInput.focus();
        }
    }

    addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    async sendMessage() {
        const message = this.userInput.value.trim();
        if (!message) return;

        // Add user message to chat
        this.addMessage(message, true);
        this.userInput.value = '';

        try {
            // Show typing indicator
            this.showTypingIndicator();

            // Send message to Dialogflow
            const response = await this.sendToDialogflow(message);
            
            // Remove typing indicator
            this.removeTypingIndicator();

            // Add bot response to chat
            this.addMessage(response);
        } catch (error) {
            console.error('Error:', error);
            this.removeTypingIndicator();
            this.addMessage('Sorry, I encountered an error. Please try again.');
        }
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing';
        typingDiv.innerHTML = '<div class="message-content">Typing...</div>';
        this.chatMessages.appendChild(typingDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    removeTypingIndicator() {
        const typingIndicator = this.chatMessages.querySelector('.typing');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    async sendToDialogflow(message) {
        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Error sending message to Dialogflow:', error);
            throw error;
        }
    }
}

// Initialize chat interface when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChatInterface();
}); 