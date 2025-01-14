import React, { useState } from 'react';
import axios from 'axios';

const HelpCenter = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    // Predefined Questions related to travel planning
    const predefinedQuestions = [
        "What documents do I need for international travel?",
        "How can I check my flight status?",
        "What are the COVID-19 requirements for traveling abroad?",
        "How do I book a hotel?",
        "Can I cancel my flight ticket? What are the charges?",
        "How do I get travel insurance?",
        "Can you plan a trip for me?"
    ];

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    // Function to send the message to the ChatGPT Vision API
    const sendMessage = async (message) => {
        if (!message || message.trim() === "") return;

        const newChatHistory = [...chatHistory, { sender: 'user', message }];
        setChatHistory(newChatHistory);
        setLoading(true);

        const options = {
            method: 'POST',
            url: 'https://chatgpt-vision1.p.rapidapi.com/gpt4',
            headers: {
                'x-rapidapi-key': '644f09699bmsh688d6d020f7f011p157ecbjsnc5801399ac6e', // Replace with your RapidAPI Key
                'x-rapidapi-host': 'chatgpt-vision1.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            data: {
                messages: [
                    {
                        role: 'user',
                        content: message, // The user input or predefined question
                    }
                ],
                web_access: false,
            },
        };

        try {
            const response = await axios.request(options);

            // Log the complete response to understand its structure
            console.log("API Response:", response.data);

            // Check if the response contains the 'result' field
            if (response.data && response.data.result) {
                const aiMessage = response.data.result.trim(); // Extract message from 'result'
                setChatHistory([...newChatHistory, { sender: 'ai', message: aiMessage }]);
            } else {
                setChatHistory([...newChatHistory, { sender: 'ai', message: "Sorry, I couldn't understand the response." }]);
            }
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setChatHistory([...newChatHistory, { sender: 'ai', message: "Sorry, something went wrong." }]);
        }

        setUserInput('');
        setLoading(false);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage(userInput);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Chat Container */}
            <div className="flex flex-col bg-white rounded-lg shadow-lg flex-grow">
                {/* Header Section */}
                <div className="text-center p-4 mb-3">
                    <h1 className="text-6xl font-semibold text-yellow-600">Help Center</h1>
                    <p className="text-lg text-black-600 p-2 tracking-wider">Welcome to our Help Center. How can we assist you today?</p>
                </div>

                {/* Predefined Questions */}
                <div className="px-4 mb-4">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">Common Questions:</h2>
                    <div className="flex flex-wrap gap-2">
                        {predefinedQuestions.map((question, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                onClick={() => sendMessage(question)}
                            >
                                {question}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat History Section */}
                <div className="flex-grow overflow-y-auto p-2 space-y-3">
                    {chatHistory.map((chat, index) => (
                        <div key={index} className={`flex ${chat.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs p-3 rounded-lg ${chat.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                                <p>{chat.message}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area Section (fixed at bottom) */}
                <div className="flex items-center space-x-2 p-3 bg-gray-200 rounded-lg">
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        placeholder="Type your question..."
                        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={() => sendMessage(userInput)}
                        disabled={loading}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg disabled:bg-green-300"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
