// ==UserScript==
// @name         Annotation Cycle
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  try to take over the world!
// @author       You
// @match        https://flide.ap.tesla.services/3d/TCLP*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tesla.services
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/algineer/test/main/Annotation%20Cycle
// @updateURL    https://raw.githubusercontent.com/algineer/test/main/Annotation%20Cycle
// ==/UserScript==

(function() {
let next = 0

function cycle() {
    var anno_list = document.querySelectorAll("div.css-1h02mjb")

    if (anno_list != null) {
        if (next >= anno_list.length) { next = 0 } 
        anno_list[next].click()
        next++
    }

}

document.addEventListener('keyup',
    event => {
        if (event.repeat) { return }
        if (event.key == "Tab") {
            event.preventDefault
            cycle()
        }
        if (event.ctrlKey && (event.key == "ArrowRight" || event.key == "ArrowLeft")) { next = 0 }
    })
})();
