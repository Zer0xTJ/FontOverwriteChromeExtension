const whitelist = [
    "x.com"
]

const host = window.location.host;
if (!whitelist.includes(host)) {
    console.log("Not whitelisted for font replacement");
} else {
    setInterval(() => {
        const allElements = document.body.getElementsByTagName("*");
        for (let i = 0; i < allElements.length; i++) {
            const el = allElements[i];
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE && el.innerText.trim() !== "") {
                el.style.setProperty('font-family', "'Noto Sans Arabic', sans-serif", 'important');
            }
        }
    }, 100);
}