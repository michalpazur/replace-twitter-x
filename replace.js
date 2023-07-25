const logoSelector = "a[aria-label='Twitter']";
const xdTextPath =
  "M 0.479 14.328 L 5.567 7.608 L 5.567 9.6 L 0.623 3.048 A 2.903 2.903 0 0 1 0.343 2.594 Q 0.144 2.186 0.144 1.793 A 1.54 1.54 0 0 1 0.155 1.608 Q 0.239 0.912 0.791 0.456 A 1.963 1.963 0 0 1 1.732 0.036 A 2.696 2.696 0 0 1 2.183 0 A 2.442 2.442 0 0 1 2.875 0.095 A 2.078 2.078 0 0 1 3.407 0.336 Q 3.811 0.593 4.215 1.089 A 6.19 6.19 0 0 1 4.463 1.416 L 8.039 6.384 L 6.599 6.384 L 10.199 1.416 A 5.632 5.632 0 0 1 10.558 0.945 Q 10.743 0.729 10.928 0.567 A 2.433 2.433 0 0 1 11.255 0.324 A 2.196 2.196 0 0 1 12.172 0.017 A 2.765 2.765 0 0 1 12.479 0 Q 13.343 0 13.895 0.444 Q 14.447 0.888 14.531 1.584 A 1.487 1.487 0 0 1 14.542 1.762 Q 14.542 2.378 14.039 3.048 L 9.071 9.6 L 9.071 7.608 L 14.159 14.328 Q 14.662 14.956 14.662 15.567 A 1.481 1.481 0 0 1 14.651 15.744 Q 14.567 16.44 14.015 16.896 A 1.947 1.947 0 0 1 13.144 17.301 A 2.755 2.755 0 0 1 12.599 17.352 A 2.38 2.38 0 0 1 11.843 17.235 A 2.135 2.135 0 0 1 11.399 17.028 A 2.66 2.66 0 0 1 11 16.723 Q 10.812 16.551 10.622 16.326 A 6.318 6.318 0 0 1 10.319 15.936 L 6.623 10.824 L 8.015 10.824 L 4.343 15.936 A 6.088 6.088 0 0 1 3.975 16.402 Q 3.783 16.62 3.594 16.783 A 2.553 2.553 0 0 1 3.263 17.028 A 2.196 2.196 0 0 1 2.346 17.335 A 2.765 2.765 0 0 1 2.039 17.352 A 2.544 2.544 0 0 1 1.393 17.274 A 1.918 1.918 0 0 1 0.647 16.896 Q 0.095 16.44 0.011 15.744 Q -0.067 15.099 0.401 14.434 A 3.197 3.197 0 0 1 0.479 14.328 Z M 24.239 17.136 L 19.535 17.136 Q 18.407 17.136 17.819 16.548 A 1.896 1.896 0 0 1 17.344 15.723 Q 17.256 15.423 17.236 15.063 A 3.878 3.878 0 0 1 17.231 14.856 L 17.231 2.496 Q 17.231 1.392 17.819 0.804 A 1.879 1.879 0 0 1 18.61 0.341 Q 18.908 0.249 19.267 0.225 A 3.965 3.965 0 0 1 19.535 0.216 L 24.239 0.216 A 14.184 14.184 0 0 1 26.921 0.454 Q 28.46 0.75 29.663 1.417 A 7.341 7.341 0 0 1 31.067 2.424 A 7.186 7.186 0 0 1 33.219 6.214 A 10.899 10.899 0 0 1 33.479 8.664 A 11.118 11.118 0 0 1 33.324 10.566 A 8.496 8.496 0 0 1 32.855 12.252 A 7.243 7.243 0 0 1 31.235 14.743 A 7.045 7.045 0 0 1 31.055 14.916 A 7.358 7.358 0 0 1 29.037 16.235 A 9.047 9.047 0 0 1 28.163 16.572 Q 26.447 17.136 24.239 17.136 Z M 21.647 3.792 L 21.647 13.56 L 23.951 13.56 A 8.717 8.717 0 0 0 24.962 13.505 Q 25.613 13.428 26.147 13.248 A 4.388 4.388 0 0 0 27.041 12.835 A 3.606 3.606 0 0 0 27.683 12.336 Q 28.295 11.736 28.595 10.824 A 5.625 5.625 0 0 0 28.81 9.895 Q 28.879 9.434 28.892 8.909 A 9.974 9.974 0 0 0 28.895 8.664 Q 28.895 7.073 28.398 6.014 A 3.489 3.489 0 0 0 27.671 4.98 A 3.803 3.803 0 0 0 26.244 4.127 Q 25.655 3.923 24.932 3.843 A 8.948 8.948 0 0 0 23.951 3.792 L 21.647 3.792 Z";

let interval;

const replaceX = () => {
  const path = document.querySelector(logoSelector + " path");
  path.setAttribute("d", xdTextPath);
  const svg = document.querySelector(logoSelector + " svg");
  svg.setAttribute("viewBox", "-8 0 48 17.5");
  svg.classList.add("r-vlxjld");
  clearInterval(interval);
};

const faviconSelector = "link[rel='shortcut icon']";
const customFaviconSelector = "link[data-favicon='custom']";

const replaceIcon = () => {
  const favicon = document.head.querySelector(faviconSelector);
  let href = favicon.getAttribute("href");
  href = href.replace("3.ico", "2.ico");
  let customFavicon = document.head.querySelector(customFaviconSelector);
  if (!customFavicon) {
    customFavicon = document.createElement("link");
    customFavicon.setAttribute("data-favicon", "custom");
    customFavicon.setAttribute("rel", "shortcut icon");
    customFavicon.setAttribute("href", href);
    document.head.appendChild(customFavicon);
  } else {
    customFavicon.setAttribute("href", href);
  }
};

interval = setInterval(replaceX, 100);
setInterval(replaceIcon, 2000);
