const API_TOKEN = "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";

query({ inputs: "Can you please let us know more details about your " }).then(
  (response) => {
    console.log(JSON.stringify(response));
  }
);
import fetch from "node-fetch";

export default async function query(data: { inputs: string; }) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/gpt2",
		{
			headers: { Authorization: `Bearer ${API_TOKEN}` },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

query({"inputs": "Can you please let us know more details about your "}).then((response) => {
	console.log(JSON.stringify(response));
});