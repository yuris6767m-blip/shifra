const WORKER_URL = 'https://shifra-api.yuris6767m.workers.dev';

let currentLang = localStorage.getItem('site_lang') || 'ar';
let currentUser = null;

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

function toggleLangMenu() {
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.toggle('open');
}

function selectLanguage(lang) {
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.remove('open');
    applyLanguage(lang);
}

document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.lang-btn-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        const dropdown = document.getElementById('lang-dropdown');
        if (dropdown) dropdown.classList.remove('open');
    }
});

function secureLink(name, allowedRoles) {
    if (!currentUser) {
        alert(currentLang === 'ar'
            ? `⚠️ يتوجب عليك تسجيل الدخول أولاً للوصول إلى ${name}`
            : `⚠️ You must log in first to access ${name}`);
        return;
    }
    const userRole = currentUser.role ? currentUser.role.name : null;
    if (!userRole || !allowedRoles.includes(userRole)) {
        alert(currentLang === 'ar'
            ? `🔒 ليس لديك صلاحية الوصول إلى ${name}`
            : `🔒 You don't have permission to access ${name}`);
        return;
    }
    alert(currentLang === 'ar' ? `مرحباً بك في ${name}` : `Welcome to ${name}`);
}

const translations = {
    ar: {
        toggleBtn: "🌐 Language",
        loginBtn: "تسجيل الدخول عبر الديسكورد",
        mainTitle: "منصة شفرة",
        mainDesc: "الحاضنة التقنية الأولى لتطوير مهارات المبرمج العربي والتمكين البرمجي الفعال تحت إدارة فريق بصمة.",
        aboutTitle: "عن منصة شفرة",
        aboutP1: "منصة شفرة (Shifra Platform): هي بيئة رقمية وتفاعلية متكاملة، تأسست لتكون المرجع والملاذ الآمن لكل مبرمج ومطور عربي يسعى للتميز.",
        aboutP2: "نحن نؤمن بأن البرمجة ليست مجرد كتابة أسطر برمجية، بل هي أداة لتغيير الواقع وصناعة الأثر.",
        pillarsTitle: "ركائزنا التقنية والتعليمية",
        pillarsDesc: "نقوم ببناء مجتمعنا على أسس متينة تضمن استمرار العطاء وتطوير الكفاءات:",
        card1Title: "المجتمع التفاعلي",
        card1Desc: "بيئة حيوية تتيح للمبرمجين مناقشة الأكواد وتبادل الخبرات.",
        card2Title: "تطوير المهارات",
        card2Desc: "مسارات تعليمية وتطبيقية لرفع كفاءة الأعضاء.",
        card3Title: "المشاريع المبتكرة",
        card3Desc: "احتضان الأفكار وتحويلها إلى مشاريع حقيقية.",
        sidebarTitle: "قائمة المنصة",
        devPanel: "لوحة المبرمجين",
        awards: "الجوائز والترقيات",
        welcome: "مرحباً، ",
        logout: "تسجيل الخروج",
        notInServer: "⚠️ أنت لست عضواً في السيرفر",
        noRole: "زائر",
    },
    en: {
        toggleBtn: "🌐 Language",
        loginBtn: "Login with Discord",
        mainTitle: "Shifra Platform",
        mainDesc: "The premier technical incubator for developing Arab developers' skills.",
        aboutTitle: "About Shifra Platform",
        aboutP1: "Shifra Platform is an integrated digital and interactive environment for Arab developers.",
        aboutP2: "We believe programming is an asset to change reality and make an impact.",
        pillarsTitle: "Our Technical Pillars",
        pillarsDesc: "We build our community on solid foundations for continuous development:",
        card1Title: "Interactive Community",
        card1Desc: "A lively environment to discuss code and exchange expertise.",
        card2Title: "Skills Development",
        card2Desc: "Guided educational paths for members.",
        card3Title: "Innovative Projects",
        card3Desc: "Turning programming ideas into real-world projects.",
        sidebarTitle: "Platform Menu",
        devPanel: "Developers Panel",
        awards: "Awards & Promotions",
        welcome: "Welcome, ",
        logout: "Logout",
        notInServer: "⚠️ You are not a member of the server",
        noRole: "Visitor",
    }
};

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    const htmlTag = document.documentElement;
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    htmlTag.setAttribute('lang', lang);

    const updateText = (id, text) => { const el = document.getElementById(id); if (el) el.innerText = text; };
    const updateHTML = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

    updateText('lang-toggle-btn', translations[lang].toggleBtn);
    updateText('text-login-btn', translations[lang].loginBtn);
    updateText('text-main-title', translations[lang].mainTitle);
    updateText('text-main-desc', translations[lang].mainDesc);
    updateHTML('text-about-title', `<i class="fa-solid fa-circle-info"></i> ${translations[lang].aboutTitle}`);
    updateText('text-about-p1', translations[lang].aboutP1);
    updateText('text-about-p2', translations[lang].aboutP2);
    updateHTML('text-pillars-title', `<i class="fa-solid fa-cubes"></i> ${translations[lang].pillarsTitle}`);
    updateText('text-pillars-desc', translations[lang].pillarsDesc);
    updateText('text-card1-title', translations[lang].card1Title);
    updateText('text-card1-desc', translations[lang].card1Desc);
    updateText('text-card2-title', translations[lang].card2Title);
    updateText('text-card2-desc', translations[lang].card2Desc);
    updateText('text-card3-title', translations[lang].card3Title);
    updateText('text-card3-desc', translations[lang].card3Desc);
    updateText('text-sidebar-title', translations[lang].sidebarTitle);
    updateText('link-dev-panel', translations[lang].devPanel);
    updateText('link-awards', translations[lang].awards);

    updateSidebarLinks();
    checkDiscordUser();
}

function updateSidebarLinks() {
    const devPanel = document.getElementById('link-dev-panel');
    const awards = document.getElementById('link-awards');
    const allowedDev = ['مبرمج', 'مطور', 'إداري', 'مالك'];
    const allowedAwards = ['عضو', 'متعلم', 'مبرمج', 'مطور', 'إداري', 'مالك', 'صديق'];
    const userRole = currentUser?.role?.name || null;

    if (devPanel) devPanel.classList.toggle('locked', !currentUser || !allowedDev.includes(userRole));
    if (awards) awards.classList.toggle('locked', !currentUser || !allowedAwards.includes(userRole));
}

function logout() {
    localStorage.removeItem('discord_token');
    currentUser = null;
    updateSidebarLinks();
    const container = document.getElementById('discord-auth-container');
    if (container) {
        container.innerHTML = `
            <a id="login-btn" href="https://discord.com/oauth2/authorize?client_id=1124438537090121738&response_type=token&redirect_uri=https%3A%2F%2Fyuris6767m-blip.github.io%2Fshifra%2F&scope=identify%20guilds.members.read">
                <svg width="20" height="20" viewBox="0 0 127.14 96.36" fill="#fff">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a74.37,74.37,0,0,0,6.73-10.93,68.43,68.43,0,0,1-10.64-5.12c.91-.67,1.81-1.37,2.65-2.1a75.22,75.22,0,0,0,92.82,0c.84.73,1.74,1.43,2.65,2.1a68.43,68.43,0,0,1-10.64,5.12,74.37,74.37,0,0,0,6.73,10.93,105.73,105.73,0,0,0,31.05-18.83C129.54,50.33,123.63,27.49,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.92,46,53.7,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.16,46,95.94,53,91,65.69,84.69,65.69Z"/>
                </svg>
                <span id="text-login-btn">${translations[currentLang].loginBtn}</span>
            </a>`;
    }
}

async function checkDiscordUser() {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    let accessToken = fragment.get('access_token') || localStorage.getItem('discord_token');

    if (!accessToken) { updateSidebarLinks(); return; }

    localStorage.setItem('discord_token', accessToken);
    if (window.location.hash.includes('access_token')) {
        window.history.replaceState(null, null, window.location.pathname);
    }

    try {
        const res = await fetch(`${WORKER_URL}/member`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        if (!res.ok) {
            if (res.status === 403) showUserNotInServer();
            else { localStorage.removeItem('discord_token'); updateSidebarLinks(); }
            return;
        }

        const data = await res.json();
        currentUser = data;
        showUserInSidebar(data);
        updateSidebarLinks();

    } catch (e) {
        localStorage.removeItem('discord_token');
        updateSidebarLinks();
    }
}

function showUserInSidebar(data) {
    const container = document.getElementById('discord-auth-container');
    if (!container) return;
    const avatarHTML = data.avatar
        ? `<img src="${data.avatar}" alt="avatar">`
        : `<div style="width:44px;height:44px;border-radius:50%;background:#5865F2;border:2px solid var(--gold-text);display:flex;align-items:center;justify-content:center;font-size:1.2rem;">👤</div>`;
    const roleName = data.role ? data.role.name : translations[currentLang].noRole;
    container.innerHTML = `
        <div class="user-info">
            ${avatarHTML}
            <div class="user-details">
                <div class="user-name">${translations[currentLang].welcome}${data.username}</div>
                <span class="user-role">${roleName}</span>
            </div>
            <button class="logout-btn" onclick="logout()">${translations[currentLang].logout}</button>
        </div>`;
}

function showUserNotInServer() {
    const container = document.getElementById('discord-auth-container');
    if (!container) return;
    container.innerHTML = `
        <div style="color:#ffaaaa;font-size:0.85rem;padding:10px;background:rgba(255,0,0,0.1);border-radius:8px;border:1px solid rgba(255,0,0,0.2);">
            ${translations[currentLang].notInServer}
            <br><button onclick="logout()" style="margin-top:8px;background:none;border:1px solid #ffaaaa;color:#ffaaaa;padding:4px 10px;border-radius:6px;cursor:pointer;font-family:'Cairo',sans-serif;">${translations[currentLang].logout}</button>
        </div>`;
}

window.onload = () => applyLanguage(currentLang);
