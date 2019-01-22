// classical approach

(function () {
  console.log('Variation 1');
}());

(function () {
  console.log('Variation 2');
})();

// expression approach

!function() {
  console.log('Ooh, fancy.');
}();

// es6 approach

(() => {
  console.log('new features!');
})();

// private variables

(function secretSauce () {
  let ingredients = [
    '1/4 cup mayonnaise',
    '1 1/2 teaspoons spicy pickle juice',
    '1 1/2 teaspoons ketchup',
    '1 teaspoon yellow mustard',
    '1/4 teaspoon smoked paprika',
    '1/4 teaspoon garlic powder',
    '1/4 teaspoon onion powder'
  ];

  mix();

  function mix () {
    console.log(ingredients.join(', '));
  }
}());

// calculated variables

const data = (async () => await fetch('https://api.secret-sauce.club/'))();

// iffy-wiffy with a paramy-wammy

((call, repeat) => {
  for (let i = 0; i < repeat; i++) call();
})();
