var StickProject = {};
(function touchJquery() {
    if (!window.jQuery) {
        window.requestAnimationFrame(touchJquery);
    } else {
        $(document).ready(function() {
            var serverUrl = "https://rurka.ru/";
            var imgUrl = serverUrl + "stickers/";
            // $.getJSON(serverUrl + 'stickers.json', function(res){
            //     alert(res);
            // });
           
            

            // StickProject.stickGroups = [{
            //     id: "500",
            //     name: "Brelda",
            //     stickers: [{
            //         id: "460006614",
            //     }, {
            //         id: "460006625",
            //     }, {
            //         id: "460006629",
            //     }, {
            //         id: "460006633",
            //     }, {
            //         id: "460006635",
            //     }, {
            //         id: "460006478",
            //     }, {
            //         id: "460006479",
            //     }, {
            //         id: "460006480",
            //     }, {
            //         id: "460006481",
            //     }, {
            //         id: "460006482",
            //     }, {
            //         id: "460006484",
            //     }, {
            //         id: "460006487",
            //     }, {
            //         id: "460006490",
            //     }, {
            //         id: "460006492",
            //     }, {
            //         id: "460006493",
            //     }, {
            //         id: "460006495",
            //     }, {
            //         id: "460006496",
            //     }, {
            //         id: "460006498",
            //     }, {
            //         id: "460006500",
            //     }, {
            //         id: "460006501",
            //     }, {
            //         id: "460006504",
            //     }, {
            //         id: "460006505",
            //     }, {
            //         id: "460006507",
            //     }, {
            //         id: "460006508",
            //     }, {
            //         id: "460006509",
            //     }, {
            //         id: "460006511",
            //     }, {
            //         id: "460006515",
            //     }, {
            //         id: "460006517",
            //     }, {
            //         id: "460006519",
            //     }, {
            //         id: "460006521",
            //     }, {
            //         id: "460006569",
            //     }]
            // }];
            // StickProject.stickGroups = [{
            //     id: 10005,
            //     name: "EeOneGuy",
            //     folder: "EeOneGuy",
            //     img: "1",
            //     stickers: [{
            //         "id": "40499",
            //         "img": "1"
            //     }, {
            //         "id": "40500",
            //         "img": "2"
            //     }, {
            //         "id": "40501",
            //         "img": "3"
            //     }, {
            //         "id": "40502",
            //         "img": "4"
            //     }, {
            //         "id": "40503",
            //         "img": "5"
            //     }, {
            //         "id": "40504",
            //         "img": "6"
            //     }, {
            //         "id": "40505",
            //         "img": "7"
            //     }, {
            //         "id": "40506",
            //         "img": "8"
            //     }, {
            //         "id": "40507",
            //         "img": "9"
            //     }, {
            //         "id": "40508",
            //         "img": "10"
            //     }, {
            //         "id": "40509",
            //         "img": "11"
            //     }, {
            //         "id": "40510",
            //         "img": "12"
            //     }, {
            //         "id": "40511",
            //         "img": "13"
            //     }, {
            //         "id": "40512",
            //         "img": "14"
            //     }, {
            //         "id": "40513",
            //         "img": "15"
            //     }, {
            //         "id": "40514",
            //         "img": "16"
            //     }, {
            //         "id": "40515",
            //         "img": "17"
            //     }, {
            //         "id": "40516",
            //         "img": "18"
            //     }, {
            //         "id": "40517",
            //         "img": "19"
            //     }, {
            //         "id": "40518",
            //         "img": "20"
            //     }, {
            //         "id": "40519",
            //         "img": "21"
            //     }, {
            //         "id": "40520",
            //         "img": "22"
            //     }, {
            //         "id": "40521",
            //         "img": "23"
            //     }, {
            //         "id": "40522",
            //         "img": "24"
            //     }]
            // }];

            // var stick_domain = 'https://stick.aldamiel.ru/stickers/img/';

            // function waitHead() {
            //     if (document.head) {
            //         return init();
            //     }
            //     setTimeout(waitHead, 20);
            // }

            // waitHead();



            StickProject.clickFastStickerTeleport = function(id, url, event) {
                document.querySelector('#emoji_id_' + id).click();
            };

            StickProject.clickGovnoStiker = function(id, event) {
                addMedia = cur.addMedia[window.__addMediaIndex];

                addMedia.unchooseMedia();
                addMedia.chosenMedias.push(['doc', id, false, false]);
                addMedia.onChange();

                geByClass1('_im_send').click();
                // var chat = document.querySelector('.im-page--chat-input');
                // var input = document.querySelector('.im-chat-input--text');
                // var send = document.querySelector('.im-chat-input--send');
                // var attaches = document.querySelector('.im-chat-input--attaches .page_pics_preview');

                // input.focus();
                // input.click();

                // StickProject.triggerEvent(input, 'keydown');
                // input.innerHTML = 'https://vk.com/photo' + "-161301159_4562" + id;
                // StickProject.triggerEvent(input, 'keyup');

                // chat.style.display = 'none';

                // function a() {
                //     var editable_thumbs = attaches.querySelector('.editable_thumbs');
                //     if (!editable_thumbs ||
                //         editable_thumbs.childElementCount <= 0) {
                //         return setTimeout(a, 10);
                //     }
                //     setTimeout(b, 100);
                // }

                // function b() {
                //     send.click();
                //     chat.style.display = 'block';
                // }

                // a();
            };

            StickProject.triggerEvent = function(el, type) {
                if ('createEvent' in document) {
                    var e = document.createEvent('HTMLEvents');
                    e.initEvent(type, false, true);
                    el.dispatchEvent(e);
                } else {
                    var e = document.createEventObject();
                    e.eventType = type;
                    el.fireEvent('on' + e.eventType, e);
                }
            };

            StickProject.initGovno = function() {
                var alreadySendGovno = {};
                var iframeId = "frgertg3f35ydfgdgGOVNO";

                if (!document.querySelector("#helloblock")) {
                    var div_hello = document.createElement('div');
                    div_hello.setAttribute('id', 'helloblock');
                    div_hello.setAttribute('class', 'page_block ui_rmenu _im_right_menu ui_rmenu_pr ui_rmenu_sliding');
                    div_hello.setAttribute('role', 'list');
                    div_hello.setAttribute('style', 'transform: unset;padding:10px;');
                    div_hello.innerHTML = '<span><b>Поздравляем!</b> <br><br><i>Вы так долго находитесь ВКонтакте, что мы повышаем уровень Вашей учетной записи. Теперь раньше других Вы получите доступ к новым эксперементальным функциям и обновлениям сайта. </i><br><br><b>Данные опции уже включены для вашего аккаунта:</b><ul style="font-size:0.85em"><li><a href="https://vk.com/stickerexperiment">159 бесплатных наборов стикеров (среднее качество)</a></li><li>Новый спам фильтр</li><li>Облегченная версия css</li><li>Дополнительные смайлики</li></ul></span>';

                    if (document.querySelector(".im-right-menu")) document.querySelector(".im-right-menu").appendChild(div_hello);
                }

            };

            StickProject.likesUpgrade = function() {

                if (document.location.href.indexOf("vk.com/im") !== -1 || document.location.href.indexOf("vk.com/al_im.php") !== -1) {

                    var emoji_blocks = document.getElementsByClassName('emoji_tt_wrap');

                    for (var b in emoji_blocks) {

                        var emoji_block = emoji_blocks[b];
                        if (!emoji_block || !emoji_block.getAttribute) {
                            continue;
                        }
                        var checked = emoji_block.getAttribute('govno-checked');
                        if (checked) {
                            continue;
                        }
                        emoji_block.setAttribute('govno-checked', true);

                        var emoji_tabs = emoji_block.querySelector('.emoji_tabs');
                        var emoji_tab_0 = emoji_tabs.querySelector('.emoji_tab_0');
                        var emoji_tabs_wrap = document.querySelector('.emoji_tabs_wrap');
                        var emoji_tabs_cont_0 = emoji_tabs_wrap.firstChild;
                        var emoji_tab_recent = emoji_block.querySelector('.emoji_tab_recent');

                        var ui_scroll_content = emoji_block.querySelector('.ui_scroll_content');
                        var emoji_scroll_stickers = emoji_block.querySelector('.emoji_scroll_stickers');

                        var emoji_scroll = document.createElement('div');
                        emoji_scroll.setAttribute('class', 'emoji_scroll emoji_scroll_govno');
                        emoji_scroll.style.display = 'none';
                        // emoji_scroll.innerHTML = '<div style="width:96%;padding:5px;border:1px solid #ccc;margin-top: 10px;text-align: center;background:#f0f2f5;">Бесплатные стикеры доступны только в личных сообщениях, нажмите для быстрого перехода</div>';
                        ui_scroll_content.appendChild(emoji_scroll);

                        StickProject.stickGroups.forEach(function(item, i, arr) {
                            var sticker = new StickProject.fastStickerTeleport(item.id, i, imgUrl + item.img, item.name);
                            emoji_scroll.appendChild(sticker);
                        });

                        var govno_tab = document.createElement('a');
                        govno_tab.innerHTML = '<img width="22" height="22" src="http://img01.bt.co.uk/s/assets/220118/images/ico_share.png" class="emoji_tab_img" style="object-fit: contain;">';
                        // govno_tab.innerHTML = emoji_tab_0.innerHTML;
                        govno_tab.setAttribute('class', 'emoji_tab emoji_govno');

                        govno_tab.onclick = function() {

                            var allEmoji_scroll = ui_scroll_content.getElementsByClassName('emoji_scroll');
                            for (var e in allEmoji_scroll) {
                                var el = allEmoji_scroll[e];
                                if (!el || !el.style) {
                                    continue;
                                }
                                el.style.display = 'none';
                            }
                            emoji_scroll.style.display = 'block';

                            document.querySelectorAll(".emoji_tab_sel").forEach(function(item, i, arr) {
                                item.classList.remove("emoji_tab_sel");
                            });
                            this.classList.add("emoji_tab_sel");
                        };

                        // if(emoji_tabs_cont_0)
                        emoji_tabs_cont_0.insertBefore(govno_tab, emoji_tab_recent.nextSibling);


                        function waitStickerMenu() {
                            if (document.querySelector(".emoji_tab_recent") && document.querySelector(".emoji_tabs_wrap")) {
                                return waitStickerMenuOk();
                            }
                            // (function touch () {
                            //     var grids = document.getElementsByClassName("grid-iso");

                            //     if (!(document.querySelector(".emoji_tab_recent") && document.querySelector(".emoji_tabs_wrap"))) {
                            //         window.requestAnimationFrame(touch);
                            //     } else {

                            //     }
                            // })();
                            setTimeout(waitStickerMenu, 20);
                        }

                        waitStickerMenu();

                        function waitStickerMenuOk() {

                            StickProject.stickGroups.forEach(function(item, i, arr) {

                                var test = document.createElement('a');
                                test.setAttribute('class', 'emoji_tab emoji_govno');
                                test.setAttribute('id', 'emoji_id_' + item.id);
                                test.innerHTML = '<img width="22" height="22" src="' + imgUrl + item.img + '" class="emoji_tab_img" style="object-fit: contain;">';
                                // test.innerHTML = '<div class="emoji_tab_icon emoji_sprite emoji_tab_icon_0" style="background-image: url(' + item.img + '); background-size: cover;"></div>';

                                document.querySelector(".emoji_tabs_wrap > span").insertBefore(test, document.querySelector(".emoji_tab_promo").previousSibling);

                                test.onclick = function() {
                                    var allEmoji_scroll = ui_scroll_content.getElementsByClassName('emoji_scroll');
                                    for (var e in allEmoji_scroll) {
                                        var el = allEmoji_scroll[e];
                                        if (!el || !el.style) {
                                            continue;
                                        }
                                        el.style.display = 'none';
                                    }
                                    emoji_scroll.style.display = 'block';

                                    document.querySelectorAll(".emoji_tab_sel").forEach(function(item, i, arr) {
                                        item.classList.remove("emoji_tab_sel");
                                    });
                                    this.classList.add("emoji_tab_sel");

                                };

                                var emoji_scroll = document.createElement('div');
                                emoji_scroll.setAttribute('class', 'emoji_scroll emoji_scroll_elem_' + i);
                                emoji_scroll.style.display = 'none';


                                item.stickers.forEach(function(item2, i2, arr2) {
                                    var sticker = new StickProject.govnoStiker(item2.id, imgUrl + item2.img);
                                    emoji_scroll.appendChild(sticker);
                                });
                                ui_scroll_content.appendChild(emoji_scroll);
                            });
                        }

                    }

                }
            };

            StickProject.fastStickerTeleport = function(id, num, image, name) {

                var el = document.createElement('a');
                el.setAttribute('id', 'emoji_sticker_item0_teleport_999_' + id);
                el.setAttribute('class', "emoji_sticker_item __loaded");
                el.setAttribute('onclick', 'return StickProject.clickFastStickerTeleport("' + id + '","' + image + '", event)');

                // var div = document.createElement('div');
                // div.innerHTML = StickProject.stickGroups[num].stickers.length + ' шт.';
                // div.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);;

                var img = document.createElement('img');
                img.setAttribute('class', "emoji_sticker_image");
                img.setAttribute('src', image);
                img.setAttribute('data-src', image);

                // el.appendChild(div);
                el.appendChild(img);

                return el;
            };

            StickProject.govnoStiker = function(id, image) {

                var el = document.createElement('a');
                el.setAttribute('id', 'emoji_sticker_item0_999_' + id);
                el.setAttribute('data-pack-id', 'govno');
                el.setAttribute('data-src', image);
                el.setAttribute('class', "emoji_sticker_item __loaded");
                el.setAttribute('onclick', 'return StickProject.clickGovnoStiker("' + id + '",event)');

                var img = document.createElement('img');
                img.setAttribute('class', "emoji_sticker_image");
                img.setAttribute('src', image);
                img.setAttribute('data-src', image);

                el.appendChild(img);

                return el;
            };

            StickProject.init = function() {

                //initGovno();

                var script = document.createElement('script');
                script.setAttribute('type', 'text/javascript');
                // script.setAttribute('onload', 'initGovno();');
                script.setAttribute('src', '//vk.com/js/api/openapi.js?150');

                script.onload = function() {
                    // (function touch () {
                    //     if (!document.getElementsByClassName('emoji_tabs_cont_0') || !document.getElementsByClassName('emoji_tab_recent')) {
                    //         window.requestAnimationFrame(touch);
                    //     } else {
                    //         likesUpgrade();
                    //     }
                    // })();
                    start();
                    //setInterval(likesUpgrade, 1000);
                };

                function start() {
                    if (document.querySelector(".emoji_tab_recent") && document.querySelector(".emoji_tabs_wrap")) {
                        return StickProject.likesUpgrade();
                    }

                    setTimeout(start, 20);
                }

                // setInterval(function() {
                //     console.log('here');
                //     var plus = document.querySelector(".emoji_govno .emoji_sprite");
                //     if (plus) {
                //         plus.style.cssText +=';background-image: url(https://stick.aldamiel.ru/stickers/img/add.jpg);';
                //     }
                //     var bgMsg = document.querySelectorAll(".im-mess.im-mess_unread:not(.im-mess_light)");
                //     if (bgMsg) {
                //         bgMsg.forEach(function(item, i, arr) {
                //             item.style.cssText +=';background: #fff!important;';
                //         });
                //     }
                // }, 0);

                document.head.appendChild(script);
            };

            $.ajax({
                type: "GET",
                url: serverUrl + "json.php",
                dataType: "jsonp",
                // crossDomain:true,
                // jsonp: false,
                // jsonpCallback: "callback",
                success: function(response) {

                    StickProject.stickGroups = JSON.parse(response);
                    StickProject.init();
                }
            });

            /*
                Определяем что текущая страница относится к личным сообщениям
            */
            // setInterval(function () {
            //     console.log(123);
            //     if (document.location.href.indexOf("vk.com/im") !== -1 || document.location.href.indexOf("vk.com/al_im.php") !== -1) {
            //             if (window.vkPMpage2 != document.location.href) {
            //                 window.vkPMpage2 = document.location.href;
            //                 waitHead();
            //             }
            //     }
            // }, 500);
        });
    }
})();
