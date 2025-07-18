var posts=["p/809/","p/对于原神的一些个人见解/","p/2025-7-1/","p/subapi/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };