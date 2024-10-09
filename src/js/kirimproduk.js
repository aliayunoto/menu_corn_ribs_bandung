function kirim(productName, price, imageUrl) {
    const phoneNumber = '81461245313'; // Replace with your WhatsApp number
    const message = `Saya Mau Beli: ${productName} Rp ${price}/Gambar: ${
        imageUrl
    }`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function kirim2(productName, price, imageUrl) {
    const phoneNumber = '81461245313'; // Replace with your WhatsApp number
    const message = ` ${productName}  ${price}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}