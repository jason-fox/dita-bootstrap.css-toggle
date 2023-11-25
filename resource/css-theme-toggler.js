/*!
 * CSS theme toggler for Bootstrap / Bootswatch
 */

(() => {
  'use strict';

  const getStoredCss = () => localStorage.getItem('css-theme');
  const setStoredCss = css => localStorage.setItem('css-theme', css);

  const setCss = css => {
      if(css){
        const link = linkRegex(/.*\.min\.css/)[0];
        link.removeAttribute("integrity");
        link.setAttribute("href", css);
      }
  };

  const linkRegex = (regex) => {
    let output = [];
    for (let i of document.querySelectorAll('link')) {
        console.log(i)
        if (regex.test(i.href)) {
            output.push(i);
        }
    }
    return output;
  }

  const showActiveCss = (css, focus = false) => {
  };

  window.addEventListener('DOMContentLoaded', () => {    
    setCss( getStoredCss());
    document.querySelectorAll('[data-bs-css-href]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const css = toggle.getAttribute('data-bs-css-href');
        setStoredCss(css);
        setCss(css);
        //showActiveCss(css, true);
      });
    });
  });
})();
