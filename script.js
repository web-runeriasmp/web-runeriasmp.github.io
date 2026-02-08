// WhatsApp Staff/Owner Number
const WHATSAPP_NUMBER = '62887435168753'; // Format: 62xxx

// WhatsApp Group Link
const WHATSAPP_GROUP = 'https://chat.whatsapp.com/Hsm43XSsFqzH2O1jPwoOHq';

// Google Form Link for Reports
const REPORT_FORM = 'https://forms.gle/m2ZuYjSWvNPdC4nW7';

// TikTok Link
const TIKTOK_LINK = 'https://tiktok.com/@runeriasmp';

// Vote link - GANTI DENGAN LINK VOTE LO
const VOTE_LINK = 'https://minecraft-server-list.com/server/runeriasmp'; // Ganti dengan link vote lo

// Copy Java IP to clipboard
function copyJavaIP() {
    const javaIP = 'play.runeriasmp.my.id:25630';
    
    // Copy to clipboard
    navigator.clipboard.writeText(javaIP).then(() => {
        // Success notification
        showNotification('✓ IP Java Edition berhasil disalin!', 'success');
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = javaIP;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('✓ IP Java Edition berhasil disalin!', 'success');
    });
}

// Auto add Bedrock server (opens Minecraft Bedrock with server details)
function addBedrockServer() {
    const bedrockIP = 'play.runeriasmp.my.id';
    const bedrockPort = '25630';
    
    // Minecraft Bedrock URL scheme
    // This will open Minecraft and attempt to add the server
    const minecraftURL = `minecraft://?addExternalServer=${encodeURIComponent('Runeria SMP')}|${bedrockIP}:${bedrockPort}`;
    
    // Try to open the URL
    window.location.href = minecraftURL;
    
    // Show notification
    showNotification('🎮 Membuka Minecraft Bedrock...', 'info');
    
    // Fallback notification after 2 seconds
    setTimeout(() => {
        showNotification('Jika Minecraft tidak terbuka, copy IP: ' + bedrockIP + ':' + bedrockPort, 'info');
    }, 2000);
}

// Buy rank - opens WhatsApp with pre-filled message
function buyRank(rankName, rankPrice) {
    // Create WhatsApp message
    const message = `Halo! Saya ingin membeli Rank *${rankName}* seharga Rp ${formatPrice(rankPrice)} untuk server Runeria SMP.

Username Minecraft: [Isi username kamu]
Metode Pembayaran: [Pilih: DANA/GoPay/OVO/Transfer Bank]

Terima kasih!`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    showNotification(`📱 Mengarahkan ke WhatsApp untuk membeli ${rankName}...`, 'success');
}

// Format price with thousand separator
function formatPrice(price) {
    return parseInt(price).toLocaleString('id-ID');
}

// Open Report Form (Google Form)
function openReport() {
    window.open(REPORT_FORM, '_blank');
    showNotification('📝 Membuka form laporan...', 'info');
}

// Open WhatsApp Group
function openWhatsAppGroup() {
    window.open(WHATSAPP_GROUP, '_blank');
    showNotification('💬 Membuka WhatsApp Group...', 'info');
}

// Open TikTok
function openTikTok() {
    window.open(TIKTOK_LINK, '_blank');
    showNotification('🎵 Membuka TikTok...', 'info');
}

// Open Vote Page
function openVote() {
    window.open(VOTE_LINK, '_blank');
    showNotification('🗳️ Membuka halaman vote...', 'info');
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff0066' : '#00d4ff'};
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 15px;
        font-weight: 600;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out, fadeOut 0.5s ease-out 2.5s;
        max-width: 350px;
        font-size: 0.95rem;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Create particles animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size
        const size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay and duration
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.stat-card, .feature-card, .rank-card').forEach(el => {
        observer.observe(el);
    });
}

// Add CSS for notification animations
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    initSmoothScroll();
    initScrollAnimations();
    addNotificationStyles();
    addScrollIndicator();
    
    console.log('%c🎮 Runeria SMP Server Website', 'color: #00ff88; font-size: 20px; font-weight: bold;');
    console.log('%cSelamat datang di console! Website ini dibuat untuk Runeria SMP Minecraft Server.', 'color: #00d4ff; font-size: 14px;');
});

// Add scroll indicator for ranks section
function addScrollIndicator() {
    const ranksGrid = document.querySelector('.ranks-grid');
    if (!ranksGrid) return;
    
    // Create scroll hint
    const scrollHint = document.createElement('div');
    scrollHint.className = 'scroll-hint';
    scrollHint.innerHTML = '← Scroll untuk melihat rank lainnya →';
    scrollHint.style.cssText = `
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 600;
        margin-bottom: 1rem;
        font-size: 1rem;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        animation: fadeInOut 2s ease-in-out infinite;
    `;
    
    const ranksSection = document.querySelector('.ranks');
    ranksSection.insertBefore(scrollHint, ranksGrid);
    
    // Hide hint after user scrolls
    ranksGrid.addEventListener('scroll', () => {
        scrollHint.style.opacity = '0';
        setTimeout(() => scrollHint.remove(), 300);
    }, { once: true });
    
    // Add fadeInOut animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInOut {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recreate particles on resize
        const particlesContainer = document.getElementById('particles');
        particlesContainer.innerHTML = '';
        createParticles();
    }, 250);
});

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎉 Konami Code Activated! You found the secret!', 'success');
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});
