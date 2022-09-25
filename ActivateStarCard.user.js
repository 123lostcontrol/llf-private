// ==UserScript==
// @name         Activate Star Card
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  激活星梦卡
// @author       You
// @match        *://www.ckg48.com/event/s310/star/activate.html
// @match        *://ckg48.cn/event/s310/star/activate.html
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
    $('#batch-activate-btn').before("<button class='btn btn-h45' id='read-card-btn'>读取卡号</button>");
    $('#read-card-btn').before('<textarea id="card-numbers" rows="5" cols="15" style="background: white" placeholder="粘贴需激活星梦卡号 每行一个"></textarea>');
    $('#card-numbers').after("<div id='confirm-card-count'>已读取星梦卡 <span id='card-count' style='color: blue; font-weight:bold'>0</span> 张 | 已提交 <span id='completed-card-count' style='color: green; font-weight:bold'>0</span> 张</div>");

    var cardNumbers = [];
    var i = 0;

    $('#read-card-btn').click(function(){
        cardNumbers = [];
        i = 0;
        $.each($('#card-numbers').val().trim().split(/\n/), function(i, line){
            if(line.trim()){
                cardNumbers.push(line.trim());
            }
        });
        $('#card-count').text(cardNumbers.length);
        $('#completed-card-count').text(i);
        console.log("Card numbers length: " + cardNumbers.length);
        console.log("Card numbers saved: ");
        console.log(cardNumbers);
    });

    $('#batch-activate-btn').click(function(){
        if (i < cardNumbers.length) {
            console.log("Activate card number: " + cardNumbers[i]);
            $('#code').val(cardNumbers[i]);
            $('#activeBtn').click();
            window.setTimeout(function() {$('.layui-m-layercont .btn-close').click();}, 1000);
            window.setTimeout(function() {$('#batch-activate-btn').click();}, 2000);
            i++;
            $('#completed-card-count').text(i);
        } else {
            window.alert("当前卡组已全部激活完成");
        }
    });
})();
