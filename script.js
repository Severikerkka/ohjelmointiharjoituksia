  console.log(`alert`)




/*Muuttujat: var let tai const*/

let ika = 43;
ika = ika + 1;

console.log(ika);

const pii =3.14;
console.log(`Piin liki arvo` + pii);

const etunimi=`Severi`; //string
const sukunimi=`Kerkkä`; //string
const syntymavuosi = 2004; //integer
const lahtelainen=true; //boolean
let maarittelematon; //undifined
console.log("syntymavuoden tyyppi: " + typeof syntymavuosi);

console.log("etunimen tyyppi: " + typeof etunimi);
//template string

console.log("Nimeni on" + etunimi + " " + sukunimi +  " ja syntymävuoteni on " + syntymavuosi);

const henkilotieto = (`Nimeni on ${etunimi} ${sukunimi}`);

console.log(henkilotieto);

console.log(`henkilotiedon pituus on: ${henkilotieto.length}`);

console.log(henkilotieto.toUpperCase());

console.log(henkilotieto.substring(0, 9));

console.log(henkilotieto.substring(0, 9).toUpperCase());

console.log(henkilotieto.split("")[2]);

const autoja = [`Hyndai`, `Toyota`, `volvo`,];
autoja[3]=`BMW`

console.log(autoja);



