// ==UserScript==
// @name         Activate Star Card
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  激活星梦卡
// @author       You
// @match        https://www.ckg48.com/event/s310/star/activate.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("Start activating star card.");
    if (typeof jQuery === 'undefined') {
        window.setTimeout(arguments.callee, 100);
        return;
    }
    $('#activeBtn').before("<button class='btn btn-h45' id='batch-activate-btn'>批量激活</button>");
    $('#batch-activate-btn').before("<button class='btn btn-h45' id='one-click-activate-btn'>一键激活</button>");

    const cardNumbers = [];
    var i = 0;

    $('#batch-activate-btn').click(function(){
        if (i < cardNumbers.length) {
            console.log("Activate card number: " + cardNumbers[i]);
            $('#code').val(cardNumbers[i]);
            $('#activeBtn').click();
            window.setTimeout(function() {$('.layui-m-layercont .btn-close').click();}, 1000);
            i++;
        } else {
            window.alert("当前卡组已全部激活完成");
        }
    });

    $('#one-click-activate-btn').click(function(){
        window.setInterval(function () {$('#batch-activate-btn').click();}, 2000);
    });
})();