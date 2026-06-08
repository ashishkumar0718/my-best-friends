// =========================
// LOADER
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
            document.getElementById("loader");

        loader.style.opacity = "0";

        loader.style.transition =
            "1s";

        setTimeout(() => {

            loader.style.display =
                "none";

        }, 1000);

    }, 3000);

});

// =========================
// TYPING EFFECT
// =========================

const text =
    "6+ Years • School Memories • Coaching Days • Gaming Sessions • Travel Adventures ❤️";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById(
            "typing"
        ).innerHTML +=
            text.charAt(i);

        i++;

        setTimeout(
            typeWriter,
            50
        );
    }

}

setTimeout(
    typeWriter,
    3500
);

// =========================
// MUSIC
// =========================

const music =
    document.getElementById(
        "bgMusic"
    );

const musicBtn =
    document.getElementById(
        "musicBtn"
    );

let playing = false;

musicBtn.addEventListener(
    "click",
    () => {

        if (!playing) {

            music.play();

            playing = true;

            musicBtn.innerHTML =
                "⏸ Pause Music";

        } else {

            music.pause();

            playing = false;

            musicBtn.innerHTML =
                "🎵 Play Music";
        }

    }
);

// =========================
// FLOATING HEARTS
// =========================

const heartsContainer =
    document.querySelector(
        ".hearts-container"
    );

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );

    heart.classList.add(
        "heart"
    );

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    heartsContainer.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(
    createHeart,
    300
);

// =========================
// CARD REVEAL ANIMATION
// =========================

const cards =
    document.querySelectorAll(
        ".card,.glass,.gallery-preview"
    );

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0px)";

                }

            });

        }, {
        threshold: 0.2
    });

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(60px)";

    card.style.transition =
        "all 1s ease";

    observer.observe(card);

});

// =========================
// IMAGE POPUP
// =========================

const images =
    document.querySelectorAll(
        ".preview-grid img"
    );

images.forEach(img => {

    img.addEventListener(
        "click",
        () => {

            const overlay =
                document.createElement(
                    "div"
                );

            overlay.style.position =
                "fixed";

            overlay.style.top = "0";
            overlay.style.left = "0";

            overlay.style.width = "100%";
            overlay.style.height = "100%";

            overlay.style.background =
                "rgba(0,0,0,.9)";

            overlay.style.display =
                "flex";

            overlay.style.alignItems =
                "center";

            overlay.style.justifyContent =
                "center";

            overlay.style.zIndex =
                "99999";

            const image =
                document.createElement(
                    "img"
                );

            image.src = img.src;

            image.style.maxWidth =
                "90%";

            image.style.maxHeight =
                "90%";

            image.style.borderRadius =
                "20px";

            overlay.appendChild(
                image
            );

            overlay.addEventListener(
                "click",
                () => {

                    overlay.remove();

                });

            document.body.appendChild(
                overlay
            );

        });
});

// =========================
// AUTO HEART BURST
// =========================

setTimeout(() => {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);

    }

}, 4000);

// =========================
// TITLE EFFECT
// =========================

let titleState = true;

setInterval(() => {

    if (titleState) {

        document.title =
            "❤️ Atharv & Omji ❤️";

    } else {

        document.title =
            "✨ Best Friend Day ✨";

    }

    titleState = !titleState;

}, 2000);

// =========================
// SCROLL TO TOP BUTTON
// =========================

const topBtn =
    document.createElement(
        "button"
    );

topBtn.innerHTML = "⬆";

topBtn.style.position =
    "fixed";

topBtn.style.right =
    "20px";

topBtn.style.bottom =
    "20px";

topBtn.style.width =
    "50px";

topBtn.style.height =
    "50px";

topBtn.style.border =
    "none";

topBtn.style.borderRadius =
    "50%";

topBtn.style.background =
    "#ff4d88";

topBtn.style.color =
    "#fff";

topBtn.style.cursor =
    "pointer";

topBtn.style.display =
    "none";

topBtn.style.zIndex =
    "9999";

document.body.appendChild(
    topBtn
);

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 300) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";

        }

    });

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "❤️ Made With Love By Ashish ❤️"
);