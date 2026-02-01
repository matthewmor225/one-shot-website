const commentsDiv = document.getElementById("comments");

window.onload = () => {
    const saved = JSON.parse(localStorage.getItem("comments")) || [];
    saved.forEach(showComment);
};

function addComment() {
    const name = document.getElementById("username").value.trim();
    const text = document.getElementById("comment").value.trim();

    if (!name || !text) {
        alert("Please fill everything in!");
        return;
    }

    const comment = { name, text };

    const saved = JSON.parse(localStorage.getItem("comments")) || [];
    saved.push(comment);
    localStorage.setItem("comments", JSON.stringify(saved));

    showComment(comment);
    document.getElementById("comment").value = "";
}

function showComment(c) {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `<strong>${c.name}</strong><p>${c.text}</p>`;
    commentsDiv.prepend(div);
}
