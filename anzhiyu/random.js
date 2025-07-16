var posts=["p/2025-7-1/","p/809/","p/subapi/","p/对于原神的一些个人见解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };