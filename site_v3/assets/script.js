// Small UX: highlight current nav link
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')) a.style.background='rgba(0,0,0,.04)';
  });
})();