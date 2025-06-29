var posts=["p/subapi/","p/809/","p/对于原神的一些个人见解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };