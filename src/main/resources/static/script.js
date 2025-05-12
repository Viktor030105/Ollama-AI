async function sendPrompt() {
    const message = document.getElementById("prompt").value;
    const responseArea = document.getElementById("response");
    responseArea.textContent = "Loading...";

    try {
        const res = await fetch(`/api/ollama/${encodeURIComponent(message)}`);
        const data = await res.text();
        responseArea.textContent = data;
    } catch (error) {
        responseArea.textContent = "Error: " + error;
    }
}
