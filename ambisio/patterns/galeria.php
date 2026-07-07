<?php
/**
 * Title: Galéria s lightboxom (fotky + video)
 * Slug: ambisio/galeria
 * Categories: ambisio
 * Description: Posuvná galéria s miniatúrami — obrázky aj videá sa otvárajú v lightboxe so šípkami a popismi.
 */
$u = get_template_directory_uri();
?>
<!-- wp:html -->
<section class="section section--tight">
  <div class="container">
    <div class="section-head">
      <h2>Navštívte náš showroom</h2>
      <div class="carousel-arrows">
        <button class="arrow-btn" data-dir="prev" aria-label="Predchádzajúce">←</button>
        <button class="arrow-btn" data-dir="next" aria-label="Ďalšie">→</button>
      </div>
    </div>
    <div data-carousel>
      <div class="gallery" data-gallery>
        <button class="gallery-item" data-caption="Showroom Ambisio — vystavené pergoly a tienenie">
          <img src="<?php echo esc_url($u); ?>/assets/img/showroom.jpg" alt="Showroom Ambisio" loading="lazy">
        </button>
        <button class="gallery-item" data-type="video" data-full="<?php echo esc_url($u); ?>/assets/video/plot-zora.mp4" data-caption="Oplotenie Zora v pohybe">
          <img src="<?php echo esc_url($u); ?>/assets/img/ploty-uvod.jpg" alt="Video oplotenia Zora" loading="lazy">
          <span class="play-badge"><span>▶</span></span>
        </button>
        <button class="gallery-item" data-caption="Vzorky materiálov a drevodekorov">
          <img src="<?php echo esc_url($u); ?>/assets/img/onas-skica.png" alt="Vzorky materiálov" loading="lazy">
        </button>
        <button class="gallery-item" data-caption="Realizácia pergoly Renson®">
          <img src="<?php echo esc_url($u); ?>/assets/img/pergola-renson.jpg" alt="Pergola Renson" loading="lazy">
        </button>
      </div>
    </div>
  </div>
</section>
<!-- /wp:html -->
