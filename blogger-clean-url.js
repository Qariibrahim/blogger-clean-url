async function checkBloggerResponse(response, request) {

  // Asli HTTP 404
  if (response.status === 404) {
    return Response.redirect(
      "https://qrc.imdaderohani.in/404",
      302
    );
  }

  // HEAD request ya non-HTML response ko text check na karein
  if (request.method === "HEAD") {
    return response;
  }

  const contentType =
    response.headers.get("content-type") || "";

  if (!contentType.toLowerCase().includes("text/html")) {
    return response;
  }

  const html =
    await response.clone().text();

  const text =
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/gi, " ")
      .replace(/&#160;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();

  // Blogger Hindi soft-404
  const hindi404 =
    (
      text.includes("क्षमा करें") ||
      text.includes("जिस पेज को आप खोज रहे हैं")
    ) &&
    text.includes("मौजूद नहीं है");

  // Blogger English soft-404
  const english404 =
    (
      text.includes("page you were looking for") ||
      text.includes("page you are looking for")
    ) &&
    text.includes("does not exist");

  if (hindi404 || english404) {
    return Response.redirect(
      "https://qrc.imdaderohani.in/404",
      302
    );
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
