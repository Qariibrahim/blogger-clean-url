async function checkBloggerResponse(response, request) {

  const CUSTOM_404 =
    "https://qrc.imdaderohani.in/404";

  // Asli HTTP error
  if (response.status === 404 || response.status === 410) {
    return Response.redirect(CUSTOM_404, 302);
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
    return Response.redirect(CUSTOM_404, 302);
  }

  return response;
}

export default {

  async fetch(request) {

    const url = new URL(request.url);
    const path = url.pathname;

        /* =========================================
       BLOCK INVALID BLOGGER .htm URLS
       ========================================= */

    if (
      path.startsWith("/p/") &&
      path.toLowerCase().endsWith(".htm")
    ) {
      return Response.redirect(
        "https://qrc.imdaderohani.in/404",
        302
      );
    }

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
        "/p/blog-page_52.html"
    };


    /* =========================================
       CUSTOM NAMED PAGES
       ========================================= */

    if (customPages[path]) {

      const bloggerURL =
        new URL(request.url);

      bloggerURL.pathname =
        customPages[path];

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

      return Response.redirect(
        "https://qrc.imdaderohani.in/404",
        302
      );
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
