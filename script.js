function openWindow(id) {
    // Hide all windows first
    document.querySelectorAll('.window').forEach(win => {
        win.classList.remove('active');
        win.style.zIndex = '10';
    });

    // Show selected window
    const targetWin = document.getElementById(`window-${id}`);
    if (targetWin) {
        targetWin.classList.add('active');
        targetWin.style.zIndex = '20';
        // Add a slight delay before hiding landing info for smoother transition
        document.getElementById('landing-hero').style.opacity = '0';
        setTimeout(() => {
            if (targetWin.classList.contains('active')) {
                document.getElementById('landing-hero').style.display = 'none';
            }
        }, 300);
    }
}

function closeWindow(id) {
    const targetWin = document.getElementById(`window-${id}`);
    if (targetWin) {
        targetWin.classList.remove('active');
        targetWin.style.zIndex = '10';
    }

    // Check if any windows are still open
    const activeWindows = document.querySelectorAll('.window.active');
    if (activeWindows.length === 0) {
        document.getElementById('landing-hero').style.display = 'block';
        setTimeout(() => {
            document.getElementById('landing-hero').style.opacity = '1';
        }, 10);
    }
}

// Typing Effect Engine
const typingText = "Explore my journey in Core Electronics & Signal Processing...";
const subtitleElement = document.getElementById('typing-subtitle');
let index = 0;

function typeWriter() {
    if (index < typingText.length && subtitleElement) {
        subtitleElement.innerHTML += typingText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Navigation link handling
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const windowId = link.getAttribute('data-window');
            if (windowId) {
                e.preventDefault();
                openWindow(windowId);
            }
        });
    });

    // Start typing effect
    setTimeout(typeWriter, 1000);

    // Initial opacity for landing hero transition
    const landingHero = document.getElementById('landing-hero');
    if (landingHero) {
        landingHero.style.transition = 'opacity 0.3s ease';
    }
});
