let Bakteriler = [];

//obje name kisminda obje kullanma
//obje name kisminda array kullanma

//yersinia
Bakteriler.push({
  FamilyName : "Yersinia",
  DiffName : "Pestis",
  Gram : "Negative",
  Shape : "Kokobasil",
  Aciklama : ["Kutupsal Boyanma","Kucuk"],
  Vektor : "Kemirici Piresi",
  Hastaliklar : [{
    Name : "Bubonik Veba",
    Belirtiler : ["Ates", "Lenf Bezi Sismesi","Agri", "Fistulize Gangliyon"],
    Aciklama : ["Olumcul", "Yuksek ates ve sisligin ani basladigi tek infeksiyon"],
  }, {
    Name : "Akciger Vebasi",
    Belirtiler : ["Oksuruk", "Nefes Darligi", "Siyanoz", "Balgam", "Kanli Balgam"],
    Aciklama : ["Primer : Solunum yoluyla bulasma\nSekonder : Bubonik Vebanin akcigere ulasmasi"],
  }, {
    Name : "Veba septisemisi, menenjit",
    Belirtiler : ["Ates", "Bulanti", "Kusma", "Bilinc Kaybi"],
    Aciklama : ["Olumcul"]
  }],
  Antijenler : ["VW", "F1"],
  Bulasma : ["Pire Isirmasi", "Solunum Yolu"],
  Solunum : "Fakultatif_Anaerob",
  KulturOrtami : {
    Name : "Bircok Kultur",
    Gorunus : "Sahanda Yumurta" //blacklist
  },
  Duyarlilik : [
    "Streptomisin", "Gentamisin", "Tetrasiklin",
    "Doksisiklin", "Siprofloksasin", "Kloramfenikol"
  ],
  Tedavi : "Antibiyotik"
});


//Y. Enterocolitica

Bakteriler.push({
  FamilyName : "Yersinia",
  DiffName : "Enterocolitica",
  Gram : "Negative",
  Shape : "Basil",
  Solunum : "Aerob_Ve_Fakultatif_Anaerob",
  Aciklama : ["Sogukta Urer (+4°C)","22°C de Hareketli", "Kan Bankalarinda Depolanan Kanda Cogalabilir",
                "Tedavide Antibiyoterapi onerilmez, Gerekmesi yada Septisemi Disinda"],
  Enzimler : ["Ureaz"],
  Antijenler : ["O", "H", "WH"],
  Hastaliklar : [{
    Name : "Gastroenterit",
    Belirtiler : ["Ates", "Kusma", "Ishal", "Karin Agrisi"],
  }, {
    Name : "Mezenterik Lenf Adenit"
  }],
  KulturOrtami : [{
    Name : "CIN Agar",
    Gorunus : "Bogagozu Koloni",
  }, "Kanli Agar"],
  Duyarlilik : ["Tetrasiklin", "3.Kusak Sefalosporin", "Gentamisin", "TMP-SMX", "Kloramfenikol"],
  Bulasma : ["Su", "Oral", "Hasta", "Kontamine Besin"],
});
