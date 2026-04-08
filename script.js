// Initial Page 1 Animation
setTimeout(() => document.getElementById("page1Heading").classList.add("show"), 200);
setTimeout(() => document.getElementById("page1Emoji").classList.add("show"), 400);

// Page 1 → Page 2
document.getElementById("page1").addEventListener("click", () => {
  document.getElementById("page1").classList.remove("show");
  document.getElementById("page2").classList.add("show");
  setTimeout(() => document.getElementById("birthdayHeading").classList.add("show"), 100);
  setTimeout(() => document.getElementById("birthdayEmoji").classList.add("show"), 900);
  setTimeout(() => document.getElementById("birthdayButtons").classList.add("show"), 1200);
});

function answerYes() {
  document.getElementById("birthdayHeading").style.display = "none";
  document.getElementById("birthdayEmoji").style.display = "none";
  document.getElementById("birthdayButtons").style.display = "none";
  const page3 = document.getElementById("page3");
  page3.classList.add("show");

  const message = "Today is the birthday of the most handsome boy in the world?....";
  const box = document.getElementById("messageBox");
  box.style.display = "block";
  box.innerHTML = "";
  let i = 0;
  const typing = setInterval(() => {
    box.innerHTML += message.charAt(i);
    i++;
    if (i >= message.length) {
      clearInterval(typing);
      document.getElementById("sendButton").style.display = "inline-block";
    }
  }, 50);
}

function answerNo() { alert("Oops 😅 Maybe another day!"); }

function sendMessage() {
  document.getElementById("page3").classList.remove("show");
  const page4 = document.getElementById("page4");
  page4.classList.add("show");
  setTimeout(() => document.getElementById("page4Text").classList.add("show"), 100);
  page4.addEventListener("click", showPage5, { once: true });
}

function showPage5() { transitionPage("page4", "page5", "page5Text", showPage7); }
function showPage7() { transitionPage("page5", "page7", "page7Text", showPage8); }
function showPage8() { transitionPage("page7", "page8", "page8Text", showPage9); }

function showPage9() {
  transitionPage("page8", "page9", "page9Text", null);
  setTimeout(() => document.getElementById("lineText").classList.add("animate"), 1200);
  setTimeout(showPage10, 5500);
}

// Page 10 (BABE) logic
function showPage10() {
  document.getElementById("page9").classList.remove("show");
  const page10 = document.getElementById("page10");
  const textEl = document.getElementById("page10Text");
  const word = "BABE";
  page10.classList.add("show");
  textEl.innerHTML = "";

  let i = 0;
  const interval = setInterval(() => {
    textEl.innerHTML += word.charAt(i);
    i++;
    if (i >= word.length) {
      clearInterval(interval);
      
      // Wait for Click to show balloons
      page10.addEventListener("click", () => {
        page10.classList.remove("show");
        document.getElementById("page11").classList.add("show");

        // Show Balloons for 8 seconds, then go to Page 12
        setTimeout(() => {
          document.getElementById("page11").classList.remove("show");
          const page12 = document.getElementById("page12");
          page12.classList.add("show");

          // --- VIDEO SOUND FIX START ---
          const video = document.querySelector('.final-vid'); 
          if (video) {
            video.muted = false; 
            video.volume = 1.0;
            video.play().catch(e => console.log("Audio play blocked:", e));
          }
          // --- VIDEO SOUND FIX END ---
          
          const heartInterval = setInterval(createHeart, 300); 

          page12.onclick = () => {
            clearInterval(heartInterval);
            page12.classList.remove("show");
            document.getElementById("page13").classList.add("show");
          };
          
        }, 8000);


      }, { once: true });
    }
  }, 400);
}

function transitionPage(fromId, toId, textId, nextFn) {
  const from = document.getElementById(fromId);
  if(from) from.classList.remove("show");
  const toPage = document.getElementById(toId);
  if(toPage) toPage.classList.add("show");
  const txt = document.getElementById(textId);
  if(txt) setTimeout(() => txt.classList.add("show"), 100);
  if (nextFn) toPage.addEventListener("click", nextFn, { once: true });
}

// --- LARGE Floating Heart Generator for Page 12 ---
function createHeart() {
  const page12 = document.getElementById("page12");
  if (!page12.classList.contains("show")) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️"; 
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 4) + "s";
  
  // Large size logic (40px to 100px)
  const size = Math.floor(Math.random() * 60) + 40; 
  heart.style.fontSize = size + "px";
  
  page12.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 6000);
}

// --- Page 13 Logic ---

// Function for the 'Yes' button
function sayUmmah() {
  const container = document.getElementById("surpriseResponse");
  container.innerHTML = '<span id="ummahText" style="font-size: 50px; color: #ff4081; font-weight: bold; display: block; animation: heartbeat 1s infinite; margin-top: 20px;">Ummaaaah! 💋</span>';
}

// Function to restart the surprise from the very beginning
function restartSurprise() {
  location.reload(); 
}