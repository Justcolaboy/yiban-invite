# 第十一届换届大会邀请函(H5)

成都理工大学易班学生工作站 · 红金正式风 · 单屏呈现(无滚动) · 零依赖纯静态页面,无任何外部 CDN 请求,双击 `index.html` 即可预览,任意静态托管均可上线。

## 目录结构

```
final/
├── index.html        全部页面内容(文案都在这里,直接改文字即可)
├── css/style.css     红金视觉主题(配色在 :root 变量里,矮屏适配在 max-height 媒体查询)
├── js/app.js         开场动画 / ?to= 姓名 / 倒计时
├── make-links.html   批量生成个性化邀请链接的小工具
├── README.md
└── LICENSE           上游开源项目 MIT 许可证(dewanakl/undangan)
```

## 常用修改

| 想改什么 | 改哪里 |
| --- | --- |
| 文案(组织名、时间、地点、邀约语) | `index.html` 单屏内对应元素 |
| 大会时间与倒计时 | `index.html` 中 `<body data-time="2026-11-11 14:30:00">`,同时改第三屏与第二屏的正文时间 |
| 红金配色 | `css/style.css` 顶部 `:root` 变量 |
| 姓名(单份) | 浏览器地址后加 `?to=姓名`,如 `index.html?to=张三` |

## 个性化邀请链接

1. 把 `final/` 整个文件夹托管到任意静态托管(推荐 GitHub Pages:新建仓库 → 上传 `final/` 内容 → 开启 Pages,得到 `https://用户名.github.io/仓库名/`);
2. 浏览器打开 `make-links.html`,填入线上地址和名单(每行一个姓名),一键生成 `…?to=张三` 形式的链接;
3. 每位受邀人收到专属链接,打开即显示「亲爱的 XXX」。未带参数时显示「同学」。

注意:`?to=` 链接需要线上托管(或对方本地打开时手动带上参数)才生效;直接把 HTML 文件发给对方时,所有人看到的都是同一份。

## 设计来源

交互骨架(封面揭开式开场、`?to=` 来宾姓名参数、`data-time` 倒计时约定)参考开源项目 [dewanakl/undangan](https://github.com/dewanakl/undangan)(MIT License),本项目为零依赖中文场景重写;原项目完整源码备份在上层目录 `_base/undangan` 以便对照。
