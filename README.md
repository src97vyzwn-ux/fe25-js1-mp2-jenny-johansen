# Mini Projekt 2

## Hjälpmedel
Video tutorial som jag använde för att skapa min tärning
[How to Create a Dice Roll Game using HTML CSS & JavaScript](https://youtu.be/M3InbHr0WAc?si=nmUF10WFkbNAM1kX)

Bilden på grisen är genererad av Gemini.

## Problem
Required fungerade inte för att jag hade hämtat play-knappen samt använt 'click' istället för 'submit' på min eventlistener.
### Lösning
Hämtade form istället för submit knappen och ändrade 'click' till 'submit' i eventlistener och då fungerade required som det skulle igen.

## Krav
- [x] Spelaren ska kunna ange sitt namn.
**Detta ska synas tydligt på sidan**
- [x] Spelarens namn 
- [x] Den totala poängen
- [x] Omgångens poäng
- [x] Antal spelade omgångar
- [x] Tärningens nummer
- [x] Hur spelaren “kastar” tärningen
- [x] Hur spelaren “fryser” poängen
- [x] Kastar spelaren tärningen ska ett nummer från 1 till 6 genereras och poängen ska uppdateras enligt spelreglerna.
- [x] Väljer spelaren att frysa eller om spelaren slår en etta ska poängen uppdateras enligt spelreglerna.
- [x] När den totala poängen når 100 ska ett tydligt meddelande visas om att spelet är slut och hur många omgångar det tog.

### TIPS!
Hämta inte knappen men form för att det ska fungera utan problem.
För submit-knapp skall 'submit' användas vid addEventListener INTE 'click'.
