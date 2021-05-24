$(function() {
  $('#navBarGenre').hide();
  $('#xboxGame').hide();
  $('#ps4Game').hide();
  $('#switchGame').hide();
  $('#pcGame').hide();
  $('#car3').hide();
  $('#line2').hide();

  $('#name').click(function() {
    $('#xboxGame, #ps4Game, #switchGame, #pcGame').hide(1500);
    $('#navBarGenre').hide(1500);
    $('#line2').hide(1500);
    $('#car3').hide(1500);
    $('#bestSold, #bestSoldImg, #orderBtn, #bestSoldBtn, #line1').show(1300);
    $('#car1, #car2, #present, #order').show(1300);
  });
  $(document).ready(function(){
    // au clic sur un lien
    $('#name').on('click', function(evt){
      // bloquer le comportement par défaut: on ne rechargera pas la page
      evt.preventDefault();
      // enregistre la valeur de l'attribut  href dans la variable target
      let target = $(this).attr('href');
      /* le sélecteur $(html, body) permet de corriger un bug sur chrome
      et safari (webkit) */
      $('html, body')
      // on arrête toutes les animations en cours
      .stop()
      /* on fait maintenant l'animation vers le haut (scrollTop) vers
      notre ancre target */
      .animate({scrollTop: $(target).offset().top}, 500);
    });
  });

  $('#xbox').click(function() {
    $('#car1, #car2, #present, #order').hide();
    $('#ps4Game, #switchGame, #pcGame').hide();
    $('#bestSold, #bestSoldImg, #orderBtn, #bestSoldBtn, #line1').hide();
    $('#line2').show();
    $('#car3').show(1000);
    $('#navBarGenre').show(500);
    $('#xboxGame').show(500);
    $('#xb1, #xb2, #xb3, #xb4, #xb5, #xb6, #xb7, #xb8, #xb9').show(500);
  });

  $('#PS4').click(function() {
    $('#car1, #car2, #present, #order').hide();
    $('#xboxGame, #switchGame, #pcGame').hide();
    $('#bestSold, #bestSoldImg, #orderBtn, #bestSoldBtn, #line1').hide();
    $('#line2').show();
    $('#car3').show(1000);
    $('#navBarGenre').show(500);
    $('#ps4Game').show(500);
    $('#ps1, #ps2, #ps3, #ps4, #ps5, #ps6, #ps7, #ps8, #ps9').show(500);
  });

  $('#switch').click(function() {
    $('#car1, #car2, #present, #order').hide();
    $('#xboxGame, #ps4Game, #pcGame').hide();
    $('#bestSold, #bestSoldImg, #orderBtn, #bestSoldBtn, #line1').hide();
    $('#line2').show();
    $('#car3').show(1000);
    $('#navBarGenre').show(500);
    $('#switchGame').show(500);
    $('#sw1, #sw2, #sw3, #sw4, #sw5, #sw6, #sw7, #sw8, #sw9').show(500);
  });

  $('#pc').click(function() {
    $('#car1, #car2, #present, #order').hide();
    $('#xboxGame, #ps4Game, #switchGame').hide();
    $('#bestSold, #bestSoldImg, #orderBtn, #bestSoldBtn, #line1').hide();
    $('#line2').show();
    $('#car3').show(1000);
    $('#navBarGenre').show(500);
    $('#pcGame').show(500);
    $('#pc1, #pc2, #pc3, #pc4, #pc5, #pc6, #pc7, #pc8, #pc9').show(500);
  });
  $(document).ready(function(){
    // au clic sur un lien
    $('#xbox, #PS4, #switch, #pc').on('click', function(evt){
      // bloquer le comportement par défaut: on ne rechargera pas la page
      evt.preventDefault();
      // enregistre la valeur de l'attribut  href dans la variable target
      let target = $(this).attr('href');
      /* le sélecteur $(html, body) permet de corriger un bug sur chrome
      et safari (webkit) */
      $('html, body')
      // on arrête toutes les animations en cours
      .stop()
      /* on fait maintenant l'animation vers le haut (scrollTop) vers
      notre ancre target */
      .animate({scrollTop: $(target).offset().top}, 800 );
    });
  });

  $('#aventure').click(function() {
    $('#xb1, #xb2, #xb3, #xb6, #xb7, #xb8, #xb9').hide();
    $('#ps4, #ps5, #ps6, #ps7, #ps8, #ps9').hide();
    $('#sw1, #sw2, #sw3, #sw4, #sw5, #sw6, #sw8').hide();
    $('#pc1, #pc2, #pc3, #pc4, #pc6, #pc7, #pc8, #pc9').hide();
    $('#xb4, #xb5').show(500);
    $('#ps1, #ps2, #ps3').show(500);
    $('#sw7, #sw9').show(500);
    $('#pc5').show(500);
  });

  $('#action').click(function() {
    $('#xb3, #xb4, #xb5, #xb6, #xb7, #xb8, #xb9').hide();
    $('#ps1, #ps2, #ps3, #ps7, #ps8, #ps9').hide();
    $('#sw1, #sw2, #sw3, #sw7, #sw8, #sw9').hide();
    $('#pc1, #pc2, #pc3, #pc5, #pc7, #pc8, #pc9').hide();
    $('#xb1, #xb2').show(500);
    $('#ps4, #ps5, #ps6').show(500);
    $('#sw4, #sw5, #sw6').show(500);
    $('#pc4, #pc6').show(500);
  });

  $('#rpg').click(function() {
    $('#xb1, #xb2, #xb3, #xb4, #xb5, #xb6, #xb7, #xb8, #xb9').hide();
    $('#ps1, #ps2, #ps3, #ps4, #ps5, #ps6, #ps7, #ps8, #ps9').hide();
    $('#sw4, #sw5, #sw6, #sw7, #sw8, #sw9').hide();
    $('#pc4, #pc5, #pc6, #pc7, #pc8, #pc9').hide();
    $('#pc3, #pc5').hide();
    $('#sw1, #sw2, #sw3').show(500);
    $('#pc1, #pc2, #pc3').show(500);
  });

  $('#combat').click(function() {
    $('#xb1, #xb2, #xb3, #xb4, #xb5, #xb7, #xb8, #xb9').hide();
    $('#ps1, #ps2, #ps3, #ps4, #ps5, #ps6, #ps8').hide();
    $('#sw1, #sw2, #sw3, #sw4, #sw5, #sw6, #sw7, #sw8, #sw9').hide();
    $('#pc1, #pc2, #pc3, #pc4, #pc5, #pc6, #pc7, #pc8, #pc9').hide();
    $('#xb6').show(500);
    $('#ps7, #ps9').show(500);
  });

  $('#course').click(function() {
    $('#xb1, #xb2, #xb3, #xb4, #xb5, #xb6, #xb7, #xb8, #xb9').hide();
    $('#ps1, #ps2, #ps3, #ps4, #ps5, #ps6, #ps7, #ps8, #ps9').hide();
    $('#sw1, #sw2, #sw3, #sw4, #sw5, #sw6, #sw7, #sw8, #sw9').hide();
    $('#pc1, #pc2, #pc3, #pc4, #pc5, #pc6, #pc8, #pc9').hide();
    $('#pc7').show(500);
  });

  $('#strat').click(function() {
    $('#xb1, #xb2, #xb3, #xb4, #xb5, #xb6, #xb7, #xb8, #xb9').hide();
    $('#ps1, #ps2, #ps3, #ps4, #ps5, #ps6, #ps7, #ps8, #ps9').hide();
    $('#sw1, #sw2, #sw3, #sw4, #sw5, #sw6, #sw7, #sw9').hide();
    $('#pc1, #pc2, #pc3, #pc4, #pc5, #pc6, #pc7, #pc8').hide();
    $('#sw8').show(500);
    $('#pc9').show(500);
  });

  $('#fps').click(function() {
    $('#xb1, #xb2, #xb3, #xb4, #xb5, #xb6, #xb9').hide();
    $('#ps1, #ps2, #ps3, #ps4, #ps5, #ps6, #ps7, #ps9').hide();
    $('#sw1, #sw2, #sw3, #sw4, #sw5, #sw6, #sw7, #sw8, #sw9').hide();
    $('#pc1, #pc2, #pc3, #pc4, #pc5, #pc6, #pc7, #pc9').hide();
    $('#xb7, #xb8').show(500);
    $('#ps8').show(500);
    $('#pc8').show(500);
  });

  $('#stealth').click(function() {
    $('#xb1, #xb2, #xb4, #xb5, #xb6, #xb7, #xb8, #xb9').hide();
    $('#ps1, #ps2, #ps3, #ps4, #ps5, #ps6, #ps7, #ps8, #ps9').hide();
    $('#sw1, #sw2, #sw3, #sw4, #sw5, #sw6, #sw7, #sw8, #sw9').hide();
    $('#pc1, #pc2, #pc3, #pc4, #pc5, #pc6, #pc7, #pc8, #pc9').hide();
    $('#xb3').show(500);
  });

  //---------------- DEBUT Partie LUDOVIC -------------
  //déclaration des tableaux qui mémorisent les achats
  let titleArray = [];
  let refArray = [];
  let priceArray = [];
  let quantityArray = [];
  // Fonction d'ajout au panier
  $('.buy').click(function(){
    let title = $(this).attr("dataTitle");
    let ref = $(this).attr("dataRef");
    let price = $(this).attr("dataPrice");
    let singleChoice = true;
    //Boucle de vérification d'achat en double
    if (refArray.length!=0){
      for (i=0;i<refArray.length;i++){
        if (ref == refArray[i]){
          quantityArray[i]+=1;
          singleChoice=false;
        }else{}
      }
      if (singleChoice){
        titleArray.push(title);
        refArray.push(ref);
        priceArray.push(price);
        quantityArray.push(1);
      }else{}
    }
    //mise au panier de nouveaux achats uniques
    else {
      if (singleChoice){
        titleArray.push(title);
        refArray.push(ref);
        priceArray.push(price);
        quantityArray.push(1);
      } else{}
    }
  });
  //fonction qui recupere les articles sélectionnés
  // pour les afficher dans le panier
  $('#mainCart').click(function(){
    //boucle de generation de l'HTML pour chaque article
    for (i=0;i<refArray.length;i++){
      //declaration des Id relatifs
      let titleId = 'title'+i;
      let refId = 'ref'+i;
      let priceId = 'price'+i;
      let qtyId = 'listQ'+i;
      let totalPriceId = 'totalPrice'+i;
      let titleIdDies = '#title'+i;
      let refIdDies = '#ref'+i;
      let priceIdDies = '#price'+i;
      let qtyIdDies = '#listQ'+i;
      let totalPriceIdDies = '#totalPrice'+i;
      //création des éléments HTML pour chaque article
      //Nom, reference et prix unitaire
      $("<div id='articleRef"+i+"' class='col-8'>").appendTo('.modal-body');
      $("<h5 id="+titleId+"></h5>").appendTo('#articleRef'+i);
      $("<span id="+refId+"></span>").appendTo('#articleRef'+i);
      $("<span> - Prix unitaire : </span>").appendTo('#articleRef'+i);
      $("<span id="+priceId+"></span>").appendTo('#articleRef'+i);
      $("<span>€</span>").appendTo('#articleRef'+i);
      //liste déroulante de sélection de quantité
      $("<select class='selectSlider' dataLine="+i+" style='max-height: 40px;max-width: 80px;' id="+qtyId+" name="+qtyId+"></select>").appendTo('.modal-body');
      $("<option value=1>1</option>").appendTo('#'+qtyId);
      $("<option value=2>2</option>").appendTo('#'+qtyId);
      $("<option value=3>3</option>").appendTo('#'+qtyId);
      $("<option value=4>4</option>").appendTo('#'+qtyId);
      $("<option value=5>5</option>").appendTo('#'+qtyId);
      $("<option value=6>6</option>").appendTo('#'+qtyId);
      $("<option value=7>7</option>").appendTo('#'+qtyId);
      $("<option value=8>8</option>").appendTo('#'+qtyId);
      $("<option value=9>9</option>").appendTo('#'+qtyId);
      $("<option value=10>10</option>").appendTo('#'+qtyId);
      //Prix total de chaque article different
      $("<span id="+totalPriceId+" class='col-md-2 font-weight-bold align-middle'></span>").appendTo('.modal-body');

      $(titleIdDies).text(titleArray[i]);
      $(refIdDies).text(refArray[i]);
      $(priceIdDies).text(priceArray[i]);
      $(totalPriceIdDies).text(priceArray[i]*quantityArray[i]);
      $(qtyIdDies).val(quantityArray[i]);
    }
  });
  //Fonction qui met à jour le prix de la ligne
  //qud on change les quantités
  $(document).on('click','.selectSlider', function(){
    let rowNumber = $('.selectSlider').attr("dataLine");
    quantityArray[rowNumber] = $(this).val();
    let linePrice = priceArray[rowNumber]*quantityArray[rowNumber];
    $('#totalPrice'+rowNumber).text(linePrice);
    totalPriceArray[rowNumber]= linePrice;
  });
  //reset de l'affichage du panier à la fermeture
  $('.cartClose').click(function(){
    $('.modal-body').html('');
  });
  //fonction qui vide le panier
  $('.cartReset').click(function(){
    titleArray = [];
    refArray = [];
    priceArray = [];
    quantityArray = [];
    $('.modal-body').html('');
  });
  //---------------- FIN Partie LUDOVIC -------------
  //$(#cancel).click(function(){
  //  $(#cancel)[0].reset();
  //});

});
