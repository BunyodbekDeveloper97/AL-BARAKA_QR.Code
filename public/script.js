function copyNumber() {
    let copyText = document.getElementById("copy-text");
    let copiedText = document.getElementById("copied-text");

    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            copiedText.style.display = "block";
            setTimeout(() => copiedText.style.display = "none", 2000);
        })
        .catch(err => console.error("Matnni nusxalashda xatolik yuz berdi: ", err));
}

function openMap() {
    const address = "경기 수원시 영통구 매탄동 153-79";
    const naverMapURL = `https://map.naver.com/v5/search/${encodeURIComponent(address)}`;
    const kakaoMapURL = `https://map.kakao.com/?q=${encodeURIComponent(address)}`;

    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    if (isMobile) {
        window.location.href = `kakaomap://search?q=${encodeURIComponent(address)}`;

        setTimeout(() => {
            window.location.href = kakaoMapURL;
        }, 2000);
    } else {
        window.open(kakaoMapURL, "_blank");
    }
}
