var posts=["2025/03/22/my-ui/","2025/03/22/my-blender/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };