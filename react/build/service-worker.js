"use strict";var precacheConfig=[["/aramlol/index.html","27950ef942e34a3f2f4003c5e209fc53"],["/aramlol/static/css/main.8f379a43.css","1110eee669d449e794d27ea56726d8a6"],["/aramlol/static/js/main.bb989a86.js","49c24295f1f179c9afcaef59b36ba126"],["/aramlol/static/media/BeaufortforLOL-Bold.44fcc516.ttf","44fcc51648497b530878076d1c8f3424"],["/aramlol/static/media/BeaufortforLOL-Bold.d15e6ad5.woff","d15e6ad5b80db3bfe20fe8ea6f20e83b"],["/aramlol/static/media/BeaufortforLOL-Bold.dfaa3c36.eot","dfaa3c3645c6db405829027b4b7b1113"],["/aramlol/static/media/BeaufortforLOL-Regular.62850053.woff","628500539be9e29c30fbcf9957241368"],["/aramlol/static/media/BeaufortforLOL-Regular.74263781.eot","742637818f4da2d7ab032a87a3996425"],["/aramlol/static/media/BeaufortforLOL-Regular.b3a27471.ttf","b3a274713945513d30f2e1b74df900de"],["/aramlol/static/media/Berthold Akzidenz Grotesk Condensed.d28ee0ff.ttf","d28ee0ffb2a582b936811e96c4982bb4"],["/aramlol/static/media/Berthold Akzidenz Grotesk Extra Bold Condensed Italic.adb14881.ttf","adb148812df6b85d6c25620aded5d822"],["/aramlol/static/media/HowlingAbyss.940f709e.jpg","940f709e0183ec06282adb9ce3b63a88"],["/aramlol/static/media/loading.d831f2ac.gif","d831f2ac96a5d6cff3cedda278627a39"],["/aramlol/static/media/logo.36768b0c.png","36768b0c9c420db7d82ece8c738539f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/aramlol/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});