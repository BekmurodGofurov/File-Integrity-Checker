<div align="center">

# 🔐 File Integrity Checker

**Fayl yaxlitligini SHA-256 orqali tekshiradigan zamonaviy veb-ilova**

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## 📌 Loyiha haqida

**File Integrity Checker** — fayllarni uzatish jarayonida ular o'zgartirilgan yoki buzilganligini aniqlash uchun mo'ljallangan veb-ilova. Ilova faylning **SHA-256 kriptografik hashini** hisoblaydi va uni original hash bilan taqqoslaydi.

> 💡 Barcha hisob-kitoblar **to'liq brauzer ichida** amalga oshiriladi — fayl hech qayerga yuborilmaydi va tarmoqqa chiqmaydi.

---

## ✨ Xususiyatlar

| Xususiyat | Tavsif |
|-----------|--------|
| 🛡️ **SHA-256 hash** | Web Crypto API yordamida kriptografik hash hisoblash |
| 👤 **Rol tanlash** | Sender (jo'natuvchi) va Receiver (qabul qiluvchi) rejimi |
| 🌍 **3 til** | O'zbek, English, Русский — til tanlovi saqlanadi |
| 🌙 **Dark / Light mode** | Rejim tanlovi localStorage'da saqlanadi |
| 🎞️ **Animatsiyalar** | Typewriter, ripple, checkmark, shake effektlari |
| 📂 **Drag & Drop** | Faylni sudrab olib tashlash yoki bosib tanlash |
| 📋 **Clipboard** | Bir tugma bilan hashni nusxalash |
| 📱 **Responsive** | Barcha qurilmalarda to'g'ri ishlaydi |

---

## 🔄 Qanday ishlaydi

```
┌─────────────────────────────────────────────────────────┐
│                    SENDER (Jo'natuvchi)                  │
│                                                         │
│  1. Faylni yuklaydi                                     │
│  2. SHA-256 hash avtomatik hisoblanadi                  │
│  3. Hash qiymatini nusxalaydi                           │
│  4. Fayl + Hash → Receiver ga yuboradi                  │
└──────────────────────────┬──────────────────────────────┘
                           │
                    Fayl + Hash
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   RECEIVER (Qabul qiluvchi)              │
│                                                         │
│  1. Qabul qilgan faylni yuklaydi                        │
│  2. Faylning yangi hashini hisoblaydi                   │
│  3. Original hashni kiritadi                            │
│  4. Tizim solishtiradi:                                 │
│                                                         │
│     Hash mos kelsa  → ✅ Fayl xavfsiz                  │
│     Hash mos kelmasa → ❌ Fayl o'zgartirilgan           │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Sahifalar

### 🏠 Bosh sahifa — Rol tanlash
Foydalanuvchi o'z rolini tanlaydi: **Sender** yoki **Receiver**.

### 📤 Sender sahifasi
- Faylni drag & drop yoki bosib yuklash
- SHA-256 hash typewriter animatsiyasi bilan ko'rsatiladi
- Hashni bir tugma bilan clipboard ga nusxalash
- Hash tayyor bo'lganda **glow + pulse** animatsiyasi

### 📥 Receiver sahifasi
- Qabul qilingan faylni yuklash
- Original hashni matn maydoniga kiritish (yoki joylashtirish)
- **Tekshirish** tugmasini bosish
- Natija animatsiya bilan ko'rsatiladi:
  - ✅ **Xavfsiz** — yashil checkmark + ripple halqa
  - ❌ **O'zgartirilgan** — qizil X + shake effekti

---

## 🛠️ Texnologiyalar

| Texnologiya | Maqsad |
|-------------|--------|
| **React 18** | UI komponentlari va state boshqaruvi |
| **Vite 5** | Tez build va hot reload |
| **React Router v6** | Sahifalar orasida navigatsiya |
| **Web Crypto API** | Brauzer ichida SHA-256 hisoblash |
| **CSS Custom Properties** | Dark/Light theme tizimi |
| **localStorage** | Til va tema sozlamalarini saqlash |

---

## 🚀 Ishga tushirish

### Talablar
- Node.js **18+**
- npm yoki yarn

### O'rnatish

```bash
# Repozitoriyani klonlash
git clone https://github.com/username/file-integrity-checker.git

# Loyiha papkasiga o'tish
cd file-integrity-checker

# Paketlarni o'rnatish
npm install

# Dev serverni ishga tushirish
npm run dev
```

Brauzerda **http://localhost:5173** manzilini oching.

### Build qilish

```bash
# Production build
npm run build

# Build ni preview qilish
npm run preview
```

---

## 📁 Loyiha tuzilmasi

```
file-integrity-checker/
├── public/
├── src/
│   ├── components/
│   │   ├── Icons.jsx        # Barcha SVG ikonlar
│   │   └── Topbar.jsx       # Til va tema tugmalari bilan navigatsiya
│   │
│   ├── contexts/
│   │   ├── LangContext.jsx  # Til holati va tarjima
│   │   └── ThemeContext.jsx # Dark/Light tema holati
│   │
│   ├── locales/
│   │   └── index.js         # UZ, EN, RU tarjimalar
│   │
│   ├── pages/
│   │   ├── Home.jsx         # Rol tanlash sahifasi
│   │   ├── Sender.jsx       # Jo'natuvchi sahifasi
│   │   └── Receiver.jsx     # Qabul qiluvchi sahifasi
│   │
│   ├── App.jsx              # Router va Provider'lar
│   ├── main.jsx             # Entry point
│   └── index.css            # Global stillar va animatsiyalar
│
├── index.html
├── vite.config.js
└── package.json
```

---

## 🌍 Tillar

Ilovada uchta til qo'llab-quvvatlanadi. Topbar'dagi tugmalardan biri bilan tanlash mumkin:

| Kod | Til | Tugma |
|-----|-----|-------|
| `uz` | O'zbek (standart) | **UZ** |
| `en` | English | **EN** |
| `ru` | Русский | **RU** |

---

## 🔒 Xavfsizlik

- Fayl **hech qayerga yuborilmaydi** — barcha hisob-kitoblar foydalanuvchi brauzerida amalga oshiriladi
- **Web Crypto API** — brauzerning o'rnatilgan kriptografiya kutubxonasidan foydalaniladi (tashqi kutubxona kerak emas)
- **SHA-256** — kriptografik jihatdan ishonchli, bir tomonlama algoritm

---

## 👥 Jamoa

<table>
  <tr>
    <td align="center"><b>Bekmurod G'ofurov</b></td>
    <td align="center"><b>Shoxruh Latipov</b></td>
    <td align="center"><b>Shirinhon Bahodirova</b></td>
    <td align="center"><b>Oyazimhon Abdumalikova</b></td>
    <td align="center"><b>Roziyabegim Isomidinova</b></td>
  </tr>
</table>

---

## 📜 Litsenziya

Ushbu loyiha [MIT](LICENSE) litsenziyasi ostida tarqatiladi.

---

<div align="center">

**SHA-256 · React · Vite · Web Crypto API**

*Fayl yaxlitligini tekshirish — brauzeringizdan chiqmasdan*

</div>
