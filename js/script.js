// initialisation de ScrollMagic
var controller = new ScrollMagic.Controller();
var anthropoController = new ScrollMagic.Controller();
let index = 10;

$('body').trigger('click');


// PARTIE TITRE ——————————
// CHGT COULEUR ARRIÈRE-PLAN

var homeTimeline = new TimelineMax();


var titleTween = new TweenMax.to('#titre-article', 1.5, {
 // left : '200px',
 marginLeft : 0,
 opacity : 1,
});

var titleTween2 = new TweenMax.to('#background', 1.5, {
  backgroundColor : '#ddddFF',
});

homeTimeline
.add(titleTween)
.add(titleTween2);

var sceneTitle = new ScrollMagic.Scene({
    triggerHook: 0.3, //déclenchement en haut
    triggerElement: '#titre-article',
    duration: 800 // durée en nombre de pixels
  })
  .setTween(homeTimeline)
  .setPin('#titre-article') // on bloque pendant 500 px - on bloque la scène
  // .addIndicators() // on ajoute les repères
  .addTo(controller);



// —————— PARTIE 1 — SCENE 1 - INTODUCTION SUJET —————————————— //

var scene1Timeline = new TimelineMax();

var scene1Tween = new TweenMax.to('#background', 1.5, {
  // backgroundColor: '#FFFFFF'
});
var scene1AnthropoTween = new TweenMax.to('#commentaireAnthropoScene1', 1.5, {
  opacity: 1,
  transform: 'translateX(0px)'
});

scene1Timeline
  .add(scene1Tween)
  .add(scene1AnthropoTween);

// Définition du comportement de la première scène ScrollMagic
var scene1Scene = new ScrollMagic.Scene({
    triggerHook: 0.15, //déclenchement en haut
    triggerElement: '#scene1 hgroup',
    duration: 300 // durée en nombre de pixels
  })
  .setTween(scene1Timeline)
  .setPin('#scene1 hgroup') // on bloque pendant 500 px - on bloque la scène
  // .addIndicators() // on ajoute les repères
  .setClassToggle("#menu-item-1", "bold") // toggle de la classe bold pour le menu à gauche
  .on("progress", function(event) { // on écrit le pourcentage d'avancée de la scène (entre 1 et 500px)
    let prct = Math.round(event.progress * 100) + "%";
    let o = event.progress;
    console.log(o);
    $('#menu-item-1 span').css('width', prct);
    // $('#mask').css('opacity', 1 - o);
    $('#scene1content p').css('opacity', o * 2);
  })
  .addTo(controller); // on ajoute la scène au controller global défini tout en haut



// ––––––––––––– PARTIE 2 — PROLOGUE ––––––––––––––– //


var timelinePrologue = new TimelineMax();

var scenePrologueAnthropoTween = new TweenMax.to('#commentaireAnthropoScenePrologue', 1.5, {
  opacity: 1,
  transform: 'translateX(0px)'
});
var scenePrologueAnthropoTweenVerbatim1 = new TweenMax.to('#verbatim1', 1.5, {
  opacity: 1,
  transform: 'translateX(0px)'
});
var scenePrologueAnthropoTweenVerbatim2 = new TweenMax.to('#verbatim2', 1.5, {
  opacity: 1,
  transform: 'translateX(0px)'
});

timelinePrologue
  .add(scenePrologueAnthropoTweenVerbatim1)
  .add(scenePrologueAnthropoTweenVerbatim2)
  .add(scenePrologueAnthropoTween)


// Définition du comportement de la première scène ScrollMagic
var scenePrologueScene = new ScrollMagic.Scene({
    triggerHook: 0.1, //déclenchement en haut
    triggerElement: '#scenePrologue',
    duration: 500 // durée en nombre de pixels
  })
  .setTween(timelinePrologue)
  .setPin('#scenePrologue hgroup') // on bloque pendant 500 px - on bloque la scène
  // .addIndicators() // on ajoute les repères
  .setClassToggle("#menu-item-1", "bold") // toggle de la classe bold pour le menu à gauche
  .on("enter", function(event) {
    $('#sceneProloguecontent audio').trigger('play');
    $('#sceneProloguecontent video').trigger('play');

  })
  .on("progress", function(event) { // on écrit le pourcentage d'avancée de la scène (entre 1 et 500px)
    let prct = Math.round(event.progress * 100) + "%";
    let o = event.progress;
    console.log(o);
    $('#menu-item-prologue span').css('width', prct);
    // $('#mask').css('opacity', 1 - o);
    $('#sceneProloguecontent p').css('opacity', o * 2);
    $('#sceneProloguecontent audio').css('opacity', o * 2);
    $('#sceneProloguecontent audio').trigger('play');

    $('#sceneProloguecontent video').css('opacity', o * 2);
    $('#sceneProloguecontent video').trigger('play');

  })
  .on("leave", function(event) {
    $('#sceneProloguecontent audio').trigger('pause');
    $('#sceneProloguecontent video').trigger('pause');

  })
  .addTo(controller); // on ajoute la scène au controller global défini tout en haut


// ——————————————————— PARTIE 3 — VISITE CHEZ MAMIE   ————————————


// Création de l'animation tween 1
// var scene2Tween = new TweenMax.to('#scene2 h1', 1.5, {
//   paddingLeft: '0px'
// });

var scene2Timeline = new TimelineMax();

var scene2Tween1 = new TweenMax.to('#scene2content p', 1.5, {
  opacity: '1'
});
var scene2Tween2 = new TweenMax.to('#scene2content img', 1.5, {
  transform: 'translateX(0px)',
  opacity: '1'
});
var scene2Tween3 = new TweenMax.to('#scene2content h2', 1.5, {
  opacity: '1',
  // left : '30vw',
  transform: 'translateX(200px)'
});
var scene2Tween4 = new TweenMax.to('#verbatim3', 1.5, {
  opacity: '1',
  transform: 'translateX(0)'
});
var scene2Tween5 = new TweenMax.to('#verbatim4', 1.5, {
  opacity: '1',
  transform: 'translateX(0)'
});

scene2Timeline
  .add(scene2Tween1)
  .add(scene2Tween2)
  .add(scene2Tween3)
  .add(scene2Tween4)
  .add(scene2Tween5);

// Définition du comportement de la première scène ScrollMagic
var scene2Scene = new ScrollMagic.Scene({
    triggerHook: 0.1, //déclenchement en haut
    triggerElement: '#scene2',
    duration: 1000 // durée en nombre de pixels
  })
  .setTween(scene2Timeline) // on affecte la tween
  .setPin('#scene2') // on bloque pendant 500 px - on bloque la scène
  // .addIndicators() // on ajoute les repères
  .setClassToggle("#menu-item-2", "bold") // toggle de la classe bold pour le menu à gauche
  .on("progress", function(event) { // on écrit le pourcentage d'avancée de la scène (entre 1 et 500px)
    let prct = Math.round(event.progress * 100) + "%";

    let o = event.progress;
    console.log(o);
    $('#menu-item-2 span').css('width', prct);
    // $('#scene2 p').css('opacity', '1');
  })
  .addTo(controller); // on ajoute la scène au controller global défini tout en haut



// ————————————— PARTIE 4 — SCENE 4 — VISITE CHEZ TATA —————————————— //


var scene4Timeline = new TimelineMax();

var scene4Tween1 = new TweenMax.to('#scene4content', 1.5, {
  opacity:1
});
var scene4Tween2 = new TweenMax.to('#verbatim5', 1.5, {
  opacity: 1,
  transform: 'translateX(0px)'
});
var scene4Tween3 = new TweenMax.to('#verbatim6', 1.5, {
  opacity: 1,
  transform: 'translateX(0px)'
});
var scene4Tween4 = new TweenMax.to('#commentaireAnthropoScene4', 1.5, {
  opacity: 1,
  transform: 'translateX(0px)'
});
var scene4Tween5 = new TweenMax.to('#scene4 img', 1.5, {
  width : '600px',
});

scene4Timeline
.add(scene4Tween1)
.add(scene4Tween2)
.add(scene4Tween3)
.add(scene4Tween5)

.add(scene4Tween4)

;

// Définition du comportement de la première scène ScrollMagic
var scene4Scene = new ScrollMagic.Scene({
    triggerHook: 0.15, //déclenchement en haut
    triggerElement: '#scene4',
    duration: 1300 // durée en nombre de pixels
  })
  .setTween(scene4Timeline)
  .setPin('#scene4 hgroup') // on bloque pendant 500 px - on bloque la scène
  // .addIndicators() // on ajoute les repères
  .setClassToggle("#menu-item-4", "bold") // toggle de la classe bold pour le menu à gauche
  .on("progress", function(event) { // on écrit le pourcentage d'avancée de la scène (entre 1 et 500px)
    let prct = Math.round(event.progress * 100) + "%";
    let o = event.progress;
    console.log(o);
    $('#menu-item-4 span').css('width', prct);
    $('#scene4content audio').trigger('play');
  })
  .on("enter", function(event) {
    $('#scene4content audio').trigger('play');
  })
  .on("leave", function(event) {
    $('#scene4content audio').trigger('pause');
  })
  .addTo(controller); // on ajoute la scène au controller global défini tout en haut




// ——————————————————————————— SCENE 5 ————————— LES CARTONS CHEZ MÉMÉ

var scene5Tween = new TweenMax.to('#verbatim7', 1.5, {
  opacity : 1,
});

// Définition du comportement de la première scène ScrollMagic
var scene5Scene = new ScrollMagic.Scene({
    triggerHook: 0.1, //déclenchement en haut

    triggerElement: '#scene5',
    duration: 1000 // durée en nombre de pixels
  })
  .setTween(scene5Tween) // on affecte la tween
  .setPin('#scene5') // on bloque pendant 500 px - on bloque la scène
  // .addIndicators() // on ajoute les repères
  .setClassToggle("#menu-item-5", "bold") // toggle de la classe bold pour le menu à gauche
  .on("progress", function(event) { // on écrit le pourcentage d'avancée de la scène (entre 1 et 500px)
    let prctg = Math.round(event.progress * 100) + "%";
    let prct = Math.round(event.progress * 100);

    let o = event.progress;
    let percent = prct / (100);
    let numImg = Math.round(percent * (14 - 1) + 1);
    $('#scene5-img-' + numImg)
      .css('margin-left', '40vw')
      .css('z-index', index);
    $('#scene5-txt-' + numImg)
      .css('opacity', '1');
    index += 1;

    $('#menu-item-5 span').css('width', prctg);
    // $('#scene1 h1').css('padding-left', (300 - (o*300)));

  })
  .addTo(controller); // on ajoute la scène au controller global défini tout en haut



  // ——————————————— SCENE 6 — VISITE CHEZ TONTON ——————————— //

var scene6Timeline = new TimelineMax();

var scene6Tween1 = new TweenMax.to('#scene6content p', 1.5, {
  opacity:1
});
var scene6Tween2 = new TweenMax.to('#scene6content img', 1.5, {
  opacity:1
});
var scene6Tween3 = new TweenMax.to('#commentaireAnthropoScene6', 1.5, {
  opacity:1
});

scene6Timeline
.add(scene6Tween1)
.add(scene6Tween2)
.add(scene6Tween3);

var scene6Scene = new ScrollMagic.Scene({
    triggerHook: 0.1, //déclenchement en haut

    triggerElement: '#scene6',
    duration: 800 // durée en nombre de pixels
  })
  .setTween(scene6Timeline)
  .setPin('#scene6')
  .setClassToggle("#menu-item-6", "bold") // toggle de la classe bold pour le menu à gauche
  .on("progress", function(event) { // on écrit le pourcentage d'avancée de la scène (entre 1 et 500px)
    let prctg = Math.round(event.progress * 100) + "%";
    let prct = Math.round(event.progress * 100);

    let o = event.progress;
    let percent = prct / (100);

    $('#menu-item-6 span').css('width', prctg);


  })
  .addTo(controller);



  // ————————————————————— scene7 - SYNTHESE ————————————

var scene7Timeline = new TimelineMax();


var scene7Tween1 = new TweenMax.to('#flecheScene7', 1.5, {
  opacity:1
});

var scene7Tween2 = new TweenMax.to('#scene7content p', 1.5, {
  opacity:1
});

var scene7Tween3 = new TweenMax.to('#scene7content2 p', 1.5, {
  opacity:1
});

scene7Timeline
.add(scene7Tween1)
.add(scene7Tween2)
.add(scene7Tween3);


var scene7Scene = new ScrollMagic.Scene({
    triggerHook: 0.1, //déclenchement en haut

    triggerElement: '#scene7',
    duration: 800 // durée en nombre de pixels
  })
  .setTween(scene7Timeline)
  .setPin('#scene7')
  .on("progress", function(event) { // on écrit le pourcentage d'avancée de la scène (entre 1 et 500px)
    let prctg = Math.round(event.progress * 100) + "%";
    let prct = Math.round(event.progress * 100);

    let o = event.progress;
    let percent = prct / (100);

    $('#menu-item-7 span').css('width', prctg);


  })
  .addTo(controller);


// ————————————— TRANSITION FIN - RETOUR DEBUT ————————

var menuTransitionTween7 = new TweenMax.to('#menu-item-7 span', 1.5, {
  width : 0
});

var maskTransitionTimeline = new TimelineMax();


var maskTransitionTween1 = new TweenMax.to('#maskTransition', 1.5, {
  opacity:1,
  background: 'radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(63,94,251,0) 100%)'
});

var maskTransitionTween2 = new TweenMax.to('#maskTransition', 1.5, {
  opacity:1,
  background: 'radial-gradient(circle, rgba(0,0,0,1) 100%, rgba(63,94,251,0) 100%)'
});

var maskTransitionTween3 = new TweenMax.to('#background', 1.5, {
  opacity:1,
  backgroundColor: '#000000'
});

var menuTransitionTween7 = new TweenMax.to('#menu-item-7 span', 1.5, {
  width : 0
});
var menuTransitionTween6 = new TweenMax.to('#menu-item-6 span', 1.5, {
  width : 0
});

var menuTransitionTween5 = new TweenMax.to('#menu-item-5 span', 1.5, {
  width : 0
});

var menuTransitionTween4 = new TweenMax.to('#menu-item-4 span', 1.5, {
  width : 0
});

var menuTransitionTween2 = new TweenMax.to('#menu-item-2 span', 1.5, {
  width : 0
});
var menuTransitionTween3 = new TweenMax.to('#menu-item-prologue span', 1.5, {
  width : 0
});

var menuTransitionTween1 = new TweenMax.to('#menu-item-1 span', 1.5, {
  width : 0
});


maskTransitionTimeline
.add(maskTransitionTween1)
.add(maskTransitionTween2)
.add(maskTransitionTween3)

.add(menuTransitionTween7)
.add(menuTransitionTween6)
.add(menuTransitionTween5)
.add(menuTransitionTween4)
.add(menuTransitionTween2)
.add(menuTransitionTween3)

.add(menuTransitionTween1);


var scene7Scene = new ScrollMagic.Scene({
    triggerHook: 0, //déclenchement en haut

    triggerElement: '#maskTransition',
    duration: 1000 // durée en nombre de pixels
  })
  .setTween(maskTransitionTimeline)
  .setPin('#maskTransition')
  .on("leave", function(event) { // on écrit le pourcentage d'avancée de la scène (entre 1 et 500px)
    window.scroll({
      top: 100,
      left: 100

    });


  })
  .addTo(controller);








  // -
