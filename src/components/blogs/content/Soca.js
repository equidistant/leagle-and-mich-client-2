import React from 'react'
import styled from 'styled-components'
import { Star, SocaImages } from '../../../images'
import { useTheme2 } from '../../../effects'
import { OuterContainer, CenterContainer,
   Header1, Header2, Header3, TextIntro, Text, BulletHeaderContainer, StarBullet,
   HeaderImg, ImgRow, ImgWrap, ImgOverlay, ImgPortraitHalf, ImgWrapPortrait, ImgLandscapeHalf, ImgWrapLandscape, ImgWrapPortraitLeft, ImgWrapLandscapeLeft, Img} from '../components'
import themeSizes from '../theme'

const Blogs = () => {
  const [theme] = useTheme2({ theme: themeSizes, boundaries: [800, 1100]})
  const images = SocaImages
  return (
    <Container>
      <HeaderImg img={images[4]}/>
        <OuterContainer>
          <CenterContainer {...theme}>
            <Header1 {...theme}>
              Kampiranje u Sloveniji
            </Header1 >
            <TextIntro {...theme}>
              Svaki produženi vikend idealna je prilika za putovanje.
              Tako smo mi za ovaj odlučili skočiti do susjedne nam Slovenije. Htjeli smo nešto, blizu, zanimljivo, u prirodi i odluka je pala na predivnu dolinu rijeke Soče. Ovo je bilo naše prvo kampiranje duže od vikenda i uzbuđenje je bilo na vrhuncu. Iako danas zbog slika predivnih lokacija koje su nam lako dostupne na internetu možemo dobro isplanirati put, isto tako možemo znati točno što nas čeka i smanjiti si iznenađenje. No, unatoč tome, ljepota ovog mjesta je neopisiva i nijedna slika ne može u potpunosti prenijeti osjećaj koji imaš kada si tamo.
            </TextIntro>
            <Text {...theme}>
              Naš put je započeo u četvrtak u 8 (čitaj 9 ujutro), s pripremljenom kavom, smootijem, limunadom, sendvičima, prepunim autom (stvari, ali i dobre volje). Zvjezdice koje Ana pripremi na karti su bile tu, kao i okvirna ideja što sve želimo vidjeti, ali smo ostavili i dio spontanosti i planiranja u hodu. Što se, kao i obično pokaže kao dobra odluka, ako zbog ničeg drugog onda zbog vremenskih (ne)prilika. Opisan po danima i lokacijama, naš put je izgledao ovako:
            </Text>
            <Header2 {...theme}>Četvrtak 20.6.2019.</Header2>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Jezero Bled</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>Kratka pauza za šetnju, sladoled, odmor na klupici i uživanje u pogledu, no ovo nam je iako lijepo bilo za taj trenutak ipak preturističko mjesto te smo htjeli brzo nastaviti na naše sljedeće lokacije, u čemu nam je pomogla i kiša koja nas je dodatno požurila.</Text>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Vintgar Gorges</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Slučajno otkrivena lokacija taman na našem putu, 4km od Bleda  vodi mala cesta do korita dugih 1.6km. Parking je besplatan, no ulaz se plaća 10€ po osobi. Kiša će valjda stati. I je, nakon polusatnog spavanja u autu i nakon odluke da nam kiša možda ipak ne može ništa. Tako je naša šetnja u jednom smjeru bila popraćena kapljicama kiše, a u drugom smjeru zrakama sunca. Nije loše vidjeti obje perspektive. Predivno uređena šetnica vodi do slapa Šum i omogućuje divne prizore cijelim putem. Prve postaje su uspješno odrađene i spremni smo za dalje.
            </Text>
            <ImgRow {...theme}>
              <ImgWrapPortraitLeft {...theme}>
                <ImgOverlay {...theme}>Spremna za polazak!</ImgOverlay>
                <ImgPortraitHalf img={images[13]}/>
              </ImgWrapPortraitLeft>
              <ImgWrapPortrait {...theme}>
                <ImgOverlay {...theme}>Čekam fotografa da me stigne...</ImgOverlay>
                <ImgPortraitHalf img={images[14]}/>
              </ImgWrapPortrait>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Jezero Jasna</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Sljedeća postaja je bilo jezero Jasna kod Kranjske gore, malo jezero sa šetnicom i pogledom na predivne planine Julijskih Alpi. Na jezeru je dovoljno zadržati se 30-ak minuta i upiti svu ljepotu prirode koja se nalazi pored.
            </Text>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Ommmmmmm...</ImgOverlay>
                <Img img={images[18]}/>
              </ImgWrap>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Jezero Zelenci</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
            Prije odlaska u kamp u dolini Soče napravili smo 10 minutu vožnju do predivnog jezera Zelenci, koje je ujedno i izvor dobro nam poznate rijeke Save Dolinke. Izvor je čista suprotnost onoga što se u našim glavama javi kad čujemo riječ Sava. Čist je, bistar, u predivnom malo okruženju, a mjesto je kao stvoreno za kratki predah i divljenje prirodi.
            </Text>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Mir i tisina...</ImgOverlay>
                <Img img={images[17]}/>
              </ImgWrap>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Vršič pass</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Naša odluka je bila da do doline Soče idemo Vršič cestom, iako duža i prepuna je predivnih prizora, što nam je ipak bio glavni cilj ovog putovanja. Cesta je duga 24km i ima 50 označenih velikih zavoja koji daju dodatnu čar cijelom putovanju.
            </Text>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Predah na vrhu...</ImgOverlay>
                <Img img={images[15]}/>
              </ImgWrap>
            </ImgRow>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Složili smo svoj "cairn" i nastavili dalje</ImgOverlay>
                <Img img={images[16]}/>
              </ImgWrap>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Kamp Vodenca</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Kao smještaj nas je dočekala prostrana, zelena livada okružena planinama. Savršeno mjesto za naše prvo duže kampiranje. Uredan i pregledan kamp, idealan za bijeg u prirodu.
            </Text>
            <Header2 {...theme}>Petak 21.6.2019.</Header2>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Rafting na Soči</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Naše prvo rafting iskustvo nije moglo imati ljepšu lokaciju. Odlična ekipa iz SportMix Boveca nam je pripremila odličnu turu i atmosferu. Moramo pohvaliti njihovu brigu i trud oko nas, a dodatni plus je što se na kraju dobiju i besplatne slike te cijela avantura ostane zabilježena.
            </Text>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Ovo je bilo zabavno!</ImgOverlay>
                <Img img={images[19]}/>
              </ImgWrap>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Slap Virje</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Čekajući na naš temin za rafting, otišli smo u posjet obližnjem slapu Virje. Do njega je potrebno hodati cca 5min pješke i preporuka je stići malo ranije da se izbjegne veća gužva koja se stvori oko njega.
            </Text>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Vrlo osvježavajuće</ImgOverlay>
                <Img img={images[6]}/>
              </ImgWrap>
            </ImgRow>
            <Header2 {...theme}>Subota 22.6.2019.</Header2>
            <Text {...theme}>
              U subotu nas je dočekala kiša te smo odlučili prepustiti se vremenskim prilikama i prvi dio dana provesti pod šatorom.
              Nismo očajavali. Dapače odmor na odmoru je dobro došao, a i sve je stvar perspektive.
              Tako smo pretvorili to u pozitivno iskustvu.
              Izguglali možemo li kuhati kavu u šatoru, jer kava je ipak najvažnija. Ostatak nam  je dana u šatoru bilo uživanje u trenutku.
            </Text>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Slap Kozjak</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Popodne nam je ipak dozvolilo skitanje pa smo se odlučili za vožnju do Kobarida.
              Tamo smo otišli do slapa Kozjak koji se nalazi na rubu Triglavskog Nacionalnog Parka.
              Šetnja traje ukupno oko 1h i 15minuta. Kao i na ostalim dijelovima na kojima smo bili, šetnica je jako uređena, pogled na svakom koraku ostavlja bez daha, a slapu se možeš samo diviti.
            </Text>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Kratka ekspozicija</ImgOverlay>
                <Img img={images[5]}/>
              </ImgWrap>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}> Napoleonov most</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Kratka stanice između centra Kobarida i parkinga za početak šetnje prema slapu Kozjak. Pruža jedan od ljepših pogleda na rijeku Soču.
            </Text>
            <ImgRow {...theme}>
              <ImgWrapPortraitLeft {...theme}>
                <ImgOverlay {...theme}>Pogled s mosta</ImgOverlay>
                <ImgPortraitHalf img={images[20]}/>
              </ImgWrapPortraitLeft>
              <ImgWrapPortrait {...theme}>
                <ImgOverlay {...theme}>Jedva čekam probat!</ImgOverlay>
                <ImgPortraitHalf img={images[21]}/>
              </ImgWrapPortrait>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Slap Boka</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Na povratku u kamp izdvojili smo još 30 minuta za kratko stajanje na vidikovcu za slap Boka. Slika s naslovnice ovog bloga prikazuje svu moć i ljepotu tog slapa. Svakako vrijedno mjesto za pogledati, a najhrabriji i oni željni avanture mogu se odlučiti i na dužu rutu hodanja do samog slapa. Mi smo ga ovaj put posjetili samo s udaljenosti.
            </Text>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Njegovo veličanstvo, 106m visok slap Boka</ImgOverlay>
                <Img img={images[24]}/>
              </ImgWrap>
            </ImgRow>
            <Header2 {...theme}>Nedjelja 23.6.2019.</Header2>
            <Text {...theme}>
              Nedjelja je bila dan za jedno zanimljivo iskustvo. Odlučili smo se upisati u jednodnevnu školu kajaka i  isprobati ga, ali na rijeci, divljoj rijeci. Ana i dalje nije sigurna što misli o tom iskustvu, osim što joj je drago da je preživjela. Kada se nakon 3 sekunde u kajaku prevrneš, zaboraviš sve upute o tome kako da se izvučeš pa pomahnitalo uzimaš zrak i čekaš da netko dođe do tebe, nije ti baš svejedno i nisi siguran želiš li to iskustvo ponoviti. Tj. želiš, ali možda u nekim sigurnijim i mirnijim uvjetima. Ipak, odustajanja nije bilo, staza je uspješno prijeđena, a rijeka Soča i ovaj put, baš kao i na raftingu ostavlja bez daha. Dobro je sve.
              Samo, nakon ovoga, jedino što smo mogli je zaspati u kampu i prepustiti se slatkom osjećaju umora i ponosa.
            </Text>
            <ImgRow {...theme}>
              <ImgWrapLandscapeLeft {...theme}>
                <ImgOverlay {...theme}>Ćorkica u hammocku</ImgOverlay>
                <ImgLandscapeHalf img={images[22]}/>
              </ImgWrapLandscapeLeft>
              <ImgWrapLandscape {...theme}>
                <ImgOverlay {...theme}>Meni je i pod sasvim ok... Fino ravan taman</ImgOverlay>
                <ImgLandscapeHalf img={images[23]}/>
              </ImgWrapLandscape>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Šunikov vodni gaj</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Ova zvjezdica se nalazi kod Lepene i možda je najmanje turistička od svih, a jednako lijepa. Ima nekoliko stajališta-vidikovaca poput brdašaca koji prelaze bazene i slapove, ostatke starog mlina te moćna i velika stabla, kao i mostić preko kojeg se prelazi tijekom šetnje.
            </Text>
            <ImgRow {...theme}>
              <ImgWrapPortraitLeft {...theme}>
                <ImgOverlay {...theme}>Ana se glupira (a meni viče da pazim jer je sklisko)</ImgOverlay>
                <ImgPortraitHalf img={images[25]}/>
              </ImgWrapPortraitLeft>
              <ImgWrapPortrait {...theme}>
                <ImgOverlay {...theme}>Behind the scenes</ImgOverlay>
                <ImgPortraitHalf img={images[26]}/>
              </ImgWrapPortrait>
            </ImgRow>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Most i ć (i šuma)</ImgOverlay>
                <Img img={images[27]}/>
              </ImgWrap>
            </ImgRow>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Napokon neka ravna podloga da se slikamo</ImgOverlay>
                <Img img={images[28]}/>
              </ImgWrap>
            </ImgRow>
            <Header2 {...theme}>Ponedjeljak 24.6.2019.</Header2>
            <Text {...theme}>
              Ponedjeljak je bio još jedan putni dan, gdje smo odlučili isprobati kako je to SUP-ati. Rezervirali smo 2 SUP-a za 15h u Soča SUP-u kod Mosta na Soči (rezervacija se obavlja telefonski), a u međuvremenu smo obišli obližnje pripremljene zvjezdice.
            </Text>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Tolminska korita</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Tolminska korita su još jedna posebna priča, još jedna slična, a posebna šetnica i još jedan pogled u ljepotu oko sebe. Uz korita je besplatan parking, iako dosta popunjen, ulaznica je 5 eura, a šetnja od otprilike sat vremena puna prizora za prepričavanje. Čak je moguće piti vodu izravno iz stijena. Ne sjećamo se kada smo zadnji put to napravili. Osjećaj je super, a voda osvježavajuća.
            </Text>
            <ImgRow {...theme}>
              <ImgWrapPortraitLeft {...theme}>
                <ImgOverlay {...theme}>Pogled na Đavolji most (popularno ime za most u kanjonu)</ImgOverlay>
                <ImgPortraitHalf img={images[29]}/>
              </ImgWrapPortraitLeft>
              <ImgWrapPortrait {...theme}>
                <ImgOverlay {...theme}>Pogled sa Đavoljeg mosta</ImgOverlay>
                <ImgPortraitHalf img={images[30]}/>
              </ImgWrapPortrait>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>Ušče Tolminke</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Prije SUP-a čekalo nas je Sotočje, mjesto za kupanje, plažu, još jedan ručak od tjestenine i kukuruza i radikalne odluke o kupanju u hladnoj vodi. Ali kada je okoliš toliko privlačan nema druge! Mjesto bez puno ljudi, s dosta mjesta za osamu i mir i s lijepim prilazima vodi. A oko nas 2 rijeke, neobičnih boja…
            </Text>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Bistra i hladna</ImgOverlay>
                <Img img={images[31]}/>
              </ImgWrap>
            </ImgRow>
            <BulletHeaderContainer {...theme}>
              <StarBullet {...theme} /><Header3 {...theme}>SUP na Soči</Header3>
            </BulletHeaderContainer>
            <Text {...theme}>
              Anino prvo stajanje na SUP je prošlo puno bolje od prvog kajaka na divljim vodama. Mir cijele okoline daje mir i duši. SUP je, bilo zbog okoline, bilo zbog osjećaja dok stojiš na njemu ušao u naša srca. Vozili smo se mirnim dijelom rijeke Soče, ali i dlaje nizvodno gdje se Soča spaja s rijekom Idrijcom. Na tom mjestu nalazi se i Most na Soči, koji smo obišli iz ove perspektive, kao i predivan zeleni dio rijeke, nalik jezeru. Potpuno drukčije od Soče koju smo do sada gledali – bez velikih brzaca, na jugu Triglavskog nacionalnog parka. I ekipa iz Soča SUP-a je za samu pohvalu, dragi par koji je svoju ljubav pretvorio u posao i to se osjeti u komunikaciji s njima.
            </Text>
            <ImgRow {...theme}>
              <ImgWrapLandscapeLeft {...theme}>
                <ImgOverlay {...theme}>Upijanje sunca</ImgOverlay>
                <ImgLandscapeHalf img={images[35]}/>
              </ImgWrapLandscapeLeft>
              <ImgWrapLandscape {...theme}>
                <ImgOverlay {...theme}>Prizori uz rijeku</ImgOverlay>
                <ImgLandscapeHalf img={images[34]}/>
              </ImgWrapLandscape>
            </ImgRow>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Boja rijeke sa slike je stvarna</ImgOverlay>
                <Img img={images[32]}/>
              </ImgWrap>
            </ImgRow>
            <Header2 {...theme}>Utorak 25.6.2019.</Header2>
            <Text {...theme}>
              Iako smo za zadnji dan planirali Bohinj i slap Savicu, odlučili smo to zbog dužine puta ostaviti za neku drugu priliku. Stoga smo se za kraj našeg uspješnog 6-dnevnog kampiranja odlučili počastiti kupanjem u ledenoj vodi velikih korita rijeke Soče. Iako smo znali da je hladno, kristalno čista voda i njena predivna smaragdna boja, bile su previše primamljive te smo odlučili dopustiti nogama da nam utrnu i preći vlastite granice. Nekoliko skokova, puno zaveslaja uzvodno, tek koji nizvodno i malo grijanja na suncu bilo je savršen kraj naše male avanture. Koja, kako se priča ima puni potencijal preći u tradiciju. Put smo nastavili kroz Ljubljanu, i kratko stajanje, tek toliko da nas postepeno vrati u civilizaciju.
            </Text>
            <ImgRow {...theme}>
              <ImgWrapPortraitLeft {...theme}>
                <ImgOverlay {...theme}>Ah ta boja</ImgOverlay>
                <ImgPortraitHalf img={images[38]}/>
              </ImgWrapPortraitLeft>
              <ImgWrapPortrait {...theme}>
                <ImgOverlay {...theme}>Mjesto idealno za kupanac</ImgOverlay>
                <ImgPortraitHalf img={images[39]}/>
              </ImgWrapPortrait>
            </ImgRow>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Sjedni tu da te slikam, dobra je pozadina</ImgOverlay>
                <Img img={images[36]}/>
              </ImgWrap>
            </ImgRow>
            <ImgRow {...theme}>
              <ImgWrap>
                <ImgOverlay {...theme}>Jedna za kraj...</ImgOverlay>
                <Img img={images[37]}/>
              </ImgWrap>
            </ImgRow>
            <TextIntro {...theme}>
              Često poželimo ići u daleke i neobične krajeve, a zapravo nas baš tu, iza ugla, čekaju neke od najljepših prirodnih ljepota ovoga planeta.
            </TextIntro>
          </CenterContainer>
        </OuterContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

export default Blogs
