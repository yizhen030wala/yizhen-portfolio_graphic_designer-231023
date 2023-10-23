

$(window).mousemove(function(evt){
    var x = evt.pageX;
    var y = evt.pageY;
    console.log(x);

    if (x<$(window).width()/3 - 50){
      $("#me").attr("src","pic/IMG_4657.png");
    }else if (x>$(window).width()/1.5 + 50){
      $("#me").attr("src","pic/IMG_skills.png");
    }else{
      $("#me").attr("src","pic/IMG_4652.png");
    }
    if (x<$(window).width()/3 - 50 && y<$(window).height()/2){
      $("#me").attr("src","pic/IMG_edu.png");
    }
    if (x>$(window).width()/1.5 + 50 && y<$(window).height()/2){
      $("#me").attr("src","pic/IMG_4656.png");
    }
    
    
  });

var s = skrollr.init()
  // ---------------------------------

  // $('.morebtn').click(
  //   function(){
  //   // $('.p').test('less');
  //   $('.morebtn').addClass('lessbtn');

  // });

// ---------------------------------

  let currentLanguage = "en-US"; // 預設語言

  // 載入語言文件並更換文本
  function changeLanguage(language) {
      fetch(`${zh-TW}.json`)
          .then(response => response.json())
          .then(data => {
              const elements = document.querySelectorAll("[data-translation]");
              elements.forEach(element => {
                  const key = element.getAttribute("data-translation");
                  element.textContent = data[key];
              });
          });
  }
  
  // 語言切換按鈕的點擊事件
  document.getElementById("language-toggle").addEventListener("click", () => {
      if (currentLanguage === "en-US") {
          currentLanguage = "zh-TW";
      } else {
          currentLanguage = "en-US";
      }
      changeLanguage(currentLanguage);
  });
  
  // 初始化，以預設語言載入網頁
  changeLanguage(currentLanguage);
  