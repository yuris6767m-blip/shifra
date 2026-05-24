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
        aboutP1: "منصة شفرة (Shifra Platform): هي بيئة رقمية وتفاعلية متكاملة، تأسست لتكون المرجع والملاذ الآمن لكل مبرمج ومطور عربي يسعى للتميز. نهدف في شفرة إلى كسر حواجز التعلم التقليدية وفتح آفاق جديدة لبناء جيل برمي قادر على مواكبة أحدث التقنيات العالمية وابتكار الحلول الذكية.",
        aboutP2: "نحن نؤمن بأن البرمجة ليست مجرد كتابة أسطر برمجية، بل هي أداة لتغيير الواقع وصناعة الأثر، ومن هنا جاءت الشراكة الإستراتيجية مع فريق بصمة الإداري لتوفير الكفاءة التشغيلية والدعم اللوجستي المستمر.",
        pillarsTitle: "ركائزنا التقنية والتعليمية",
        pillarsDesc: "نقوم ببناء مجتمعنا على أسس متينة تضمن استمرار العطاء وتطوير الكفاءات بشكل تصاعدي ومستمر:",
        card1Title: "المجتمع التفاعلي",
        card1Desc: "بيئة حيوية تتيح للمبرمجين مناقشة الأكواد، حل المشكلات البرمجية، وتبادل الخبرات التقنية اليومية.",
        card2Title: "تطوير المهارات",
        card2Desc: "مسارات تعليمية وتطبيقية موجهة تسعى لرفع كفاءة الأعضاء من مستويات التأسيس إلى الاحتراف الفعلي.",
        card3Title: "المشاريع المبتكرة",
        card3Desc: "احتضان الأفكار البرمجية المميزة وتحويلها إلى مشاريع حقيقية على أرض الواقع تخدم المجتمع الرقمي.",
        teamTitle: "لوحة الكفاءات والمسؤولين",
        teamDesc: "يشرف على إدارة وتطوير وتوجيه المنصة كفاءات بشرية وإدارية تسهر على تقديم أفضل تجربة ممكنة:",
        member1Title: "المسؤول الإداري",
        member1Desc: "يتولى قيادة العمليات التنظيمية وتوفير الدعم لفريق العمل.",
        member1Badge: "إدارة بصمة",
        member2Title: "المطوّر المتميز",
        member2Desc: "المسؤول عن البنية البرمجية وضمان جودة الأكواد في المنصة.",
        member2Badge: "مبرمجي شفرة",
        contactTitle: "قنوات التواصل والتقديم الرسمية",
        contactDesc: "تابع منصة شفرة عبر المنصات الرسمية لتكون أول من يعلم بالورش والفعاليات والمشاريع القادمة:",
        social1Title: "الإنستغرام الرسمي",
        social1Desc: "أحدث الأخبار، التغطيات، والإعلانات الرسمية للمنصة.",
        social2Title: "سيرفر الديسكورد",
        social2Desc: "المجتمع التفاعلي، ورش العمل، وغرف الحوار البرمجية.",
        social2Link: "انضم إلينا الآن",
        social3Title: "حساب المسؤول",
        social3Desc: "للتواصل المباشر والاستفسارات الإدارية والخاصة.",
        footer: "جميع الحقوق محفوظة © منصة شفرة | تدار بواسطة فريق بصمة التقني 2026",
        welcome: "مرحباً بك، ",
        sidebarTitle: "قائمة المنصة",
        devPanel: "لوحة المبرمجين",
        awards: "الجوائز والترقيات"
    },
    en: {
        toggleBtn: "العربية",
        loginBtn: "Login with Discord",
        mainTitle: "Shifra Platform",
        mainDesc: "The premier technical incubator for developing Arab developers' skills and effective empowerment under Basma Team.",
        aboutTitle: "About Shifra Platform",
        aboutP1: "Shifra Platform is an integrated digital and interactive environment, established to be the secure haven and reference for every Arab programmer seeking excellence. We aim to break traditional learning barriers and open new horizons to build a generation capable of keeping pace with global technologies.",
        aboutP2: "We believe programming is an asset to change reality and make an impact, hence our strategic partnership with the Basma Administrative Team to provide continuous support.",
        pillarsTitle: "Our Technical Pillars",
        pillarsDesc: "We build our community on solid foundations that ensure continuous development and sustainable scaling:",
        card1Title: "Interactive Community",
        card1Desc: "A lively environment allowing developers to discuss code, solve issues, and exchange daily technical expertise.",
        card2Title: "Skills Development",
        card2Desc: "Guided educational paths aimed at raising members' efficiency from foundational levels to actual mastery.",
        card3Title: "Innovative Projects",
        card3Desc: "Incubating distinguished programming ideas and turning them into real-world projects serving the digital community.",
        teamTitle: "Competences & Leadership Board",
        teamDesc: "The platform is supervised by human and administrative competencies ensuring the best experience:",
        member1Title: "Administrative Officer",
        member1Desc: "Responsible for leading organizational operations and providing support to the team.",
        member1Badge: "Basma Management",
        member2Title: "Distinguished Developer",
        member2Desc: "Responsible for the software infrastructure and ensuring code quality across the platform.",
        member2Badge: "Shifra Developers",
        contactTitle: "Official Channels & Applications",
        contactDesc: "Follow Shifra Platform on official platforms to be the first to know about upcoming workshops and events:",
        social1Title: "Official Instagram",
        social1Desc: "Latest news, coverage, and official announcements of the platform.",
        social2Title: "Discord Server",
        social2Desc: "Interactive community, workshops, and programming dialogue rooms.",
        social2Link: "Join us now",
        social3Title: "Admin Account",
        social3Desc: "For direct communication, administrative inquiries, and private matters.",
        footer: "All Rights Reserved © Shifra Platform | Managed by Basma Technical Team 2026",
        welcome: "Welcome, ",
        sidebarTitle: "Platform Menu",
        devPanel: "Developers Panel",
        awards: "Awards & Promotions"
    }
};

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);

    const htmlTag = document.documentElement;
    if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
    } else {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'en');
    }

    // جدار حماية (شروط تحقق) تمنع توقف الأزرار عند التنقل بين اللغات
    if(document.getElementById('lang-toggle-btn')) document.getElementById('lang-toggle-btn').innerText = translations[lang].toggleBtn;
    if(document.getElementById('text-login-btn')) document.getElementById('text-login-btn').innerText = translations[lang].loginBtn;
    if(document.getElementById('text-main-title')) document.getElementById('text-main-title').innerText = translations[lang].mainTitle;
    if(document.getElementById('text-main-desc')) document.getElementById('text-main-desc').innerText = translations[lang].mainDesc;
    if(document.getElementById('text-about-title')) document.getElementById('text-about-title').innerHTML = `<i class="fa-solid fa-circle-info"></i> ${translations[lang].aboutTitle}`;
    if(document.getElementById('text-about-p1')) document.getElementById('text-about-p1').innerHTML = translations[lang].aboutP1;
    if(document.getElementById('text-about-p2')) document.getElementById('text-about-p2').innerHTML = translations[lang].aboutP2;
    if(document.getElementById('text-pillars-title')) document.getElementById('text-pillars-title').innerHTML = `<i class="fa-solid fa-cubes"></i> ${translations[lang].pillarsTitle}`;
    if(document.getElementById('text-pillars-desc')) document.getElementById('text-pillars-desc').innerText = translations[lang].pillarsDesc;
    
    if(document.getElementById('text-card1-title')) document.getElementById('text-card1-title').innerText = translations[lang].card1Title;
    if(document.getElementById('text-card1-desc')) document.getElementById('text-card1-desc').innerText = translations[lang].card1Desc;
    if(document.getElementById('text-card2-title')) document.getElementById('text-card2-title').innerText = translations[lang].card2Title;
    if(document.getElementById('text-card2-desc')) document.getElementById('text-card2-desc').innerText = translations[lang].card2Desc;
    if(document.getElementById('text-card3-title')) document.getElementById('text-card3-title').innerText = translations[lang].card3Title;
    if(document.getElementById('text-card3-desc')) document.getElementById('text-card3-desc').innerText = translations[lang].card3Desc;

    if(document.getElementById('text-team-title')) document.getElementById('text-team-title').innerHTML = `<i class="fa-solid fa-id-card"></i> ${translations[lang].teamTitle}`;
    if(document.getElementById('text-team-desc')) document.getElementById('text-team-desc').innerText = translations[lang].teamDesc;
    if(document.getElementById('text-member1-title')) document.getElementById('text-member1-title').innerText = translations[lang].member1Title;
    if(document.getElementById('text-member1-desc')) document.getElementById('text-member1-desc').innerText = translations[lang].member1Desc;
    if(document.getElementById('text-member1-badge')) document.getElementById('text-member1-badge').innerText = translations[lang].member1Badge;
    if(document.getElementById('text-member2-title')) document.getElementById('text-member2-title').innerText = translations[lang].member2Title;
    if(document.getElementById('text-member2-desc')) document.getElementById('text-member2-desc').innerText = translations[lang].member2Desc;
    if(document.getElementById('text-member2-badge')) document.getElementById('text-member2-badge').innerText = translations[lang].member2Badge;

    if(document.getElementById('text-contact-title')) document.getElementById('text-contact-title').innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${translations[lang].contactTitle}`;
    if(document.getElementById('text-contact-desc')) document.getElementById('text-contact-desc').innerText = translations[lang].contactDesc;
    if(document.getElementById('text-social1-title')) document.getElementById('text-social1-title').innerText = translations[lang].social1Title;
    if(document.getElementById('text-social1-desc')) document.getElementById('text-social1-desc').innerText = translations[lang].social1Desc;
    if(document.getElementById('text-social2-title')) document.getElementById('text-social2-title').innerText = translations[lang].social2Title;
    if(document.getElementById('text-social2-desc')) document.getElementById('text-social2-desc').innerText = translations[lang].social2Desc;
    if(document.getElementById('text-social2-link')) document.getElementById('text-social2-link').innerText = translations[lang].social2Link;
    if(document.getElementById('text-social3-title')) document.getElementById('text-social3-title').innerText = translations[lang].social3Title;
    if(document.getElementById('text-social3-desc')) document.getElementById('text-social3-desc').innerText = translations[lang].social3Desc;
    
    if(document.getElementById('text-footer')) document.getElementById('text-footer').innerText = translations[lang].footer;
    if(document.getElementById('text-sidebar-title')) document.getElementById('text-sidebar-title').innerText = translations[lang].sidebarTitle;
    if(document.getElementById('link-dev-panel')) document.getElementById('link-dev-panel').innerText = translations[lang].devPanel;
    if(document.getElementById('link-awards')) document.getElementById('link-awards').innerText = translations[lang].awards;

    checkDiscordUser();
}

function toggleLanguage() {
    applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

function checkDiscordUser() {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    let accessToken = fragment.get('access_token');
    
    if (!accessToken) {
        accessToken = localStorage.getItem('discord_token');
    }

    if (accessToken) {
        localStorage.setItem('discord_token', accessToken);
        if (window.location.hash.includes('access_token')) {
            window.history.replaceState(null, null, window.location.pathname + window.location.search);
        }

        fetch('https://discord.com/api/users/@me', {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then(res => {
            if (!res.ok) throw new Error('Expired');
            return res.json();
        })
        .then(response => {
            const { username, avatar, id } = response;
            const container = document.getElementById('discord-auth-container');
            if(!container) return;

            const avatarURL = avatar 
                ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png` 
                : `https://cdn.discordapp.com/embed/avatars/0.png`;

            const welcomeWord = translations[currentLang].welcome || "Welcome, ";
            const logoutWord = currentLang === 'ar' ? 'خروج' : 'Logout';

            container.innerHTML = `
                <div style="display: inline-flex; align-items: center; gap: 12px; background: #1a1a1a; padding: 10px 15px; border-radius: 50px; border: 2px solid #5865F2; box-shadow: 0 4px 15px rgba(0,0,0,0.2); direction: ${currentLang === 'ar' ? 'rtl' : 'ltr'}; width: 100%; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <img src="${avatarURL}" alt="${username}" style="width: 30px; height: 30px; border-radius: 50%; border: 2px solid #fff;">
                        <span style="color: #fff; font-weight: bold; font-size: 13px; white-space: nowrap; max-width: 110px; overflow: hidden; text-overflow: ellipsis;">${welcomeWord}${username}</span>
                    </div>
                    <button onclick="localStorage.removeItem('discord_token'); location.reload();" style="background: #ff4d4d; border: none; color: white; padding: 4px 10px; border-radius: 20px; cursor: pointer; font-size: 11px; font-weight: bold; transition: 0.3s; white-space: nowrap;">${logoutWord}</button>
                </div>
            `;
        })
        .catch(() => {
            localStorage.removeItem('discord_token');
        });
    }
}

window.onload = function() {
    applyLanguage(currentLang);
};
