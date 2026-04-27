function openModal(type) {
    const modal = document.getElementById("previewModal");
    const title = document.getElementById("modalTitle");
    const body = document.getElementById("modalBody");

    modal.style.display = "block";

    if (type === "basic") {
        title.innerText = "Basic meni";

        body.innerHTML = `
        <div class="preview-box">
            <div class="preview-item"><span>Espresso</span><span>2 KM</span></div>
            <div class="preview-item"><span>Cappuccino</span><span>3 KM</span></div>
            <div class="preview-item"><span>Latte</span><span>3.5 KM</span></div>
            <div class="preview-item"><span>Čaj</span><span>2.5 KM</span></div>
        </div>
        `;
    }

    if (type === "standard") {
    title.innerText = "Standard meni (interaktivni)";

    body.innerHTML = `

    <div class="highlight-preview">
        Happy Hour 08:00 – 11:00
        <span>Kafa samo 1 KM</span>
    </div>

    <div class="preview-box">
        <div class="calc-item">
            <span>Espresso (2 KM)</span>
            <div class="controls">
                <button onclick="changeQty(this,-1)">-</button>
                <span class="qty">0</span>
                <button onclick="changeQty(this,1)">+</button>
            </div>
        </div>

        <div class="calc-item">
            <span>Cappuccino (3 KM)</span>
            <div class="controls">
                <button onclick="changeQty(this,-1)">-</button>
                <span class="qty">0</span>
                <button onclick="changeQty(this,1)">+</button>
            </div>
        </div>

        <div class="calc-item">
            <span>Latte (3.5 KM)</span>
            <div class="controls">
                <button onclick="changeQty(this,-1)">-</button>
                <span class="qty">0</span>
                <button onclick="changeQty(this,1)">+</button>
            </div>
        </div>

        <div class="total-preview">
            Ukupno: <span id="previewTotal">0</span> KM
        </div>
    </div>
    `;
}

    if (type === "premium") {
        title.innerText = "Premium meni";

        body.innerHTML = `
        <div class="preview-box">
            <div class="preview-item">
                <span>Cheesecake ⭐</span><span>5 KM</span>
            </div>
            <div class="preview-item">
                <span>Smoothie 🆕</span><span>6 KM</span>
            </div>
            <div class="preview-item">
                <span>Pizza Special 🔥</span><span>9 KM</span>
            </div>
        </div>

        <div class="preview-box">
            <div class="preview-title">Klik na proizvod</div>
            <div class="preview-item"><span>👉 Slika + opis</span></div>
        </div>

        <div class="preview-box">
            <div class="preview-title">Jezici</div>
            <div class="preview-item"><span>BA | EN | DE</span></div>
        </div>
        `;
    }
}

animateScroll();

function changeQty(button, change) {
    let qtySpan = button.parentElement.querySelector(".qty");
    let qty = parseInt(qtySpan.innerText);

    qty += change;
    if (qty < 0) qty = 0;

    qtySpan.innerText = qty;

    updatePreviewTotal();
}

function updatePreviewTotal() {
    let total = 0;

    document.querySelectorAll(".calc-item").forEach(item => {
        const text = item.querySelector("span").innerText;
        const price = parseFloat(text.match(/[\d.]+/));
        const qty = parseInt(item.querySelector(".qty").innerText);

        total += price * qty;
    });

    document.getElementById("previewTotal").innerText = total.toFixed(2);
}

function closeModal() {
    document.getElementById("previewModal").style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("previewModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

