<?php
/**
 * Title: Ako prebieha spolupráca (akordeón)
 * Slug: ambisio/akordeon-spolupraca
 * Categories: ambisio
 * Description: Rozbaľovacie kroky spolupráce — rozbalená položka sa podfarbí.
 */
$kroky = [
    ['Dopyt a konzultácia', 'Pošlete nám dopyt cez formulár alebo zavoláte. Preberieme vaše predstavy, pozemok a rozpočet — telefonicky alebo osobne v showroome v Trnave.'],
    ['Zameranie na mieste', 'Prídeme k vám, zameriame priestor a posúdime technické detaily — kotvenie, odvodnenie, elektroinštaláciu aj nadväznosť na dom.'],
    ['Návrh a vizualizácia', 'Pripravíme autorský návrh s vizualizáciami a presnou cenovou ponukou. Doladíme materiály, farby a doplnky.'],
    ['Výroba na Slovensku', 'Po odsúhlasení vyrábame vo vlastnej výrobe. O priebehu vás informujeme a termín montáže plánujeme vopred.'],
    ['Montáž a odovzdanie', 'Naši montážnici dielo osadia, zapoja a odovzdajú vám ho vyčistené a odskúšané — vrátane zaškolenia.'],
    ['Servis a starostlivosť', 'Sme tu aj po montáži — pravidelný servis, sezónne prehliadky a rýchla pomoc, keď ju potrebujete.'],
];
?>
<!-- wp:html -->
<section class="section section--sand-light">
  <div class="container">
    <div class="split">
      <div>
        <span class="eyebrow">Od dopytu po montáž</span>
        <h2 class="sticky-title">Ako prebieha spolupráca</h2>
      </div>
      <div class="accordion">
        <?php foreach ($kroky as $i => $k) : ?>
        <div class="acc-item<?php echo $i === 0 ? ' is-open' : ''; ?>">
          <button class="acc-head"><span><span class="acc-num"><?php echo str_pad($i + 1, 2, '0', STR_PAD_LEFT); ?></span><?php echo esc_html($k[0]); ?></span><span class="acc-x">+</span></button>
          <div class="acc-body"><div class="acc-body-inner"><?php echo esc_html($k[1]); ?></div></div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</section>
<!-- /wp:html -->
