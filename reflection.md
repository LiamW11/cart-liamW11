# Reflektion: 4-dagars E-handelsapplikation

**Datum:** 2025-10-17  
**Total tidsåtgång:** 25 timmar på 5 dagar

Nu när du har byggt en komplett e-handelsapplikation från grunden, ta en stund att reflektera över din utveckling och dina lärdomar.

---

## Del 1: Översikt

### Vilken dag var mest givande?

- [ ] Day 1 - Cart Logic
- [ ] Day 2 - Product Display
- [ ] Day 3 - Interactive UI
- [X] Day 4 - Persistence & Checkout

**Varför?**
Jag tyckte denna dag var mest givande då man fick arbeta fritt. Det var bra eftersom att man då fick använda sig av sin egna kunskaper för att lösa ett problem och att man märkte hur man låg rent kunskapsmässigt. Jag tyckte det var roligt att veta att alla kommer lösa problemet på lite olika sätt och att varje person kommer ha någonting unikt med sin lösning.
___

### Vilken dag var mest utmanande?

- [ ] Day 1 - Cart Logic
- [ ] Day 2 - Product Display
- [ ] Day 3 - Interactive UI
- [X] Day 4 - Persistence & Checkout

**Vad gjorde den utmanande och hur hanterade du det?**
Det som gjorde den utmanande var att det inte fanns instruktioner för hur problemet skulle lösas.
Jag hanterade det genom att först skapa en plan över hur jag tänkte mig att problemet skulle kunna lösa. Efter att planen var färdigställd så började jag arbeta med plannen i åtanke. Ibland pausade jag och reflekterade över ifall någonting behövde förändras och hur det skulle ändras då ifall t.ex. ett problem uppstod. Denna process fortsatte tills att problemet var löst.
___

---

## Del 2: Teknisk förståelse

### Nyckelkoncept per dag

**Day 1 - Array methods:** Beskriv med egna ord vad `reduce()` gör och varför det är användbart.
Reduce fungerar så att du har 2 element där 1 är en accumulator och den andra agerar som pekare för varje objekt i en array. För varje objekt i en array så kan du bestämma vad som ska ske med accumulatorn och pekaren, exempelvis att pekaren ska addera att värde till accumulatorn för varje objekt i arrayen.

___

**Day 2 - DOM manipulation:** Förklara skillnaden mellan `innerHTML` och `textContent`.
innerHTML ändrar innehållet i html-elementet och kan användas när du vill skapa innehåll till en div.
textContent ändrar enbart texten som skrivs ut på applikationen och kan användas när du vill uppdatera ett tal som finns på applikationen.

___

**Day 3 - Event handling:** Varför är det viktigt att uppdatera UI:t varje gång cart ändras?
Det är viktigt att uppdatera löpande eftersom att användaren ska kunna se vad som ligger i carten hela tiden och inte ska behöva trycka på någon enskild knapp som uppdaterar innehållet i carten.

___

**Day 4 - LocalStorage:** Varför behöver vi `JSON.stringify()` och `JSON.parse()`?
Vi behöver dessa funktioner för att kunna använda oss av localStorage.
JSON.stringify tillåter oss att spara saker till localStorage utan problem.
JSON.parse tillåter oss att hämta saker från localStorage utan problem.
Ifall dessa funktioner inte används så kan problem som att localStorage sparar objekt fel eller att man hämtar objekt som enbart text.

___

### Dataflöde

Beskriv i steg vad som händer när en användare klickar "Lägg till i varukorg":

1. En products.find() körs som letar efter den produkt med motsvarande ID från produktlistan körs.
2. Ifall produkten redan finns i carten redan finns så ökar quantity med ett.
3. Om produkt inte finns i carten cart.push() för att lägga till den i carten.
4. När produkten lagts till så uppdateras UI för att användaren ska se att produkten har lagts tills.

---

## Del 3: Problemlösning

### Buggar och utmaningar

**Beskriv en bug du stötte på:**
Jag stötte på en bug som gjorde så att man kunde lägga till flera produkter än vad som fanns i stock.

**Hur upptäckte du den?**
Jag upptäckte den när jag höll på att testa olika funktioner på applikationen. Jag testa att trycka på + vid produkten jättemyckte och upptäckte att det aldrig tog slut.

**Hur löste du den?**
Jag började med att kolla igenom koden. Då upptäckte jag att funktionen som ökade kvantitet för produkterna aldrig kollade ifall kvantiteten var större än stocken. Då skrev jag en funktion som kollade stocken hos en enskild produkt och gjorde så att funktionen som ökade kvantiteten kollade ifall kvantiteten var större än stocken med en if-sats.
___

### DevTools

Vilka DevTools-funktioner använde du?
- [X] Console
- [ ] Elements
- [X] Application (localStorage)

**Ge ett exempel på hur DevTools hjälpte dig:**
DevTools tillät mig att kolla hur localStorage sparade mina objekt.
___

---

## Del 4: Självskattning

Bedöm din färdighetsnivå (1-10) FÖRE och EFTER projektet:

| Område | Före | Efter |
|--------|------|-------|
| JavaScript syntax | 5 | 8 |
| Array methods | 4 | 8 |
| DOM manipulation | 3 | 6 |
| Event handling | 5 | 7 |
| Data persistence | 4 | 8 |
| Debugging | 5 | 7 |
| Kodarkitektur | 3 | 5 |

### Största framstegen

**Vilket område känner du att du utvecklades mest inom?**
Jag tycker att jag utvecklats messt i Array methods. Först så fattade jag inte hur man skulle använda alla olika funktioner såsom .map(), .find(), .reduce(). Dock så förstår jag dessa funktioner mycket bättre nu när jag har fått implemnetera dem i min kod.
___

**Vad bidrog till den utvecklingen?**
Jag skulle säga att få använda mig av funktionerna för att driva min applikation har bidragit mest till utvecklingen. Att få konkreta exempel på hur man kan använda sig av dessa funktioner har bidragit mest.
___

---

## Del 5: Kod och kvalitet

### Kod du är nöjd med

**Vilken funktion eller kod-sektion tycker du blev bra?**
Jag tycker updateCartTotals() blev bra eftersom att den använder sig av dom-manipulation.
___

**Varför?**
Jag var inte så säker på hur dom-manipulation fungerade tidigare men efter att har jobbat med denna uppgift och skrivit denna funktion så har jag insett att det i princip är som att skriva html fast man gör det i en js fil. Det enda man gör annorlunda egentligen är att man måste lägga till HTML:en själv med exempelvis .innerHTML.
___

### Förbättringsområden

**Vad skulle du vilja göra annorlunda om du började om?**
Jag skulle vilja använda mig av färre fuktioner. Jag upplever att det finns flera funtkioner i min kod som skulle kunna slås ihop. Till exempel skulle increaseQuantity() och decreaseQuantity() bli till changeQuantity(xxx) som har funktionaliteten av båda där xxx bestämmer ifall kvantiteten ska öka eller minska.
___

---

## Del 6: Lärprocess

### Hur lärde du dig bäst?

- [X] Läsa instruktioner först
- [X] Koda direkt och experimentera
- [ ] Studera demo-kod
- [ ] Diskutera med andra
- [ ] Använda AI/dokumentation

### AI och dokumentation

**Hur använde du AI-verktyg?**

- [X] För att förstå koncept
- [ ] För att felsöka
- [X] För att få kodexempel

**Ge ett exempel på när AI/dokumentation hjälpte dig förstå något bättre:**
Jag bad AI att förklara funktionen .forEach(). Jag tyckte att förklarningen den gav var bra och jag fick flera kodexempel som jag kunde titta på.
___

---

## Del 7: Perspektiv

### Professionell kontext

**Vilka likheter ser du mellan ditt projekt och riktiga e-handelsplatser?**
En lista av produkter med en "lägg till i varukorg" knapp.
En varukorg som visar alla dina produkter.
En handlingshistorik som sparas.

___

**Vad skulle behövas för att göra detta production-ready?**
Det skulle behövas ett sätt att betala.
Det skulle behövas riktiga produkter.
___

### Förklara för andra

**Om en klasskamrat frågade "Hur fungerar localStorage?", vad skulle du svara?**
localStorage är ett sätt för din webbläsare att spara information.
Den fungerar genom att en funktioner använder sig av localStorage för att spara data som text i webbläsaren eftersom att allt i webbläsaren är textbaserat.
Du kan sedan hämta denna information i en annan funktion ifall du skulle behöva skriva ut t.ex. en historik.
Man använder sig av localStorage.setItem("keynamn", JSON.stringify(data)) för att spara objekt i localStorage.
Man använder sig av JSON.parse(localStorage.getItem("keynamn")) för att hämta objekt från localStorage.
JSON.stringify gör om det man sparar till text och krävs för att localStorage ska fungera korrekt.
JSON.parse gör om texten man hämtar från localStorage till ett objekt igen så att man kan arbeta med det i js.
___

---

## Del 8: Framåt

### Nästa steg

**Välj 2-3 extension challenges du vill prova:**

- [X] Product images in order history
- [ ] Currency conversion
- [ ] Dark/light theme
- [X] Discount codes
- [ ] Wishlist
- [ ] Reviews and ratings

**Vad vill du öva mer på?**
Jag skulle vilja öva mer på kodarkitektur och dom-manipulation.
___

**Beskriv ett eget projekt du skulle vilja bygga med liknande tekniker:**
En applikation som sparar alla spel man har spelat med bild på spelet, pris på spelet, hur länge man spelat och en recension av spelet som man själv skrivit.
___

---

## Sammanfattning

### Tre viktiga lärdomar från dessa 4 dagar:

1. localStorage funktioner
2. Array metoder
3. Dom-manipulation

### En sak du lärde dig om hur DU lär dig programmering:

F12 är väldigt användbart för att pröva sin kod och göra ändringar som inte påverkar din verkliga kod.

### I en mening - vad har du åstadkommit?
Jag har blivit bättre på att skapa interaktiva webbapplikationer.
___

---

**Datum för reflektion slutförd:** 2025-10-17

**Bra jobbat! Spara denna fil som dokumentation av din utveckling.**
