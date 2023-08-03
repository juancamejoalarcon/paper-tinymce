export const loadScript = (src: string, options: any = {}) => {
  const script_el =
    options.cache && document.head.querySelector('script[href="' + src + '"]');

  if (script_el) return Promise.resolve(script_el);

  return new Promise(function (resolve, reject) {
    const script_el = document.createElement("script");
    const attrs = options.attrs || {};

    for (const attr_key in attrs)
      script_el.setAttribute(attr_key, attrs[attr_key]);

    script_el.src = src;

    if ("defer" in options) script_el.defer = Boolean(options.defer);
    if ("async" in options) script_el.async = Boolean(options.async);

    script_el.onload = () => resolve(script_el);
    script_el.onerror = () => {
      const error = new Error("Error loading script: " + src);
      return reject(error);
    };

    document.head.appendChild(script_el);
  });
};
