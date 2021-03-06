
let GetBakteriID = function (B) {
  let id = `${B.CinsAdi}-${B.TurAdi}`;
  if(typeof B.SubTur !== "undefined") {
    id += `-${B.SubTur}`;
  }
  return id;
}


let ChangeStringAt = function(all, index, newstr) {
  let newall = "";
  all.split(" ").map((e,i,arr) => {
    if(i != index) {
      newall += e + " ";
    } else {
      newall += newstr + " ";
    }
  });
  newall.trim();
  return newall;
}
let StringRemoveAt = function(all, index) {
  let newall = "";
  all.split("-").map((e,i,arr) => {
    if(i != index) {
      newall += e;
    }
    if(i != arr.length - 1 && (index == arr.length - 1 && i != arr.length - 2 )) {
      newall += "-";
    }
  });
  newall.trim();
  return newall;
}
let StringRemoveLast = function(all) {
  return StringRemoveAt(all,all.split("-").length - 1);
}

let ObjClickEkle = function (obj, text) {
  
  if(typeof Genelleme[text] != "undefined") {
    obj.onclick = function () {
      let sp = onurcan.querySelector("#smallPanel");
      if(sp.style.display == "block") {
        return;
      }
      onurcan.querySelector("#leftPanel").style.filter = "brightness(20%)";
      let genelleme = Genelleme[text];
      let infoCard = GetInfoCard();
      if(Array.isArray(genelleme)) {
        let nsocket = GetInfoField(Sozluk("Genelleme") + ": ");
        infoCard.appendChild(nsocket);
        
        for(g of genelleme) {
          nsocket.appendChild(GetTextCard(Sozluk(g)));
        }
        
      } else {
        for(let f in genelleme) {
          if(f[0] == "_") continue;
          let nsocket = GetInfoField(Sozluk(f) + ": ");
          infoCard.appendChild(nsocket);
          
          for(g of genelleme[f]) {
            nsocket.appendChild(GetTextCard(Sozluk(g)));
          }
        }
        if(typeof genelleme._images !== "undefined") {
          let imageCont = GetImageContainer();
          infoCard.appendChild(imageCont);
          for(let i of genelleme._images) {
            imageCont.appendChild(GetImage(i));
          }
        }
      }
      sp.appendChild(infoCard);
      sp.style.display = "block";
    }
  }
}
let ObjResimEkle = function (obj, path) {
  obj.onclick = function () {
    let sp = onurcan.querySelector("#smallPanel");
    if(sp.style.display == "block") {
      return;
    }
    onurcan.querySelector("#leftPanel").style.filter = "brightness(20%)";
    let infoCard = GetInfoCard();
    
    let paths = path.split("$");
    let imgCont = GetImageContainer();
    infoCard.appendChild(imgCont);
    for(p of paths) {
      imgCont.appendChild(GetImage(p));
    }
    
    
    
    sp.appendChild(infoCard);
    sp.style.top = "5%";
    sp.style.display = "block";
  }
}

let queryIndex = {};
let onurcan = {};
onurcan.querySelector = function (query) {
  if(query[0] == '#') {
    if(typeof queryIndex[query] == "undefined") {
      let q = document.querySelector(query);
      queryIndex[query] = q;
    }
    return queryIndex[query];
  } else {
    return document.querySelector(query);
  }
}


let DebugEnabled = [];
let DebugDisabled = [];
let Debug = false;
let DebugToggle = function () {
  if(!Debug) {
    document.querySelector("#titleText").innerText = "Bakteriler (Debug)";
    Debug = !Debug;
    DebugEnabled.map(e => e());
  } else {
    document.querySelector("#titleText").innerText = "Bakteriler";
    Debug = !Debug;
    DebugDisabled.map(e => e());
  }
}


let _StringIngAlfabe = function (text) {
  let ntext = "";
  for(let k = 0; k < text.length; k++) {
    if(text[k] == "ç") ntext += "c";
    else if(text[k] == "ö") ntext += "o";
    else if(text[k] == "ğ") ntext += "g";
    else if(text[k] == "ü") ntext += "u";
    else if(text[k] == "ş") ntext += "s";
    else if(text[k] == "ı") ntext += "i";
    else ntext += text[k];
  }
  return ntext;
}

let StringIngAlfabe = function (text) {

  if(Array.isArray(text)) {
  let arr = [];  
  for(let t of text) {
    arr.push(_StringIngAlfabe(t));
  }
  return arr;
    
  } else {
    return _StringIngAlfabe(text);
  }
  
  
}













