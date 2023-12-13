//handler

import { HfInference } from "@huggingface/inference";

const API_TOKEN = "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";



query({ inputs: "Can you please let us know more details about your " }).then(
  (response) => {
    console.log(JSON.stringify(response));
  }
);
import fetch from "node-fetch";
async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/deepset/roberta-base-squad2",
        {
            headers: { Authorization: `Bearer ${API_TOKEN}` },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}
query({inputs:{question:"What is my name?",context:"My name is Clara and I live in Berkeley."}}).then((response) => {
    console.log(JSON.stringify(response));
});
// {"score":0.933128833770752,"start":11,"end":16,"answer":"Clara"}