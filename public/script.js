document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copyBtn');
    const output = document.getElementById('output');

    copyBtn.addEventListener('click', () => {
        const textArea = document.createElement('textarea');
        textArea.value = output.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Copied to clipboard!');
    });
});
