
{/* <h1>Image Carousel</h1>
  <div class="hero">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat1.jpg" alt="An orange-eyed grey cat stretches toward the camera."/>
  </div>
  <div class="thumbnails">
    <a class="thumbnail" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat1.jpg" alt="An orange-eyed grey cat stretches toward the camera."/></a>
    <a class="thumbnail" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat2.jpg" alt="Closeup of a blue-eyed, grey cat with markings."/></a>
    <a class="thumbnail" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat3.jpg" alt="An orange cat licks its paw."/></a>
    <a class="thumbnail" href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-65/cat4.jpg" alt="A content brown cat lounges with eyes closed."/></a>
  </div>
</main> 
   */}

   function rotateImage(){
    $('.thumbnail').click(function(e){
       e.preventDefault();
       $('.hero img').attr('src', this.img)
       $('.hero img').attr('alt', this.alt)
    });
  }
  $(rotateImage);
