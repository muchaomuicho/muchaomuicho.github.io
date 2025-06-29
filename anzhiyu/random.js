var posts=["p/subapi/","p/对于原神的一些个人见解/","p/809/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };