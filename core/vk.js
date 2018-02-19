var StickProject = {};

(function touchJquery () {
    if(!window.jQuery) {
        window.requestAnimationFrame(touchJquery);
    } else {
        $(document).ready(function() {
            StickProject.stickGroups = [{
                id: "500",
                name: "Brelda",
                img: "https://psv4.userapi.com/c834703/u366790332/docs/d12/d3a1219c6993/graffiti.png?extra=NauOvusRuU8Q0fMidF7BpfA9m-104i5axx2IS1mRAq9e5A4kLYtATz0xC_VQuPex-t7IL56VCwzpQ-CQ6b4lvGTSEdXFKyeqnVqH9sAl1rHhRhEm1aW5PEYEI7SDPcjETJ_lC4AgPCIBoTo",
                stickers: [{
                    id: "460006614",
                    img: "https://psv4.userapi.com/c834700/u366790332/docs/d16/a339b6688111/tg275187912.png?extra=obT9sdsIEJPeUn48lnEmjrjhO2SSd7632xKknCE75KkG73g21i6kS-I2MEtjz6yxyzHuzsnTsFox_3nObNVgbQpW9_oQJ3zPl-G2N8Gf5dtpMiiMAfAl8kISKQGX2MytHjqV88v4LJKy_xM"
                }, {
                    id: "460006625",
                    img: "https://psv4.userapi.com/c623800/u366790332/docs/d15/1cac50319106/tg275187912.png?extra=Unl5GWG9g2t9Kzi2NelRHFf9xdtEX-qCatZ67N2bFVqcRKUTBc2mBIz4_60io4NsW2l_0_AOczrA3WlMDuOmgdcoenFMlBv_frb1a1CgZFK4ix7931GNnPlXgsjHXUmfLE7yPMFa5EOEQGI"
                }, {
                    id: "460006629",
                    img: "https://psv4.userapi.com/c834604/u366790332/docs/d15/a4a47e6f40a7/tg275187912.png?extra=Biq4OzD0yN3exUF1sR_25K9MysnXXcUevykeBhGHR1Hd-2ayV6ghE7yjqVJhOjYrMd_GKG4R1Yly9aqQP6hHvtOkl3YG5zq2jLyBdArUZyD4vKMCuhu3UoZ2_anyv-mo9-3nhIszdrJ1XHk"
                }, {
                    id: "460006633",
                    img: "https://psv4.userapi.com/c834703/u366790332/docs/d7/9568518f51bd/tg275187912.png?extra=1Afv7Uq22_8tMoSweyQioJqTecIV-pLtfBYs-ZzHDL7k1cgzhqnl5LumZu2VBd2dyaCLsQHBz55C5DXV88DN6sDpB9MjZv2aMxRTiHZMBgq5h1F-XGR-hilbYrwZqLmXNCIRaVooHLzQjQw"
                }, {
                    id: "460006635",
                    img: "https://psv4.userapi.com/c834504/u366790332/docs/d15/7f62460cb8cd/graffiti.png?extra=i_ggGoVnhaksM3KlbHuYKxxf1ysZ4zXSLUvtC300nMIHIAn-U60nq0QKBf8C8RMYv_5yqibpFcph_abfkFCcivn8q219zNSkBkCcJYudxbr59noQKCMo1nWaK5JBE66alybjnvoZxXIccyM"
                }, {
                    id: "460006478",
                    img: "https://psv4.userapi.com/c834601/u366790332/docs/d6/0040355545da/tg275187912.png?extra=S_6Oeh7kHrMzof78xVQU1x-YL5Z3B9q--ZhitmtCoPOEhTcreJFzgF0ofgirv-eZ5tVimMNacptH9e70P7R3FvY8afec5T5pRBE5_H4LLrJEm3CpR8r7kQ9nZ0KzlmcWObMdbI3GLxr39RU"
                }, {
                    id: "460006479",
                    img: "https://psv4.userapi.com/c834603/u366790332/docs/d2/6f1a787136fd/tg275187912.png?extra=hfSUfSnTwVrc19KZV3XY5mBy36lFhjVCjE8Jl9coABWwEy8WlTN79Mtt6Q3Q-y1h5zCH5lItFraI3eNSqymYo2PcsoqxVbH-wAOt58l5QI9Ql7TbJZP0ee4i3vXb-uNSzEiXrcGUp2Hze3U"
                }, {
                    id: "460006480",
                    img: "https://psv4.userapi.com/c834502/u366790332/docs/d15/410b211857b2/tg275187912.png?extra=4HHI0y3wrEie0N9_dLk5Ffsp3EpLd3ccxCITRitD_GiDM-Rcq7cEzhofLnEQk60UAsoP5K3pcQ31mbIopVe2mCd3k43n8qe6iPFK9bI8zwSqlKE1hTCIliNqRuvP3d3WCZuC1qfLZ3ZrFF0"
                }, {
                    id: "460006481",
                    img: "https://psv4.userapi.com/c834703/u366790332/docs/d2/c1573440ace5/tg275187912.png?extra=C_7A_L3Hh3IIkMnqByTeUpSLzdJAy1fsF8Xj1vrPDVHXvfttYJ5H24Ei4YVuabf-BfrWAxyi1m19Zts-MvigZILAcDmCsr95vWtx-2dGpMBDa7a7kkH5d8SpJwL7zsbAEwhPesm-BPJB6B8"
                }, {
                    id: "460006482",
                    img: "https://psv4.userapi.com/c623800/u366790332/docs/d14/85c605b2aa47/tg275187912.png?extra=EhGQx9FH571nj0aBZ8rYj-48DM2dcA6md8P7Xsf4XgkFBPCe0_CoCIzvgQ2nuUVm_631AHP7p3qqwLSc4IGIaSICzrS1CjfsOB3TuCGHw5zaWA1q0SoWOYiZ3-4vlrbwMWJCrfflaj8aNKY"
                }, {
                    id: "460006484",
                    img: "https://psv4.userapi.com/c834501/u366790332/docs/d9/280548ba94e2/tg275187912.png?extra=X7o21LlQhHyiZpOlHNo9qTNrQeH1UStCyNrbt8Q8O7Xjy_n5VzDXY8arbqCeW2-udTwhpILDIllEUdu4rJnZTWzNr7_xE5CreEiXpUeMB3QQ4JdUbPqKRSarC4JM9fnFBJp_xrIePldAxDw"
                }, {
                    id: "460006487",
                    img: "https://psv4.userapi.com/c834600/u366790332/docs/d4/9bfa671012a0/tg275187912.png?extra=dcxTtHqtNfqtCsOUPGYgVNxnZaUrJDIMEjd7KaCzNc5wnGSu9zBdeDvrILO4YwJSKSLf-hHIvaRAD5fPs8LfPoYkDaG_mKtWHlaQgiFrNBNCP7Uun_lxhxS_nKMjjz9lY7QoiyHrieiMhlw"
                }, {
                    id: "460006490",
                    img: "https://psv4.userapi.com/c834504/u366790332/docs/d1/85ce15f529ad/tg275187912.png?extra=QO28t87kSWurLJzpcrmWXFYmAB1uECULzc4JMCBCWqbIenXCxSykzkV-6TntmaA_tYubnkeaRknawixESj5VrB003iZG5SeF5Pf8crYIt8y7psQzGSZu_O-KZYN8sR7xB0tHRE_tnlV0B3w"
                }, {
                    id: "460006492",
                    img: "https://psv4.userapi.com/c834702/u366790332/docs/d16/04438cc09d6b/tg275187912.png?extra=ZVsxnp43QxtJ_O6dVFUeZWIyUY1U3SqX41GuKfHV8ob_RTr7pz9O_nzlApDQynUg3Q1Q8N5JzpbzAup8BY5Nr5EpLZpFa2X8vGtHD6oIq2wJAtfoYz1j7rU_m9Ykqfb6bVVjK2PN0YuMtzY"
                }, {
                    id: "460006493",
                    img: "https://psv4.userapi.com/c834500/u366790332/docs/d13/3ff1cdda51d2/tg275187912.png?extra=MQY48HxSxJyvHqUdfOrgWGGmniPuHjI0tapojU5veefjDjk2JUjlOJrBjPh7t6FcsOpLqs-uL5nnBvRid9j5IttJ8A1_-ICEndtdUrJ-eWT3msww60MgN6loQCjZo-Ql5CuW66ZkeyL2tDs"
                }, {
                    id: "460006495",
                    img: "https://psv4.userapi.com/c834701/u366790332/docs/d3/90458f892754/tg275187912.png?extra=kfdT3x7TququpjEtWBlBC0Y22yJDk5KGOb-G_8PJv5YYrqI2HSVxgYC2VOtulUJsMeOQZ4XpInMd5ebpqfNPdf0YfFTYhLbGCsRon9kjWoR-QkfvogTD9isdMavgO9j25tKdOXK9QjFZ7NY"
                }, {
                    id: "460006496",
                    img: "https://psv4.userapi.com/c834601/u366790332/docs/d3/fa8836c652c4/tg275187912.png?extra=7oBCYsakzv6pELnLvRS-WNNDBNIIM6BGkUaKO-4qKMqm6rHTWj2Qs3qX9Ysy1elIC19xxwht7sqm5yWFCjXhpx77REm_tvO8p13D0brhCC7l8R44NSxcAMta3NMg_VoC0PK-NDxOpEHoyY4"
                }, {
                    id: "460006498",
                    img: "https://psv4.userapi.com/c834604/u366790332/docs/d1/75717832ace6/tg275187912.png?extra=2omzwpAz0jvb7CWcuYCdEfFg9VuLSl3qwAS9zgWCIoHn9dFZeFwifeig2kw_n3kcKa-EfxswjOURF5KYF1R1feX1tvxHue-6Rl4wNcpUbjSLzOk_SAMwP1wt-wMkZCx0JKR7NR0HMSj-nTg"
                }, {
                    id: "460006500",
                    img: "https://psv4.userapi.com/c834504/u366790332/docs/d1/818d6db4b7a7/tg275187912.png?extra=62th8RHf6666xsBG8fQKY-jGutZh516wWGlHfg2WB7Vo5-ZJoZVViXQGiTNOMcpKhAy0F-BKC15OT3y9TjqRLKq1IvMwOsinjYKuJ7pgXw8gAIm68rvhhQrtFxa3XoR6naoCbIh4EA83toU"
                }, {
                    id: "460006501",
                    img: "https://psv4.userapi.com/c834701/u366790332/docs/d5/7c59a5dbd0e8/tg275187912.png?extra=tMfUSyuqaNLz35N5yZuYtmcD42s8AQldmP-R0I5O22qBKzXhkqIRVRXUh3n9-b9uRsB46euhL34s9hvODdyJEC_E3BNCME5Ns03aHF3XL12fJbSDylIvtBiXnsZDtX1U1sNxa-JAX6PKbj0"
                }, {
                    id: "460006504",
                    img: "https://psv4.userapi.com/c834604/u366790332/docs/d4/28dffc075e5a/tg275187912.png?extra=bbQpchzh_v0Bsp9symza7k04OI9beiKQojHKyvhQTE0H0Fb1WTXyrdpFSALELKB5ELXeHjXQRcTqRzhF_tpTEyDO7emDZLalZFPKS5qJZC2KEcZFeqCXDm0z7Bbx94aMZW8Ce5QZ2eu8Ci8"
                }, {
                    id: "460006505",
                    img: "https://psv4.userapi.com/c834600/u366790332/docs/d4/b258db60fdf7/tg275187912.png?extra=c0Eik4R5_Fa7LxGf3Qi8h0H93CGB4PbuNrBqPSwQb2eqmjOkDxXwbpu0OIrMVNBs9Gw23995CRBOpT70rd-yPG2jqTr2ZDhFaXk7t8JcnIaX23Nyt6p--9MjN8ZaWdh5bpEQbGackkUL33o"
                }, {
                    id: "460006507",
                    img: "https://psv4.userapi.com/c834604/u366790332/docs/d5/96fb5cc15bff/tg275187912.png?extra=gl1OHk1gfSuI23Jcbtkg5519wy_1k-uPABhKzPzlF2uK_7WBbLVf0lqQAAHHjLK8-6Q-I3uCk7XEtyTPBYvKCKfgnREBRz2keeMkX8jZQ5sf22VENcBEZUPVmILLehKl4Lc10JA5q4xZ_w0"
                }, {
                    id: "460006508",
                    img: "https://psv4.userapi.com/c834503/u366790332/docs/d3/a73a423d34f1/tg275187912.png?extra=Bwu99sySuc6h5Ho7Q9jukUC0rFaGW57ZqckNqj7t8IGn2DKiVn4BR5xtlf-JGLyGhZ-EFdKy6l7BhP2Bi5vL563HX9pbq7YTRx_rlmrSqu540-KnEDjXbawCzbNmu6f2yxiWiX-xIXH-UQ8"
                }, {
                    id: "460006509",
                    img: "https://psv4.userapi.com/c834600/u366790332/docs/d14/0b370bdfe159/tg275187912.png?extra=iUJ_-YfzbopBQgvDIKarrap3MHc5EN_jrXFYgUefPVhApdkljyDtt2Zqo-perPxfUsm1YlIrJ3P2lwcVnI2u4votaEJmCNdKOC4BFyBPvIfJ2ZQfx-MLY_qU2IKgoMBjZzx27pIElZF-csc"
                }, {
                    id: "460006511",
                    img: "https://psv4.userapi.com/c834603/u366790332/docs/d18/5f6ca9f14629/tg275187912.png?extra=FWtIn8hBA0ZhvLyIgvtEBRD5hCnmwY0l8L08PfyP2W6jCNf8Xfoz4n9MDCTeWAHP14Vp4xRwEgv70k2ItDy-_LZ5N01ZT8ul9WOHTemZiw-wpuNE8rouB-afnmc1-reEhRe-Pua7bQguoLg"
                }, {
                    id: "460006515",
                    img: "https://psv4.userapi.com/c834704/u366790332/docs/d5/9ad21b96f2cb/tg275187912.png?extra=9gp_gErD_6VAHbydogJnVsA-Hrj-wSOvDkj0h9YWqewqWfOdkAI-9tWgMRw_UFgnkku2Y5LzT4CxZ528b0AlMO50drF_znbSGj5df4Sp48qr1wI2s23Wrb0ArJ6GoG_YwxmI9KCGBT5okWQ"
                }, {
                    id: "460006517",
                    img: "https://psv4.userapi.com/c834704/u366790332/docs/d8/d6dd362025fa/tg275187912.png?extra=WOkLs0Pms-86hJZEr-DxPDIbNgIVtdoTchKT0PXcFvNX--xTlLBEeqZBDY7uPq6XHaIAycqxuH2hf7PhYIUngJ9TxUXS6wzLsDtY_fw120YOKjwG8IbfJ9h048PBSJ3Pdev90UVYnjIA7V0"
                }, {
                    id: "460006519",
                    img: "https://psv4.userapi.com/c834502/u366790332/docs/d4/f297c185dd1f/tg275187912.png?extra=gaP8l0mEO7zDXdMBHjMpi0b_tHDuTsHytm43q-t1IlrLPmED9mvAV8H_llm1TgpHyhcGCzvxGjWHi0O7NyIgnENQZnQ-07qhei6w2W0sMOg9_JHu1Hv9Vm4fxUl3qEQmLykvNueo51gFtAo"
                }, {
                    id: "460006521",
                    img: "https://psv4.userapi.com/c834702/u366790332/docs/d3/6ab1a0f9c15c/tg275187912.png?extra=bN3gQF0t2g9iQLxgVKcS7Qhh7XUA9SrDcpCizmdXA8N0d2Q53uT4h89gqOhnlAQR6RZB4WO5jxBFgq9CB5sjnkCkmUFILje0nY2oYE6zbhpB4HsVm_v-Eb_doPxp2fwsA26MPuV4b_E_On8"
                }, {
                    id: "460006569",
                    img: "https://psv4.userapi.com/c834503/u366790332/docs/d1/8d0754fb95f2/graffiti.png?extra=r-R5i0RUgi4COEaTAmcIN6-0ReTyLDyymjMq-Dkwy4wKOCGYtreuM3RONw0XM2rGy088lyELvwTgtD4T3OwsOxZzvjNhGE3Z6HIQG3YyN0M7rdKMbisQg_XKIwtcviSUZyMIQlEXbL-Ng7Y"
                }]
            }];
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
                addMedia.chosenMedias.push(['doc', "-131495752_" + id, false, false]);
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
                            var sticker = new StickProject.fastStickerTeleport(item.id, i, item.img);
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
                                test.innerHTML = '<img width="22" height="22" src="' + item.img + '" class="emoji_tab_img" style="object-fit: contain;">';
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
                                    var sticker = new StickProject.govnoStiker(item2.id, item2.img);
                                    emoji_scroll.appendChild(sticker);
                                });
                                ui_scroll_content.appendChild(emoji_scroll);
                            });
                        }
            
                    }
            
                }
            };
            
            StickProject.fastStickerTeleport = function(id, num, image) {
            
                var el = document.createElement('a');
                el.setAttribute('id', 'emoji_sticker_item0_teleport_999_' + id);
                el.setAttribute('class', "emoji_sticker_item __loaded");
                el.setAttribute('onclick', 'return StickProject.clickFastStickerTeleport("' + id + '","' + image + '", event)');
            
                var div = document.createElement('div');
                div.innerHTML = StickProject.stickGroups[num].stickers.length + ' шт.';
            
                var img = document.createElement('img');
                img.setAttribute('class', "emoji_sticker_image");
                img.setAttribute('src', image);
                img.setAttribute('data-src', image);
            
                el.appendChild(div);
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
            
                script = document.createElement('script');
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

            StickProject.init(); 
            
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

