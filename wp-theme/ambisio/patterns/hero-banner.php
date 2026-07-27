<?php
/**
 * Title: Horný banner s videom (Verzia 1)
 * Slug: ambisio/hero-banner
 * Categories: ambisio
 * Description: Video banner 16:9 s textom a tlačidlom — video autoplay, slučka, bez zvuku, fallback na fotografiu.
 */
$img = get_template_directory_uri() . '/assets/img/pergola-renson.jpg';
/* Video: najprv hľadá hero.mp4 v Médiách (uploads), inak použije video z témy */
$video = file_exists(WP_CONTENT_DIR . '/uploads/hero.mp4')
    ? content_url('/uploads/hero.mp4')
    : get_template_directory_uri() . '/assets/video/hero.mp4';
?>
<!-- wp:html -->
<section class="hero hero--v1" data-hero-video="<?php echo esc_url($video); ?>" data-hero-poster="<?php echo esc_url($img); ?>">
  <div class="hero-media"></div>
  <div class="container hero-inner">
    <span class="eyebrow" style="color:#fff">Navrhnuté a vyrobené na Slovensku</span>
    <h1>Ambiciózny vonkajší domov</h1>
    <p class="lead">Autorský dizajn a vysokokvalitné realizácie outdoorových stavaných elementov, ktoré napĺňajú predstavu o dokonalom domove.</p>
    <div><a class="btn btn--light" href="#elementy">Objavte vonkajšie elementy <span class="arr">→</span></a></div>
  </div>
</section>
<!-- /wp:html -->
