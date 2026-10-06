const items=[...document.querySelectorAll('.project,.about,.hero-bottom')];
items.forEach(el=>el.classList.add('reveal'));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});
items.forEach(el=>io.observe(el));