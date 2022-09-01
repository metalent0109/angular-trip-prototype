# Uvod

**Pažljivo** pročitati tekst zadatka **pre početka** realizacije prototipa. **Zahtevi** su definisani **okvirno** i
od studenta se očekuje da ih dalje **konkretizuje** i kritički analizira u skladu sa sopstvenim
pretpostavkama. Cilj projekta je razvijanje samostalnog, kreativnog i kritičkog razmišljanja u
rešavanju praktičnih problema razvoja korisničkog interfejsa.

# Tema

Potrebno je realizovati prototip korisničkog interfejsa za _naručivanje i organizaciju putovanja._
Aplikacija treba da omogući **pretragu** i **naručivanje** putovanja.
Aplikacija inicijalno sadrži predefinisan i ponuđen skup putovanja (minimum 10) koje je potrebno
unapred kreirati.
Potrebno je omogućiti pretragu prefinisanog skupa kroz zadavanje odvojenih kriterijuma u koje
spadaju: vrsta putovanja (na primer, avion, voz, autobus), odredište i udaljenost, (rang) cena,
vreme putovanja, i recenzije drugih korisnika koji su prethodno obavili slično putovanje u pogledu
izabranih parametara.

Kada putnik **Rezerviše** putovanje, dobija odgovarajuće obaveštenje i rezervisano putovanje se
dodaje u njegovu **Korpu** putovanja.

Pored pretrage, putnik može ručno pregledati i birati putovanja iz predefinisanog skupa. Za svako
putovanje prikazati vrstu, naziv, opis i udaljenost odredišta, cenu, vreme putovanja i recenzije
korisnika koji su prethodno obavili putovanje.

Korpa sadrži sve informacije o rezervisanim putovanjima i automatski računa ukupnu cenu.
Putovanje sadrži vrstu, naziv, opis i udaljenost odredišta, cenu, vreme putovanja, status
('završeno', 'predstojeće', 'otkazano'), i ocenu (samo za putovanje datog korisnika u statusu
'završeno').
Putnik može vršiti pretragu, rezervaciju, modifikaciju i brisanje **putovanja**.
Pretraga i rezervacija se vrše iz predefinisanog/ponuđenog skupa putovanja na način opisan
iznad. Putnik može brisati putovanja iz korpe koja se nalaze u statusu 'završeno', dok može
menjati putovanja iz korpe u statusu 'otkazano' ili 'predstojeće'.

Vrednovanja kao **ocena** su deo svakog putovanja. Prezentacija vrednovanja je stvar kreativnosti
autora (simboli, tekst ili kombinacija), ali mora biti vidljivo istaknuta i lako razumljiva. Putnik može
ocenjivati samo putovanja koja je prethodno rezervisao i koja imaju status 'završeno'.

Aplikacija ima jedan tip korisnika - **putnik**. Svaki korisnik ima lični **profil** koji sadrži podatke koji
uključuju ime i prezime, kontakt podatke (email, telefon, adresa), podatke o omiljenim vrstama
putovanja i odredištima, i podatke za prijavljivanje u aplikaciju. Podaci profila se mogu menjati.
Korisnik može da pregleda sadržaj koji je dostupan, putovanja, čita recenzije drugih zadovoljnih ili
nezadovoljnih putnika, kao i da dodaje putovanja od interesa u svoju korpu.
Ukoliko korisnik želi da izvršu rezervaciju ili pristupi svojoj korpi i putovanjima koja se nalaze u njoj,
mora se **prijaviti** (ukoliko ima svoj nalog) ili **registrovati** (ukoliko nema svoj nalog). Prilikom
registracije korisnik mora uneti sve podatke profila.

Prototip se realizuje na uređaju po izboru (telefon, tablet, laptop).

# Zadatak

Realizovati računarski prototip korisničkog interfejsa Veb klijentske aplikacije sa simulacijom
pozadinske logike preko TypeScript interfejsa i Angular servisa. Prototip realizovati korišćenjem
AngularJS tehnologije obrađene u okviru kursa.

Za završni ispit potrebno je dostaviti programski kod prototipa i pdf dokument sa dokumentovanim
kopijama izgleda stranica interfejsa (jedan prikaz po stranici dokumenta, opis ispod slike). Na


svakoj stranici dokumentovati izgled kao sažet opis funkcije (ne izgleda i rasporeda kontrola
korisničkog interfejsa).

Primer:
_Funkcija: Pretraga vožnji. Koriste se kriterijumi za pretragu kao podaci o ..._

Poželjno je (ne i obavezno, i ne utiče na ocenu) da studenti kreiraju video snimak simulacije
korišćenja aplikacije i dostave adresu snimka postavljenog online (Google Drive, DropBox, Vimeo i
slične platforme). Snimak se može kreirati korišćenjem softvera za snimanje ekrana ( _screen
recording_ ) ili kamere. Snimak ne treba da bude duži od 5 minuta (ovo nije zahtev već ograničenje).

# Prototip	aplikacije

Prototip obuhvata korisnički interfejs i simulaciju pozadinske logike. Implementacija podrazumeva:

- Izgled stranica i dijaloga (kontrole interfejsa i njihov raspored),
- Navigacija između stranica i drugih oblika prikaza (otvaranje i zatvaranje dijaloga i formi),
- Simulacija pozadinske logike preko interfejsa koji definišu strukturu podataka aplikcije i servisa
  koji rade sa strukturom podataka koju definišu interfejsi (čitanje, upis, izmena i brisanje
  podataka u toku sesije korišćenja aplikacije).

# Predaja

Predaja projekta se vrši isključivo elektronskim putem, na način koji će biti naknadno objavljen.
Rok za predaju projekta, kao i datum odbrane će biti blagovremeno objavljeni na sajtu predmeta
pred svaki ispitni rok.


