export default {
  async fetch(request) {

    const url = new URL(request.url);
    const path = url.pathname;

    /* =========================================
       IMDADE ROHANI CUSTOM CLEAN PAGE URLS
       ========================================= */

    const customPages = {
      "/name-janch": "/p/blog-page_51.html",
      "/naqsh-download": "/p/blog-page_13.html",
      "/form-kaarguzari": "/p/blog-page_22.html",
      "/form-2": "/p/page-one.html",
      "/tashkheese-dawa": "/p/fawaidtashkheesedawa.html",
      "/janch-rupay": "/p/blog-page_8.html",
      "/ittilaat": "/p/blog-page_1.html",
      "/contact": "/p/blog-page_14.html",
      "/qawaneen": "/p/blog-page_52.html"
    };

    /* Custom named pages */
    if (customPages[path]) {

      const bloggerURL = new URL(request.url);

      bloggerURL.pathname =
        customPages[path];

      const bloggerRequest =
        new Request(
          bloggerURL.toString(),
          request
        );

      const response =
        await fetch(bloggerRequest);

      if (response.status === 404) {
        return Response.redirect(
          "https://qrc.imdaderohani.in/404",
          302
        );
      }

      return response;
    }


    /* =========================================
       ONLY GET / HEAD CLEAN-URL PROCESSING
       ========================================= */

    if (
      request.method !== "GET" &&
      request.method !== "HEAD"
    ) {
      return fetch(request);
    }


    /* =========================================
       BLOGGER / SYSTEM URLS — DO NOT MODIFY
       ========================================= */

    const skipPrefixes = [
      "/p/",
      "/search",
      "/feeds",
      "/label/",
      "/comments/",
      "/cdn-cgi/",
      "/api/",
      "/manifest",
      "/service-worker",
      "/pwa-",
      "/install",
      "/404"
    ];

    const skipExact = [
      "/",
      "/favicon.ico",
      "/robots.txt",
      "/sitemap.xml"
    ];

    if (
      skipExact.includes(path) ||
      skipPrefixes.some(
        prefix => path.startsWith(prefix)
      )
    ) {
      return fetch(request);
    }


    /* =========================================
       CLEAN BLOGGER PAGE URL
       Example:
       /blog-page_51
       becomes
       /p/blog-page_51.html
       ========================================= */

    if (/^\/[^\/.]+$/.test(path)) {

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

const pageText =
  await response.clone().text();

const bloggerNotFound =
  response.status === 404 ||
  pageText.includes(
    "जिस पेज को आप खोज रहे हैं वह मौजूद नहीं है"
  ) ||
  pageText.includes(
    "the page you were looking for in this blog does not exist"
  );

if (bloggerNotFound) {
  return Response.redirect(
    "https://qrc.imdaderohani.in/404",
    302
  );
}

return response;
    }


    /* =========================================
       NORMAL REQUEST
       ========================================= */

    const response =
      await fetch(request);

    if (response.status === 404) {
      return Response.redirect(
        "https://qrc.imdaderohani.in/404",
        302
      );
    }

    return response;
  }
};
// Cloudflare first deployment
