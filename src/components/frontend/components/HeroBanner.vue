<template>
  <div class="hero">
    <div class="container">
      <div class="hero-grid">
        <div id="slides" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#slides" data-slide-to="0" class="active"></li>
            <li data-target="#slides" data-slide-to="1"></li>
            <li data-target="#slides" data-slide-to="2"></li>
            <li data-target="#slides" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="img/slide 1.png" alt="first slide" />
            </div>
            <div class="carousel-item">
              <img src="img/slide 2.png" alt="second slide" />
            </div>
            <div class="carousel-item">
              <img src="img/slide 1.png" alt="third slide" />
            </div>
            <div class="carousel-item">
              <img src="img/slide 2.png" alt="fourth slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#slides" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#slides" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
