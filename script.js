function showScreen(number) {
    const area = document.getElementById("content-area");

    area.innerHTML = `
        <h1>画面${number}</h1>
        <img src="./images/screen${number}.png" width="350">
    `;
}

function goHome() {
    const area = document.getElementById("content-area");

    area.innerHTML = `
        <h1>ようこそ</h1>
        <p>左のメニューから画面を選んでください。</p>
    `;
}

function goToSchool() {
    window.location.href = "https://isuruarunalu2003.github.io/3D_Robot_page/";
}
