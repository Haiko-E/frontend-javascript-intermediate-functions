// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

console.log("\n **************** opdracht 1 **************** \n\n");

console.log("Maak een forloop aan die door een universele array kan loopen");
console.log("door gebruik te maken van de .lenght method in de forloop");
console.log(
  "Maak een counter aan die bijhoud hoevaak een cijfer groter of gelijk is aan 8 en geef dit als return terug"
);
console.log("antwoord staat bij opdracht 1b");

// * Maak een forloop aan die door een universele array kan loopen
// * door gebruik te maken van de .lenght method in de forloop
// * Maak een counter aan die bijhoud hoevaak een cijfer groter of gelijk is aan 8 en geef dit als return terug
// * antwoord staat bij opdracht 1b

// ---- Verwachte uitkomst: 6

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

function cumLaude(arrayGrades) {
  let counter = 0;
  for (let i = 0; i < arrayGrades.length; i++) {
    const element = arrayGrades[i];
    if (element >= 8) {
      counter++;
    }
  }
  return counter;
}

console.log(cumLaude(grades));

/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

console.log("\n **************** opdracht 2 **************** \n\n");

console.log(
  "Een gemiddelde wordt berekend door de som van alle cijfers te delen door het aantal van alle cijfers"
);
console.log(
  "ik moet de lengte van de array hebben en de som van alle cijfers die in de array voorkomen"
);
console.log(
  "door gebruik te maken van de de forloop kan ik door de array heen loopen, met gebruik van de .lenght methode maakt het niet uit hoe lang de array is"
);

// * Een gemiddelde wordt berekend door de som van alle cijfers te delen door het aantal van alle cijfers
// * ik moet de lengte van de array hebben en de som van alle cijfers die in de array voorkomen
// * door gebruik te maken van de de forloop kan ik door de array heen loopen, met gebruik van de .lenght methode maakt het niet uit hoe lang de array is

// ---- Verwachte uitkomst: 6.642857142857143

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function averageGrades(arrayGrades) {
  let sumOfGrades = 0;
  for (let i = 0; i < arrayGrades.length; i++) {
    const element = arrayGrades[i];
    sumOfGrades = element + sumOfGrades;
  }
  let total = sumOfGrades / arrayGrades.length;
  return total.toFixed(2);
}
console.log(averageGrades(grades));

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

console.log("\n **************** bonusopdracht **************** \n\n");

// ---- Verwachte uitkomst: 9

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function highestGrades1(arrayGrades) {
  let highNum = 0;
  for (let i = 0; i < arrayGrades.length; i++) {
    element = arrayGrades[i];
    if (element > highNum) {
      highNum = element;
    }
  }
  return highNum;
}

console.log(`functie highestGrades 1: ${highestGrades1(grades)}`);

function highestGrades2(arrayGrades) {
  return Math.max(...arrayGrades);
}
console.log(`\nfunctie highestGrades 2: ${highestGrades2(grades)}`);
// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
