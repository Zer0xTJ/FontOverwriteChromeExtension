const whitelist = [
    "x.com",
    "www.x.com",

    "web.whatsapp.com",
    "www.web.whatsapp.com",

    "linkedin.com",
    "www.linkedin.com",

    "chatgpt.com",
    "www.chatgpt.com",
];

const host = window.location.host;
if (!whitelist.includes(host)) {
    console.log("Not whitelisted for font replacement");
} else {
    const applyFontRecursively = (node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== "") {
            const parent = node.parentElement;
            if (parent) {
                parent.style.setProperty('font-family', "'Noto Sans Arabic', sans-serif", 'important');
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            for (let child of node.childNodes) {
                applyFontRecursively(child);
            }
        }
    };

    setInterval(() => {
        applyFontRecursively(document.body);
    }, 100);
}