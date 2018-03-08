function p(a, b, c) {
    if (c > 60) return [S(a * 7) * (13 + 5 / (.2 + P(b * 4, 4))) - S(b) * 50, b * f + 50, 625 + C(a * 7) * (13 +
        5 / (.2 + P(b * 4, 4))) + b * 400, a * 1 - b / 2, a];
    A = a * 2 - 1;
    B = b * 2 - 1;
    if (A * A + B * B < 1) {
        if (c > 37) {
            n = (j = c & 1) ? 6 : 4;
            o = .5 / (a + .01) + C(b * 125) * 3 - a * 300;
            w = b * h;
            return [o * C(n) + w * S(n) + j * 610 - 390, o * S(n) - w * C(n) + 550 - j * 350, 1180 + C(B + A) *
                99 - j * 300, .4 - a * .1 + P(1 - B * B, -h * 6) * .15 - a * b * .4 + C(a + b) / 5 + P(C((o *
                    (a + 1) + (B > 0 ? w : -w)) / 25), 30) * .1 * (1 - B * B), o / 1e3 + .7 - o * w * 3e-6
            ]
        }
        if (c > 32) {
            c = c * 1.16 - .15;
            o = a * 45 - 20;
            w = b * b * h;
            z = o * S(c) + w * C(c) + 620;
            return [o * C(c) - w * S(c), 28 + C(B * .5) * 99 - b * b * b * 60 - z / 2 - h, z, (b * b * .3 + P((
                1 - (A * A)), 7) * .15 + .3) * b, b * .7]
        }
        o = A * (2 - b) * (80 - c * 2);
        w = 99 - C(A) * 120 - C(b) * (-h - c * 4.9) + C(P(1 - b, 7)) * 50 + c * 2;
        z = o * S(c) + w * C(c) + 700;
        return [o * C(c) - w * S(c), B * 99 - C(P(b, 7)) * 50 - c / 3 - z / 1.35 + 450, z, (1 - b / 1.2) * .9 +
            a * .1, P((1 - b), 20) / 4 + .05
        ]
    }
}

var b = document.body;
var c = document.getElementById('can-rose');
var a = c.getContext('2d');
with(m = Math) C = cos, S = sin, P = pow, R = random;
c.width = c.height = f = 600;
h = -250;

setInterval(
    'for(i=0;i<1e4;i++)if(s=p(R(),R(),i%46/.74)){z=s[2];x=~~(s[0]*f/z-h);y=~~(s[1]*f/z-h);if(!m[q=y*f+x]|m[q]>z)m[q]=z,a.fillStyle="rgb("+~(s[3]*h)+","+~(s[4]*h)+","+~(s[3]*s[3]*-80)+")",a.fillRect(x,y,1,1)}',
    0);

function updateRose() {
    var bg = {
        width: 820,
        height: 1180,
        X: 210,
        Y: 600
    };

    var rose = {
        width: 200,
        height: 200,
        X: 5,
        Y: 650
    }

    var curBg = {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        X: bg.X * document.body.clientWidth / bg.width,
        Y: bg.Y *  document.body.clientHeight / bg.height
    }

    var curRose = {
        width: rose.width * curBg.width / bg.width,
        height: rose.height * curBg.width / bg.width,
        X: curBg.X - curRose.width,
        Y:curBg.Y + 50 * curBg.width / bg.width
    }
    var rose = document.getElementById('rose');
    rose.setAttribute('width', newSize.width);
    rose.setAttribute('height', newSize.height);
    rose.setAttribute('margin-top', newSize.X);
    rose.setAttribute('margin-left', newSize.Y);
}

window.onresize = function () {
    updateRose();
}

updateRose();