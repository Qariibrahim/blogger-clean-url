function serveCustom404() {
  return new Response(
    custom404Html(),
    {
      status: 404,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "X-Content-Type-Options": "nosniff"
      }
    }
  );
}

function custom404Html() {
  return `<!doctype html>
<html lang="ur" dir="rtl">
<head>
<meta charset="utf-8">

<meta
  name="viewport"
  content="width=device-width,initial-scale=1"
>

<meta name="theme-color" content="#00143d">

<title>404 | صفحہ نہیں ملا | Imdade Rohani</title>

<style>

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  min-height:100vh;

  background:
    radial-gradient(
      circle at 50% 25%,
      #0b3470 0,
      #031c4a 30%,
      #001431 65%,
      #000b1e 100%
    );

  color:#ffffff;
  font-family:
    Arial,
    "Noto Nastaliq Urdu",
    sans-serif;

  overflow-x:hidden;
}

/* =========================================
   404 PAGE CONTENT PROTECTION
   ========================================= */

body,
body *{
  -webkit-user-select:none;
  user-select:none;
  -webkit-touch-callout:none;
}

img{
  -webkit-user-drag:none;
  user-drag:none;
}

a,
button{
  -webkit-touch-callout:none;
}

/* =========================
   MAIN PAGE
   ========================= */

.page{
  width:100%;
  min-height:100vh;

  padding:
    18px
    16px
    34px;

  position:relative;
}


/* =========================
   STARS
   ========================= */

.page::before{
  content:"";

  position:fixed;
  inset:0;

  pointer-events:none;

  background-image:
    radial-gradient(#fff 1px,transparent 1px),
    radial-gradient(#f9c85e 1px,transparent 1px);

  background-size:
    85px 85px,
    145px 145px;

  background-position:
    0 0,
    35px 45px;

  opacity:.28;
}


/* =========================
   HEADER
   ========================= */

.header{
  width:100%;
  max-width:900px;

  margin:0 auto 30px;

  padding:13px 15px;

  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;

  direction:ltr;

  border:
    1px solid
    rgba(255,190,55,.28);

  border-radius:18px;

  background:
    rgba(0,20,55,.70);

  box-shadow:
    0 12px 35px
    rgba(0,0,0,.25);

  backdrop-filter:
    blur(10px);
}


.brand{
  display:flex;
  align-items:center;
  gap:12px;

  min-width:0;
}


.brand-logo{
  width:62px;
  height:62px;

  min-width:62px;

  border-radius:50%;

  padding:7px;

  object-fit:contain;

  background:
    linear-gradient(
      145deg,
      #ffe49a,
      #d99a18
    );

  border:
    2px solid
    #e7ae31;

  box-shadow:
    0 0 18px
    rgba(255,188,49,.28);
}


.brand-text{
  text-align:left;
}


.brand-name{
  display:block;

  color:#ffffff;

  font-family:Georgia,serif;

  font-size:24px;
  font-weight:700;

  line-height:1.1;
}


.brand-subtitle{
  display:block;

  margin-top:5px;

  color:#efb83d;

  font-size:12px;
}


.header-actions{
  display:flex;
  gap:8px;
}


.header-btn{
  width:65px;
  height:65px;

  border-radius:14px;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  gap:4px;

  text-decoration:none;

  border:
    1px solid
    rgba(255,190,55,.28);

  background:
    rgba(5,31,69,.88);

  color:#fff;

  font-size:11px;
}


.header-icon{
  font-size:25px;
  line-height:1;
}


/* =========================
   404 HERO
   ========================= */

.hero{
  width:100%;
  max-width:850px;

  margin:auto;

  text-align:center;

  position:relative;
}


.error-code{
  margin-top:10px;

  font-family:
    Georgia,
    "Times New Roman",
    serif;

  font-size:
    clamp(
      125px,
      35vw,
      280px
    );

  line-height:.9;

  font-weight:700;

  color:#f4f7ff;

  text-shadow:
    0 0 12px
      rgba(255,255,255,.45),
    0 0 34px
      rgba(46,122,255,.45);
}


.error-title{
  margin:
    15px 0 5px;

  color:#f2ad35;

  font-size:
    clamp(
      28px,
      8vw,
      48px
    );

  font-weight:700;

  line-height:1.8;
}


.gold-divider{
  width:220px;
  max-width:70%;

  height:1px;

  margin:
    8px auto 22px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #d9a42d,
      transparent
    );
}


.error-text{
  max-width:680px;

  margin:
    0 auto;

  color:#f5f7fb;

  font-size:
    clamp(
      17px,
      4.5vw,
      23px
    );

  line-height:2.2;
}


/* =========================
   SCENE
   ========================= */

.scene{
  width:100%;
  max-width:850px;

  height:380px;

  margin:
    15px auto 25px;

  position:relative;

  overflow:hidden;

  border-radius:
    0 0 40px 40px;
}


.moon-glow{
  position:absolute;

  left:50%;
  bottom:40px;

  width:180px;
  height:180px;

  transform:
    translateX(-50%);

  border-radius:
    50% 50% 12px 12px;

  background:
    radial-gradient(
      circle,
      rgba(255,216,99,.95) 0,
      rgba(255,178,20,.47) 30%,
      rgba(255,168,0,.10) 58%,
      transparent 72%
    );

  filter:
    blur(2px);

  box-shadow:
    0 0 80px
    rgba(255,175,29,.35);
}


.arch{
  position:absolute;

  left:50%;
  bottom:54px;

  width:115px;
  height:155px;

  transform:
    translateX(-50%);

  border:
    4px solid
    #e6ad36;

  border-radius:
    60px 60px 8px 8px;

  box-shadow:
    0 0 35px
    rgba(238,169,43,.35);

  background:
    linear-gradient(
      180deg,
      rgba(255,218,105,.15),
      rgba(255,181,35,.4)
    );
}


.arch::before{
  content:"";

  position:absolute;

  left:50%;
  top:28px;

  width:54px;
  height:94px;

  transform:
    translateX(-50%);

  border-radius:
    28px 28px 3px 3px;

  background:
    linear-gradient(
      #fff2b7,
      #ffc33b
    );

  box-shadow:
    0 0 35px
    #ffc84b;
}


.path{
  position:absolute;

  left:50%;
  bottom:-65px;

  width:260px;
  height:220px;

  transform:
    translateX(-50%)
    perspective(300px)
    rotateX(56deg);

  border-radius:50%;

  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255,190,51,.14),
      #e8ab30,
      rgba(255,190,51,.14),
      transparent
    );

  opacity:.9;
}


.sign{
  position:absolute;

  left:7%;
  bottom:87px;

  width:128px;
  height:95px;
}


.sign::before,
.sign::after{
  content:"";

  position:absolute;

  left:0;

  width:128px;
  height:28px;

  border:
    1px solid
    rgba(239,174,47,.45);

  background:
    linear-gradient(
      #183255,
      #091d38
    );

  clip-path:
    polygon(
      0 0,
      90% 0,
      100% 50%,
      90% 100%,
      0 100%,
      8% 50%
    );
}


.sign::before{
  top:0;
}


.sign::after{
  top:38px;

  transform:
    scaleX(-1);
}


.lantern{
  position:absolute;

  left:22%;
  bottom:43px;

  font-size:42px;

  filter:
    drop-shadow(
      0 0 12px
      #ffc244
    );
}


/* =========================
   ACTION PANEL
   ========================= */

.action-panel{
  width:100%;
  max-width:850px;

  margin:
    0 auto 18px;

  padding:
    22px 16px;

  border:
    1px solid
    rgba(240,181,54,.30);

  border-radius:20px;

  background:
    rgba(4,31,69,.78);

  box-shadow:
    0 15px 38px
    rgba(0,0,0,.24);
}


.action-heading{
  margin:
    0 0 18px;

  text-align:center;

  color:#efb13a;

  font-size:
    clamp(
      24px,
      7vw,
      35px
    );

  line-height:1.8;
}


.actions{
  display:grid;

  grid-template-columns:
    repeat(2,1fr);

  gap:12px;
}


.action-card{
  min-height:150px;

  padding:
    18px 10px;

  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  text-align:center;

  text-decoration:none;

  color:#fff;

  border:
    1px solid
    rgba(82,142,219,.40);

  border-radius:15px;

  background:
    linear-gradient(
      145deg,
      rgba(21,62,111,.85),
      rgba(4,33,72,.90)
    );
}


.big-icon{
  width:64px;
  height:64px;

  display:flex;
  align-items:center;
  justify-content:center;

  margin-bottom:12px;

  border-radius:50%;

  font-size:34px;
}


.whatsapp-icon{
  background:
    linear-gradient(
      #29d366,
      #129447
    );

  box-shadow:
    0 5px 16px
    rgba(37,211,102,.25);
}


.home-icon{
  background:
    linear-gradient(
      #1763ac,
      #07336d
    );
}

.guidance-icon{
  background:
    linear-gradient(
      #dca52f,
      #8f5a08
    );

  box-shadow:
    0 5px 16px
    rgba(220,165,47,.28);
}

.card-title{
  font-size:19px;
  line-height:1.8;
}


.card-sub{
  color:#d4deee;

  font-size:13px;
}


/* =========================
   OFFICIAL SITE NOTICE
   ========================= */

.notice{
  width:100%;
  max-width:850px;

  margin:
    0 auto 28px;

  padding:
    18px 18px;

  display:flex;
  align-items:center;
  gap:16px;

  direction:ltr;

  border:
    1px solid
    rgba(240,181,54,.28);

  border-radius:18px;

  background:
    rgba(4,27,61,.84);
}


.bulb{
  width:64px;
  height:64px;

  min-width:64px;

  display:flex;
  align-items:center;
  justify-content:center;

  border:
    2px solid
    #e5aa2b;

  border-radius:50%;

  font-size:32px;
}


.notice-text{
  flex:1;

  direction:rtl;

  text-align:center;

  color:#fff;

  font-size:
    clamp(
      15px,
      4vw,
      20px
    );

  line-height:2;
}


.notice-domain{
  display:block;
  direction:ltr;

  margin-top:7px;

  color:#e9ae35;

  font-size:22px;
  font-weight:700;
}


/* =========================
   FLAG DIVIDER
   ========================= */

.flag-divider{
  width:100%;
  max-width:760px;

  margin:
    10px auto 25px;

  display:flex;
  align-items:center;
  justify-content:center;
  gap:15px;
}


.flag-line{
  flex:1;

  height:1px;

  background:
    linear-gradient(
      90deg,
      transparent,
      #dca52f
    );
}


.flag-line.right{
  transform:
    scaleX(-1);
}


.flag-mark{
  width:76px;
  height:76px;

  padding:8px;

  object-fit:contain;

  border-radius:50%;

  background:
    linear-gradient(
      #ffe29a,
      #d69a1f
    );

  border:
    1px solid
    #e8b13e;
}


/* =========================
   FOOTER
   ========================= */

.footer{
  width:100%;
  max-width:850px;

  margin:auto;

  padding:
    18px 10px 8px;

  text-align:center;

  border-top:
    1px solid
    rgba(227,169,47,.20);

  color:#cbd5e5;

  font-size:13px;
  line-height:1.9;
}


.footer-brand{
  color:#eab03a;
}


/* =========================
   MOBILE
   ========================= */

@media(max-width:600px){

  .page{
    padding:
      10px 10px 28px;
  }

  .header{
    padding:
      9px 9px;
  }

  .brand-logo{
    width:50px;
    height:50px;

    min-width:50px;
  }

  .brand-name{
    font-size:19px;
  }

  .brand-subtitle{
    font-size:9px;
  }

  .header-btn{
    width:53px;
    height:55px;

    font-size:9px;
  }

  .header-icon{
    font-size:21px;
  }

  .scene{
    height:330px;
  }

  .actions{
    gap:8px;
  }

  .action-card{
    min-height:140px;
  }

  .notice{
    gap:9px;

    padding:
      15px 10px;
  }

  .bulb{
    width:52px;
    height:52px;

    min-width:52px;

    font-size:26px;
  }

}

</style>
</head>

<body>

<div class="page">


<!-- HEADER -->

<header class="header">

  <div class="brand">

    <img
  class="brand-logo"
  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtiQV1W9mQro6EmrwV6aJM5Rtve5MGvQsXCHuP5XlDi-6QSE5eo6INg28uODihhNdpMpOjke5vEkn2NPf6AuRzBAZSQvQxcYk_jgK0f7zpMBrKzCe-Bn-h5Dsjrwpua0xIPqDchRn8RAAJgMLroEFLbASS_WRgiR0NhF0TvPHMpFL9UGIGZeyltyZa3krn/s320/41040.png"
  alt="Imdade Rohani"
  draggable="false"
>

    <div class="brand-text">

      <span class="brand-name">
        Imdade Rohani
      </span>

      <span class="brand-subtitle">
        Rohani Ilaj aur Online Rehnumai
      </span>

    </div>

  </div>

  <div class="header-actions">

    <a
      class="header-btn"
      href="mailto:Connect@imdaderohani.in"
      aria-label="Email"
    >
      <span class="header-icon">
        ✉
      </span>

      <span>
        Mail
      </span>
    </a>

    <a
      class="header-btn"
      href="https://wa.me/918207311073"
      aria-label="WhatsApp"
    >
      <span class="header-icon">
        ☎
      </span>

      <span>
        WhatsApp
      </span>
    </a>

  </div>

</header>

<!-- HERO -->

<main class="hero">

  <div class="error-code">
    404
  </div>

  <div class="error-title">
    صفحہ نہیں ملا
  </div>

  <div class="gold-divider"></div>

  <div class="error-text">
    آپ جس صفحے کو تلاش کر رہے ہیں
    وہ موجود نہیں ہے
    <br>
    یا اسے منتقل کر دیا گیا ہے۔
  </div>


  <div class="scene">

    <div class="sign"></div>

    <div class="lantern">
      🏮
    </div>

    <div class="moon-glow"></div>

    <div class="arch"></div>

    <div class="path"></div>

  </div>

</main>


<!-- ACTIONS -->

<section class="action-panel">

  <h2 class="action-heading">
    آپ کیا چاہتے ہیں؟
  </h2>

  <div class="actions">


    <a
      class="action-card"
      href="https://wa.me/919356236900"
    >

      <div class="big-icon whatsapp-icon">
        ☎
      </div>

      <div class="card-title">
        ہم سے رابطہ کریں
      </div>

      <div class="card-sub">
        WhatsApp پر بات کریں
      </div>

    </a>


    <a
      class="action-card"
      href="https://qrc.imdaderohani.in/"
    >

      <div class="big-icon home-icon">
        🏠
      </div>

      <div class="card-title">
        ہوم پیج پر جائیں
      </div>

      <div class="card-sub">
        ہوم پیج دیکھیں
      </div>

    </a>

    <a
      class="action-card"
      href="/rohani-rehnumai"
    >

      <div class="big-icon guidance-icon">
        ✦
      </div>

      <div class="card-title">
        روحانی رہنمائی
      </div>

      <div class="card-sub">
        تمام رہنمائی کے صفحات دیکھیں
      </div>

    </a>
    
  </div>

</section>


<!-- NOTICE -->

<section class="notice">

  <div class="bulb">
    💡
  </div>

  <div class="notice-text">

    ImdadeRohani کی مین آفیشل ویب سائٹ
    تکنیکی خرابی کے سبب
    ابھی بند چل رہی ہے۔

    <span class="notice-domain">
      imdaderohani.in
    </span>

  </div>

</section>


<!-- FLAG DIVIDER -->

<div class="flag-divider">

  <div class="flag-line"></div>

  <img
    class="flag-mark"
    src="/pwa-icon-192.png"
    alt="Imdade Rohani"
  >

  <div class="flag-line right"></div>

</div>


<!-- FOOTER -->

<footer class="footer">

  © 2026
  <span class="footer-brand">
    Imdade Rohani
  </span>

  — All Rights Reserved.

  <br>

  Rohani Ilaj aur Online Rehnumai

</footer>


</div>
</body>
</html>`;
}

function rohaniRehnumaiHtml() {
  return `<!doctype html>
<html lang="ur" dir="rtl">
<head>
<meta charset="utf-8">

<meta
  name="viewport"
  content="width=device-width,initial-scale=1"
>

<meta name="theme-color" content="#00143d">

<title>روحانی رہنمائی | Imdade Rohani</title>

<style>

*{
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
}

body{
  margin:0;
  min-height:100vh;

  background:
    radial-gradient(
      circle at 50% 20%,
      #0b3470 0,
      #031c4a 32%,
      #001431 66%,
      #000b1e 100%
    );

  color:#fff;

  font-family:
    Arial,
    "Noto Nastaliq Urdu",
    sans-serif;

  -webkit-user-select:none;
  user-select:none;
  -webkit-touch-callout:none;
}

.page{
  width:100%;
  min-height:100vh;
  padding:14px 12px 35px;
}

.header{
  max-width:900px;
  margin:0 auto 25px;
  padding:12px 14px;

  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;

  direction:ltr;

  border:
    1px solid rgba(235,174,48,.30);

  border-radius:18px;

  background:
    rgba(0,20,55,.78);

  box-shadow:
    0 12px 35px rgba(0,0,0,.25);
}

.brand{
  display:flex;
  align-items:center;
  gap:11px;
}

.logo{
  width:58px;
  height:58px;
  min-width:58px;

  padding:2px;
  object-fit:contain;

  border-radius:50%;

  background:
    linear-gradient(
      145deg,
      #ffe49a,
      #d99a18
    );

  border:2px solid #e7ae31;

  -webkit-user-drag:none;
}

.brand-text{
  direction:ltr;
  text-align:left;
}

.brand-name{
  display:block;
  font-size:22px;
  font-weight:700;
}

.brand-sub{
  display:block;
  margin-top:4px;
  color:#efb83d;
  font-size:11px;
}

.home-btn{
  padding:10px 13px;

  color:#fff;
  text-decoration:none;

  border:
    1px solid rgba(239,179,57,.34);

  border-radius:12px;

  background:
    rgba(9,47,91,.85);
}

.hero{
  max-width:850px;
  margin:auto;
  text-align:center;
}

.hero-icon{
  width:82px;
  height:82px;

  margin:5px auto 10px;

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:50%;

  color:#fff;
  font-size:42px;

  background:
    linear-gradient(
      #dca52f,
      #8f5a08
    );

  box-shadow:
    0 0 28px rgba(222,166,48,.28);
}

h1{
  margin:5px 0;

  color:#efb13a;

  font-size:
    clamp(
      30px,
      8vw,
      46px
    );

  line-height:1.8;
}

.intro{
  max-width:680px;
  margin:0 auto 25px;

  color:#dce7f5;

  font-size:
    clamp(
      15px,
      4vw,
      19px
    );

  line-height:2.1;
}

.directory{
  width:100%;
  max-width:850px;
  margin:auto;

  padding:18px;

  border:
    1px solid rgba(235,174,48,.26);

  border-radius:20px;

  background:
    rgba(3,28,65,.80);
}

.directory-title{
  margin:0 0 16px;

  text-align:center;
  color:#efb13a;

  font-size:25px;
}

.pages-grid{
  display:grid;

  grid-template-columns:
    repeat(2,minmax(0,1fr));

  gap:11px;
}

.page-card{
  min-height:105px;

  padding:15px 10px;

  display:flex;
  align-items:center;
  justify-content:center;

  text-align:center;
  text-decoration:none;

  color:#fff;

  border:
    1px solid rgba(91,145,211,.36);

  border-radius:15px;

  background:
    linear-gradient(
      145deg,
      rgba(20,62,111,.88),
      rgba(4,33,72,.94)
    );

  box-shadow:
    0 7px 20px rgba(0,0,0,.15);

  line-height:1.8;
}

.page-card:active{
  transform:scale(.98);
}

.loading,
.empty{
  grid-column:1/-1;

  padding:25px 10px;

  text-align:center;

  color:#dce7f5;

  line-height:2;
}

.footer{
  max-width:850px;

  margin:25px auto 0;
  padding:18px 10px;

  text-align:center;

  color:#cbd5e5;

  border-top:
    1px solid rgba(227,169,47,.20);

  font-size:13px;
  line-height:1.9;
}

.footer strong{
  color:#eab03a;
}

@media(max-width:600px){

  .pages-grid{
    grid-template-columns:1fr;
  }

  .logo{
    width:50px;
    height:50px;
    min-width:50px;
  }

  .brand-name{
    font-size:18px;
  }

  .brand-sub{
    font-size:9px;
  }
}

</style>
</head>

<body>

<div class="page">

<header class="header">

  <div class="brand">

    <img
      class="logo"
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtiQV1W9mQro6EmrwV6aJM5Rtve5MGvQsXCHuP5XlDi-6QSE5eo6INg28uODihhNdpMpOjke5vEkn2NPf6AuRzBAZSQvQxcYk_jgK0f7zpMBrKzCe-Bn-h5Dsjrwpua0xIPqDchRn8RAAJgMLroEFLbASS_WRgiR0NhF0TvPHMpFL9UGIGZeyltyZa3krn/s320/41040.png"
      alt="Imdade Rohani"
      draggable="false"
    >

    <div class="brand-text">

      <span class="brand-name">
        Imdade Rohani
      </span>

      <span class="brand-sub">
        Rohani Ilaj aur Online Rehnumai
      </span>

    </div>

  </div>

  <a
    class="home-btn"
    href="/"
  >
    🏠 ہوم
  </a>

</header>


<main class="hero">

  <div class="hero-icon">
    ✦
  </div>

  <h1>
    روحانی رہنمائی
  </h1>

  <div class="intro">
    یہاں Imdade Rohani کے دستیاب رہنمائی کے صفحات
    ایک ہی جگہ پیش کیے گئے ہیں۔
  </div>

</main>


<section class="directory">

  <h2 class="directory-title">
    دستیاب رہنمائی
  </h2>

  <div
    class="pages-grid"
    id="pagesGrid"
  >

    <div class="loading">
      صفحات لوڈ ہو رہے ہیں…
    </div>

  </div>

</section>


<footer class="footer">

  © 2026
  <strong>
    Imdade Rohani
  </strong>

  <br>

  Rohani Ilaj aur Online Rehnumai

</footer>

</div>


<script>

document.addEventListener(
  "contextmenu",
  function(e){
    e.preventDefault();
  }
);

document.addEventListener(
  "copy",
  function(e){
    e.preventDefault();
  }
);

document.addEventListener(
  "dragstart",
  function(e){
    e.preventDefault();
  }
);


function titleFromUrl(url){

  try{

    const u =
      new URL(url);

    let slug =
      u.pathname
        .split("/")
        .filter(Boolean)
        .pop() || "";

    slug =
      slug
        .replace(/\\.html?$/i,"")
        .replace(/[-_]+/g," ")
        .trim();

    if(!slug){
      return "رہنمائی";
    }

    return slug;

  }catch(e){

    return "رہنمائی";
  }
}


async function getRealTitle(url){

  try{

    const response =
      await fetch(
        url,
        {
          credentials:"same-origin"
        }
      );

    if(!response.ok){
      return null;
    }

    const html =
      await response.text();

    const doc =
      new DOMParser()
        .parseFromString(
          html,
          "text/html"
        );

    const title =
      (
        doc.querySelector("h1")?.textContent ||
        doc.querySelector("title")?.textContent ||
        ""
      )
      .replace(/\\s+/g," ")
      .replace(/\\s*[|–-]\\s*Imdade Rohani.*$/i,"")
      .trim();

    return title || null;

  }catch(e){

    return null;
  }
}

async function loadPages(){

  const grid =
    document.getElementById("pagesGrid");

  try{

    /* Blogger ka fresh Home Page load karein */
    const response =
      await fetch(
        "/?rohaniPageList=" + Date.now(),
        {
          cache:"no-store"
        }
      );

    if(!response.ok){
      throw new Error("BLOGGER_HOME_ERROR");
    }

    const html =
      await response.text();

    const doc =
      new DOMParser()
        .parseFromString(
          html,
          "text/html"
        );

    /*
      Sirf Blogger ke PageList2 mein
      jo pages shamil hain wahi lena hai.
    */
    const links =
      Array.from(
        doc.querySelectorAll(
          "#PageList2 li > a[href]"
        )
      );

    /*
      Blogger menu mein maujood icons.
      Position bilkul menu ke mutabiq rahegi.
    */
    const menuIcons = [
      "⌂",
      "▣",
      "☾",
      "⇩",
      "⌕",
      "✦",
      "✚",
      "₹",
      "✉",
      "☎",
      "⚖"
    ];

    const pages = [];
    const seen = new Set();

    links.forEach(
      function(link,index){

        try{

          const pageUrl =
            new URL(
              link.href,
              window.location.origin
            );

          /*
            Sirf isi website ke Blogger Pages.
            Home ya external link nahi.
          */
          if(
            pageUrl.hostname !==
              window.location.hostname
          ){
            return;
          }

          if(
            !pageUrl.pathname.startsWith("/p/")
          ){
            return;
          }

          const cleanUrl =
            pageUrl.origin +
            pageUrl.pathname;

          if(seen.has(cleanUrl)){
            return;
          }

          seen.add(cleanUrl);

          const title =
            (
              link.textContent || ""
            )
            .replace(/\s+/g," ")
            .trim();

          if(!title){
            return;
          }

          pages.push({
            url:cleanUrl,
            title:title,
            icon:
              menuIcons[index] || "✦"
          });

        }catch(e){}

      }
    );

    if(!pages.length){

      grid.innerHTML =
        '<div class="empty">فی الحال کوئی رہنمائی کا صفحہ دستیاب نہیں ہے۔</div>';

      return;
    }

    grid.innerHTML = "";

    pages.forEach(
      function(page){

        const card =
          document.createElement("a");

        card.className =
          "page-card";

        card.href =
          page.url;

        card.style.flexDirection =
          "column";

        card.style.gap =
          "10px";

        const icon =
          document.createElement("span");

        icon.textContent =
          page.icon;

        icon.style.fontSize =
          "30px";

        icon.style.color =
          "#efb13a";

        icon.style.lineHeight =
          "1";

        const title =
          document.createElement("span");

        title.textContent =
          page.title;

        card.appendChild(icon);
        card.appendChild(title);

        grid.appendChild(card);

      }
    );

  }catch(error){

    grid.innerHTML =
      '<div class="empty">رہنمائی کے صفحات اس وقت لوڈ نہیں ہو سکے۔ براہ کرم دوبارہ کوشش کریں۔</div>';

  }
}

loadPages();

</script>

</body>
</html>`;
}

async function checkBloggerResponse(response, request) {

  const CUSTOM_404 =
    "https://qrc.imdaderohani.in/404";

  // Asli HTTP error
  if (response.status === 404 || response.status === 410) {
    return serveCustom404();
  }

  if (request.method === "HEAD") {
    return response;
  }

  const contentType =
    response.headers.get("content-type") || "";

  // Sirf HTML pages inspect karne hain
  if (!contentType.toLowerCase().includes("text/html")) {
    return response;
  }

  const html =
    await response.clone().text();

  // HTML entities ko actual characters mein badlein
  const decodeEntities = (str) => {
    return str
      .replace(/&#(\d+);/g, (_, n) => {
        try {
          return String.fromCodePoint(parseInt(n, 10));
        } catch {
          return _;
        }
      })
      .replace(/&#x([0-9a-f]+);/gi, (_, n) => {
        try {
          return String.fromCodePoint(parseInt(n, 16));
        } catch {
          return _;
        }
      })
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">");
  };

  const decodedHtml =
    decodeEntities(html);

  const text =
    decodedHtml
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  // Hindi Blogger error
  const hindi404 =
    (
      text.includes("क्षमा करें") ||
      text.includes("जिस पेज को आप खोज रहे हैं") ||
      text.includes("जिस पृष्ठ को आप खोज रहे हैं")
    ) &&
    (
      text.includes("मौजूद नहीं है") ||
      text.includes("उपलब्ध नहीं है")
    );

  // English Blogger error
  const english404 =
    (
      text.includes("page you were looking for") ||
      text.includes("page you are looking for") ||
      text.includes("page you're looking for")
    ) &&
    (
      text.includes("does not exist") ||
      text.includes("not found") ||
      text.includes("doesn't exist")
    );

  // Blogger ke error/status page ke structural markers
  const bloggerErrorStructure =
    (
      /status-msg-body/i.test(decodedHtml) ||
      /status-msg-wrap/i.test(decodedHtml)
    ) &&
    (
      hindi404 ||
      english404
    );

  if (
    hindi404 ||
    english404 ||
    bloggerErrorStructure
  ) {
    return serveCustom404();
  }

  return response;
}

export default {

  async fetch(request) {

    const url = new URL(request.url);
    const path = url.pathname;

/* =========================================
   IMDADE ROHANI CUSTOM CLEAN PAGE URLS
   ========================================= */

const customPages = {

  "/name-janch":
    "/p/blog-page_51.html",

  "/naqsh-download":
    "/p/blog-page_13.html",

  "/form-kaarguzari":
    "/p/blog-page_22.html",

  "/form-2":
    "/p/page-one.html",

  "/tashkheese-dawa":
    "/p/fawaidtashkheesedawa.html",

  "/janch-rupay":
    "/p/blog-page_8.html",

  "/ittilaat":
    "/p/blog-page_1.html",

  "/contact":
    "/p/blog-page_14.html",

  "/qawaneen":
    "/p/blog-page_52.html",

  "/quran-shreef":
    "/p/quran-shreef.html"
};
    
/* =========================================
   ROHANI REHNUMAI DIRECTORY
   ========================================= */

if (path === "/rohani-rehnumai") {
  return new Response(
    rohaniRehnumaiHtml(),
    {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "no-store"
      }
    }
  );
}
    
        /* =========================================
       BLOCK INVALID BLOGGER .htm URLS
       ========================================= */

    if (
      path.startsWith("/p/") &&
      path.toLowerCase().endsWith(".htm")
    ) {
      return serveCustom404();
    }

    /* =========================================
       CUSTOM NAMED PAGES
       ========================================= */

    if (customPages[path]) {

      const bloggerURL =
        new URL(request.url);

      bloggerURL.pathname =
        customPages[path];

      if (path === "/quran-shreef") {
  bloggerURL.search = "?m=1";
}

      const bloggerRequest =
        new Request(
          bloggerURL.toString(),
          request
        );

      const response =
        await fetch(bloggerRequest);

      return checkBloggerResponse(
        response,
        request
      );
    }


    /* =========================================
       ONLY GET / HEAD PAGE PROCESSING
       ========================================= */

    if (
      request.method !== "GET" &&
      request.method !== "HEAD"
    ) {
      return fetch(request);
    }


    /* =========================================
       QRC-PWA / SYSTEM PATHS
       ========================================= */

    const directPrefixes = [
      "/api/",
      "/manifest",
      "/service-worker",
      "/pwa-",
      "/install",
      "/404",
      "/cdn-cgi/"
    ];

    if (
      directPrefixes.some(
        prefix => path.startsWith(prefix)
      )
    ) {
      const response =
        await fetch(request);

      return checkBloggerResponse(
        response,
        request
      );
    }


    /* =========================================
       BLOGGER CLEAN blog-page_N URL
       /blog-page_51
       =>
       /p/blog-page_51.html
       ========================================= */

    if (/^\/blog-page_\d+$/.test(path)) {

      const bloggerURL =
        new URL(request.url);

      bloggerURL.pathname =
        "/p" + path + ".html";

      const bloggerRequest =
        new Request(
          bloggerURL.toString(),
          request
        );

      const response =
        await fetch(bloggerRequest);

      return checkBloggerResponse(
        response,
        request
      );
    }


    /* =========================================
       UNKNOWN SIMPLE CLEAN URL
       ========================================= */

    if (/^\/[^\/.]+$/.test(path)) {

      return serveCustom404();
    }


    /* =========================================
       ALL OTHER URLS
       INCLUDING /p/... , /search..., etc.
       ========================================= */

    const response =
      await fetch(request);

    return checkBloggerResponse(
      response,
      request
    );
  }
};

// FINAL UNIVERSAL BLOGGER 404 SYSTEM
