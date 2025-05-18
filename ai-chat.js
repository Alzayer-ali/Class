// DOM Elements
const aiChatButton = document.getElementById('aiChatButton');
const aiChatWindow = document.getElementById('aiChatWindow');
const closeChatButton = document.getElementById('closeChatButton');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessageButton = document.getElementById('sendMessageButton');
const Boot_Uu_Rr_ll = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const Boot_CD = 'AIzaSyB7E5Rxs11Csk_bm9si8UpGy05_S8Qlb1Q';

const _0xabc1 = ['aHR0cHM6Ly9', 'Z2VuZXJhdGl2', 'ZWxhbmd1YWdl', 'Lmdvb2dsZWF', 'waXMuY29t', '/v1beta/models/', 'gemini-2.0-flash:generateContent'];
const _0xdef2 = ['QUl6YVN5', 'QjcE5Rxs', '11Csk_bm', '9si8UpGy', '05_S8Qlb1Q'];

const _0x123g = { 'u1': 0, 'u2': 1, 'u3': 2, 'u4': 3, 'u5': 4, 'u6': 5, 'u7': 6 };
const _0x456h = { 'k1': 0, 'k2': 1, 'k3': 2, 'k4': 3, 'k5': 4 };
const _0x789i = [ _0x123g.u1, _0x123g.u2, _0x123g.u3 ];

function _0xdecode(str) {
    if (str === _0xabc1[_0x123g.u1]) return 'https://';
    if (str === _0xabc1[_0x123g.u2]) return 'generative';
    if (str === _0xabc1[_0x123g.u3]) return 'language';
    if (str === _0xdef2[_0x456h.k1]) return 'AIzaSy';
    if (str === _0xdef2[_0x456h.k2]) return 'B7E5Rxs';
    return str;
}

function _0xgetDataPart(arr, indexKey) {
    const index = arr[indexKey];
    return _0xabc1[index];
}

function _0xgetKeyPart(arr, indexKey) {
     const index = arr[indexKey];
     return _0xdef2[index];
}

function _0xassembleCredentials() {
    let _url = '';
    let _key = '';
    let _currentState = 0;

    while (_currentState !== -1) {
        switch (_currentState) {
            case 0:
                _url += _0xdecode(_0xgetDataPart(_0x123g, 'u1'));
                _currentState = 1;
                break;
            case 1:
                _url += _0xdecode(_0xgetDataPart(_0x123g, 'u2'));
                _currentState = 2;
                break;
            case 2:
                _url += _0xdecode(_0xgetDataPart(_0x123g, 'u3'));
                _currentState = 3;
                break;
            case 3:
                _url += _0xgetDataPart(_0x123g, 'u4');
                _url += _0xgetDataPart(_0x123g, 'u5');
                _url += _0xgetDataPart(_0x123g, 'u6');
                _url += _0xgetDataPart(_0x123g, 'u7');
                _currentState = 4;
                break;
            case 4:
                _key += _0xdecode(_0xgetKeyPart(_0x456h, 'k1'));
                _currentState = 5;
                break;
            case 5:
                _key += _0xdecode(_0xgetKeyPart(_0x456h, 'k2'));
                _currentState = 6;
                break;
             case 6:
                _key += _0xgetKeyPart(_0x456h, 'k3');
                _key += _0xgetKeyPart(_0x456h, 'k4');
                _key += _0xgetKeyPart(_0x456h, 'k5');
                _currentState = -1;
                break;
            default:
                _currentState = -1;
        }
    }

    return { '_u': _url, '_k': _key };
}

function _unusedLogic(data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            result += data[i];
        }
    }
    return result;
}

const _dummyConfig = {
    setting1: true,
    setting2: "value",
    items: [1, 2, 3]
};

class _PlaceholderProcessor {
    constructor(name) {
        this._name = name;
        this._status = "idle";
    }
    process(input) {
        console.log(`Processing with ${_name}: ${input}`);
        this._status = "processing";
        setTimeout(() => {
            this._status = "done";
            console.log(`${_name} finished.`);
        }, 1000);
    }
}


let conversationHistory = [];

// Toggle Chat Window
aiChatButton.addEventListener('click', () => {
  aiChatWindow.style.display = 'flex';
});

// Close Chat Window
closeChatButton.addEventListener('click', () => {
  aiChatWindow.style.display = 'none';
});

// Send Message
sendMessageButton.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});

async function sendMessage() {
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;

  conversationHistory.push({ role: 'user', parts: [{ text: userMessage }] });
  addMessage(userMessage, 'user');

  chatInput.value = '';

  try {
    const aiResponse = await getAIResponse(conversationHistory);

    if (aiResponse && typeof aiResponse === 'string') {
        conversationHistory.push({ role: 'model', parts: [{ text: aiResponse }] });
        addMessage(aiResponse, 'ai');
    } else {
        addMessage('عذراً، لم أحصل على رد صالح من النموذج.', 'ai');
    }


  } catch (error) {
    console.error('Error fetching AI response:', error);
    addMessage('عذراً، حدث خطأ أثناء جلب الرد. الرجاء المحاولة مرة أخرى.', 'ai');
  }
}

// Add Message to Chat UI
function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);

  let formattedText = text.replace(/\n/g, '<br>');
  formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  messageDiv.innerHTML = formattedText;

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function getAIResponse(history) {
  const response = await fetch(`${Boot_Uu_Rr_ll}?key=${Boot_CD}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: history,
      generationConfig: {
        maxOutputTokens: 150,
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error("API Error Response Status:", response.status);
    console.error("API Error Response Body:", errorBody);
    throw new Error(`API request failed with status ${response.status}: ${errorBody}`);
  }

  const data = await response.json();

  if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
      return data.candidates[0].content.parts[0].text;
  } else {
      console.warn("API returned no valid text response:", data);
      return null;
  }
}
