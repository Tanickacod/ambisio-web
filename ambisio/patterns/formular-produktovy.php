<?php
/**
 * Title: Kontaktný formulár — produktový
 * Slug: ambisio/formular-produktovy
 * Categories: ambisio
 * Description: Dopytový formulár: vľavo vypĺňacie polia a správa, vpravo zaškrtávacie políčka produktov. (V ostrej verzii sa napojí na ukladanie + mail.)
 */
?>
<!-- wp:html -->
<section class="section section--sand-light">
  <div class="container">
    <div class="form-wrap">
      <span class="eyebrow">Nezáväzný dopyt</span>
      <h2>Pošlite nám nezáväzný dopyt</h2>
      <form class="js-demo-form" novalidate>
        <div class="form-grid">
          <div>
            <div class="field" style="margin-bottom:24px">
              <label for="fp-meno">Meno a priezvisko*</label>
              <input id="fp-meno" name="meno" type="text" required autocomplete="name">
            </div>
            <div class="field" style="margin-bottom:24px">
              <label for="fp-email">E-mail*</label>
              <input id="fp-email" name="email" type="email" required autocomplete="email">
            </div>
            <div class="field" style="margin-bottom:24px">
              <label for="fp-tel">Telefón*</label>
              <input id="fp-tel" name="telefon" type="tel" required autocomplete="tel">
            </div>
            <div class="field" style="margin-bottom:24px">
              <label for="fp-miesto">Miesto realizácie</label>
              <input id="fp-miesto" name="miesto" type="text">
            </div>
            <div class="field">
              <label for="fp-sprava">Povedzte nám viac o vašej predstave</label>
              <textarea id="fp-sprava" name="sprava" rows="4"></textarea>
            </div>
          </div>
          <div>
            <div class="field">
              <label>Vyberte produkty, o ktoré máte záujem</label>
              <div class="checks">
                <label class="check"><input type="checkbox" name="produkt" value="pergola"> Pergola / prístrešok</label>
                <label class="check"><input type="checkbox" name="produkt" value="zimna-zahrada"> Zimná záhrada</label>
                <label class="check"><input type="checkbox" name="produkt" value="plot"> Plot / brána</label>
                <label class="check"><input type="checkbox" name="produkt" value="tienenie"> Tieniaca technika</label>
                <label class="check"><input type="checkbox" name="produkt" value="terasa"> Terasa / dlažba</label>
                <label class="check"><input type="checkbox" name="produkt" value="doplnky"> Doplnky a nábytok</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-foot">
          <p class="form-note">Odoslaním formulára súhlasíte so spracovaním osobných údajov. Odpovedáme zvyčajne do 24 hodín.</p>
          <button class="btn" type="submit">Odoslať dopyt <span class="arr">→</span></button>
        </div>
      </form>
    </div>
  </div>
</section>
<!-- /wp:html -->
