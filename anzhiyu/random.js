var posts=["2025/03/22/hello-world/","2025/03/22/video-test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };