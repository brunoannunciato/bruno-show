document.addEventListener("DOMContentLoaded", function() {
    setInterval(() => setPageTitle(), 15000)
    setPageTitle();
});

console.log('contato: https://bruno.dev/')

const setPageTitle = () => {
    const characters = ['😁', '💕', '🤷‍', '🐱‍👤', '🌵', '🐱‍🐉', '🤣', '🛴', '😨','🙄','🍠','😙','🙂','🍁','😫','🎈','🎨','😯','👰','😚','😁','🎅','🤣','㊗','🙂','🔞','🤩','💨','😛','😌','🕳','🤥'];

    for (let i = 0; i <= characters.length; i++) {
        (() => {
            setTimeout(() => {
                document.title = `${characters[i]} 𝓫𝓻𝓾𝓷𝓸 𝓼𝓱𝓸𝔀`
            }, i * 500);
        })(i)
    }
}

window.addEventListener('mousemove', function(e) {
    [1, .9, .8, .5, .1].forEach(function(i) {
        let j = (1 - i) * 50;
        let elem = document.createElement('div');
        let size = Math.ceil(Math.random() * 10 * i) + 'px';

        elem.style.position = 'fixed';
        elem.style.top = e.pageY + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.width = size;
        elem.style.height = size;
        elem.style.background = 'hsla(' +
        Math.round(Math.random() * 360) + ', ' +
        '100%, ' +
        '50%, ' +
        i + ')';
        elem.style.borderRadius = size;
        elem.style.pointerEvents = 'none';
        document.body.appendChild(elem);
        window.setTimeout(function() {
        document.body.removeChild(elem);
        }, Math.round(Math.random() * i * 500));
    });
}, false);


let container = document.getElementById('animate');
let emoji = ['🌽', '🍇', '🍌', '🍒','🌵','🌵', '🍕', '🍷', '🍭', '💖', '💩', '🐷', '🐸', '🐳', '🎃', '🎾', '🌈', '🍦', '💁', '🔥', '😁', '😱', '🌴', '👏', '💃'];
let circles = [];

for (let i = 0; i < 15; i++) {
  addCircle(i * 50, [10 + 0, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 50, [10 + 0, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 50, [10 - 200, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 50, [10 + 200, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 50, [10 - 400, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 50, [10 + 400, 300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 50, [10 - 600, -300], emoji[Math.floor(Math.random() * emoji.length)]);
  addCircle(i * 50, [10 + 600, 300], emoji[Math.floor(Math.random() * emoji.length)]);
}



function addCircle(delay, range, color) {
  setTimeout(function() {
    let c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
      x: -0.15 + Math.random() * 0.3,
      y: 1 + Math.random() * 1
    }, range);
    circles.push(c);
  }, delay);
}

function Circle(x, y, c, v, range) {
  let _this = this;
  this.x = x;
  this.y = y;
  this.color = c;
  this.v = v;
  this.range = range;
  this.element = document.createElement('span');
  /*this.element.style.display = 'block';*/
  this.element.style.opacity = 0;
  this.element.style.position = 'absolute';
  this.element.style.fontSize = '26px';
  this.element.style.color = 'hsl('+(Math.random()*360|0)+',80%,50%)';
  this.element.innerHTML = c;
  container.appendChild(this.element);

  this.update = function() {
    if (_this.y > window.innerHeight) {
      _this.y = 80 + Math.random() * 4;
      _this.x = _this.range[0] + Math.random() * _this.range[1];
    }
    _this.y += _this.v.y;
    _this.x += _this.v.x;
    this.element.style.opacity = 1;
    this.element.style.transform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.webkitTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
    this.element.style.mozTransform = 'translate3d(' + _this.x + 'px, ' + _this.y + 'px, 0px)';
  };
}

function animate() {
  for (let i in circles) {
    circles[i].update();
  }
  requestAnimationFrame(animate);
}

animate();
