// متغير اللغة العالمي الافتراضي
let currentLang = localStorage.getItem('site_lang') || 'ar';

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if(sidebar) {
        sidebar.classList.toggle('open');
    }
}

function secureLink(name) {
    if (!localStorage.getItem('discord_token')) {
        alert(currentLang === 'ar' ? `⚠️ يتوجب عليك تسجيل الدخول أولاً للوصول إلى ${name}` : `⚠️ You must log in first to access ${name}`);
    } else {
        alert(currentLang === 'ar' ? `مرحباً بك في ${name}` : `Welcome to ${name}`);
    }
}

const translations = {
    ar: {
        toggleBtn: "English",
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
        welcome: "مرحباً بك، "
    },
    en: {
        toggleBtn: "العربية",
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
        welcome: "Welcome, "
    }
};

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    const htmlTag = document.documentElement;
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    htmlTag.setAttribute('lang', lang);

    // دالة مساعدة لتحديث النصوص فقط إذا وجد العنصر
    const updateText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };
    
    const updateHTML = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    };

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

    checkDiscordUser();
}

function toggleLanguage() {
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

function checkDiscordUser() {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    let accessToken = fragment.get('access_token') || localStorage.getItem('discord_token');

    if (accessToken) {
        localStorage.setItem('discord_token', accessToken);
        if (window.location.hash.includes('access_token')) window.history.replaceState(null, null, window.location.pathname);

        fetch('https://discord.com/api/users/@me', { headers: { Authorization: `Bearer ${accessToken}` } })
        .then(res => res.ok ? res.json() : Promise.reject())
        .then(user => {
            const container = document.getElementById('discord-auth-container');
            if(!container) return;
            container.innerHTML = `<div style="color:white; padding:10px;">${translations[currentLang].welcome}${user.username}</div>`;
        })
        .catch(() => localStorage.removeItem('discord_token'));
    }
}

window.onload = () => applyLanguage(currentLang);
