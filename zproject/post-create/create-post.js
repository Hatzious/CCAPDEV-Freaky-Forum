const form = document.getElementById("post-form");
const titleInput = document.getElementById("post-title");
const bodyInput = document.getElementById("post-body");
const statusText = document.getElementById("post-status");
const preview = document.getElementById("post-preview");
const toolbarButtons = document.querySelectorAll(".tool");

const escapeHtml = (value) => value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isSafeUrl = (rawUrl) => {
    try {
        const url = new URL(rawUrl, window.location.href);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch (error) {
        return false;
    }
};

const inlineFormat = (value) => {
    const codeSnippets = [];
    let output = value.replace(/`([^`]+)`/g, (match, code) => {
        const index = codeSnippets.length;
        codeSnippets.push(code);
        return `@@CODE${index}@@`;
    });

    output = output.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, (match, text, url) => {
        if (!isSafeUrl(url)) {
            return text;
        }
        const safeUrl = escapeHtml(url);
        return `<a href="${safeUrl}" rel="noopener noreferrer" target="_blank">${text}</a>`;
    });

    output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    output = output.replace(/~~([^~]+)~~/g, "<del>$1</del>");

    output = output.replace(/@@CODE(\d+)@@/g, (match, index) => {
        const code = codeSnippets[Number(index)] || "";
        return `<code>${code}</code>`;
    });

    return output;
};

const renderPreview = () => {
    const rawText = bodyInput.value;
    if (!rawText.trim()) {
        preview.textContent = "Start typing to see a safe preview.";
        return;
    }

    const escaped = escapeHtml(rawText);
    const lines = escaped.split(/\r?\n/);
    let html = "";
    let inList = false;

    const closeList = () => {
        if (inList) {
            html += "</ul>";
            inList = false;
        }
    };

    lines.forEach((line) => {
        const trimmed = line.trim();

        if (/^\s*-\s+/.test(line)) {
            if (!inList) {
                html += "<ul>";
                inList = true;
            }
            const item = line.replace(/^\s*-\s+/, "");
            html += `<li>${inlineFormat(item)}</li>`;
            return;
        }

        closeList();

        if (!trimmed) {
            html += "<div class=\"spacer\"></div>";
            return;
        }

        if (/^\s*>\s+/.test(line)) {
            const quote = line.replace(/^\s*>\s+/, "");
            html += `<blockquote>${inlineFormat(quote)}</blockquote>`;
            return;
        }

        const headingMatch = line.match(/^\s*(#{1,3})\s+(.*)$/);
        if (headingMatch) {
            const level = headingMatch[1].length;
            const text = headingMatch[2];
            html += `<h${level}>${inlineFormat(text)}</h${level}>`;
            return;
        }

        html += `<p>${inlineFormat(line)}</p>`;
    });

    closeList();
    preview.innerHTML = html;
};

const insertMarkdown = (token) => {
    const start = bodyInput.selectionStart;
    const end = bodyInput.selectionEnd;
    const before = bodyInput.value.slice(0, start);
    const selection = bodyInput.value.slice(start, end);
    const after = bodyInput.value.slice(end);

    const insertValue = token.includes(" ") ? `${token}${selection}` : `${token}${selection}${token}`;
    bodyInput.value = `${before}${insertValue}${after}`;

    const cursor = before.length + insertValue.length;
    bodyInput.setSelectionRange(cursor, cursor);
    bodyInput.focus();
    renderPreview();
};

toolbarButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const token = button.getAttribute("data-md") || "";
        if (token) {
            insertMarkdown(token);
        }
    });
});

bodyInput.addEventListener("input", renderPreview);

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title || !body) {
        statusText.textContent = "Please provide both a title and a body.";
        return;
    }

    statusText.textContent = "Post saved locally. This demo does not publish to a server.";
});

renderPreview();
