/* ==========================================================================
   C’era Una Volta – Menu data
   --------------------------------------------------------------------------
   This is the only file you need to edit to update the menu.

   • Categories appear on the page in the order listed here.
   • "key" points to the translated category name in js/translations.js.
   • "icon" chooses the line illustration (see MENU_ICONS in js/main.js).
   • Each item has:  name  (shown exactly as written, never translated)
                     price (number, in lek)
                     desc  (optional – leave it out if there is no description)
   ========================================================================== */

const MENU_DATA = [
  {
    id: "long-drinks",
    key: "menu.cat.longDrinks",
    icon: "longdrink",
    items: [
      { name: "GIN TONIC", price: 600, desc: "Beefeater Gin, Tonic water" },
      { name: "VODKA TONIC", price: 600, desc: "Standard Vodka, Tonic water" },
      { name: "JAGEMAISTER REDBULL", price: 600, desc: "Jagemaister, Red Bull" },
      { name: "BACARDY COLA", price: 550, desc: "Bacardy, Coca - Cola" },
      { name: "HENDRIKS TONIC", price: 900, desc: "Hendriks Gin, Tonic water" },
      { name: "JACK COLA", price: 600, desc: "Jack Daniels, Coca - Cola" },
      { name: "BOMBAY TONIC", price: 600, desc: "Bombay Gin, Coca - Cola" },
      { name: "VODKA REDBULL", price: 700, desc: "Standard Vodka, Red Bull" },
      { name: "JAGEMAISTER COLA", price: 600, desc: "Jagemaister, Coca - Cola" },
      { name: "TANQUERAY COLA", price: 700, desc: "Tanqueray Gin, Tonic water" },
      { name: "MARE TONIC", price: 1100, desc: "Mare Gin, Tonic water" },
      { name: "GREYGOOSE REDBULL", price: 1000, desc: "Grey Goose Vodka, Red Bull" }
    ]
  },
  {
    id: "cocktails",
    key: "menu.cat.cocktails",
    icon: "cocktail",
    items: [
      { name: "APEROL SPRITZ", price: 700, desc: "Aperol, Prosecco, Soda water" },
      { name: "CAMPARY SPRITZ", price: 700, desc: "Campary, Prosecco, Soda water" },
      { name: "NEGRONI", price: 700, desc: "Dry Gin, Campary, Sweet vermuth, Orange peel" },
      { name: "MARGARITA", price: 700, desc: "Agave white Tequila, Triple Sec, Lime" },
      { name: "VODKA SOUR", price: 700, desc: "Vodka, Lemon juice, Syrup, Passion fruit" },
      { name: "DISARONNO SOUR", price: 700, desc: "Disaronno, Lemon juice, Syrup" },
      { name: "MOJITO", price: 700, desc: "White Rum, Mint leaves, Lime juice, Syrup, Club soda" },
      { name: "BLUE HAWAIIAN", price: 700, desc: "Gin, Creme de violette, Lemon juice" },
      { name: "PORNSTAR MARTINI", price: 700, desc: "Sparkling wine, Passion fruit, Vanilla" },
      { name: "AMF", price: 700, desc: "Vodka, Gin, Light Rum, Tequilla, Blue curacao, Sour mix, 7-up, Lemon wedge, Lime wedge, Maraschino cherry" },
      { name: "LONG ISLAND", price: 700, desc: "Vodka, Light Rum, Tequilla, Triple Sec, Coca-Cola" },
      { name: "B52", price: 700, desc: "Irish Cream Calhua, Baileys, Cointreau" },
      { name: "CUBA LIBRE", price: 700, desc: "Bacardi, Coca-Cola, Lime juice, Brown sugar" },
      { name: "MANGO COLADA", price: 700, desc: "Pineapple, Mango, Rum, Coconut cream, Coconut milk" },
      { name: "TOMA PASSIONATA", price: 800, desc: "Bartender secret!" },
      { name: "C’ERA UNA VOLTA", price: 900, desc: "Bartender secret!" }
    ]
  },
  {
    id: "signature",
    key: "menu.cat.signature",
    icon: "signature",
    items: [
      { name: "BUBBLE GUN", price: 700, desc: "Standard vodka, Lime juice, Elderflower, Bubble gum" },
      { name: "BELLA C’ERA", price: 700, desc: "Gin Tranqueray, Elderflower, Lime, Mudled cucumber, Mint leaves, Proseco, Tonic" },
      { name: "PINK PANTHER", price: 700, desc: "Standard Vodka, Watermelon, Batida se coco, Lime juice, Tonic" },
      { name: "VODKA FIZZ ROSE", price: 700, desc: "Standard Vodka, Rose syrup, Lime juice, Rose lemonade" },
      { name: "C’ERA UNA VOLTA", price: 800, desc: "Gin Hendriks, Blackberry, Lime juice, Rose lemonade, Rosemary" },
      { name: "C’ERA SPICY", price: 800, desc: "Rum Spice, Triple sec, Elderflower, Lime juice, Soda water" },
      { name: "MARIACHI", price: 1500, desc: "Patron Anejo, Aperol infused spisy, Cointreau, Lime juice, Pink salt" },
      { name: "CUCUMBER SPRITZ", price: 700, desc: "Cucumber, Lime juice, Proseco, Tonic" }
    ]
  },
  {
    id: "beers",
    key: "menu.cat.beers",
    icon: "beer",
    items: [
      { name: "KORCA", price: 300 },
      { name: "BAVARIA", price: 300 },
      { name: "BAVARIA 0%", price: 300 },
      { name: "STELLA ARTOIS", price: 350 },
      { name: "CORONA", price: 400 },
      { name: "HEINEKEN", price: 400 },
      { name: "PAULANER HELL", price: 500 },
      { name: "PAULANER CRISTAL", price: 500 },
      { name: "ERDINGER", price: 500 },
      { name: "GINGER BEER", price: 500 },
      { name: "LA TRAPE DOUBLE", price: 700 },
      { name: "LA TRAPE BLONDE", price: 700 },
      { name: "GUINESS", price: 700 }
    ]
  },
  {
    id: "gin-whiskey",
    key: "menu.cat.ginWhiskey",
    icon: "rocks",
    items: [
      { name: "BEEFEATER", price: 500 },
      { name: "JAMESON", price: 500 },
      { name: "TULLAMORE", price: 500 },
      { name: "JACK DANIELS", price: 500 },
      { name: "JOHNIE BLACK", price: 550 },
      { name: "JIM BEAM", price: 600 },
      { name: "TANQUERAY", price: 600 },
      { name: "BOMBAY", price: 600 },
      { name: "HENDRIKS", price: 800 },
      { name: "JOHNIE DOUBLE BLACK", price: 800 },
      { name: "JENTLE MANJACK", price: 800 },
      { name: "GUN POWDER IRISH", price: 1000 },
      { name: "MARE", price: 1000 },
      { name: "GLENFIDDISH 18", price: 1200 },
      { name: "LAGAVULINE", price: 1400 }
    ]
  },
  {
    id: "rum",
    key: "menu.cat.rum",
    icon: "bottle",
    items: [
      { name: "BACARDI", price: 600 },
      { name: "BACARDI BLACK", price: 600 },
      { name: "HAVANA 7", price: 700 },
      { name: "DICTATOR 12", price: 1200 },
      { name: "DICTATOR 20", price: 1600 },
      { name: "ZACCAPA", price: 1700 },
      { name: "ZACCAPA X.0", price: 2500 }
    ]
  },
  {
    id: "liqueur",
    key: "menu.cat.liqueur",
    icon: "cordial",
    items: [
      { name: "JAGERMEISTER", price: 600 },
      { name: "DISARONO", price: 600 },
      { name: "MONTENEGRO", price: 700 },
      { name: "SAMBUCA", price: 1200 },
      { name: "AMARO DEL CAPO", price: 1600 }
    ]
  },
  {
    id: "brandy",
    key: "menu.cat.brandy",
    icon: "snifter",
    items: [
      { name: "METAXA 5", price: 500 },
      { name: "METAXA 7", price: 700 },
      { name: "METAXA 12", price: 1000 },
      { name: "VECHIA ROMAGNA", price: 500 },
      { name: "HENNESY", price: 800 },
      { name: "HENNESY V.S.O.P", price: 1200 }
    ]
  },
  {
    id: "shots",
    key: "menu.cat.shots",
    icon: "shots",
    items: [
      { name: "VODKA", price: 200 },
      { name: "WHISKEY", price: 250 },
      { name: "TEQUILLA", price: 250 },
      { name: "RUM", price: 250 },
      { name: "GIN", price: 250 }
    ]
  },
  {
    id: "freskuese",
    key: "menu.cat.freskuese",
    icon: "soft",
    items: [
      { name: "ROSE", price: 500 },
      { name: "RED BULL", price: 400 },
      { name: "TONIC", price: 200 }
    ]
  }
];
