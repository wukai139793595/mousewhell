(function () {
    var contain = document.getElementsByClassName('contain')[0];
    var content = document.getElementsByClassName('content')[0];
    var up = document.getElementsByClassName('up')[0];
    var scroll = document.getElementsByClassName('scroll')[0];
    var down = document.getElementsByClassName('down')[0];
    var bar = document.getElementsByClassName('bar')[0];

    var containH = contain.offsetHeight;
    var contentH = content.offsetHeight;
    var scrollH = scroll.offsetHeight;
    var barH = Math.floor(scrollH * containH / contentH);
    var barRate = (scrollH - barH) / (contentH - containH);

    function init() {
        // console.log(barH)
        bar.style.height = barH + 'px';
        barDrag();
        clickDir();
        contentWheel();
    }
    init();

    function contentWheel() {
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', scrollFn, false);
        }
        window.onmouseWheel = document.onmousewheel = scrollFn;

        function scrollFn(e) {
            e = e || window.event;
            if (e.wheelDelta) {
                if (e.wheelDelta > 0) {
                    e = e || windown.event;
                    if (bar.offsetTop - 10 < 0) {
                        bar.style.top = 0;
                    } else {
                        bar.style.top = bar.offsetTop - 10 + 'px';
                    }
                    content.style.top = -Math.floor(bar.offsetTop / barRate) + 'px';
                } else {
                    if (bar.offsetHeight + bar.offsetTop < scroll.offsetHeight) {
                        // content.style.top = contentH - containH + 'px';
                        bar.style.top = bar.offsetTop + 10 + 'px';
                    } else {
                        bar.style.top = scroll.offsetHeight - bar.offsetHeight + 'px';
                    }
                    content.style.top = -Math.floor(bar.offsetTop / barRate) + 'px';
                }
            }else if(e.detail){
                if(e.detail > 0 ){
                    e = e || windown.event;
                    if (bar.offsetTop - 10 < 0) {
                        bar.style.top = 0;
                    } else {
                        bar.style.top = bar.offsetTop - 10 + 'px';
                    }
                    content.style.top = -Math.floor(bar.offsetTop / barRate) + 'px';
                }else{
                    if (bar.offsetHeight + bar.offsetTop < scroll.offsetHeight) {
                        // content.style.top = contentH - containH + 'px';
                        bar.style.top = bar.offsetTop + 10 + 'px';
                    } else {
                        bar.style.top = scroll.offsetHeight - bar.offsetHeight + 'px';
                    }
                    content.style.top = -Math.floor(bar.offsetTop / barRate) + 'px';
                }
            }
        }
    }

    function clickDir() {
        up.addEventListener('click', clickUp, false);
        down.addEventListener('click', clickDown, false);

        function clickUp(e) {
            e = e || windown.event;
            if (bar.offsetTop - 10 < 0) {
                bar.style.top = 0;
            } else {
                bar.style.top = bar.offsetTop - 10 + 'px';
            }
            content.style.top = -Math.floor(bar.offsetTop / barRate) + 'px';
        }

        function clickDown(e) {
            e = e || windown.event;
            if (bar.offsetHeight + bar.offsetTop < scroll.offsetHeight) {
                // content.style.top = contentH - containH + 'px';
                bar.style.top = bar.offsetTop + 10 + 'px';
            } else {
                bar.style.top = scroll.offsetHeight - bar.offsetHeight + 'px';
            }
            content.style.top = -Math.floor(bar.offsetTop / barRate) + 'px';
        }
    }

    function barDrag() {
        bar.addEventListener('mousedown', dragFn, false);

        function dragFn(e) {
            e = e || window.event;
            var clickH = e.clientY;
            document.addEventListener('mousemove', mouseMove, false);
            document.addEventListener('mouseup', mouseUp, false);

            function mouseMove(e) {
                e = e || window.event;
                var moveH = e.clientY - clickH;

                clickH = e.clientY;
                if (moveH > 0) {
                    if (bar.offsetHeight + bar.offsetTop > scroll.offsetHeight) {
                        bar.style.top = scroll.offsetHeight - bar.offsetHeight + 'px';
                        // content.style.top = contentH - containH + 'px';
                    } else {
                        bar.style.top = bar.offsetTop + moveH + 'px';
                    }

                } else {
                    if (bar.offsetTop + moveH < 0) {
                        bar.style.top = 0;
                    } else {
                        bar.style.top = bar.offsetTop + moveH + 'px';
                    }
                }
                content.style.top = -Math.floor(bar.offsetTop / barRate) + 'px';

            }

            function mouseUp(e) {
                e = e || window.event;
                document.removeEventListener('mousemove', mouseMove);
            }

        }
    }


})()