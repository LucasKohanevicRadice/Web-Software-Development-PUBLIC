//  Conditional statements

const mystery = (obj, value) => {
    obj.val = value;
    obj.name = "peter"
  };
  
// On mahdollista luokkamaisia olioita ylemmäntapaisella funktiolla ja asettaa niille parametreja ylläolevilla pistetyyleillä.

  const bobo = {
  };
  
  mystery(bobo, 2 + 8);
  
  if (bobo.val === 10) {
    console.log("Hello!")
    console.log(bobo);
  } else {
    console.log("World!");
  }