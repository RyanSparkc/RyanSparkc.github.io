var posts=["posts/89757140/","posts/d8db7f15/","posts/2df239ce/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };