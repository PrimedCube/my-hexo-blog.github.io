var posts=["2025/03/22/my-blender/","2025/03/22/my-ui/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };