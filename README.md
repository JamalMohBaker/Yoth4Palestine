# 🚀 YFP Landing Page — خطة بناء الموقع

## 📋 معلومات عامة

| البند | التفاصيل |
|-------|----------|
| **اسم المشروع** | Youth For Palestine (YFP) Landing Page |
| **الهدف** | موقع تعريفي كامل لمنظمة غير ربحية تمكّن الشباب الفلسطيني |
| **اللغة** | English (كاملاً) |
| **المسار** | `d:\jamal\youth\Youth_website` |

---

## 🛠 التقنيات المستخدمة

- ✅ **HTML5** — وسوم دلالية (Semantic Tags)
- ✅ **CSS3** — متغيرات، Flexbox، Grid، Animations، Transitions
- ✅ **Bootstrap 5** — نظام الشبكة، المكونات، الأدوات المساعدة
- ✅ **jQuery** — تحكم بـ DOM، أحداث التمرير، عدّاد متحرك، قائمة الجوال
- ✅ **Vanilla JS** — Intersection Observer لحركات التمرير
- ❌ **ممنوع استخدام:** React, Vue, Angular

---

## 📁 هيكل الملفات المطلوب

```
yfp-website/
├── index.html          ← الملف الرئيسي (كل شيء في ملف واحد)
├── css/
│   └── style.css       ← جميع التنسيقات
├── js/
│   └── main.js         ← جميع السكربتات (jQuery + Vanilla JS)
└── images/             ← صور مؤقتة (placeholder)
    ├── hero-placeholder.jpg
    ├── team-1.jpg → team-4.jpg
    ├── activity-1.jpg → activity-2.jpg
    └── logo.png
```

---

## 🎨 نظام التصميم (Design System)

### الألوان
| المتغير | القيمة | الوصف |
|---------|--------|-------|
| `--primary` | `#1B3A6B` | أزرق داكن — أساسي |
| `--accent` | `#E8821A` | برتقالي — تمييز |
| `--background` | `#FFFFFF` | أبيض — خلفية |
| `--surface` | `#F5F5F5` | رمادي فاتح — أسطح |
| `--text` | `#333333` | رمادي داكن — نص |
| `--text-light` | `#666666` | رمادي — نص ثانوي |
| `--dark-footer` | `#111827` | داكن — فوتر |

### الخطوط
- **العناوين:** Playfair Display (أنيق، موثوق)
- **النص:** Inter (نظيف، مقروء)

---

## 📄 أقسام الصفحة (من الأعلى للأسفل)

| # | القسم | ID | الخلفية | المحتوى الرئيسي |
|---|-------|-----|---------|-----------------|
| 1 | **Navbar** | `#navbar` | أبيض، ثابت بالأعلى | لوقو + روابط + زر "Join Us" |
| 2 | **Hero** | `#hero` | أبيض | عنوان رئيسي + وصف + صورتين + أزرار CTA |
| 3 | **Problem (About)** | `#about` | `--surface` | 3 كاردات تصف المشكلة |
| 4 | **Solution** | `#solution` | أبيض | 3 كاردات تصف الحلول |
| 5 | **Programs** | `#programs` | `--surface` | 3 كاردات برامج |
| 6 | **Impact Numbers** | `#impact` | `--primary` | 4 عدّادات إحصائية متحركة |
| 7 | **Accomplishments** | `#accomplishments` | أبيض | 4 كاردات قصص نجاح |
| 8 | **Focus Areas** | `#focus` | `--surface` | 3 مجالات تركيز (SDG) |
| 9 | **Support Us** | `#support` | أبيض | CTA للدعم + روابط تواصل |
| 10 | **Get Involved** | `#get-involved` | `--primary` | فورم تطوع + كارد شراكة |
| 11 | **Footer** | - | `#111827` | شعار + روابط + تواصل + حقوق |

---

## 🧩 المكونات التفصيلية

### 1. Navbar
- [x] لوقو "YFP" مع subtitle
- [x] روابط: About, Programs, Impact, Get Involved
- [x] زر "Join Us" برتقالي
- [x] تأثير `scrolled` عند التمرير (box-shadow)
- [x] قائمة متنقلة (Hamburger) للجوال

### 2. Hero Section
- [x] عمودين: نص (يسار) + صورة (يمين)
- [x] وسم صغير "Youth Empowerment • Palestine"
- [x] H1: "Empowering Palestinian Youth to Lead Tomorrow"
- [x] فقرة وصفية
- [x] زران: "Explore Programs" + "Support Us"
- [x] شارة عائمة: "🎯 Goal: 1M+ Youth by 2035"
- [x] صورة كبيرة مدورة + كارد صغير: "30+ Youth Trained ✓"
- [x] أنيميشن fadeInLeft و fadeInRight

### 3. Problem Statement (About)
- [x] عنوان: "The Challenge" / "Why We Exist"
- [x] 3 كاردات بمشاكل (تعليم، فرص، خبرة)
- [x] تأثير hover: رفع + ظل

### 4. Our Solution
- [x] عنوان: "What We Do" / "Our Innovative Solutions"
- [x] 3 أعمدة حلول (تدريب، تمكين، تطوع)

### 5. Our Programs
- [x] 3 كاردات برامج (خطابة، دورات، تطوع)
- [x] شريط أزرق علوي + أيقونة
- [x] رابط "Learn More →"

### 6. Impact Numbers
- [x] 4 عدّادات: 30+, 75%, 3, 2035
- [x] حركة عد تصاعدي عند الظهور

### 7. Accomplishments (Success Stories)
- [x] 4 كاردات بأشخاص حقيقيين (صور دائرية)
- [x] اسم + شارة + وصف

### 8. Focus Areas
- [x] 3 مجالات بألوان SDG
- [x] تعليم (أحمر)، تمكين (أحمر داكن)، تدخلات إنسانية (كحلي)

### 9. Support Us
- [x] CTA كبيرة: "Contact Us to Support →"
- [x] رابط mailto + واتساب

### 10. Get Involved
- [x] كارد تطوع مع فورم (Full Name, Email, Phone)
- [x] نجاح رسالة عند التقديم
- [x] كارد شراكة

### 11. Footer
- [x] 3 أعمدة: براند، روابط، تواصل
- [x] أيقونات سوشيال ميديا
- [x] شريط حقوق النشر

---

## ⚡ سلوكيات JavaScript المطلوبة

- [x] **Navbar scroll effect:** إضافة كلاس `scrolled` عند التمرير
- [x] **Smooth scroll:** تمرير ناعم لروابط التنقل
- [x] **Scroll reveal:** Intersection Observer لإظهار العناصر
- [x] **Counter animation:** عدّاد تصاعدي عند رؤية قسم Impact
- [x] **Volunteer form:** إخفاء الفورم وإظهار رسالة نجاح

---

## 📱 التجاوب (Responsive)

- [x] **Desktop (lg+):** تخطيط كامل 2-3 أعمدة
- [x] **Tablet (md):** عمودين، Hero يتراص عمودياً
- [x] **Mobile (sm):** عمود واحد، نص مركزي، أزرار كاملة العرض
- [x] **Navbar:** يتحول لـ hamburger على الجوال

---

## 🔗 روابط CDN المطلوبة

- [x] Bootstrap 5 CSS
- [x] Google Fonts (Playfair Display + Inter)
- [x] Font Awesome 6.4.0
- [x] jQuery 3.7.0
- [x] Bootstrap 5 JS Bundle

---

## 📝 ملاحظات هامة

1. جميع الصور مؤقتة من `picsum.photos` — تستبدل لاحقاً
2. لا يوجد backend — الفورم وهمي (frontend only)
3. زر الدعم يفتح mailto: أو واتساب
4. Section IDs تطابق روابط الـ Navbar
5. استخدام وسوم HTML5 دلالية + aria-label للأيقونات
6. **كل الكود في ملف `index.html` واحد** (CSS و JS داخل الملف)

---

## ✅ حالة البناء

| المرحلة | الحالة |
|---------|--------|
| README.md | ✅ جاهز |
| هيكل المجلدات | ⬜ بانتظار التأكيد |
| index.html | ⬜ بانتظار التأكيد |
| css/style.css | ⬜ بانتظار التأكيد |
| js/main.js | ⬜ بانتظار التأكيد |
| الصور المؤقتة | ⬜ بانتظار التأكيد |

---

> 💬 **انتظر تأكيد المستخدم بكلمة "تمام" أو "بلش" للبدء بالبناء.**

1. Navbar
2. Hero
3. About Us ← جديد
4. Problem Statement
5. Our Solution
6. Scope of Work ← جديد
7. Our Programs
8. Impact Numbers
9. Accomplishments
10. Focus Areas
11. Support Us
12. Get Involved
13. Footer

descripe for about us
We are a Non-profit organization focused on empowering
students through education, leadership, communication,
entrepreneurship, and real-world opportunities. Our
programmes aim to bridge the gap between traditional
education and professional development by connecting youth
with training, mentorship, organizations, and international
opportunities that support their personal, academic, and
professional growth
What we simply will aim for , reaching for more than 1M
youth network and alumni by 2035 , where they will be one
of our gradutes entering to the professional stage with a
phenomenal outcomes
----------
descripe for scope of work
****In Scope 
1/Public speaking & communication training
2/Leadership and confidence development
3/Diplomacy & negotiation simulations
4/Entrepreneurship and project development
5/Connecting students with NGOs & international opportunities


****Out of Scope

1/Long-term academic accreditation
2/Employment guarantees
3/Large-scale funding support


