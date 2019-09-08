import React from 'react'
import styled from 'styled-components'
import { HeaderImg, Img } from './components'
import { Star } from '../../images'

const Blogs = () => {
  const images = [
    { id: 0, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/1.jpg` },
    { id: 1, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/2.jpg` },
    { id: 2, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/3.jpg` },
    { id: 3, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/4.jpg` },
    { id: 4, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/5.jpg` },
    { id: 5, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/6.jpg` },
    { id: 6, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/7.jpg` },
    { id: 7, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/8.jpg` },
    { id: 8, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/9.jpg` },
    { id: 9, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/10.jpg` },
    { id: 10, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/11.jpg` },
    { id: 11, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/12.jpg` },
    { id: 12, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/13.jpg` },
    { id: 13, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/14.jpg` },
    { id: 14, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/15.jpg` },
    { id: 15, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/16.jpg` },
    { id: 16, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/17.jpg` },
    { id: 17, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/18.jpg` },
    { id: 18, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/19.jpg` },
    { id: 19, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/20.jpg` },
    { id: 20, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/21.jpg` },
    { id: 21, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/22.jpg` },
    { id: 22, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/23.jpg` },
    { id: 23, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/24.jpg` },
    { id: 24, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/25.jpg` },
    { id: 25, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/26.jpg` },
    { id: 26, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/27.jpg` },
    { id: 27, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/28.jpg` },
    { id: 28, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/29.jpg` },
    { id: 29, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/30.jpg` },
    { id: 30, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/31.jpg` },
    { id: 31, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/32.jpg` },
    { id: 32, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/33.jpg` },
    { id: 33, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/34.jpg` },
    { id: 34, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/35.jpg` },
    { id: 35, src: `${process.env.REACT_APP_SERVER}/images/travels/soca/36.jpg` },
  ]
  return (
    <Container>
      <HeaderImg />
      <TextContainer>
        <Header>
          Kampiranje u Sloveniji
        </Header>
        <TextCenterContainer>
        <Text style={{ 'font-style': 'oblique' }}>
          Svaka prilika za produženi vikend se mora dobro iskoristiti po pitanu putovanja. Tako smo mi za ovaj odlučili skočiti do susjedne nam Slovenije. Htjeli smo nešto, blizu, zanimljivo, u prirodi i odluka je pala na predivnu dolinu rijeke Soče. Ovo je bilo naše prvo kampiranje duže od vikenda i uzbuđenje je bilo na vrhuncu. Iako danas zbog slika predivnih lokacija koje su nam lako dostupne na internetu možemo dobro isplanirati put, isto tako možemo znati točno što nas čeka i smanjiti si iznenađenje. No, unatoč tome, ljepota ovog mjesta je neopisiva i nijedna slika ne može u potpunosti prenijeti osjećaj koji imaš kada si tamo.
        </Text>
        <Text>
          Naš put je započeo u četvrtak u 8 (čitaj 9 ujutro), s pripremljenom kavom, smootijem, limunadom, sendvičima, prepunim autom (stvari, ali i dobre volje). Zvjezdice koje Ana pripremi na karti su bile tu, kao i okvirna ideja što sve želimo vidjeti, ali smo ostavili i dio spontanosti i planiranja u hodu. Što se, kao i obično pokaže kao dobra odluka, ako zbog ničeg drugog onda zbog vremenskih (ne)prilika. Opisan po danima i lokacijama, naš put je izgledao ovako:
        </Text>
        <Text>
          <TextHeader1>Četvrtak 20.6. 2019.</TextHeader1>
          <BulletContainer><StarBullet/><TextHeader2>Jezero Bled</TextHeader2></BulletContainer>
          Kratka pauza za šetnju, sladoled, odmor na klupici i uživanje u pogledu, no ovo nam je iako lijepo bilo za taj trenutak ipak preturističko mjesto te smo htjeli brzo nastaviti na naše sljedeće lokacije, u čemu nam je pomogla i kiša koja nas je dodatno požurila.
        </Text>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Vintgar Gorges</TextHeader2></BulletContainer>
          Slučajno otkrivena lokacija taman na našem putu, 4km od Bleda  vodi mala cesta do korita dugih 1.6km. Parking je besplatan, no ulaz se plaća 10€ po osobi. Kiša će valjda stati. I je, nakon polusatnog spavanja u autu i nakon odluke da nam kiša možda ipak ne može ništa. Tako je naša šetnja u jednom smjeru bila popraćena kapljicama kiše, a u drugom smjeru zrakama sunca. Nije loše vidjeti obje perspektive. Predivno uređena šetnica vodi do slapa Šum i omogućuje divne prizore cijelim putem. Prve postaje su uspješno odrađene i spremni smo za dalje.
        </Text>
        <ImgContainer>
          <Img img={images[13]} right={true}/>
          <Img img={images[14]} left={true}/>
        </ImgContainer>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Jezero Jasna</TextHeader2></BulletContainer>
          Sljedeća postaja je bilo jezero Jasna kod Kranjske gore, malo jezero sa šetnicom i pogledom na predivne planine Julijskih Alpi. Na jezeru je dovoljno zadržati se 30-ak minuta i upiti svu ljepotu prirode koja se nalazi pored.
        </Text>
        <Img img={images[18]}/>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Jezero Zelenci</TextHeader2></BulletContainer>
        Prije odlaska u kamp u dolini Soče napravili smo 10 minutu vožnju do predivnog jezera Zelenci, koje je ujedno i izvor dobro nam poznate rijeke Save. Izvor je čista suprotnost onoga što se u našim glavama javi kad čujemo riječ Sava. Čist je, bistar, u predivnom malo okruženju, a mjesto je kao stvoreno za kratki predah i divljenje prirodi.
        </Text>
        <Img img={images[17]}/>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Vršič pass</TextHeader2></BulletContainer>
        Naša odluka je bila da do doline Soče idemo Vršič cestom, iako duža i prepuna je predivnih prizora, što nam je ipak bio glavni cilj ovog putovanja. Cesta je duga 24km i ima 50 označenih velikih zavoja koji daju dodatnu čar cijelom putovanju.
        </Text>
        <Img img={images[15]}/>
        <Img img={images[16]}/>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Kamp Vodenca</TextHeader2></BulletContainer>
        Kao smještaj nas je dočekala prostrana, zelena livada okružena planinama. Savršeno mjesto za naše prvo duže kampiranje. Uredan i pregledan kamp, savršen za bijeg u prirodu.
        </Text>
        <Text>
          <TextHeader1>Petak 21.6.2019.</TextHeader1>
          <BulletContainer><StarBullet/><TextHeader2>Rafting na Soči</TextHeader2></BulletContainer>
          Naše prvo rafting iskustvo nije moglo imati ljepšu lokaciju. Odlična ekipa iz SportMix Boveca nam je pripremila odličnu turu i atmosferu. Moramo pohvaliti njihovu brigu i trud oko nas, a dodatni plus je što se na kraju dobiju i besplatne slike te cijela avantura ostane zabilježena.
        </Text>
        <Img img={images[19]} />
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Slap Virje</TextHeader2></BulletContainer>
          Čekajući na naš temin za rafting, otišli smo u posjet obližnjem slapu Virje. Do njega je potrebno hodati cca 5min pješke i preporuka je stići malo ranije da se izbjegne veća gužva koja se stvori oko njega.
        </Text>
        <Img img={images[6]} />
        <Text>
          <TextHeader1>Subota 22.6.2019.</TextHeader1>
          U subotu nas je dočekala kiša te smo odlučili prepustiti se vremenskim prilikama i prvi dio dana provesti pod šatorom.
          Nismo očajavali. Dapače odmor na odmoru je dobro došao, a i sve je stvar perspektive.
          Tako smo pretvorili to u pozitivno iskustvu.
          Izguglali možemo li kuhati kavu u šatoru, jer kava je ipak najvažnija. Ostatak nam  je dana u šatoru bilo uživanje u trenutku.
        </Text>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Slap Kozjak</TextHeader2></BulletContainer>
          Popodne nam je ipak dozvolilo skitanje pa smo se odlučili za vožnju do Kobarida.
          Tamo smo otišli do slapa Kozjak koji se nalazi na rubu Triglavskog Nacionalnog Parka.
          Šetnja traje ukupno oko 1h i 15minuta. Kao i na ostalim dijelovima na kojima smo bili, šetnica je jako uređena, pogled na svakom koraku ostavlja bez daha, a slapu se možeš samo diviti.
        </Text>
        <Img img={images[5]} />
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Napoleonov most</TextHeader2></BulletContainer>
          Kratka stanice između centra Kobarida i parkinga za početak šetnje prema slapu Kozjak. Pruža jedan od ljepših pogleda na rijeku Soču.
        </Text>
        <ImgContainer>
          <Img img={images[20]} right={true}/>
          <Img img={images[21]} left={true}/>
        </ImgContainer>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Slap Boka</TextHeader2></BulletContainer>
          Na povratku u kamp izdvojili smo još 30 minuta za kratko stajanje na vidikovcu za slap Boka. Slika s naslovnice ovog bloga prikazuje svu moć i ljepotu tog slapa. Svakako vrijedno mjesto za pogledati, a najhrabriji i oni željni avanture mogu se odlučiti i na dužu rutu hodanja do samog slapa. Mi smo ga ovaj pput posjetili samo s udaljenosti.
        </Text>
        <Img img={images[24]} />
        <Text>
          <TextHeader1>Nedjelja 23.6.2019.</TextHeader1>
          Nedjelja je bila dan za jedno zanimljivo iskustvo. Odlučili smo se upisati u jednodnevnu školu kajaka i  isprobati ga, ali na rijeci, divljoj rijeci. Ana i dalje nije sigurna što misli o tom iskustvu, osim što joj je drago da je preživjela. Kada se nakon 3 sekunde u kajaku prevrneš, zaboraviš sve upute o tome kako da se izvučeš pa pomahnitalo uzimaš zrak i čekaš da netko dođe do tebe, nije ti baš svejedno i nisi siguran želiš li to iskustvo ponoviti. Tj. želiš, ali možda u nekim sigurnijim i mirnijim uvjetima. Ipak, odustajanja nije bilo, staza je uspješno prijeđena, a rijeka Soča i ovaj put, baš kao i na raftingu ostavlja bez daha. Dobro je sve.
          Samo, nakon ovoga, jedino što smo mogli je zaspati u kampu i prepustiti se slatkom osjećaju umora i ponosa.
        </Text>
        <ImgContainer>
          <Img img={images[22]} right={true}/>
          <Img img={images[23]} left={true}/>
        </ImgContainer>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Šunikov vodni gaj</TextHeader2></BulletContainer>
          Ova zvjezdica se nalazi kod Lepene i možda je najmanje turistička od svih, a jednako lijepa. Ima nekoliko stajališta-vidikovaca poput brdašaca koji prelaze bazene i slapove, ostatke starog mlina te moćna i velika stabla, kao i mostić preko kojeg se prelazi tijekom šetnje.
        </Text>
        <ImgContainer>
          <Img img={images[25]} right={true}/>
          <Img img={images[26]} left={true}/>
        </ImgContainer>
        <Img img={images[27]}/>
        <Img img={images[28]}/>
        <Text>
          <TextHeader1>Ponedjeljak 24.6.2019.</TextHeader1>
          Ponedjeljak je bio još jedan putni dan, gdje smo odlučili isprobati kako je to SUP-ati. Rezervirali smo 2 SUP-a za 15h u Soča SUP-u kod Mosta na Soči (rezervacija se obavlja telefonski), a u međuvremenu smo obišli obližnje pripremljene zvjezdice.
        </Text>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Tolminska korita</TextHeader2></BulletContainer>
          Tolminska korita su još jedna posebna priča, još jedna slična, a posebna šetnica i još jedan pogled u ljepotu oko sebe. Uz korita je besplatan parking, iako dosta popunjen, ulaznica je 5 eura, a šetnja od otprilike sat vremena puna prizora za prepričavanje. Čak je moguće piti vodu izravno iz stijena. Ne sjećamo se kada smo zadnji put to napravili. Osjećaj je super, a voda osvježavajuća.
        </Text>
        <ImgContainer>
          <Img img={images[29]} right={true}/>
          <Img img={images[30]} left={true}/>
        </ImgContainer>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Ušče rijeke Tolminke u Soču</TextHeader2></BulletContainer>
          Prije SUP-a čekalo nas je Sotočje, mjesto za kupanje, plažu, još jedan ručak od tjestenine i kukuruza i radikalne odluke o kupanju u hladnoj vodi. Ali kada je okoliš toliko privlačan nema druge! Mjesto bez puno ljudi, s dosta mjesta za osamu i mir i s lijepim prilazima vodi. A oko nas 2 rijeke, neobičnih boja…
        </Text>
        <Img img={images[31]}/>
        <Text>
          <BulletContainer><StarBullet/><TextHeader2>Most na Soči + SUP</TextHeader2></BulletContainer>
          Anino prvo stajanje na SUP je prošlo puno bolje od prvog kajaka na divljim vodama. Mir cijele okoline daje mir i duši. SUP je, bilo zbog okoline, bilo zbog osjećaja dok stojiš na njemu ušao u naša srca. Vozili smo se mirnim dijelom rijeke Soče, ali i dlaje nizvodno gdje se Soča spaja s rijekom Idrijcom. Na tom mjestu nalazi se i Most na Soči, koji smo obišli iz ove perspektive, kao i predivan zeleni dio rijeke, nalik jezeru. Potpuno drukčije od Soče koju smo do sada gledali – bez velikih brzaca, na jugu Triglavskog nacionalnog parka. I ekipa iz Soča SUP-a je za samu pohvalu, dragi par koji je svoju ljubav pretvorio u posao i to se osjeti u komunikaciji s njima.
        </Text>
        <ImgContainer>
          <Img img={images[35]} right={true}/>
          <Img img={images[34]} left={true}/>
        </ImgContainer>
        <Img img={images[32]} right={true}/>
        <Text>
          <TextHeader1>Utorak 25.6.2019.</TextHeader1>
          Iako smo za zadnji dan planirali Bohinj i slap Savicu, odlučili smo to zbog dužine puta ostaviti za neku drugu priliku. Stoga smo se za kraj našeg uspješnog 6-dnevnog kampiranja odlučili počastiti kupanjem u ledenoj vodi velikih korita rijeke Soče. Iako smo znali da je hladno, kristalno čista voda i njena predivna smaragdna boja, bile su previše primamljive te smo odlučili dopustiti nogama da nam utrnu i preći vlastite granice. Nekoliko skokova, puno zaveslaja uzvodno, tek koji nizvodno i malo grijanja na suncu bilo je savršen kraj naše male avanture. Koja, kako se priča ima puni potencijal preći u tradiciju. Put smo nastavili kroz Ljubljanu, i kratko stajanje, tek toliko da nas postepeno vrati u civilizaciju.
          Često poželimo ići u daleke i neobične krajeve, a zapravo nas baš tu, iza ugla, čekaju jedne od najljepših prirodnih ljepota ovoga planeta.
        </Text>
      </TextCenterContainer>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`

const Header = styled.p`
  font-size: calc(2rem + 1.5vw);
  letter-spacing: 0.1vw;
  line-height: 1.2;
  font-family: 'Playfair Display';
  margin-bottom: calc(1rem + 2.5vw);
  margin-top: calc(1rem + 2.5vw);
  grid-column: 1 / 4;
`

const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(30rem, 50%) 1fr;
  gird-template-rows: auto;
  justify-items: center;
  align-items: center;
  color: #303336;
`

const TextCenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  grid-column: 2 / 3;
`

const Text = styled.p`
  font-size: calc(1rem + 0.5vw);
  letter-spacing: 0.1vw;
  font-family: 'Playfair Display';
  margin-top: calc(1.25vw);
  margin-bottom: calc(1.25vw);
  width: 100%;
  height: min-content;
  text-align: justify;
  text-justify: inter-word;
`

const TextHeader1 = styled.span`
  font-size: calc(1.4rem + 0.5vw);
  letter-spacing: 0.1vw;
  font-family: 'Playfair Display';
  font-weight: 700;
  margin-top: calc(2.5vw);
  margin-bottom: calc(2.5vw);
  font-style: oblique;
  display: block;
`

const BulletContainer = styled.div`
  display: flex;
`

const TextHeader2 = styled.span`
  font-size: calc(1.2rem + 0.5vw);
  letter-spacing: 0.1vw;
  font-family: 'Playfair Display';
  font-weight: 600;
  margin: calc(2.5vw);
`

const ImgContainer = styled.div`
  display: flex;
`

const StarBullet = styled.div`
  background-position: center;
  background-size: cover;
  background-image: url(${Star});
  width: 2vw;
  height: 2vw;
  align-self: center;
`

export default Blogs
