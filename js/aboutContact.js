var sectionHeader,
  sectionContent,
  commentBtns,
  aboutInitCheck = true,
  wheelChangeChk = false,
  wheelIfElseChk = true,
  repliesBtnCheck,
  repliesBtnChk = true,
  repliesUpdateCheck;
window.addEventListener("DOMContentLoaded", function () {
  // 초기선언
  sectionHeader = document.querySelector(".section__header");
  sectionContentHTag = sectionHeader.querySelector("h2");
  sectionContent = document.querySelector(".section__content");
  sectionContact = document.querySelector(".section__contact");
  sectionContactTabMenus = sectionContact.querySelectorAll(
    ".section__contact--tabMenu button"
  );

  // 실행구문
  console.log(wheelIfElseChk);
  init();
  // 초기 이벤트 등록
  window.addEventListener("wheel", wheelUpDown);

  sectionContactTabMenus.forEach(function (menus) {
    menus.addEventListener("click", changeTabMenu);
  });

  
  commentBtns = document.querySelector(".commentBtn");
  commentBtns.addEventListener("click", insertComments);
});


function init() {
  if (aboutInitCheck) {
    aboutInitCheck = false;

    setTimeout(function () {
      headerMenuBtn.click();
      lineBox.classList.add("aboutContact");
    }, 500);

    // Menu 에서 Contact or ABOUT 선택 시

    location.href.split("?").reverse()[0] == "contact"
      ? changeAboutContact("CONTACT", "init")
      : setTimeout(function () {
          sectionContent.classList.add("active");
        }, 2100);
  }

  setTimeout(function () {
    wheelChangeChk = true;
  }, 4000);
}

function wheelUpDown() {
  // wheel 이벤트 딜레이
  if (wheelChangeChk) {
    wheelChangeChk = false;

    // wheel 이벤트 Up & down Check
    if (event.deltaY >= 0) {
      // CONTACT 화면 띄우기
      if (wheelIfElseChk) {
        changeAboutContact("CONTACT", "");
      }
    }
    // ABOUT 화면 띄우기
    else {
      if (!wheelIfElseChk) {
        changeAboutContact("ABOUT", "");
      }
    }
    setTimeout(function () {
      wheelChangeChk = true;
    }, 2300);
  }
}

function changeAboutContact(targetName, contactInit) {
  targetName == "CONTACT" ? (wheelIfElseChk = false) : (wheelIfElseChk = true);

  sectionContent.classList.toggle("topMove");
  sectionContact.classList.toggle("topMove");
  sectionContentHTag.classList.toggle("topMove");

  // ABOUT & CONTACT 메뉴 선택으로 들어올 시
  contactInit == "init"
    ? (contactInit = "")
    : sectionContent.classList.toggle("active");

  setTimeout(function () {
    sectionContentHTag.innerText == "ABOUT"
      ? (sectionContentHTag.innerText = "CONTACT")
      : (sectionContentHTag.innerText = "ABOUT");
    sectionContentHTag.classList.toggle("topMove");
  }, 500);
}

function changeTabMenu() {
  var activeTarget = sectionContact.querySelector(".active");
  var formContent = sectionContact.querySelector(".section__contact--form");
  var commentContent = sectionContact.querySelector(
    ".section__contact--comment"
  );
  var target = event.currentTarget;
  if (!target.className.includes("active")) {
    target.classList.add("active");
    activeTarget.classList.remove("active");
    formContent.classList.toggle("off");
    commentContent.classList.toggle("on");
  } else {
  }
}

function insertComments(){
  var form = document.querySelector('.commentForm');

  var inputBox = form.querySelector('.inputBox');
  var inputs = inputBox.querySelectorAll('input');
  var contentBox = form.querySelector('textarea');

  var name = inputs[0].value;
  var password = inputs[1].value;
  var content = contentBox.value;
  const fetchInit = {
    method:"get"
  }
  fetch('../work_php/insert_comments.php?'+"name=" +name + "&" + "password=" + password + "&" + "content="+ content, fetchInit)
  // body 로 값넣기
  .then(
    function (response){
      response.text().then(function(text){
        console.log(text);
        inputs[0].value = "";
        inputs[1].value = "";
        contentBox.value = "";
        alert("댓글등록이 성공하였습니다.");
        selectComments();

      })
    }
  )
}
selectComments();
function selectComments(){
  fetch('../work_php/select_comments.php')
  .then(
    function (response){
      response.text().then(function(text){
        // 쿼리결과문을 반환받고 데이터 가공처리 - 문자열을 배열로 나누고 다시 객체화 시킴.
        // Json -> array
        var res = JSON.parse(text);

        // 댓글의 총 갯수 표시.
        updateCommentCount(res.length);
        
        // array -> object
        res.forEach(function(resData){
          console.log(resData.idx);
          // 댓글내역 태그 생성 및 append
          createCommentTag(resData.idx, resData.name, resData.content, stringToDate(resData.reg_time));
          // console.log(queryData);
          
        });
      })
    }
  )
}

function createCommentTag(idx, name, content, reg_time){
  var userIcon, userName, userContent,
      repliesBtn, updateBtn, DeleteBtn, regTime;
  var commentBox, innerBox, contentBox, contentElementBox, contentCrudBox;

  commentBox = document.querySelector('.commentBox');
  
  // 고유댓글 한개당 제공되는 박스 (답장을 포함)
  innerBox = document.createElement('div');
  innerBox.classList.add('commentBox__inner');
  innerBox.id = idx;
  // 유저 댓글 박스( 실제 값이들어있는 댓글박스)
  contentBox = document.createElement('div');
  contentBox.classList.add('commentBox__inner--contentBox');
  innerBox.append(contentBox);

  // 댓글내용 박스 ( 실제 값이 출력되는 박스 )
  contentElementBox = document.createElement('div');
  contentElementBox.classList.add('commentBox__inner--contentBox-content');
  contentBox.append(contentElementBox);
  // 댓글컨트롤 박스 ( 답장, 수정, 삭제 , 날짜 등이 담겨있는 박스)
  contentCrudBox = document.createElement('div');
  contentCrudBox.classList.add('commentBox__inner--contentBox-crud');
  contentBox.append(contentCrudBox);

  // user아이콘 담기
  userIcon = document.createElement('i');
  userIcon.innerText = "♬";
  // user 닉네임 담기
  userName = document.createElement('p');
  userName.innerText = name;
  // user 내용 담기
  userContent = document.createElement('p');
  userContent.innerText = content;
  contentElementBox.append(userIcon, userName, userContent);

  // 답장 버튼생성
  repliesBtn = document.createElement('button');
  repliesBtn.innerText = "답장";
  repliesBtn.classList.add('replies');
  // 수정 버튼생성
  updateBtn = document.createElement('button');
  updateBtn.innerText = "수정";
  updateBtn.classList.add('update');
  // 삭제 버튼생성
  DeleteBtn = document.createElement('button');
  DeleteBtn.innerText = "삭제";
  DeleteBtn.classList.add('delete');

  // 등록날짜 담기
  regTime = document.createElement('span');
  regTime.innerText = reg_time;

  contentCrudBox.append(repliesBtn, updateBtn, DeleteBtn, regTime);
  
  commentBox.append(innerBox);

  repliesBtn.addEventListener("click", createReplies_UpdateForm);
  updateBtn.addEventListener("click", createReplies_UpdateForm);
  DeleteBtn.addEventListener("click", function(){ "삭제 php 통신하기." });
}

// 댓글 총 갯수 표시
function updateCommentCount(lengths){
  var commentCount = document.querySelector('.commentBox__count');
  lengths == 0 ? 
  commentCount.innerText = "아직 댓글이 없습니다." :
  commentCount.innerText = `${lengths}개의 댓글이 있습니다. `;
}

// 답장 및 수정하기 Form 생성
function createReplies_UpdateForm(){
  var repliesBox, formBox, 
      inputBox, nameInput, pwInput,
      textareaBox, submitInput;
      
  var boxTarget = event.target.parentNode.parentNode.parentNode;
      
  // 답장, 수정 form이 있으면 삭제
  if(targetReplies = document.querySelector('.commentBox__inner--replies')){
    targetReplies.remove();
  }
    // 답장,수정하기 Form Box 생성
    repliesBox = document.createElement('div');
    repliesBox.classList.add('commentBox__inner--replies');

    // 받아온 박스태그한테 Append
    boxTarget.append(repliesBox);

    // 답장,수정하기 Form 생성
    formBox = document.createElement('form');
    repliesBox.append(formBox);

    // 내용 입력창 생성
    textareaBox = document.createElement('textarea');
    textareaBox.type = "text";
    textareaBox.placeholder = "댓글을 입력해주세요.";
    textareaBox.name = "content";

    // 등록버튼 생성
    submitInput = document.createElement('input');
    submitInput.type = "submit";
    submitInput.value = "등록";

    if(event.target.className == "replies"){
      // 답장 InputBox 생성
      inputBox = document.createElement('div');
      inputBox.classList.add('commentBox__inner--replies-inputBox');
      formBox.prepend(inputBox);

      // 이름입력창 생성
      nameInput = document.createElement('input');
      nameInput.type = "text";
      nameInput.name = "name";
      nameInput.placeholder = "닉네임";

      // 비밀번호 입력창 생성
      pwInput = document.createElement('input');
      pwInput.type = "password";
      pwInput.name = "password";
      pwInput.placeholder = "비밀번호 (수정 및 삭제 시 사용)";

      inputBox.append(nameInput, pwInput);
    }

    formBox.append(textareaBox, submitInput);
}

function stringToDate(date){
  var yy = date.substr(2, 2);
  var mm = date.substr(5, 2);
  var dd = date.substr(8, 2);
  return `${mm}.${dd}.${yy}`;
}