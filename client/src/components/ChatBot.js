/*import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import "./ChatBot.css";
const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8080/chatbot", { prompt });
  return res.data;
};

function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ["gemini-ai-request"],
  });
  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(prompt);
  };
  console.log(mutation);
  return (
    <div className="App">
      <header>Gemini AI Content Generator</header>
      <p>Enter a prompt and let Gemini AI craft a unique content for you.</p>
      <form className="App-form" onSubmit={submitHandler}>
        <label htmlFor="Enter your prompt:"></label>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Write a content about..."
          className="App-input"
        />
        <button className="App-button" type="submit">
          Generate Content
        </button>
        <section className="App-response">
          {mutation.isPending && <p>Generating your content</p>}
          {mutation.isError && <p>{mutation.error.message}</p>}
          {mutation.isSuccess && <p>{mutation.data}</p>}
        </section>
      </form>
    </div>
  );
}

export default ChatBot;*/
import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import "./ChatBot.css";

const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8080/chatbot", { prompt });
  return res.data;
};

function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ["gemini-ai-request"],
  });

  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(prompt);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-content">
        <header className="chatbot-header">Gemini AI Content Generator</header>
        <p className="chatbot-description">
          Enter a prompt and let Gemini AI craft a unique content for you.
        </p>
        <form className="chatbot-form" onSubmit={submitHandler}>
          <label htmlFor="prompt" className="sr-only">
            Enter your prompt:
          </label>
          <input
            id="prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write a content about..."
            className="chatbot-input"
          />
          <button className="chatbot-button" type="submit">
            Generate Content
          </button>
        </form>
        <section className="chatbot-response">
          {mutation.isPending && <p>Generating your content...</p>}
          {mutation.isError && <p>{mutation.error.message}</p>}
          {mutation.isSuccess && <p>{mutation.data}</p>}
        </section>
      </div>
    </div>
  );
}

export default ChatBot;
