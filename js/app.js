(() => {
    'use strict';

    // ?to=张三 → 页面中所有 [data-guest-name] 显示来宾姓名;无参数时保留「同学」
    const applyGuestName = () => {
        const name = (new URLSearchParams(window.location.search)).get('to')?.trim();
        if (!name) return;
        document.querySelectorAll('[data-guest-name]').forEach((el) => {
            el.textContent = name;
        });
    };

    // 封面揭开:过渡结束后移除封面节点
    const bindOpen = () => {
        const welcome = document.getElementById('welcome');
        const btn = document.getElementById('open-btn');

        btn.addEventListener('click', () => {
            if (document.body.classList.contains('opened')) return;
            document.body.classList.add('opened');
            setTimeout(() => welcome.remove(), 1000);
        });
    };

    // data-time="YYYY-MM-DD HH:mm:ss" → 四格倒计时,过期后归零
    const startCountdown = () => {
        const target = new Date(document.body.getAttribute('data-time').replace(' ', 'T')).getTime();
        const el = {
            day: document.getElementById('cd-day'),
            hour: document.getElementById('cd-hour'),
            minute: document.getElementById('cd-minute'),
            second: document.getElementById('cd-second'),
            label: document.getElementById('cd-label'),
        };

        const pad = (n) => String(n).padStart(2, '0');

        const tick = () => {
            const left = Math.max(0, target - Date.now());
            el.day.textContent = pad(Math.floor(left / 86400000));
            el.hour.textContent = pad(Math.floor((left % 86400000) / 3600000));
            el.minute.textContent = pad(Math.floor((left % 3600000) / 60000));
            el.second.textContent = pad(Math.floor((left % 60000) / 1000));
            el.label.textContent = left > 0 ? '距离大会开始' : '大会正在进行';
            setTimeout(tick, 1000 - (Date.now() % 1000));
        };

        tick();
    };

    applyGuestName();
    bindOpen();
    startCountdown();
})();
