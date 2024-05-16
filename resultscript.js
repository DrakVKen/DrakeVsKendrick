const winner = localStorage.getItem('winner');
const shade ={
    1: "Stay away from schools and parks.",
    2: "Leave her face at least",
}
function showResult(winner) {
    const img = document.getElementById('resultimage');
    const p = document.getElementById('shade');
    if (winner == 'drake') {
        img.src = 'pics/drake.jpg';
        p.textContent = shade[1];
    }
    else {
        img.src = 'pics/kendrick.jpg';
        p.textContent = shade[2];
    }
}

showResult(winner);