

let CloseSmallPanel = function () {
  let sp = onurcan.querySelector("#smallPanel");
  onurcan.querySelector("#leftPanel").style.filter = "brightness(100%)";
  sp.style.display = "none";
  sp.style.top = "15%";
  sp.innerHTML = "";
}
//infocard olusturup left panel display html i olustur
let UnWrapField = function (val, socket) {
  if(typeof val == "string") {
    if(val.split("@").length > 1) {
      if(val.split("@")[0] == "image") {
        //image@img1.png$img2.png
        let textcard = GetTextCard(Sozluk(val.split("@")[1]));
        socket.appendChild(textcard);
        ObjResimEkle(textcard, val.split("@")[2]);
      }
    } else {
      let textcard = GetTextCard(Sozluk(val));
      socket.appendChild(textcard);
      ObjClickEkle(textcard, val);
    }
    
    
  } else if(Array.isArray(val)) {
    for(let v of val) {
      UnWrapField(v, socket);
    }
  } else if(typeof val == "object" && typeof val["Name"] !== "undefined") {
    let infoCard = GetInfoCard();
    socket.appendChild(infoCard);
    let infotextname = GetInfoField(Sozluk(val.Name),"orange");
    infoCard.appendChild(infotextname);
    ObjClickEkle(infotextname,val.Name);
    
    for(let f in val) {
      if(f == "Name") continue;
      
      let nsocket = GetInfoField(Sozluk(f) + ": ");
      infoCard.appendChild(nsocket);
      UnWrapField(val[f], nsocket);
      
    }
    
  }
}
let PremakeLeftPanel = function () {
  //premake left panel contents
  for(let B of Bakteriler) {
    let content = document.createElement("div");
    content.className = "bakteri-content";
    let rs = [];
    let rsct = 0;
    if(!ifMobile) {
      for(let k = 0; k < 3; k++) {
        let row = document.createElement("div"); 
        row.className = "bakteri-content-row";
        rs.push(row);
        content.appendChild(row);
      }
    }
    for(field in B) {
      if(field[0] == "_") {
        continue;
      }
      let fieldInfoCard = GetInfoCard(undefined,undefined,false);//ifMobile
      let socket = GetInfoField(Sozluk(field) + ": ");
      UnWrapField(B[field], socket);
      fieldInfoCard.appendChild(socket);
      if(ifMobile) {
        content.appendChild(fieldInfoCard);
      } else {
        rs[rsct].appendChild(fieldInfoCard);
        rsct = (rsct + 1) % 3;
      }
      
    }
    onurcan.querySelector("#invisiblePanel").appendChild(content);
    B._content = content;
  }
}




//filter menusundeki html i olusturur
let IndexResolver = function (obj, alanPrefix = "") {
  for(let alan in obj) {
    let alanSocket = AddCategory(alanPrefix + alan);
    for(let eleman in obj[alan]) {
      if(eleman == "_Sub") {
        if(obj[alan][eleman] && Object.keys(obj[alan][eleman]).length > 0) {
          IndexResolver(obj[alan][eleman], alanPrefix + alan + "-");
        }
        continue;
      }
      AddEleman(eleman,alanSocket, alanPrefix + alan);
    }
  }
}
//filter menusu bottom panel icin
let AllFilterElemans = [];
let binct = 0;
let AddCategory = function (name) {
  let categoryDiv = document.createElement("div");
  categoryDiv.className = "card-panel grey lighten-4 filter-category";
  let nname = "";
  let names = name.split("-");
  for(n of names) {
    nname += Sozluk(n) + " - ";
  }
  nname = nname.slice(0,nname.length - 3);
  categoryDiv.innerText = nname + ":";
  let fec = document.createElement("div");
  fec.className = "filterElemanContainer";
  categoryDiv.appendChild(fec);
  
  if(ifMobile) {
    
    if(binct == 0) {
      document.querySelector("#filterCategoryContainer").appendChild(categoryDiv);
      document.querySelector("#filterCategoryIndex1").innerText += "/" + nname;
    } else {
      document.querySelector("#filterCategoryContainer2").appendChild(categoryDiv);
      document.querySelector("#filterCategoryIndex2").innerText += "/" + nname;
    }
    
    binct = (binct + 1) % 2;
    
  } else {
    document.querySelector("#filterCategoryContainer").appendChild(categoryDiv);
  }
  
  return fec;
  
}
let AddEleman = function (name, socket, fieldName) {
  let div = document.createElement("div");
  div.className = "card-panel 0 filter-eleman orange-text text-darken-3 grey lighten-5";
  div.innerText = Sozluk(name);
  div.id = fieldName + "-" + name;
  div.onclick = function () {
    let status = this.className.split(" ")[1];
    status = parseInt(status);
    status = (status + 1) % 3;
    if(status == 0) {
      this.className = `card-panel ${status} filter-eleman orange-text text-darken-3 grey lighten-5`;
    } else if(status == 1) {
      this.className = `card-panel ${status} filter-eleman white-text green darken-2`;
    } else {
      this.className = `card-panel ${status} filter-eleman white-text red darken-4`;
    }
    FilterRule(this.id, status);
    
  }
  AllFilterElemans.push(div);
  socket.appendChild(div);
  return div;
}
let ConstructBottomPanel = function (index = TheIndex) {
  document.querySelector("#filterCategoryContainer").innerHTML = "";
  document.querySelector("#filterCategoryContainer2").innerHTML = "";
  document.querySelector("#filterCategoryIndex1").innerHTML = "";
  document.querySelector("#filterCategoryIndex2").innerHTML = "";
  
  AllFilterElemans = [];
  binct = 0;
  IndexResolver(index);
}



let BottomPanelButtonActive = false;
let BottomPanelButton = function () {
  let panel = onurcan.querySelector("#bottomPanel");
  let clear = onurcan.querySelector("#bottomPanelClear");
  let count = onurcan.querySelector("#bottomPanelCount");
  if(!BottomPanelButtonActive) {
    //panel.style.top = 0;
    setTimeout(function () {
      panel.style.transform = "translateY(-100%)";
      panel.style.webkitTransform = "translateY(-100%)";
    }, 10);
    //panel.style.display = "block";
    clear.style.display = "block";
    count.style.display = "block";
  } else {
    panel.style.transform = "translateY(0)";
    panel.style.webkitTransform = "translateY(0)";
    clear.style.display = "none";
    count.style.display = "none";
    setTimeout(function () {
      //panel.style.display = "none";
    }, 200);
    
  }
  BottomPanelButtonActive = !BottomPanelButtonActive;
}
let BottomPanelClear = function () {
  for(div of AllFilterElemans) {
    div.className = "card-panel 0 orange-text text-darken-3 grey lighten-5";
    FilterRuleQue(div.id, 0);
  }
  FilterRuleQueExec();
}



// B nin icine HTML i ekle
//{Name = "Yersinia", Bakteriler : [B,B,B], HTML : <>}
let Families = [];
let AddBacteriaToDisplay = function (B) {
  let btnHtml = `<div class="col s6" style="display:grid;" >
    <div class="card-panel aile-bakteri blue-grey darken-1" id="${GetBakteriID(B)}" onclick="ToggleBacteria(this.id,this)">
      <span class="white-text aile-bakteri-text">${B.CinsAdi[0]}. ${B.TurAdi}</span>
    </div>
  </div>`;
  
  let foundFamily = Families.find(x => x.Name == B.CinsAdi);
  if(!foundFamily) {
    foundFamily = CreateFamily(B.CinsAdi);
    let rowHtml = '<div class="row aile-row"></div>';
    onurcan.querySelector(foundFamily.HTML).innerHTML += rowHtml;
  }
  let row = onurcan.querySelector(foundFamily.HTML).querySelector(".row");
  row.innerHTML += btnHtml;
  foundFamily.VisibleCount += 1;
  B._HTML = `${GetBakteriID(B)}`;
  if(typeof B.SubTur !== "undefined") {
    row.querySelector(`#${B._HTML}`).innerHTML += `<span class="white-text aile-bakteri-text subtur">${B.SubTur}</span>`;
  }
  foundFamily.Bakteriler.push(B);
  
}
let CreateFamily = function (CinsAdi) {
  let fHtml = `<div class="card-panel aile-panel grey lighten-3" style="display:block;" id="${CinsAdi}-Panel">
                   <div class="blue-grey-text text-darken-3 aile-isim">${CinsAdi}</div>
               </div>`;
  let bp = onurcan.querySelector("#bakteriPaneli");
  bp.innerHTML += fHtml;
  let family = {
    Name : CinsAdi,
    Bakteriler : [],
    VisibleCount : 0,
    HTML : `#${CinsAdi}-Panel`
  };
  Families.push(family);
  return family;
}






document.querySelector("#searchBakteri").addEventListener("input", function (e) {
  let text = StringIngAlfabe(e.target.value).toLowerCase();
  for(B of Bakteriler) {
    //console.log(SearchIndex[GetBakteriID(B)]);
    if(SearchIndex[GetBakteriID(B)].findIndex((e,i,arr) => {
      if(e.includes(text)) {
        //console.log(e);
        return true;
      } else return false;
    }) == -1) {
      Families.find(x => x.Name == B.CinsAdi).VisibleCount += onurcan.querySelector(`#${B._HTML}`).parentElement.style.display == "none" ? 0 : -1;
      onurcan.querySelector(`#${B._HTML}`).parentElement.style.display = "none";
      
    } else {
      Families.find(x => x.Name == B.CinsAdi).VisibleCount += onurcan.querySelector(`#${B._HTML}`).parentElement.style.display == "grid" ? 0 : 1;
      onurcan.querySelector(`#${B._HTML}`).parentElement.style.display = "grid";
      
    }
  }
  for(family of Families) {
    if(family.VisibleCount == 0) {
      document.querySelector(family.HTML).style.display = "none";
    } else {
      document.querySelector(family.HTML).style.display = "block";
    }
  }
});







let leftPanelActive = false;
let leftPanelId;
let leftPanelBtn;
let leftPanelAnimating = false;
let leftPanelContent;
let ToggleBacteria = function(id,btn) {
  if(ifMobile) {//for mobile only
    if(leftPanelAnimating) return;
    if(!leftPanelActive) {
      leftPanelId = id;
      leftPanelBtn = btn;
      
      let B = Bakteriler.find(x => x.CinsAdi == id.split("-")[0] && x.TurAdi == id.split("-")[1]);
      
      let content = B._content;
      
      
      
      
      let lp = onurcan.querySelector("#leftPanel");
      onurcan.querySelector("#leftPanelSpan").innerText = B.CinsAdi + " " + B.TurAdi;
      if(typeof B.SubTur !== "undefined") {
        onurcan.querySelector("#leftPanelSpan").innerText += ` ${B.SubTur}`;
      }
      lp.appendChild(content);
      setTimeout(function () {
        lp.style.transform = "translateX(101%)";
        lp.style.webkitTransform = "translateX(101%)";
        
      }, 10);
      
    } else {
      let lp = onurcan.querySelector("#leftPanel");
      leftPanelAnimating = true;
      lp.style.transform = "translateX(0)";
      lp.style.webkitTransform = "translateX(0)";
      setTimeout(function () {
        let lp = onurcan.querySelector("#leftPanel");
        onurcan.querySelector("#invisiblePanel").appendChild(lp.querySelector(".bakteri-content"));
        leftPanelAnimating = false;
      }, 200);
    }
    leftPanelActive = !leftPanelActive;
  }
  else {
    if(leftPanelContent) {
      onurcan.querySelector("#invisiblePanel").appendChild(leftPanelContent);
    }
    let B = Bakteriler.find(x => x.CinsAdi == id.split("-")[0] && x.TurAdi == id.split("-")[1]);
    
    let content = B._content;
    
    let lp = onurcan.querySelector("#leftPanel");
    onurcan.querySelector("#leftPanelSpan").innerText = B.CinsAdi + " " + B.TurAdi;
    if(typeof B.SubTur !== "undefined") {
      onurcan.querySelector("#leftPanelSpan").innerText += ` ${B.SubTur}`;
    }
    lp.appendChild(content);
    leftPanelContent = content;
  }
}

let RightMenuActive = false;
let ToggleRightMenu = function () {
  let rm = onurcan.querySelector("#rightPanel");
  //3let rb = onurcan.querySelector("#rightPanelBack");
  if(!RightMenuActive) {
    rm.style.display = "block";
    document.querySelector("#notificationCircle").style.display = "none";
    //rb.className = "fa fa-2x fa-chevron-right white-text";
    setTimeout(function () {
      rm.style.transform = "translateX(-100%)";
      rm.style.webkitTransform = "translateX(-100%)";
    }, 10);
  } else {
    rm.style.transform = "translateX(0)";
    rm.style.webkitTransform = "translateX(0)";
    //rb.className = "fa fa-2x fa-rotate-180 fa-chevron-right white-text";
    setTimeout(function () {
      rm.style.display = "none";
      //rb.className = "fa fa-2x fa-chevron-right white-text";
    }, 200);
  }
  RightMenuActive = !RightMenuActive;
}

if(!ifMobile) {
  document.querySelector("#bottomPanelButton").style.display = "none";
  document.querySelector("#filterCategoryContainer2").style.display = "none";
  document.querySelectorAll(".filterCategoryIndex")[0].style.display = "none";
  document.querySelectorAll(".filterCategoryIndex")[1].style.display = "none";
}



let RefreshArayuz = function () {
  
}





let GetInfoField = function (text, color = "blue-grey") {
  let card = document.createElement("div");
  card.className = `${color}-text text-darken-3 card-field`;
  card.innerText = text;
  return card;
}
let GetInfoCard = function (color = "grey", shade = "lighten-3", iscol = false) {
  let card = document.createElement("div");
  card.className = `card-panel ${color} ${shade} infoCard`;
  if(iscol) {
    card.className += " col s4";
  }
  return card;
}
let GetTextCard = function (text, color = "orange") {
  let card = document.createElement("div");
  card.className = "card-panel grey lighten-4 textCard";
  card.innerHTML += `<span class="` + color + `-text text-darken-3">${text}</span>`;
  //console.log(`<span class="` + color + `-text text-darken-3">${text}</span>`);
  return card;
}
let GetSpan = function (text, color = "blue-grey") {
  let span = document.createElement("span");
  span.innerText = text;
  span.className = `${color}-text text-darken-3`;
  return span;
}
let GetImageContainer = function () {
  let div = document.createElement("div");
  div.className = "image-container";
  return div;
}
let GetImage = function (path) {
  let img = new Image();
  img.src = path;
  img.style.width = "100%";
  img.style.marginBottom = "30px";
  return img;
}







