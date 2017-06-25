let Bakteriler = [];

//obje name kisminda obje kullanma
//obje name kisminda array kullanma

/*
Zorunlu Alanlar
CinsAdi
TurAdi
Gram
Shape
Solunum
Hareket

*/

/*
Yazmak yerine bos birak: 
Kapsulsuz
*/
//°C

let Aciklamali = function (Name, Aciklama) {
  return {Name,Aciklama};
}





//Serratia
Bakteriler.push({
  AileAdi: "Enterobacteriaceae",
  CinsAdi: "Serratia",
  TurAdi: "marcescens",
  
  Gram: "Negative",
  Shape:  "Kokobasil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Katalaz","DNAaz","Lipaz","Gelatinaz"],
  Hareket: "Hareketli",
  Antijenler: ["H" , "O"],
  KulturOrtami: [{
    Name: "MacConkey Agar",
    Aciklama: "Laktoz Fermente Etmez"
  }],
  Direnc : ["Vankomisin","Kolistin"],
  VirualanFaktorler: {Name: "Flagella", Aciklama: "Peritrichous"},
  Aciklama : [{Name:"Kirmizi Pigment", Aciklama: ["Tum suslari uretmeyebilir","Pembe Pigment uretebilir"]},"Burda Yeterince Bilgi Henuz Yok","Bazi Turlerin Kapsulu olabilir"],
});
Bakteriler.push({
  AileAdi: "Enterobacteriaceae",
  CinsAdi: "Serratia",
  TurAdi: "rubidaea",
  
  Gram: "Negative",
  Shape:  "Kokobasil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Katalaz","Laktoz","Dnaz","Lipaz","Gelatinaz"],
  Hareket: "Hareketli",
  Antijenler: ["H" , "O"],
  KulturOrtami: [{
    Name: "MacConkey Agar",
    Aciklama: "Laktoz Fermente Eder"
  }],
  Direnc : ["Vankomisin","Kolistin"],
  VirualanFaktorler: {Name: "Flagella", Aciklama: "Peritrichous"},
  Aciklama : ["Kirmizi Pigment","Firsatci Enfeksiyon Yapabilir","Burda Yeterince Bilgi Henuz Yok"],
});

//Citrobacter
Bakteriler.push({
  AileAdi: "Enterobacteriaceae",
  CinsAdi: "Citrobacter",
  TurAdi: "koseri",
  
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Aerob_Ve_Fakultatif_Anaerob",
  Enzimler: ["Katalaz","Laktoz","Indol"],
  Hareket: "Hareketli",
  Antijenler: ["H" , "O"],
  KulturOrtami: [{
    Name: "MacConkey Agar",
    Gorunus: ["Mukoid","Puturlu"],
    Aciklama: ["Laktoz Fermente Eder","Mukoid veya Puturlu gorunebilir"]
  }],
  Direnc : ["Vankomisin"],
  Duyarlilik: "Kolistin",
  VirualanFaktorler: {Name: "Flagella", Aciklama: "Peritrichous"},
  Aciklama : ["Karbon kaynagi olarak sadece Sitrat kullanabilir","Normal Florada Bulunur?","Firsatci Enfeksiyon Yapabilir","Burda Yeterince Bilgi Henuz Yok"],
});
Bakteriler.push({
  AileAdi: "Enterobacteriaceae",
  CinsAdi: "Citrobacter",
  TurAdi: "freundii",
  
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Katalaz","Laktoz"],
  Hareket: "Hareketli",
  Antijenler: ["H" , "O"],
  KulturOrtami: [{
    Name: "MacConkey Agar",
    Gorunus: ["Mukoid","Puturlu"],
    Aciklama: ["Laktoz Fermente Eder","Mukoid veya Puturlu gorunebilir","Tekli yada Ciftli olabilir"]
  }],
  Direnc : ["Vankomisin"],
  Duyarlilik: "Kolistin",
  VirualanFaktorler: {Name: "Flagella", Aciklama: "Peritrichous"},
  Aciklama : ["Karbon kaynagi olarak sadece Sitrat kullanabilir","Normal Floarada Bulunur",
  "Azot Dongusunde Onemli","Vucut direnci dusuk kisilerde ve premature bebeklerde enfeksiyon",
  "En onemli Citrobacter","Burda Yeterince Bilgi Henuz Yok"],
});


//Rickettsia
Bakteriler.push({
  AileAdi: "Rickettsiaceae",
  CinsAdi: "Rickettsia",
  TurAdi: "prowazekii",
  Gram: "Negative",
  Shape:  {Name: "Basil", Aciklama: ["Pleomorfik","Gram Boyasi Ile Zayif Boyanir","Giemsa Ile Iyi Boyanir"]},
  Solunum: "Aerob",
  Hareket: "Hareketsiz",
  Duyarlilik: ["Kloramfenikol","Tetrasiklin"],
  Bulasma: ["Artropodlar"],
  Vektor: {Name:"Insan Vucut Bitleri", Kaynak:"Insan"},
  Hastaliklar: [{Name:"Epidemik Tifus",
                Aciklama: ["Diger isimleri: Klasik Tifus, Bit Tifusu, Lekeli Humma","Letalite 40% i bulabilir","Kulucka 1 hafta"],
                Belirtiler: [{Name:"Bas Agrisi", Aciklama:"Ani Baslar"}, 
                              {Name:"Ates", Aciklama: "Hizla 40°C a cikar ve dusmez"},
                              {Name:"Dokuntu",Aciklama:["5. Gunde Aksiller bolge ve Govdenin ust kisminda","El ayasi, Ayak tabani ve Yuz haric tum vucutta","Basinca Kaybolmaz"]}]}, 
                {Name:"Brill-Zinsser Hastaligi",Aciklama:"Onceden R. prowazekii infeksiyonu gecirmis kisilerde yillar sonra gelisen, hafif epidemik tifus bulgulu hastalik"}],
  
  Aciklama : ["Tifus Grubu","Zorunlu Hucre Ici Parazit","RNA ve DNA Vardir","Enzim Sistemleri Vardir",
                "Yasam Sikluslari Memelilerde Ve Artropodlarda","Dis Ortam Kosullarina Duyarlilar",
                "Weil-Felix genellikle Negatiftir", 
                 {Name:"Asi var", Aciklama:"Sadece Risk Gruplarina"}],
  
});
Bakteriler.push({
  AileAdi: "Rickettsiaceae",
  CinsAdi: "Rickettsia",
  TurAdi: "typhi",
  Gram: "Negative",
  Shape:  {Name: "Basil", Aciklama: ["Pleomorfik","Gram Boyasi Ile Zayif Boyanir","Giemsa Ile Iyi Boyanir"]},
  Solunum: "Aerob",
  Hareket: "Hareketsiz",
  Duyarlilik: ["Kloramfenikol","Tetrasiklin"],
  Bulasma: ["Artropodlar"],
  Vektor: {Name:"Pire", Kaynak:"Sican"},
  Hastaliklar: {Name:"Murine Typhus",Aciklama:"Belirtileri Epidemik Tifuse Benzer Ama Dokuntu El Ayasi, Ayak Tabani ve Yuzde de Gorulur"},
  Aciklama : ["Tifus Grubu","Zorunlu Hucre Ici Parazit","RNA ve DNA Vardir","Enzim Sistemleri Vardir",
                "Yasam Sikluslari Memelilerde Ve Artropodlarda","Dis Ortam Kosullarina Duyarlilar"],
});
Bakteriler.push({
  AileAdi: "Rickettsiaceae",
  CinsAdi: "Rickettsia",
  TurAdi: "rickettsii",
  Gram: "Negative",
  Shape:  {Name: "Kokobasil", Aciklama: ["Gram Boyasi Ile Zayif Boyanir","Giemsa Ile Iyi Boyanir"]},
  Solunum: "Aerob",
  Hareket: "Hareketsiz",
  Duyarlilik: ["Doksisiklin","Kinolonlar"],
  Bulasma: ["Artropodlar"],
  Vektor: {Name:"Kene", Kaynak:["Infekte Kemirgenler","Keneler"]},
  Hastaliklar: {Name:"Kayalik Daglar Benekli Atesi",
                Belirtiler: ["Ates","Titreme","Eklem Agrisi","Kas Agiris","Gucsuzluk","Dokuntuler",
                                Aciklamali("Bas Agrisi","Siddetli"),Aciklamali("Lenfadenopati","Bolgesel"),
                                Aciklamali("Nebde Dokusu",["Isirik Bolgesinde","Siyah Benek-Tache Noir"])],
                Aciklama:"Infeksiyon Cesitli Organlari Tutabilir, Bu Sebeple Farkli Bulgular Yapabilir"},
  Aciklama : ["Benekli Ates Grubu","Zorunlu Hucre Ici Parazit","En Patojenik Rickettsia Turu","RNA ve DNA Vardir","Enzim Sistemleri Vardir",
                "Yasam Sikluslari Memelilerde Ve Artropodlarda","Dis Ortam Kosullarina Duyarlilar"],
});
Bakteriler.push({
  AileAdi: "Rickettsiaceae",
  CinsAdi: "Rickettsia",
  TurAdi: "akari",
  Gram: "Negative",
  Shape:  {Name: "Kokobasil", Aciklama: ["Gram Boyasi Ile Zayif Boyanir","Giemsa Ile Iyi Boyanir"]},
  Solunum: "Aerob",
  Hareket: "Hareketsiz",
  Duyarlilik: ["Doksisiklin","Kinolonlar"],
  Bulasma: ["Artropodlar"],
  Vektor: {Name:"Akarlar", Kaynak:["Infekte Kemirgenler"]},
  Hastaliklar: {Name:"Rickettsia Cicegi",
                Belirtiler:["Ates","Dokuntuler"],
                Aciklama:["Infeksiyon Cesitli Organlari Tutabilir, Bu Sebeple Farkli Bulgular Yapabilir","Hafif Gecirilen Bir Hastaliktir"]},
  Aciklama : ["Benekli Ates Grubu","Zorunlu Hucre Ici Parazit","En Patojenik Rickettsia Turu","RNA ve DNA Vardir","Enzim Sistemleri Vardir",
                "Yasam Sikluslari Memelilerde Ve Artropodlarda","Dis Ortam Kosullarina Duyarlilar","Weil-Felix Negatiftir"],
});
Bakteriler.push({
  AileAdi: "Rickettsiaceae",
  CinsAdi: "Rickettsia",
  TurAdi: "conorii",
  Gram: "Negative",
  Shape:  {Name: "Kokobasil", Aciklama: ["Gram Boyasi Ile Zayif Boyanir","Giemsa Ile Iyi Boyanir"]},
  Solunum: "Aerob",
  Hareket: "Hareketsiz",
  Duyarlilik: ["Doksisiklin","Kinolonlar"],
  Bulasma: ["Artropodlar"],
  Vektor: {Name:"Keneler", Kaynak:["Infekte Kemirgenler",{Name:"Kopekler",Aciklama:"Bazen"}]},
  Hastaliklar: {Name:"Akdeniz Atesi",
                Belirtiler: ["Ates","Dokuntuler"],
                Aciklama:["Selim Bir Hastalik","Endemiktir"]},
  Aciklama : ["Benekli Ates Grubu","Zorunlu Hucre Ici Parazit","En Patojenik Rickettsia Turu","RNA ve DNA Vardir","Enzim Sistemleri Vardir",
                "Yasam Sikluslari Memelilerde Ve Artropodlarda","Dis Ortam Kosullarina Duyarlilar","Weil-Felix Negatiftir"],
});

//coxiella
Bakteriler.push({
  AileAdi: "Coxiellaceae",
  CinsAdi: "Coxiella",
  TurAdi: "burnetii",
  Gram: "Negative",
  Shape:  {Name: "Kokobasil", Aciklama: ["Gram Boyasi Ile Zayif Boyanir","Giemsa Ile Iyi Boyanir"]},
  Solunum: "Aerob",
  Hareket: "Hareketsiz",
  KulturOrtami: [{
    Name: "Axenic Culture"
  }],
  Hastaliklar: {
    Name: "Q Atesi",
    Belirtiler: ["Ates","Bas Agrisi","Eklem Agrisi","Oksuruk","Dokuntu","Menenjit Bulgulari"],
    Aciklama: ["Tum Dunyada Yaygin","Insanda Akut Veya Kronik(5%)","Genelde Ciftlik Hayvanlarindan Kaynaklanir",
                "Cok Bulasici","Lab: Trombositopeni, KC Enzimlerinde Yukselme, Eritrosit Sedimentasyonda Yukselme"],
                
  },
  Bulasma: ["Hava","Damlacik","Oral","Kene"],
  VirualanFaktorler: "Endospor",
  Aciklama : ["Zorunlu Hucre Ici","Fagolizozomlarda Yasar","Cevre Sartlarina Cok Direnclidir"],
});

//Bartonella
Bakteriler.push({
  AileAdi: "Bartonellaceae",
  CinsAdi: "Bartonella",
  TurAdi: "quintana",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Aerob",
  Hareket: "Hareketli",
  KulturOrtami: [{
    Name: "Axenic Culture"
  }],
  Hastaliklar: [{
    Name: "Siper Atesi",
    Belirtiler: [Aciklamali("Ates",["5 Gunde Bir Yukselir","Ani Ates"]),Aciklamali("Agri","Post Orbital, Tibia Ustunde ve Uzun Kemiklerde"),
                  Aciklamali("Dokuntuler","Ozellikle Govdede")],
    Aciklama: ["2-3 Hafta Kulucka","Olum Bildirilmemistir"]
  },{
    Name: "Basiller Anjiyomatosis",
    Belirtiler: "Lezyon",
    Aciklama: ["Ozellikle Immunyetmezlikli Hastalarda Gorulur","Ic Organlarda da Gorulebilir","Lezyonlar Papul, Nodul, Tumoral Olusum Sirasini izler"]
  }],
  Vektor: "Insan Vucut Biti",
  VirualanFaktorler: [Aciklamali("Flagella","Unipolar")],
  Aciklama : ["Zorunlu Hucre Ici Degildir","Dunya Geneli Yaygindir"],
});
Bakteriler.push({
  AileAdi: "Bartonellaceae",
  CinsAdi: "Bartonella",
  TurAdi: "henselae",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Aerob",
  Hareket: Aciklamali("Hareketli","Titreyerek Hareket Ettigine Dair Veri Var"),
  KulturOrtami: [{
    Name: "Axenic Culture"
  }],
  Hastaliklar: [{
    Name: "Kedi Tirmigi Hastaligi",
    Belirtiler: ["Lenfadenopati","Ates"],
    Aciklama: ["Kedi Tirmalamasiyla Bulasir","Lenfanjit Gorulmez"]
  },{
    Name: "Basiller Anjiyomatosis",
    Belirtiler: "Lezyon",
    Aciklama: ["Ozellikle Immunyetmezlikli Hastalarda Gorulur","Ic Organlarda da Gorulebilir","Lezyonlar Papul, Nodul, Tumoral Olusum Sirasini izler"]
  }],
  Aciklama : ["Zorunlu Hucre Ici Degildir","Dunya Geneli Yaygindir"],
});
//B. Baciliformis Ekle


//Ehrlichia Anaplasma Neorickettsia ekle


//Escherichia
Bakteriler.push({
  AileAdi: "Enterobacteriaceae",
  CinsAdi: "Escherichia",
  TurAdi: "coli",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Indol","Katalaz","Mannitol","Hemolizin",Aciklamali("Laktoz","Salmonella Ve Shigella dan ayirir"),Aciklamali("Sakkaroz","Bazen")],
  Hareket: ["Hareketli","Hareketsiz"],
  //?Kapsul: Aciklamali("Kapsullu","Bazilari"),
  Antijenler: ["O","K","H","P"],
  KulturOrtami: [{
    Name: "MacConkey Agar",
    Gorunus: ["S tipi"],
    Aciklama: ["Kapsullu olanlar M tipi"]
  }],
  Direnc : "Vankomisin",
  Duyarlilik: "Kolistin",
  VirualanFaktorler: ["Endotoksin",{Name: "Flagella", Aciklama: "Peritrichous"}],
  Hastaliklar: [{
    Name: "Idrar Yolu Enfeksiyonu",
  }, {
    Name: "Barsak Enfeksiyonlari",
  }, {
    Name: "Septisemi",
  }, {
    Name: "Menenjit",
  }, {
    Name: "Pnomoni",
  }],
  Aciklama : ["Normal Florada Bulunur","Nitrat Reduksiyonu Yapar","Bazi suslari kapsullu olabilir"],
});


//Proteus
Bakteriler.push({
  AileAdi: "Enterobacteriaceae",
  CinsAdi: "Proteus",
  TurAdi: "mirabilis",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Katalaz","Ureaz","H2S","Fenilalanin Deaminaz", "Hemolizin"],
  Hareket: "Hareketli",
  Antijenler: ["O","H"],
  KulturOrtami: [{
    Name: "MacConkey Agar",
    Aciklama: "Kolay Urer"
  }],
  Direnc : ["Vankomisin","Kolistin"],
  VirualanFaktorler: [{Name: "Flagella", Aciklama: "Peritrichous"}],
  Aciklama : ["Normal Florada Bulunur"],
});
Bakteriler.push({
  AileAdi: "Enterobacteriaceae",
  CinsAdi: "Proteus",
  TurAdi: "vulgaris",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Katalaz","Ureaz","H2S","Fenilalanin Deaminaz","Indol", "Hemolizin"],
  Hareket: "Hareketli",
  Antijenler: ["O","H"],
  KulturOrtami: [{
    Name: "MacConkey Agar",
    Aciklama: "Kolay Urer"
  }],
  Direnc : ["Vankomisin","Kolistin"],
  VirualanFaktorler: [{Name: "Flagella", Aciklama: "Peritrichous"}],
  Aciklama : ["Normal Florada Bulunur"],
});

//Morganella
Bakteriler.push({
  AileAdi: "Enterobacteriaceae",
  CinsAdi: "Morganella",
  TurAdi: "morganii",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Katalaz","Fenilalanin Deaminaz","Indol","Ureaz","Beta Hemoliz"],
  Hareket: "Hareketli",
  Antijenler: ["O","H"],
  KulturOrtami: [{
    Name: "MacConkey",
  }],
  Direnc : ["Vankomisin","Kolistin"],
  VirualanFaktorler: [{Name: "Flagella", Aciklama: "Peritrichous"}],
  //Aciklama : [],
});

//Providencia Ekle


//Corynebacterium
Bakteriler.push({
  AileAdi: "Corynebacteriaceae",
  CinsAdi: "Corynebacterium",
  TurAdi: "diphtheria",
  Gram: "Positive",
  Shape:  "Basil",
  Solunum: "Aerob",
  Enzimler: ["Katalaz","Beta Hemoliz"],
  Hareket: "Hareketsiz",
  KulturOrtami: [{
    Name: "Kanli Agar",
    //Aciklama: []
  }, {
    Name: "Loeffler besiyeri",
    Aciklama: ["C. diphtheria icin secicidir","Tellurit Icerir"],
  }],
  Duyarlilik: ["Vankomisin"],
  Aciklama : ["Biyotipleri Alfa Hemoliz veya Beta Hemoliz Yapabilir","Bogaz Dokusunda Kolonize Olur","Invaze Olmaz","Dolasima Gecmez","Elek Testi","Toksin Sentezi ve Salgisi Icin Lizojenik Beta Fajina Sahip Olmasi Gerekir"],
});

//Listeria
Bakteriler.push({
  AileAdi: "Listeriaceae",
  CinsAdi: "Listeria",
  TurAdi: "monocytogenes",
  Gram: "Positive",
  Shape:  "Basil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Katalaz","CAMP","Eskulin Hidroliz","Beta Hemoliz"],
  Hareket: [Aciklamali("Hareketli","22-28°C"),Aciklamali("Hareketsiz","37°C")],
  Antijenler: ["O","H"],
  KulturOrtami: [{
    Name: "Kanli Agar",
    Aciklama: ["Beta Hemoliz"]
  }],
  Duyarlilik: ["Vankomisin","Penisilin"],
  Bulasma: ["Kontamine Peynir Sebze","Transplasental","Dogum"],
  //GecmistekiIlaclar: ["onur","goktug"],
  Aciklama : ["Listeria Turlerinden Sadece L. monocytogenes ve L. ivanovii Patojeniktir"],
});

//Bacilius
Bakteriler.push({
  AileAdi: "Bacillaceae",
  CinsAdi: "Bacillus",
  TurAdi: "anthracis",
  Gram: "Positive",
  Shape:  "Basil",
  Solunum: "Aerob_Ve_Fakultatif_Anaerob",
  Enzimler: ["Katalaz"],
  Hareket: "Hareketsiz",
  Antijenler: ["K"],
  KulturOrtami: [{
    Name: "Jeloz Besiyeri",
    Gorunus: ["R tipi"],
    Aciklama: "Kapsullu olanlarda mukoid gorunum"
  }],
  Duyarlilik: ["Penisilin","Vankomisin","Lesitinaz"],
  VirualanFaktorler: ["Endospor"],
  Hastaliklar: [{
    Name: "Deri Sarbonu",
  }, {
    Name: "Akciger Sarbonu",
  }],
  Aciklama : ["Sadece virulan suslarin kapsulu var"],
});
Bakteriler.push({
  AileAdi: "Bacillaceae",
  CinsAdi: "Bacillus",
  TurAdi: "cereus",
  Gram: "Positive",
  Shape:  "Basil",
  Solunum: "Aerob_Ve_Fakultatif_Anaerob",
  Enzimler: ["Katalaz","Beta Hemoliz","Beta Laktamaz"],
  Hareket: "Hareketli",
  //Antijenler: [""],
  KulturOrtami: [{
    Name: "Jeloz Besiyeri",
    Gorunus: ["S tipi"],
    Aciklama: ["Ilk izolasyonda kanli besiyeri"]
  }],
  Direnc : ["Penisilin"],
  Duyarlilik: ["Vankomisin","Lesitinaz"],
  VirualanFaktorler: ["Endospor"],
  Aciklama : ["Jelatin hidrolizi yapar","Fenil Etil Alkolde Urer","Findik Fareleri Icin Patojen Degil"],
});

//Pseudomonas
Bakteriler.push({
  AileAdi: "Pseudomonadaceae",
  CinsAdi: "Pseudomonas",
  TurAdi: "aeruginosa",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Aerob",
  Enzimler: ["Katalaz","Oksidaz","Beta Hemoliz"],
  Hareket: "Hareketli",
  //Antijenler: [],
  KulturOrtami: [{
    Name: "MacConkey Agar",
    Gorunus: ["Sari Yesil"],
    //Aciklama: []
  }],
  Direnc : ["C390","Vankomisin"],
  Duyarlilik: ["Kolistin","Kotrimoksazol"],
  VirualanFaktorler: [Aciklamali("Flagella","Unipolar")],
  Aciklama : ["Fluoresent Grup","Firsatci Patojendirler"],
});

//Acinetobacter
Bakteriler.push({
  AileAdi: "Moraxellaceae",
  CinsAdi: "Acinetobacter",
  TurAdi: "baumannii",
  Gram: "Negative",
  Shape:  "Kokobasil",
  Solunum: "Aerob",
  Enzimler: ["Katalaz"],
  Hareket: "Hareketli",
  Antijenler: ["K"],
  KulturOrtami: [{
    Name: "MacConkey Agar",
    //Gorunus: [],
    //Aciklama: []
  }],
  Direnc : ["Vankomisin","Penisilin","1. Kusak Sefalosporin","2. Kusak Sefalosporin","Florokinolon"],
  Duyarlilik: ["Kolistin"],
  VirualanFaktorler: [Aciklamali("Fimbriya","Polar Fimbriya")],
  Aciklama : ["Saglikli Insanlarda 25% Ihtimalle Deride, 7% Ihtimalle Bogazda Bulunur"],
});

//Burkholderia
Bakteriler.push({
  AileAdi: "Burkholderiaceae",
  CinsAdi: "Burkholderia",
  TurAdi: "pseudomallei",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Aerob",
  Enzimler: ["Katalaz","Oksidaz"],
  Hareket: "Hareketli",
  //Antijenler: [],
  KulturOrtami: [{
    Name: "Asdown Agar",
    Gorunus: ["Cornflower Head Morphology"],
    Aciklama: ["Secici Agar"]
  }, {
    Name: "MacConkey Agar",
  }],
  Direnc : ["Kolistin"],
  //Duyarlilik: [],
  VirualanFaktorler: [Aciklamali("Fimbriya","Polar Fimbriya")],
  //Aciklama : [],
});

//Stenotrophomonas maltophilia ekle

//Clostridium
Bakteriler.push({
  AileAdi: "Clostridiaceae",
  CinsAdi: "Clostridium",
  TurAdi: "tetani",
  Gram: Aciklamali("Positive","24 Saat Inkubasyondan Sonra Negatif Olur"),
  Shape:  "Basil",
  Solunum: "Anaerob",
  Enzimler: ["Beta Hemoliz","Lesitinaz","CAMP"],
  Hareket: "Hareketsiz",
  //Antijenler: [],
  KulturOrtami: [{
    Name: "Kanli Agar",
    Gorunus: ["Beta Hemoliz"],
    //Aciklama: []
  }],
  Direnc : ["Kolistin"],
  Duyarlilik: ["Vankomisin"],
  VirualanFaktorler: ["Endospor","Toksin"],
  //Aciklama : [],
});


//Staphylococcus
Bakteriler.push({
  AileAdi: "Staphylococcaceae",
  CinsAdi: "Staphylococcus",
  TurAdi: "aureus",
  Gram: "Positive",
  Shape:  Aciklamali("Stafilokok","Uzum Salkimi Goruntusu"),
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Katalaz","Beta Hemoliz","Staphaurex","Koagulaz","DNAaz"],
  Hareket: "Hareketsiz",
  //Antijenler: [],
  KulturOrtami: [{
    Name: "Kanli Agar",
    Gorunus: ["Beta Hemoliz Yapar"],
    //Aciklama: []
  }, {
    Name: "Basit Besiyeri",
  }, {
    Name: "MacConkey Agar",
  }],
  //Direnc : [],
  //Duyarlilik: [],
  //VirualanFaktorler: [],
  Aciklama : ["Altin Sarisi Pigmenti Vardir","Sporsuz Bakteriler Icinde En Dayaniklilarindandir","Henuz Yeterli Bilgi Yok"],
});


//Streptococcus
Bakteriler.push({
  AileAdi: "Streptococcaceae",
  CinsAdi: "Streptococcus",
  TurAdi: "pyogenes",
  Gram: "Positive",
  Shape:  "Streptokok",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Beta Hemoliz","Pyrase"],
  Hareket: "Hareketsiz",
  Antijenler: ["Hucre Duvarinda A"],
  KulturOrtami: [{
    Name: "Kanli Agar",
    Gorunus: ["Beta Hemoliz"],
    //Aciklama: []
  }],
  //Direnc : [],
  Duyarlilik: ["Vankomisin", "Penisilin"],
  //VirualanFaktorler: [],
  Aciklama : ["Pyojenik Grup"],
});
Bakteriler.push({
  AileAdi: "Streptococcaceae",
  CinsAdi: "Streptococcus",
  TurAdi: "pneumoniae",
  Gram: "Positive",
  Shape:  "Diplokok",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Safrada Erir",Aciklamali("Alfa Hemoliz","Anaerobik Ortamda"),Aciklamali("Beta Hemoliz",["Aerobik Ortamda","?"])],
  Hareket: "Hareketsiz",
  //Antijenler: [],
  KulturOrtami: [{
    Name: "Kanli Agar",
    Gorunus: ["Alfa Hemoliz"],
    //Aciklama: []
  }],
  //Direnc : [],
  Duyarlilik: ["Optokin","Vankomisin"],
  //VirualanFaktorler: [],
  //Aciklama : [],
});


//Haemophilus
Bakteriler.push({
  AileAdi: "Pasteurellaceae",
  CinsAdi: "Haemophilus",
  TurAdi: "influenzae",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: ["Katalaz","Oksidaz"],
  Hareket: "Hareketsiz",
  //Antijenler: [],
  KulturOrtami: [{
    Name: "Kanli Agar",
    //Gorunus: [],
    Aciklama: ["S. aureus un Hemoliz Alaninda Cogalir","V Faktoru Gerekir"]
  }, {
    Name: "Cukulatali Agar",
    Aciklama: ["X ve V Faktorlerini Icerir"],
  }],
  Direnc : ["Vankomisin"],
  Duyarlilik: ["Kolistin"],
  //VirualanFaktorler: [],
  Aciklama : ["MacConkey Agar da Cogalmaz"],
});



/*Bakteriler.push({
  AileAdi: "Pasteurellaceae",
  CinsAdi: "Haemophilus",
  TurAdi: "haemolyticus",
  Gram: "Negative",
  Shape:  "Basil",
  Solunum: "Fakultatif_Anaerob",
  Enzimler: [],
  Hareket: "",
  Antijenler: [],
  KulturOrtami: [{
    Name: "",
    Gorunus: [],
    Aciklama: []
  }],
  Direnc : [],
  Duyarlilik: [],
  VirualanFaktorler: [],
  Aciklama : [],
});*/


/*
Bakteriler.push({
  AileAdi: "",
  CinsAdi: "",
  TurAdi: "",
  Gram: "",
  Shape:  "",
  Solunum: "",
  Enzimler: [],
  Hareket: "",
  Antijenler: [],
  KulturOrtami: [{
    Name: "",
    Gorunus: [],
    Aciklama: []
  }],
  Direnc : [],
  Duyarlilik: [],
  VirualanFaktorler: [],
  Aciklama : [],
});


*/
/*
Bakteriler.sort((a, b) => {
  let a1 = a.CinsAdi.toLowerCase();
  let b1 = b.CinsAdi.toLowerCase();
  if(a1 < b1) return -1;
  if(a1 > b1) return 1;
  if(a1 == b1) {
    if(typeof a.SubTur !== "undefined") {
      if(typeof b.SubTur !== "undefined") {
        return 0;
      } else {
        return -1;
      }
    }
    if(typeof b.SubTur !== "undefined") {
      if(typeof a.SubTur !== "undefined") {
        return 0;
      } else {
        return 1;
      }
    }
  }
});

*/
















