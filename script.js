document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header h1');
    if (header) {
        const text = header.textContent;
        header.innerHTML = '';
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.setProperty('--i', i);
            header.appendChild(span);
        });
        header.classList.add('animated-text');
    }

    // 8 Ball Bible Verses
    const bibleVerses = [
        "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
        "I can do all things through Christ who strengthens me. - Philippians 4:13",
        "The Lord is my shepherd; I shall not want. - Psalm 23:1",
        "Trust in the Lord with all your heart and lean not on your own understanding. - Proverbs 3:5",
        "Jesus said to him, 'I am the way, and the truth, and the life.' - John 14:6",
        "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
        "The Lord is my light and my salvation—whom shall I fear? - Psalm 27:1",
        "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7"
    ];

    function getRandomVerse() {
        const randomIndex = Math.floor(Math.random() * bibleVerses.length);
        return bibleVerses[randomIndex];
    }

    // 8 Ball Button UI
    const eightBallBtn = document.getElementById('eightBallBtn');
    const eightBallVerseBox = document.getElementById('eightBallVerseBox');
    if (eightBallBtn && eightBallVerseBox) {
        eightBallBtn.addEventListener('click', function () {
            eightBallVerseBox.classList.remove('fade-in');
            // Force reflow to restart animation
            void eightBallVerseBox.offsetWidth;
            eightBallVerseBox.textContent = getRandomVerse();
            eightBallVerseBox.classList.add('fade-in');
        });
    }

    // Animated cloud background
    const bg = document.createElement('div');
    bg.className = 'animated-bg';
    // Clouds
    for (let i = 0; i < 10; i++) {
        const s = document.createElement('span');
        const size = Math.random() * 120 + 120;
        s.style.width = `${size}px`;
        s.style.height = `${size * (0.6 + Math.random() * 0.5)}px`;
        s.style.left = `${Math.random() * 100}%`;
        s.style.bottom = `-${size + Math.random() * 100}px`;
        s.style.animationDelay = `${Math.random() * 24}s`;
        s.style.opacity = 0.13 + Math.random() * 0.15;
        s.style.borderRadius = `${60 + Math.random() * 40}% / ${50 + Math.random() * 50}%`;
        bg.appendChild(s);
    }
    // Stars
    for (let i = 0; i < 18; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        const size = Math.random() * 4 + 4;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2.5}s`;
        bg.appendChild(star);
    }
    document.body.prepend(bg);
});