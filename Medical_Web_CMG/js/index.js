$(function () {
    let el = {
        QRcode: $(".head-brand .info ul li:eq(0)"),
        searchTabBar: $(".search span"),
        searchListBtn: $(".search-input a"),
        searchList: $(".search ul"),
        sInput: $(".search-input input"),
        navBrandList: $(".nav-brand ul"),
        f: {
            focus: $(".focus"),
            banner: $(".banner"),
            a: $(".focus>a"),
            bannerPic: $(".banner li"),
            ol: $(".focus ol")
        }
    }

    let data = {
        list: {
            item: ['双眼皮', '鼻综合', '丰胸', '吸脂', '玻尿酸', '肉毒素', '整形修复'],
            doctor: ['赵医生', '钱医生', '孙博士', '李博士', '周教授', '吴教授', '郑主任', '王主任']
        },
        plastic: {
            item: ['眼部塑美', '鼻部塑美', '胸部塑美', '脸型塑造', '减肥塑形', '祛斑美肤', '祛痘美肤', '疤痕修复', '持久脱毛', '紧肤除皱', '美白嫩肤', '韩式纹绣', '私密养护', '活力齿科'],
            hotItem: ['韩式双眼皮', '达拉斯隆鼻', '动感丰胸', '脂肪移植', '吸脂瘦身', '双向祛斑', '激光脱毛', '半永久定妆', '光学祛痘', '嫩肤美白', '瘦脸针', '无创塑形', '种植牙', '牙齿矫正', '全部项目']
        },
        doctor_A: [
            { name: '白博士', info: '国际整形再造及美容学会专家', tg: '私人形象定制' },
            { name: '王博士', info: '中国中医微创美形创始人', tg: '汉方美减肥美体' }
        ],
        doctor_B: {
            outside: [
                { name: '白博士', subject: '塑形专场', time: '1月7日来院', url: 'https://ae01.alicdn.com/kf/He63a7d56e072438f89b09eb141643edeo.jpg' },
                { name: '王博士', subject: '美体专场', time: '1月8日来院', url: 'https://ae01.alicdn.com/kf/He63a7d56e072438f89b09eb141643edeo.jpg' },
                { name: '李博士', subject: '焕肤专场', time: '1月9日来院', url: 'https://ae01.alicdn.com/kf/He63a7d56e072438f89b09eb141643edeo.jpg' }],
            inside: [
                { name: '刘主任', subject: '整形科', time: '每周1、3、5日', url: 'https://ae01.alicdn.com/kf/Hc78fff8f172b45eebd1aa3b1ebe6bdd3n.jpg' },
                { name: '金主任', subject: '皮肤科', time: '每周2、4、6日', url: 'https://ae01.alicdn.com/kf/Hc78fff8f172b45eebd1aa3b1ebe6bdd3n.jpg' },
                { name: '海主任', subject: '无创科', time: '每周7日', url: 'https://ae01.alicdn.com/kf/Hc78fff8f172b45eebd1aa3b1ebe6bdd3n.jpg' },
                { name: '韩主任', subject: '口腔科', time: '7×24小时', url: 'https://ae01.alicdn.com/kf/Hc78fff8f172b45eebd1aa3b1ebe6bdd3n.jpg' }]
        },
        case: {
            url: ['javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;', 'javascript:;',],
            name: ['C', 'R', 'E', 'A', 'T', 'I', 'N', 'G']
        },
        picture: {
            brand: [
                [
                    'https://ae01.alicdn.com/kf/H3fd9a06593d54a8a817e7d43b20644874.jpg',
                    'https://ae01.alicdn.com/kf/H884d8fbbabfd4559ac873c7cb15a1839Q.jpg',
                    'https://ae01.alicdn.com/kf/H5e49fcd8a45349c9aa5c6443074c36356.jpg',
                    'https://ae01.alicdn.com/kf/Hf7c68cb923364005b2f12a5637fe15492.jpg',
                    'https://ae01.alicdn.com/kf/H8f62173478c04b80bc69ed8a81e9079dR.jpg',
                    'https://ae01.alicdn.com/kf/H953dd3f9d9204a718ff3de61795fbf94s.jpg',
                    'https://ae01.alicdn.com/kf/Habacf2c66a374d41823b3b70eb1c0b1e3.jpg',
                    'https://ae01.alicdn.com/kf/Hd63c90a9a15b48008be55ce0723fef55f.jpg',
                    'https://ae01.alicdn.com/kf/Ha76f345b49a348878b3f1e0ab6ae0d31G.jpg'
                ],
                [
                    'https://ae01.alicdn.com/kf/H4f9e0a955d4f42848e1de9ace0c7f26aP.jpg',
                    'https://ae01.alicdn.com/kf/Hc8fe4e30d61b49ca91498941790175e6g.jpg',
                    'https://ae01.alicdn.com/kf/H03d2e0f1559949998e45c2e7d4c77088o.jpg',
                    'https://ae01.alicdn.com/kf/H8839dc5a24b84485bddc7dac556058b48.jpg',
                    'https://ae01.alicdn.com/kf/H216bafc17ef5448db35fea7ee42421542.jpg',
                    'https://ae01.alicdn.com/kf/H5e26d022d86f4831bb6c7510e6b539fex.jpg',
                    'https://ae01.alicdn.com/kf/H28a817cbba764bee82a875fee68d341eP.jpg',
                    'https://ae01.alicdn.com/kf/H964b11a1c40144bba9a65b553b80da0bV.jpg',
                    'https://ae01.alicdn.com/kf/H9bf41e542ebb401c97f98c8ec38e6ddf7.jpg'
                ],
                [
                    'https://ae01.alicdn.com/kf/H6785d43f100047cc98ac1ef9d74039a2V.jpg',
                    'https://ae01.alicdn.com/kf/H5da843d9dceb4b99956315558159ef59g.jpg',
                    'https://ae01.alicdn.com/kf/H94d36b038f4d4c8391d41b2a3cc5f146l.jpg',
                    'https://ae01.alicdn.com/kf/H4c61733db72c40baadb3449548aa8f92D.jpg',
                    'https://ae01.alicdn.com/kf/H9cc404f575c64dc1ae1d383a6e5cb855T.jpg',
                    'https://ae01.alicdn.com/kf/H2f88ad4286bf44c39594813b644b6c33D.jpg',
                    'https://ae01.alicdn.com/kf/H65c728caaa5b44c788f0fb2c18056f82k.jpg',
                    'https://ae01.alicdn.com/kf/H17962cbc23c14f89ad61b1289ff6e269r.jpg',
                    'https://ae01.alicdn.com/kf/Hb05a60fb00864ee48ff026e68e3a7b2fO.jpg'
                ],
                [
                    'https://ae01.alicdn.com/kf/H3d1c50184224443abadcdd49acd1abafN.jpg',
                    'https://ae01.alicdn.com/kf/Hedbbaeed72dd4bd6b5122cded66ca960w.jpg',
                    'https://ae01.alicdn.com/kf/He5453f9130d847ac910c535a21084c91S.jpg',
                    'https://ae01.alicdn.com/kf/H49ae711315024f9f8202a86410ec50415.jpg',
                    'https://ae01.alicdn.com/kf/H2aa12a12f34842b89948ac67eafca644F.jpg',
                    'https://ae01.alicdn.com/kf/H2487168476074593adcc6ae0ba07a4391.jpg',
                    'https://ae01.alicdn.com/kf/Hdcf05a657d81446aaa0360df5c042a9et.jpg',
                    'https://ae01.alicdn.com/kf/H34deafa2fae54f789cc54230b1e22f6cu.jpg',
                    'https://ae01.alicdn.com/kf/H4be1eeb77f6d4a4fb32eb920a9ee3683o.jpg'
                ],
                [
                    'https://ae01.alicdn.com/kf/H99e3c1417e344305b897fd22e38083008.jpg',
                    'https://ae01.alicdn.com/kf/H0db895459eaa43cba6e0bdc12c170a3df.jpg',
                    'https://ae01.alicdn.com/kf/H9f3b7ea7657649b4a6f0d9927a54a38e6.jpg',
                    'https://ae01.alicdn.com/kf/H337baf70d9c448a2b38d6d9ab09506edT.jpg',
                    'https://ae01.alicdn.com/kf/H8505593374124b4bab23cab861f444432.jpg',
                    'https://ae01.alicdn.com/kf/H6baa51fca8904e20a4e42623c735d38dT.jpg',
                    'https://ae01.alicdn.com/kf/H597ea3882aef45deac048f7477c6076fn.jpg',
                    'https://ae01.alicdn.com/kf/Hbfb97b91740e4636b4c15b7d929b0d2eH.jpg',
                    'https://ae01.alicdn.com/kf/H01aa8afe5f0e4193b92d387710ab8d85e.jpg'
                ],
                [
                    'https://ae01.alicdn.com/kf/Ha2874bd7a61b464bb0776de926ed52a1e.jpg',
                    'https://ae01.alicdn.com/kf/H2ff912c1ccc84b41acb1c9f6ca270352w.jpg',
                    'https://ae01.alicdn.com/kf/Hda7f8f739aa24fa997d491e90ae1d2cfL.jpg',
                    'https://ae01.alicdn.com/kf/H5fcb8cb90db145b3aae4d240b99d3f8di.jpg',
                    'https://ae01.alicdn.com/kf/H0efb8ae8bd664ed9969e435a6acf78a52.jpg',
                    'https://ae01.alicdn.com/kf/H16f0031986544639952d0616238d0104f.jpg',
                    'https://ae01.alicdn.com/kf/H235ded1f6bb64251bfea9679575da660b.jpg',
                    'https://ae01.alicdn.com/kf/H0ff36461677342bc9deacfbd195f6aabX.jpg',
                    'https://ae01.alicdn.com/kf/H7262dd29db364e1196033f5e4efc1f83z.jpg'
                ]
            ]
        },
        info: {
            nav: ['医院品牌', '医院环境', '医生资质', '臻品材料', '麻醉系统', '先进设备', '服务管理', '蝶变案例'],
            item: [
                ['整形美容', '美胸隆胸', '综合美鼻', '翘睫美眼', '吸脂塑形', '自体脂肪'],
                ['皮肤美容', '医学祛斑', '紧肤除皱', '医学祛痘', '美白嫩肤', '激光脱毛', '果酸焕肤'],
                ['无创美容', '面部精雕', '注射除皱', '玻尿酸', '瘦脸针', '注射隆鼻', '爱贝芙'],
                ['医学纹绣', '半永久定妆', '极致纹眉', '魅惑眼线', '炫饰柔唇', '淡粉乳晕', '孕睫术']
            ]
        },
        chat: {
            consultant: {
                name: '医学美学顾问',
                message: [
                    '您好！这里是整形医院，我是整形专家王医生，很高兴为您提供帮助',
                    '请问您想咨询什么问题？',
                ],
            },
            customer: {
                name: '百万悬赏美胸案例',
                message: []
            }
        }
    }
    //封装：更新下拉菜单
    function list(obj, data) {
        obj.empty();
        $.each(data, function (i, e) {
            obj.append($("<li>" + e + "</li>"))
        })
    }
    //封装：判断元素隐藏才显示
    function searchShow(e) {
        if (e.is(':hidden')) {
            e.slideDown();
        }
    }
    //封装：鼠标经过显示隐藏
    function mouseHover(obj, show) {
        obj.hover(function () {
            show.stop().toggle();
        })
    }
    list(el.navBrandList, data.plastic.item);
    list(el.searchList, data.list.item);
    //头部 鼠标经过显示QR二维码
    el.QRcode.siblings().hover(function () {
        $(this).children('div').stop().toggle();
    })

    //搜索框切换
    el.searchTabBar.click(function () {
        $(this).addClass("search-current").siblings().removeClass("search-current");
        el.sInput.val('');
        if ($(this).index() > 0) {
            el.sInput.prop("placeholder", "请选择想要咨询的医生");
            list(el.searchList, data.list.doctor);
        } else {
            el.sInput.prop("placeholder", "请选择想要改变的部位");
            list(el.searchList, data.list.item);
        }

    })
    //点击下拉菜单按钮
    el.searchListBtn.click(function (e) {
        searchShow(el.searchList);
        e.stopPropagation();
    })
    //点击输入框
    el.sInput.click(function (e) {
        searchShow(el.searchList);
        e.stopPropagation();
    })
    //输入框输入内容
    el.sInput.on('input', function () {
        if ($(this).val()) {
            el.searchList.slideUp();
        }
    })
    //点击列表项添加到输入框
    el.searchList.on('click', 'li', function (e) {
        el.sInput.val(e.currentTarget.innerText)
    })
    //点击页面隐藏
    $(document).click(function () {
        el.searchList.slideUp();
    })

    //鼠标经过，显示全部服务项目
    $(".nav-brand dl").hover(function () {
        el.navBrandList.stop().slideDown();
    }, function () {
        el.navBrandList.stop().slideUp();
    })

    //轮播图==============================================

    //声明便变量，记录当前轮播图位置
    let index = 0;
    //圆点位置
    let circle = 0;

    //生成圆点
    el.f.bannerPic.each(function () {
        el.f.ol.append($("<li></li>"))
    })

    //圆点居中
    el.f.ol.css('margin-left', -el.f.ol.width() / 2)
    //圆点同步
    dot();

    //鼠标经过轮播图显示切换按钮
    mouseHover(el.f.focus, el.f.a);

    //鼠标经过：定时器状态切换(清除/开启)
    el.f.focus.hover(function () {
        clearInterval(timer);
        timer = null;
    }, function () {
        timer = setInterval(function () {
            playRight()
        }, 5000)
    })

    //在轮播图末尾添加无缝滚动图
    el.f.bannerPic.eq(0).clone().appendTo(el.f.banner)

    //点击圆点移动至相对序号的轮播图
    el.f.ol.children().on('click', function () {
        index = $(this).index();
        // dot();
        moveAnimate();
    })

    //点击左右按钮调用轮播
    el.f.a.eq(0).click(function () {
        playLeft()
    })
    el.f.a.eq(1).click(function () {
        playRight()
    })
    //计时器调用
    let timer = setInterval(function () {
        playRight();
    }, 5000)

    //左侧无缝切换图片
    function playLeft() {
        if (index < 1) {
            index = el.f.bannerPic.length;
            el.f.banner.offset({
                left: -index * el.f.focus.width()
            })
        }
        index--;
        moveAnimate();
    }
    //右侧无缝切换图片
    function playRight() {
        if (index > el.f.bannerPic.length - 1) {
            index = 0;
            el.f.banner.offset({ left: 0 })
        }
        index++;
        moveAnimate();
    }

    //轮播图移动动画
    function moveAnimate() {
        el.f.banner.stop().animate({
            left: -index * el.f.bannerPic.width() + 'px'
        }, 500);
        dot();
    }
    //圆点和轮播图同步动画
    function dot() {
        circle = index;
        if (circle > el.f.ol.children().length - 1) {
            circle = 0;
        }
        el.f.ol.children()
            .eq(circle).animate({ width: "30px" })
            .siblings().animate({ width: "10px" });
    }

    //导航栏==============================================

    //添加热门项目
    $.each(data.plastic.hotItem, function (i, e) {
        $('.nav-hot ul')
            .append($("<li><a href='javascript:;'><i></i>" + e + "</a></li>"));
        $('.nav-hot ul li a i').eq(i)
            .css("backgroundPosition", -i * 40 + "px" + " -120px");
    })

    //缩放动画
    function animateSize(element) {
        clearInterval(timerSize);
        let n = 0;
        var timerSize = setInterval(function () {
            n++;
            if (n <= 10) {
                n = n / 10;
                element.style.transform = "scale(" + n + ")";
                n = n * 10;
            } else {
                clearInterval(timerSize);
            }
        }, 20);
    }

    //鼠标经过图标文字变化
    $('.nav-hot ul').on({
        mouseenter: function () {
            $(this).find('a')
                .css("color", "#00A8D2")
                .children()
                .css("backgroundPositionY", "-160px")
            animateSize(this.children[0].children[0])
        },
        mouseleave: function () {
            $(this).find('a')
                .css("color", "#555")
                .children()
                .css("backgroundPositionY", "-120px")
            this.children[0].children[0].style.transform = "scale(1)"
        }
    }, 'li')

    //鼠标经过背景跟随
    let bg = $('.nav-hot div');
    let sp = 0;
    $('.nav-hot ul li').mouseenter(function () {
        sp = $('.nav-hot ul').offset().left + $(this).index() * 80;
        //在项目中移动时，只有此动画在不断排队
        bg.stop(false, true).animate({ left: sp })
    });
    $('.nav-hot ul').hover(function () {
        bg.offset({ left: sp })
            .slideDown();
    }, function () {
        bg.slideUp();
    })

    // $('.nav-hot ul li').hover(function () {
    //     bg.offset({ left: $(this).offset().left })
    //         .stop().slideDown();
    // }, function () {
    //     bg.stop().slideUp();
    // })

    //主体——医生&推广==============================================

    //右侧广告
    let adPic = $(".popularize .right a");
    let dPic = $(".popularize .left .d")
    adPic.hover(function () {
        $(this).siblings().stop().fadeTo(300, .6);
    }, function () {
        adPic.stop().fadeTo(300, 1);
    })

    //左侧医生轮播----------------------------------------------
    let doctorIn = 0;
    let dotLi = 0;

    //生成圆点
    dPic.children().each(function () {
        $(".popularize ol").append($("<a href='javascript:;'><li></li></a>"))
    })

    //生成末尾无缝滚动图
    dPic.children('li:first-child').clone().appendTo(dPic)

    //刷新医生信息
    function doctorInfo() {
        let n = doctorIn;
        if (n > 1) {
            n = 0;
        }
        let doc = data.doctor_A[n];
        $(".popularize .dname").text(doc.name).siblings('.dinfo').text(doc.info).siblings('a').children('span:last-child').html(doc.tg);

    }
    // console.log(doc);
    doctorInfo();

    //定时轮播 & 圆点同步
    let timerD = setInterval(function () {
        doctorMove();
        dotLimove();
        doctorInfo();
    }, 3500)

    //鼠标经过停止/重启计时器
    $(".popularize .left").hover(function (e) {
        clearInterval(timerD);
    }, function () {
        $(this).find('.bg,img').css({
            top: '0px', left: '0px'
        });
        // $(this).children('.bg').css({
        //     top: '0px', left: '0px'
        // })
        timerD = setInterval(function () {
            doctorMove();
            dotLimove();
            doctorInfo();
        }, 3500);
    })

    //前景背景空间错位
    $(".popularize .left").mousemove(function (e) {
        $(this).find('img').css({
            top: e.pageY / 100 + 'px',
            left: e.pageX / 100 + 'px'
        });
        $(this).children('.bg').css({
            top: -e.pageY / 100 + 'px',
            left: -e.pageX / 100 + 'px'
        })

    })

    //圆点同步
    function dotLimove() {
        dotLi = doctorIn;
        if (dotLi > 1) {
            dotLi = 0;
        }
        $(".popularize ol a")
            .eq(dotLi).css("background", "#0A0835")
            .siblings().css("background", "#909090")
    }

    //滚动
    function doctorMove() {
        if (doctorIn >= dPic.children().length - 1) {
            doctorIn = 0;
            dPic.offset({ left: $(".popularize").offset().left })
        }
        doctorIn++;
        dPic.animate({
            left: -doctorIn * dPic.children().width() + 'px'
        })
    }

    //点击圆点跳转对应图片
    $(".popularize ol").on('click', 'a', function () {
        doctorInfo()
        doctorIn = $(this).index();
        dPic.animate({
            left: -doctorIn * dPic.children().width() + 'px'
        });
        dotLimove();
    })

    //案例区==============================================

    //生成案例图片
    $.each(data.case.url, function (i) {
        $(".casePic ul")
            .append($("<li><a href='javascript:;'></a></li>")).children().eq(i).children()
            .css({
                "backgroundPositionX": -i * $(".casePic ul").children().width() + "px"
            })

    })
    //生成品牌文字
    $.each(data.case.name, function (i, e) {
        $(".casePic ol")
            .append($("<li></li>"))
            .children().eq(i).text(e)
    })

    //鼠标经过隐藏文字
    $(".casePic").hover(function () {
        $(this).children('.font')
            .css({ "z-index": "-1" })
            .children()
            .css({
                "background": "rgba(54, 205, 255, .7)"
            });
    }, function () {
        $(this).children('.font')
            .css({ "z-index": "2" })
            .fadeOut(0).fadeIn(500)
            .children()
            .css({
                "background": "rgba(0, 0, 0, .7)"
            });
    })
    // $(".casePic").hover(function () {
    //     $(this).children('.font').stop().fadeToggle();
    // })

    //鼠标案例经过高亮
    $(".casePic .pic").on({
        mouseenter: function () {
            $(this).siblings().stop().fadeTo(500, .3)
        },
        mouseleave: function () {
            $('.casePic .pic li').stop().fadeTo(500, 1)
        }
    }, 'li')

    //医生阵容==============================================
    //当前选中的标签页
    let tabIndex = 0;
    //当前选中的医生序号
    let docIndex = 0;

    //初始化坐诊医生
    refreshDoctor(data.doctor_B.outside);

    //初始化坐诊医生信息
    refreshFont(tabIndex, docIndex);

    //点击标签刷新数据
    $(".date-head").on('click', 'span', function () {
        //医生位置、文字复原
        docIndex = 0;
        dCount = 0;
        $('.doctors .doctor ul').offset({
            left: $('.doctors .doctor').offset().left
        })
        //将标签序号赋值
        tabIndex = $(this).index();
        //刷新标签
        tabState($(this));
        //刷新医生
        $(this).index() < 1 ?
            refreshDoctor(data.doctor_B.outside) :
            refreshDoctor(data.doctor_B.inside);
        //刷新文字
        refreshFont(tabIndex, docIndex);
    })

    //标签页状态变更
    function tabState(that) {
        //当前拥有此类名，终止函数
        if (that.is('.doctors-current')) return

        //添加移除类名
        that.addClass('doctors-current').siblings().removeClass('doctors-current')

        //ICON偏移数值
        let v = parseInt(that.children().css('background-position-x'));
        let sv = parseInt(that.siblings().children().css('background-position-x'));
        //ICON偏移
        that.children().css({
            backgroundPositionX: v + 60 + 'px'
        });
        that.siblings().children().css({
            backgroundPositionX: sv - 60 + 'px'
        })
    }

    //通过数据生成坐诊医生图片
    function refreshDoctor(data) {
        $('.doctors ul').empty();
        $.each(data, function (i, e) {
            $('.doctors ul')
                .append($("<li><img src='" + e.url + "'></li>"));
        })
        $('.doctors ul li').eq(0).clone().appendTo('.doctors ul');
    }

    //通过数据生成坐诊医生信息
    function refreshFont(e, i) {
        let el = null;
        e < 1 ? el = data.doctor_B.outside : el = data.doctor_B.inside;
        let p = $('.doctors .doctor div p')
        p.eq(0).text(el[i].subject);
        p.eq(1).text(el[i].name);
        p.eq(2).text(el[i].time);
    }


    //点击按钮轮播专家
    // let i = 0;
    // let docOl = $('.doctors .doctor ol');
    // let docUl = $('.doctors .doctor ul');
    // let docW = $('.doctor').width();
    // docOl.on('click', 'li', function () {
    //     if ($(this).index() < 1) {
    //         // console.log('<', i);
    //         if (i < 1) {
    //             i = docUl.children().length - 1;
    //             docUl.offset({
    //                 left: -i * docW + docUl.offset().left
    //             })
    //         }
    //         i--
    //     } else {
    //         // console.log('>', i);
    //         if (i >= docUl.children().length - 1) {
    //             // console.log('到头了');
    //             i = 0;
    //             docUl.offset({
    //                 left: $('.doctor').offset().left
    //             })
    //         }
    //         i++
    //     }
    //     i > docUl.children().length - 2 ? docIndex = 0 : docIndex = i;
    //     refreshFont(tabIndex, docIndex)
    //     docUl.stop().animate({
    //         left: -i * docW
    //     })
    // })


    //点击按钮轮播专家
    let dCount = 0;
    $('.doctors .doctor ol').on('click', 'li', function () {
        //轮播图容器
        let ul = $('.doctors .doctor ul');
        //轮播图数量
        let li = $('.doctors .doctor ul li').length
        //窗口宽度
        let docW = $('.doctor').width();
        //窗口距页面左侧距离
        let wl = $('.doctor').offset().left;
        //轮播范围
        let min = dCount < 1;
        let max = dCount >= li - 1;

        //执行
        if ($(this).index() < 1) {
            if (min) {
                dCount = li - 1;
                ul.offset({
                    left: -dCount * docW + wl
                })
            }
            dCount--
        } else {
            if (max) {
                dCount = 0;
                ul.offset({
                    left: wl
                })
            }
            dCount++
        }
        ul.stop().animate({
            left: -dCount * docW
        })

        //文字匹配
        dCount > li - 2 ? docIndex = 0 : docIndex = dCount;
        refreshFont(tabIndex, docIndex);
    })

    $('.doctors .team').hover(function () {
        let box = $(this).children('.text');
        let text = $(this).children('h3,p');
        // text.hidden();
        box.stop().animate({ width: 'toggle' }, 1000);
    })

    //企业文化==============================================

    //刷新图片
    picRefresh(0)

    //点击切换标签和图片
    $('.cultureHead').on('click', 'li', function () {
        $(this).addClass('culture-current').siblings().removeClass();
        picRefresh($(this).index());
    })

    //刷新图片函数
    function picRefresh(i) {
        $('.cultureBody').empty();
        $.each(data.picture.brand[i], function (i, e) {
            $('.cultureBody').append($("<li><img src='" + e + "'></li>"))
            // $('.cultureBody').append($("<li><img src='upload/" + e + ".png'></li>"))
        });
    }

    //底部信息==============================================

    $.each(data.info.nav, function (i, e) {
        // console.log(i, e);
        $('.honor ul').append('<li><a href="javascrupt:;"><i></i>' + e + '</a></li>')
        $('.honor ul li a i').eq(i).css({
            backgroundPositionX: -i * 60 + 'px'
        })
    })
    $.each(data.info.item, function (i, e) {
        // console.log(i, e);
        $('footer .info-right').append('<ul></ul>')
        $.each(data.info.item[i], function (ii, ie) {
            // console.log(ii, ie);
            $('footer .info-right ul').eq(i).append('<li><a href="javascript:;">' + ie + '</a></li>')
        })
    })

    //侧边栏==============================================

    scrollNav();

    //屏幕滚动
    $(window).scroll(function () {
        scrollNav();
    })

    //鼠标经过展开/闭合
    $('.nav-right').hover(function () {
        $('.nav-right div').stop().slideToggle()
    })

    //条件函数
    function scrollNav() {
        let winTop = $(document).scrollTop();
        let torgetTop = $('.popularize').offset().top;
        let torghtHeight = $('.popularize').height();
        let le = $('.nav-left');
        let re = $('.nav-right');
        // console.log(torgetTop + torghtHeight - re.height())

        // 左侧显示隐藏条件
        winTop > torgetTop ? le.fadeIn(500) : le.fadeOut(500);

        // 右侧跟随屏幕
        winTop > torgetTop ?
            re.css({
                'position': 'fixed',
                'top': torghtHeight - re.height() + 'px'
            }) :
            re.css({
                'position': 'absolute',
                'top': torgetTop + torghtHeight - re.height() + 'px'
            });
    }

    //弹出窗口==============================================

    $('body').on('click',
        '.nav-right>div>a:first-child, .doctors .button>a', function () {
            chat()
        })

    tips();
    function tips() {
        $('.tips').show();
        //倒计时读秒
        let n = 6;
        var t = setInterval(function () {
            n--;
            $('.tips p').text(n + '秒后关闭');
        }, 1000);
        setTimeout(function () {
            //清除倒计时
            clearInterval(t);
            $('.tips').hide();
        }, 6000);
    }

    $('.tips>a').click(function () {
        $('.tips').hide();
        clearInterval(t);
    })

    //聊天窗口==============================================

    //点击聊天窗口按钮
    $('.btn-message').on('click', 'a', function () {
        chat();
        systemInfo();
    })

    //点击发送按钮
    $('.inputWindow .input button').click(function () {
        sendOut();
    })

    //回车代替发送
    $('.inputWindow').keyup(function (e) {
        if (e.keyCode !== 13) return;
        sendOut();
    })

    //快捷发送
    $('.inputWindow ul li').on('click', 'a', function () {
        // console.log($(this).html());
        refreshMessage('answer', data.chat.customer.name, $(this).html())
        refreshMessage('question', data.chat.consultant.name, '<img src="images/RQ.png" style="width: 100%">')
    })

    //窗体显示隐藏
    function chat() {
        let win = $('.chatWindow');
        win.is(':hidden') ? win.stop().fadeIn() : win.stop().fadeOut();
    }
    //刷新聊天问候语句
    let one = 0;
    function systemInfo() {
        //获取自动回复数据
        let msg = data.chat.consultant.message;
        let userName = data.chat.consultant.name;
        if (one >= 1) return;
        one++;
        $.each(msg, function (i, e) {
            console.log(i, e);
            setTimeout(function () {
                refreshMessage('question', userName, e);
            }, i * 1500);
        })
    }

    //更新对话
    function refreshMessage(QA, showName, text) {
        //获取时间
        let date = new Date();
        let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        //添加对话
        $('.chatWindow .chatBody').append('<div class="chat ' + QA + '"><div class="chatHead"></div><div class="chatInfo"><span class="chatName">' + showName + '</span><span class="chatTime">' + h + ':' + m + ':' + s + '</span></div><div class="chatMessage"><p>' + text + '</p><div></div></div></div>');
    }

    //输入聊天信息 取聊天输入框中的信息
    function sendOut() {
        let text = $('.inputWindow .input input').prop('value');
        refreshMessage('answer', data.chat.customer.name, text);
        $('.inputWindow .input input').prop('value', '');
    }
})
