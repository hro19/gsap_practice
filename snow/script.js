const snowWrap = document.getElementById('snow'),
      numberOfSnow = 80

// liを生成しつつ、leftを設定
for (let i = 0; i < numberOfSnow; i++) {
  const li = document.createElement('li'),
    position =100 / numberOfSnow * i
    li.style.left = `${gsap.utils.random(position-2,position+2)}%`
  snowWrap.appendChild(li)
}

//li(雪)のスタイルを設定
const snowElements = document.querySelectorAll('#snow li');
const size = Number(getComputedStyle(snowElements[0]).width.replace('px', ''));
const adjustsPostionNumber = 10;
const duration = 3;
const windowHeight = window.innerHeight;

snowElements.forEach((el,index) => {
  gsap.set(el, {
    y: -size -adjustsPostionNumber,
    scale: gsap.utils.random(0.8, 1.2),
    filter: `blur(${gsap.utils.random(2, 6)}px)`
  })
  gsap.to(el, duration,{
    y: windowHeight  + size + adjustsPostionNumber,
    delay:0.1 * index,
    ease:"none",
    repeat:-1
  })

});
