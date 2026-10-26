<?php
/**
 * Title: Blok s partnermi (logá)
 * Slug: ambisio/partneri
 * Categories: ambisio
 * Description: Logá partnerov zarovnané na stred — sivé, po prejdení myšou farebné.
 */
$u = get_template_directory_uri() . '/assets/img/partneri';
$logos = [
    ['renson.png', 'Renson'],
    ['somfy.png', 'Somfy'],
    ['climax.png', 'Climax'],
    ['esafe.svg', 'eSafe'],
    ['todus.png', 'Todus'],
    ['bera.png', 'Bera'],
    ['deer-concrete.png', 'Deer Concrete'],
    ['sonoro.png', 'Sonoro'],
    ['sungates.png', 'Sungates'],
];
?>
<!-- wp:html -->
<section class="section section--tight">
  <div class="container">
    <div class="section-head"><h2 style="text-align:center;width:100%">Partneri, ktorým veríme</h2></div>
    <div class="partners">
      <?php foreach ($logos as $l) : ?>
      <span class="logo-item"><img src="<?php echo esc_url($u . '/' . $l[0]); ?>" alt="<?php echo esc_attr($l[1]); ?>" loading="lazy"></span>
      <?php endforeach; ?>
    </div>
  </div>
</section>
<!-- /wp:html -->
