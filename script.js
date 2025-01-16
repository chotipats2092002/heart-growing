const frames = Array.from({ length: 15 }, (_, index) => `assets/sprite_${String(index).padStart(2, '0')}.png`);
let frame = 0;
let showHearts = false;

function handleClick() {
  if (frame < frames.length - 1) {
    frame++;
    document.getElementById('flower').src = frames[frame];
  } else if (!showHearts) {
    showHearts = true;
    generateHearts();
  }
}

function generateHearts() {
  const heartsContainer = document.getElementById('hearts-container');
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('img');
    heart.src = 'assets/Heart.png';
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.width = `${Math.random() * 40 + 20}px`;
    heart.style.height = heart.style.width;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heartsContainer.appendChild(heart);

    // ลบหัวใจเมื่อแอนิเมชันสิ้นสุด
    heart.addEventListener('animationend', () => heart.remove());
  }

  setTimeout(() => {
    showHearts = false; // รีเซ็ตสถานะการแสดงหัวใจ
  }, 5000);
}
