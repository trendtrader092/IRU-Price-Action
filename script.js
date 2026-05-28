
// ===============================
// PAGE ELEMENT HELPERS
// ===============================

const dashboard = document.getElementById("dashboard");

const indicatorListPage = document.getElementById("indicatorListPage");
const strategyListPage = document.getElementById("strategyListPage");
const detailsPage = document.getElementById("detailsPage");
const youtubePage = document.getElementById("youtubePage");


const indicatorGrid = document.getElementById("indicatorGrid");
const strategyGrid = document.getElementById("strategyGrid");

const youtubeChannelGrid =
document.getElementById("youtubeChannelGrid");

const youtubeVideoGrid =
document.getElementById("youtubeVideoGrid");

// details
const detailTitle = document.getElementById("detailTitle");
const detailCategory = document.getElementById("detailCategory");
const detailDescription = document.getElementById("detailDescription");
const multiCodeContainer = document.getElementById("multiCodeContainer");
const imageGallery = document.getElementById("imageGallery");

// popup
const imagePopup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");


const applyBtn = document.getElementById("applyBtn");
// ===============================
// DATA
// ===============================



let indicators = [

{
    id:"9&15Ema+P+F",
    title:"9 & 15 EMA +  Pivot HL + FVG By Me",
    category:"BESTCOMBO",
    description:"EMA crossover indicator for trend direction and momentum.",
    tradingview:"https://www.tradingview.com/chart/",
    codes:[
        {name:"9 & 15 EMA +  Pivot HL + FVG [By Me]", file:"11) EMA 9 & 15 +  Pivot HL + FVG By Me.txt"}
    ],
    images:["img1.jpg","img2.jpg"]
},

{
    id:"9&15Ema",
    title:"9 & 15 EMA ",
    category:"BEST",
    description:"EMA crossover indicator for trend direction and momentum.",
    tradingview:"https://www.tradingview.com/chart/",
    codes:[
        {name:"EMA 9 & 15 Code", file:"1) EMA 9 & 15.txt"}
    ],
    images:["img1.jpg","img2.jpg"]
},

{
    id:"fvg",
    title:"FVG (Nephew_Sam_) By Nephew_Sam_",
    category:"LINK",
    description:"Fair Value Gap indicator for imbalance detection.",
    tradingview:"https://in.tradingview.com/v/G8b8t2er/",
    codes:[
        {name:"FVG Code", file:"NO SOURCE CODE.txt"}
    ],
    images:["img1.jpg","img2.jpg"]
},

{
    id:"noSC",
    title:"Pivot High & Low By Vedictrades",
    category:"LINK",
    description:"Pivot High & Low By Vedictrades for Market structure .",
    tradingview:"https://in.tradingview.com/script/p67sfnEG-Vedictrades-Midnight-8-30-Open/",
    codes:[
        {name:"Pivot High & Low ", file:"NO SOURCE CODE.txt"}
    ],
    images:["img1.jpg","img2.jpg"]
},


{
    id:"9&15EmaPivot",
    title:"EMA 9 & 15 + Pivot High & Low",
    category:"BEST",
    description:"Combination of EMA crossover and Pivot High & Low for Market structure.",
    tradingview:"https://www.tradingview.com/chart/",
    codes:[
        {name:"EMA + Pivot Code", file:"5) EMA 9 & 15 +  Pivot HL.txt"}
    ],
    images:["img1.jpg","img2.jpg"]
},

{
    id:"fvg",
    title:"FVG By Me",
    category: "BEST ,  FVG",
    description:"Fair Value Gap indicator for imbalance detection.",
    tradingview:"https://www.tradingview.com/chart/",
    codes:[
        {name:"FVG Code", file:"9) FVG By Me.txt"}
    ],
    images:["img1.jpg","img2.jpg"]
},

{
    id:"SMC",
    title:"Smart Money Concepts [LuxAlgo]",
    category:"SMC",
    description:"Smart Money Concepts indicator with structure, BOS and CHoCH.",
    tradingview:"https://www.tradingview.com/script/CnB3fSph-Smart-Money-Concepts-SMC-LuxAlgo/",
    codes:[
        {name:"SMC LuxAlgo Code", file:"3) Smart Money Concepts [LuxAlgo].txt"}
    ],
    images:["img1.jpg","img2.jpg"]
},




{
    id:"PivotHL",
    title:"Pivot High & Low FIXED",
    category:"BEST",
    description:"Pivot High Low indicator for Market structure.",
    tradingview:"https://www.tradingview.com/chart/",
    codes:[
        {name:"Pivot HL Code", file:"4) Pivot HL FIXED.txt"}
    ],
    images:["img1.jpg","img2.jpg"]
},



{
    id:"fvg",
    title:"FVG By FVG (Nephew sam remake) with source code + Link",
    category:"FVG Remake",
    description:"It apply only on 15min and Above Time Frames Fair Value Gap indicator for imbalance detection.",
    tradingview:"https://in.tradingview.com/v/J0op6XJK/",
    codes:[
        {name:"FVG Code", file:"10) FVG By FVG (Nephew sam remake).txt"}
    ],
    images:["img1.jpg","img2.jpg"]
}


];


//==================================================
// ===============================
// YOUTUBE DATA
// ===============================

let youtubeChannels = [

    // =========================
    // ADD YOUR CHANNELS HERE
    // =========================

    
    {
        title:"Mr P Fx ",
        For:"Tick Scalping",
        link:"https://www.youtube.com/@MrPFx"
    },
    

];

let youtubeVideos = [

    // =========================
    // ADD YOUR VIDEOS HERE
    // =========================

    
    {
        title:"Tick scalping",
        link:"https://www.youtube.com/watch?v=Iioa4_qBv90"
    },
    

];

//=======================================================

let strategies = [


{
    id:"9&15Ema+P+F",
    title:"9 & 15 EMA +  Pivot HL + FVG By Me",
    category:"BESTCOMBO",
    description:"EMA crossover indicator for trend direction and momentum.",
    tradingview:"https://www.tradingview.com/chart/",
    codes:[
        {name:"9 & 15 EMA +  Pivot HL + FVG [By Me]", file:"11) EMA 9 & 15 +  Pivot HL + FVG By Me.txt"}
    ],
    images:["img1.jpg","img2.jpg"]
}

];

// ===============================
// THEME
// ===============================

function toggleTheme(){

    const body = document.body;

    const isDark =
    body.getAttribute("data-theme") === "dark";

    body.setAttribute(
        "data-theme",
        isDark ? "light" : "dark"
    );

    localStorage.setItem(
        "theme",
        body.getAttribute("data-theme")
    );

}

const savedTheme = localStorage.getItem("theme");

if(savedTheme){
    document.body.setAttribute("data-theme", savedTheme);
}

// ===============================
// PAGE SWITCH
// ===============================

function showDashboard(){

    dashboard.style.display = "grid";

    indicatorListPage.style.display = "none";

    strategyListPage.style.display = "none";

    detailsPage.style.display = "none";

    youtubePage.style.display = "none";

}


document.getElementById(
    "instructionOkBtn"
).addEventListener("click", ()=>{

    document.getElementById(
        "indicatorInstructionPopup"
    ).style.display = "none";

    lastPage = "indicators";

    dashboard.style.display = "none";
    indicatorListPage.style.display = "block";
    strategyListPage.style.display = "none";
    detailsPage.style.display = "none";

    renderIndicators();

});


function showYoutubePage(){

    lastPage = "youtube";

    dashboard.style.display = "none";
    indicatorListPage.style.display = "none";
    strategyListPage.style.display = "none";
    detailsPage.style.display = "none";

    youtubePage.style.display = "block";

    renderYoutubePage();

}

function renderYoutubePage(){

    youtubeChannelGrid.innerHTML = "";
    youtubeVideoGrid.innerHTML = "";

    // CHANNELS
    youtubeChannels.forEach(item=>{

        const box = document.createElement("div");

        box.className = "youtube-card";

        box.innerHTML = `

            <h3>${item.title}</h3>

            <p class="youtube-improve">
                📈 For: ${item.For}
            </p>

            <button class="youtube-btn">
                View
            </button>

        `;

        box.querySelector(".youtube-btn")
        .onclick = ()=>{

            window.open(
                item.link,
                "_blank"
            );

        };

        youtubeChannelGrid.appendChild(box);

    });

    // VIDEOS
    youtubeVideos.forEach(item=>{

        const box = document.createElement("div");

        box.className = "youtube-card";

        box.innerHTML = `

            <h3>${item.title}</h3>

            <button class="youtube-btn">

                View

            </button>

        `;

        box.querySelector(".youtube-btn")
        .onclick = ()=>{

            window.open(
                item.link,
                "_blank"
            );

        };

        youtubeVideoGrid.appendChild(box);

    });

}


function showStrategies(){

    dashboard.style.display = "none";
    indicatorListPage.style.display = "none";
    strategyListPage.style.display = "block";
    detailsPage.style.display = "none";
    youtubePage.style.display = "none";

    renderStrategies();

}

// ===============================
// RENDER INDICATORS
// ===============================

function showIndicators(){

    document.getElementById(
        "indicatorInstructionPopup"
    ).style.display = "flex";

    // RESET CATEGORY TO ALL
    setTimeout(()=>{

        renderIndicators();

        document
        .querySelectorAll(".filter-btn")
        .forEach(btn=>
            btn.classList.remove("active-filter")
        );

        const firstBtn =
        document.querySelector(".filter-btn");

        if(firstBtn){
            firstBtn.classList.add("active-filter");
        }

    },100);

}
function renderIndicators(filteredData = indicators){

    indicatorGrid.innerHTML = "";

    filteredData.forEach(item=>{

        const card = document.createElement("div");

        card.className = "code-card";

        card.innerHTML = `
            <div class="badge">${item.category}</div>
            <h3>${item.title}</h3>
        `;

        card.onclick = ()=> openDetails(item);

        indicatorGrid.appendChild(card);

    });

}


// ===============================
// RENDER STRATEGIES
// ===============================

function renderStrategies(){

    strategyGrid.innerHTML = "";

    strategies.forEach(item=>{

        const card = document.createElement("div");

        card.className = "code-card";

        card.innerHTML = `
            <div class="badge">${item.category}</div>
            <h3>${item.title}</h3>
        `;

        card.onclick = ()=> openDetails(item);

        strategyGrid.appendChild(card);

    });

}
function filterIndicatorCategory(category, btn){

    // ACTIVE BUTTON
    document
    .querySelectorAll(".filter-btn")
    .forEach(b=>
        b.classList.remove("active-filter")
    );

    btn.classList.add("active-filter");

    // FILTER DATA
    let filtered = indicators;

    if(category !== "ALL"){

        filtered = indicators.filter(item=>

            item.category
            .toUpperCase()
            .includes(category.toUpperCase())

        );

    }

    // SHOW FILTERED INDICATORS
    renderIndicators(filtered);

}
// ===============================
// OPEN DETAILS (INDICATOR + STRATEGY)
// ===============================

let currentItem = null;

async function openDetails(item){

    currentItem = item;

    dashboard.style.display = "none";
    indicatorListPage.style.display = "none";
    strategyListPage.style.display = "none";
    detailsPage.style.display = "block";

    detailTitle.innerText = item.title;
    detailCategory.innerText = item.category;
    detailDescription.innerText = item.description;

    applyBtn.onclick = ()=>{
        window.open(item.tradingview, "_blank");
    };

    // CLEAR OLD CODES
    multiCodeContainer.innerHTML = "";

    // MULTIPLE CODES
    for(const c of item.codes){

        const res = await fetch(`codes/${c.file}`);
        const code = await res.text();

        const box = document.createElement("div");
        box.className = "detail-card";

        box.innerHTML = `
            <div class="code-header">
                <h2>${c.name}</h2>
                <button class="copy-btn">📋 Copy</button>
            </div>

            <pre class="code-box"></pre>
        `;

        const codeBox = box.querySelector(".code-box");
        codeBox.textContent = code;

        const copyBtn = box.querySelector(".copy-btn");

        copyBtn.addEventListener("click",()=>{

            navigator.clipboard.writeText(code);

            showCopyPopup();

        });

        multiCodeContainer.appendChild(box);

    }

    // IMAGES
    imageGallery.innerHTML = "";

    item.images.forEach((img,i)=>{

        const image = document.createElement("img");

        image.src = img;

        image.onclick = ()=> openPopup(i);

        imageGallery.appendChild(image);

    });

}

// ===============================
// BACK
// ===============================



let lastPage = "dashboard";
function goBack(){

    detailsPage.style.display = "none";

    if(lastPage === "indicators"){

        showIndicators();

    }

    else if(lastPage === "strategies"){

        showStrategies();

    }

    else if(lastPage === "youtube"){

        showYoutubePage();

    }

    else{

        showDashboard();

    }

}

// ===============================
// COPY POPUP (GREEN)
// ===============================

function showCopyPopup(){

    const old = document.getElementById("copyPopup");
    if(old) old.remove();

    const popup = document.createElement("div");

    popup.id = "copyPopup";
    popup.innerText = "✅ Code Copied";

    document.body.appendChild(popup);

    setTimeout(()=>popup.classList.add("show"),10);

    setTimeout(()=>{
        popup.classList.remove("show");
        setTimeout(()=>popup.remove(),300);
    },2000);

}

// ===============================
// IMAGE POPUP
// ===============================

let currentImage = 0;

function openPopup(i){

    currentImage = i;

    popupImage.src = currentItem.images[currentImage];

    imagePopup.style.display = "flex";

}

closePopup.onclick = ()=>{

    imagePopup.style.display = "none";

};

document.addEventListener("keydown",(e)=>{

    if(imagePopup.style.display==="flex"){

        if(e.key==="ArrowRight"){

            currentImage++;

            if(currentImage >= currentItem.images.length){
                currentImage = 0;
            }

        }

        if(e.key==="ArrowLeft"){

            currentImage--;

            if(currentImage < 0){
                currentImage = currentItem.images.length - 1;
            }

        }

        popupImage.src = currentItem.images[currentImage];

    }

});

function openTool(url){
    window.open(url, "_blank");
}

let clickCount = 0;
let clickTimer = null;

function handlePairClick(symbol){

    clickCount++;
    clearTimeout(clickTimer);

    clickTimer = setTimeout(()=>{

        const isIndianMarket =
            symbol === "NSE:NIFTY" ||
            symbol === "BSE:SENSEX";

        // =========================
        // 1 CLICK → single chart
        // =========================
        if(clickCount === 1){

            window.open(
                `https://www.tradingview.com/chart/?symbol=${symbol}&interval=60`,
                "_blank"
            );
        }

        // =========================
        // 2 CLICKS → 3 charts + EXNESS
        // =========================
        else if(clickCount === 2){

            const intervals = [5, 3, 1];

            intervals.forEach((t, i)=>{

                setTimeout(()=>{

                    window.open(
                        `https://www.tradingview.com/chart/?symbol=${symbol}&interval=${t}`,
                        "_blank"
                    );

                }, i * 200);

            });

            // 👉 EXNESS HERE (ONLY 2 CLICK)
            if(!isIndianMarket){

                setTimeout(()=>{

                    window.open(
                        "https://my.exness.com/webtrading/",
                        "_blank"
                    );

                }, 900);
            }
        }

        // =========================
        // 3+ CLICKS → full system + EXNESS
        // =========================
        else if(clickCount >= 3){

            const intervals = [60, 15, 5, 3, 1];

            intervals.forEach((t, i)=>{

                setTimeout(()=>{

                    window.open(
                        `https://www.tradingview.com/chart/?symbol=${symbol}&interval=${t}`,
                        "_blank"
                    );

                }, i * 200);

            });

            if(!isIndianMarket){

                setTimeout(()=>{

                    window.open(
                        "https://my.exness.com/webtrading/",
                        "_blank"
                    );

                }, 1200);

            }
        }

        clickCount = 0;

    }, 300);
}

function closeInstructionPopup(){

    const popup =
    document.getElementById(
        "indicatorInstructionPopup"
    );

    const box =
    popup.querySelector(".advanced-popup");

    box.style.transform =
    "scale(.9) translateY(20px)";

    box.style.opacity = "0";

    popup.style.opacity = "0";

    setTimeout(()=>{

        popup.style.display = "none";

        popup.style.opacity = "1";

        box.style.transform = "";

        box.style.opacity = "1";

    },250);

    showDashboard();

}

document.getElementById(
    "indicatorInstructionPopup"
).addEventListener("click",(e)=>{

    if(
        e.target.id ===
        "indicatorInstructionPopup"
    ){

        closeInstructionPopup();

    }

});

function filterIndicators(){

    const value =
    document.getElementById("indicatorSearch")
    .value.toLowerCase();

    const filtered = indicators.filter(item =>
        item.title.toLowerCase().includes(value)
    );

    renderIndicators(filtered);

}

function filterStrategies(){

    const value =
    document.getElementById("strategySearch")
    .value.toLowerCase();

    const filtered = strategies.filter(item =>
        item.title.toLowerCase().includes(value)
    );

    strategyGrid.innerHTML = "";

    filtered.forEach(item=>{

        const card = document.createElement("div");

        card.className = "code-card";

        card.innerHTML = `
            <div class="badge">${item.category}</div>
            <h3>${item.title}</h3>
        `;

        card.onclick = ()=> openDetails(item);

        strategyGrid.appendChild(card);

    });

}

// ESC CLOSE
document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        closeInstructionPopup();

    }

});

// OUTSIDE CLICK CLOSE
document
.getElementById("indicatorInstructionPopup")
.addEventListener("click",(e)=>{

    if(
        e.target.id ===
        "indicatorInstructionPopup"
    ){

        closeInstructionPopup();

    }

});

document.addEventListener("keydown",(e)=>{

    const popup =
    document.getElementById(
        "indicatorInstructionPopup"
    );

    if(
        popup.style.display === "flex"
    ){

        if(e.key === "Enter"){

            document
            .getElementById("instructionOkBtn")
            .click();

        }

    }

});