window.onload = function () {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // ctx.fillRect(25, 25, 100, 100);
        // ctx.clearRect(45, 45, 60, 60);
        // ctx.strokeRect(50, 50, 50, 50);

        // ctx.beginPath();
        // ctx.moveTo(75, 50);
        // ctx.lineTo(150, 75);
        // ctx.lineTo(100, 25);
        // ctx.fill();

        // ctx.beginPath();
        // ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
        // ctx.moveTo(110,75);
        // ctx.arc(75,75,35,0,Math.PI,false);   // 口(顺时针)
        // ctx.moveTo(65,65);
        // ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
        // ctx.moveTo(95,65);
        // ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
        // ctx.stroke();


        /**
         *你会注意到填充与描边三角形步骤有所不同。正如上面所提到的，
         *因为路径使用填充（fill）时，路径自动闭合，使用描边（stroke）则不会闭合路径。
         *如果没有添加闭合路径closePath()到描述三角形函数中，则只绘制了两条线段，并不是一个完整的三角形。
         */
        // // 填充三角形
        // ctx.beginPath();
        // ctx.moveTo(25,25);
        // ctx.lineTo(105,25);
        // ctx.lineTo(25,105);
        // ctx.fill();

        // // 描边三角形
        // ctx.beginPath();
        // ctx.moveTo(125,125);
        // ctx.lineTo(125,45);
        // ctx.lineTo(45,125);
        // ctx.closePath();
        // ctx.stroke();

        //圆弧 arc(x, y, radius, startAngle, endAngle, anticlockwise)

        //二次贝塞尔曲线 quadraticCurveTo(cp1x, cp1y, x, y)

        //三次贝塞尔曲线 bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
        draw();
    }

    function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            roundedRect(ctx, 12, 12, 150, 150, 15);
            roundedRect(ctx, 19, 19, 150, 150, 9);
            roundedRect(ctx, 53, 53, 49, 33, 10);
            roundedRect(ctx, 53, 119, 49, 16, 6);
            roundedRect(ctx, 135, 53, 49, 33, 10);
            roundedRect(ctx, 135, 119, 25, 49, 10);

            ctx.beginPath();
            ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
            ctx.lineTo(31, 37);
            ctx.fill();

            for (var i = 0; i < 8; i++) {
                ctx.fillRect(51 + i * 16, 35, 4, 4);
            }

            for (i = 0; i < 6; i++) {
                ctx.fillRect(115, 51 + i * 16, 4, 4);
            }

            for (i = 0; i < 8; i++) {
                ctx.fillRect(51 + i * 16, 99, 4, 4);
            }

            ctx.beginPath();
            ctx.moveTo(83, 116);
            ctx.lineTo(83, 102);
            ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
            ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
            ctx.lineTo(111, 116);
            ctx.lineTo(106.333, 111.333);
            ctx.lineTo(101.666, 116);
            ctx.lineTo(97, 111.333);
            ctx.lineTo(92.333, 116);
            ctx.lineTo(87.666, 111.333);
            ctx.lineTo(83, 116);
            ctx.fill();

            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.moveTo(91, 96);
            ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
            ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
            ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
            ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
            ctx.moveTo(103, 96);
            ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
            ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
            ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
            ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
            ctx.fill();

            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }

    // 封装的一个用于绘制圆角矩形的函数.

    function roundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.lineTo(x, y + height - radius);
        ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
        ctx.lineTo(x + width - radius, y + height);
        ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
        ctx.lineTo(x + width, y + radius);
        ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
        ctx.lineTo(x + radius, y);
        ctx.quadraticCurveTo(x, y, x, y + radius);
        ctx.stroke();
    }
}