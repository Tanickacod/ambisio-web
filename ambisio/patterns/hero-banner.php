<?php
/**
 * Title: Horný banner s videom (Verzia 1)
 * Slug: ambisio/hero-banner
 * Categories: ambisio
 * Description: Video banner 16:9 s textom a tlačidlom — video autoplay, slučka, bez zvuku, fallback na fotografiu.
 */
$img = get_template_directory_uri() . '/assets/img/pergola-renson.jpg';
?>
<!-- wp:html -->
<section class="hero hero--v1" data-hero-video="<?php echo esc_url(content_url('/uploads/hero.mp4')); ?>" data-hero-poster="<?php echo esc_url($img); ?>">
  <div class="hero-media"></div>
  <div class="container hero-inner">
    <span class="eyebrow" style="color:#fff">Navrhnuté a vyrobené na Slovensku</span>
    <h1>Ambiciózny vonkajší domov</h1>
    <p class="lead">Autorský dizajn a vysokokvalitné realizácie outdoorových stavaných elementov, ktoré napĺňajú predstavu o dokonalom domove.</p>
    <div><a class="btn btn--light" href="#elementy">Objavte vonkajšie elementy <span class="arr">→</span></a></div>
  </div>
</section>
<!-- /wp:html -->
