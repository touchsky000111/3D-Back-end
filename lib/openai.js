const OpenAI = require("openai");
const chrono = require('chrono-node');
const config = require("../config/index")
exports.getMeetingDate = async ({ messages }) => {

    const openai = new OpenAI({
        apiKey: config.OPENAI_API_KEY, // Replace with your actual key
    });

    // Chat history as readable plain text
    const chatHistory = messages

    // Convert to readable plain text for OpenAI
    const formattedConversation = chatHistory
        .map(entry => `${entry.role === 'bot' ? 'Bot' : 'User'}: ${entry.message}`)
        .join('\n');

    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            {
                role: 'system',
                content: 'You are a helpful assistant that extracts dates and times from human conversations.',
            },
            {
                role: 'user',
                content: `Here is a conversation:\n\n${formattedConversation}\n\nWhat is the agreed meeting date and time? Please answer in full sentence.`,
            },
        ],
    });

    const answer = response.choices[0].message.content;
    console.log('🧠 GPT Answer:', answer);

    // Optional: Try to parse it into a JS Date
    const parsed = chrono.parseDate(answer);
    console.log('📅 Parsed Date:', parsed);
    return parsed
}


exports.getTextFromHtmlFile = async ({ html }) => {
    const openai = new OpenAI({
        apiKey: config.OPENAI_API_KEY, // Replace with your actual key
    });

    // Chat history as readable plain text

    // Convert to readable plain text for OpenAI
    const response = await openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
            {
                role: 'system',
                content: 'show all content of this html file',
            },
            {
                role: 'user',
                content: `show all content of this html file: ${html}`,
            },
        ],
    });

    const answer = response.choices[0].message.content;
    console.log('🧠 GPT Answer:', answer);
    return answer
}