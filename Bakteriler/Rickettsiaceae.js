
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