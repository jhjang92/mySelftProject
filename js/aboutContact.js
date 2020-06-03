var sectionHeader, sectionContent, commentBtns, 
aboutInitCheck = true, wheelChangeChk = false, wheelIfElseChk = true, repliesBtnCheck, repliesBtnChk = true,
  repliesUpdateCheck, refreshBtn;
window.addEventListener("DOMContentLoaded", function () {
  // 초기선언
  sectionHeader = document.querySelector(".section__header");
  sectionContentHTag = sectionHeader.querySelector("h2");
  sectionContent = document.querySelector(".section__content");
  sectionContact = document.querySelector(".section__contact");
  sectionContactTabMenus = sectionContact.querySelectorAll(".section__contact--tabMenu button");
  refreshBtn = sectionContact.querySelector('.section__contact--refresh button');

  // 실행구문
  console.log(wheelIfElseChk);
  init();
  // 초기 이벤트 등록
  window.addEventListener("wheel", wheelUpDown);

  sectionContactTabMenus.forEach(function (menus) {
    menus.addEventListener("click", changeTabMenu);
  });

  refreshBtn.addEventListener("click", selectComments);
  
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
  if (wheelChangeChk && !event.target.closest('.section__contact--comment')) {
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
  var commentContent = sectionContact.querySelector(".section__contact--comment");

  var target = event.currentTarget;
  if (!target.className.includes("active")) {
    target.classList.add("active");
    activeTarget.classList.remove("active");
    formContent.classList.toggle("off");
    commentContent.classList.toggle("on");
    sectionContact.classList.toggle('commentmenu');
    refreshBtn.classList.toggle('on');
    if(commentContent.classList.contains('on')){
      selectComments();
    }
  } else {
  }
}

// SQL ADD, UPDATE , DELETE
function insertComments(){
  var form = document.querySelector('.commentForm');

  var inputBox = form.querySelector('.inputBox');
  var inputs = inputBox.querySelectorAll('input');
  var contentBox = form.querySelector('textarea');

  var name = inputs[0].value;
  var password = inputs[1].value;
  var content = contentBox.value;

  if(name == ""){
    alert("닉네임을 입력해주세요.");
    return;
  }else if(password == ""){
    alert("비밀번호를 입력해주세요.");
    return;
  }else if(content == ""){
    alert("내용을 입력해주세요.");
    return;
  }

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

// Ajax 통신하여 데이터 조회 및 출력
function selectComments(){

  fetch('../work_php/select_comments.php')
  .then(
    function (response){
      response.text().then(function(text){
        var res = JSON.parse(text);

        // 댓글의 총 갯수 표시.
        updateCommentCount(res.length);
        
        var commentArticle = document.querySelector('.section__contact--comment');

        if(document.querySelector('.commentBox')){
          document.querySelector('.commentBox').remove();
        }

        commentBox = document.createElement('div');
        commentBox.classList.add('commentBox');
        commentArticle.append(commentBox);

        res.forEach(function(resData){
          // 댓글내역 태그 생성 및 append
          createCommentTag(resData.idx, resData.name, resData.content, stringToDate(resData.reg_time), commentBox);
          // console.log(queryData);
        });
      })
    }
  )
}

// 댓글생성 form
function createCommentTag(idx, name, content, reg_time, commentBox){
  var userIcon, userName, userContent,
      repliesBtn, updateBtn, DeleteBtn, regTime;
  var innerBox, contentBox, contentElementBox, contentCrudBox;
  
  // 최초댓글 한개당 제공되는 박스 (답장을 포함)
  innerParentBox = document.createElement('div');
  innerParentBox.dataset.num = idx;
  // 유저 댓글 박스( 실제 값이들어있는 댓글박스)
  innerBox = document.createElement('div');
  innerBox.classList.add('commentBox__inner');
  contentBox = document.createElement('div');
  contentBox.classList.add('commentBox__inner--contentBox');
  innerBox.append(contentBox);
  innerParentBox.append(innerBox);

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
  // repliesBtn = document.createElement('button');
  // repliesBtn.innerText = "답장";
  // repliesBtn.classList.add('replies');
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

  // contentCrudBox.append(repliesBtn, updateBtn, DeleteBtn, regTime);
  contentCrudBox.append(updateBtn, DeleteBtn, regTime);
  
  commentBox.append(innerParentBox);

  // repliesBtn.addEventListener("click", createReplies_UpdateForm);
  updateBtn.addEventListener("click", function(){
    createReplies_UpdateForm(idx, name, content);
  });
  DeleteBtn.addEventListener("click", function(){
    createReplies_UpdateForm(idx, name, content);
  });
}

// 댓글 총 갯수 표시
function updateCommentCount(lengths){
  var commentCount = document.querySelector('.section__contact--comment--count');
  lengths == 0 ? 
  commentCount.innerText = "아직 댓글이 없습니다." :
  commentCount.innerText = `${lengths}개의 댓글이 있습니다. `;
}

// 답장 및 수정하기 Form 생성
function createReplies_UpdateForm(idx, name, content){
  var repliesBox, formBox, 
      inputBox, nameInput, pwInput,
      textareaBox, submitInput;
      
  // var boxTarget = event.target.parentNode.parentNode.parentNode;
  var boxTarget = event.target.closest('.commentBox__inner');
  
  // 답장, 수정 form이 활성화되어 있으면 삭제
  if( repliesTarget = document.querySelector('.commentBox__inner--replies')){
    repliesTarget.remove();
  }

  // 타겟의 답장,수정 form 이 활성화 되어있는지 체크. 중복클릭 시 닫기 용도.
  if(event.target.className.includes('crud_on')){
    event.target.classList.remove('crud_on');
  }else{
    if(crudTarget = document.querySelector('.crud_on')){
      crudTarget.classList.remove('crud_on');
    }
    event.target.classList.add('crud_on');

    // 등록버튼 생성
    submitInput = document.createElement('input');
    submitInput.type = "submit";
    submitInput.value = "삭제";
    
    // 답장,수정하기 Form Box 생성
    repliesBox = document.createElement('div');
    repliesBox.classList.add('commentBox__inner--replies');

    // 받아온 박스태그한테 Append
    boxTarget.append(repliesBox);

    // 답장,수정하기 Form 생성
    formBox = document.createElement('form');
    formBox.method = "POST";
    repliesBox.append(formBox);

    // 답장 InputBox 생성
    inputBox = document.createElement('div');
    inputBox.classList.add('commentBox__inner--replies-inputBox');
    formBox.prepend(inputBox);

    if(event.target.className.includes("update")){
      submitInput.value = "수정";

      // 내용 입력창 생성
      textareaBox = document.createElement('textarea');
      textareaBox.type = "text";
      textareaBox.placeholder = "댓글을 입력해주세요.";
      textareaBox.name = "content";

      // 수정할내용 불러오기
      if(event.target.className.includes("update")){
        textareaBox.value = content;
      }

      formBox.append(textareaBox);

      // 이름입력창 생성
      nameInput = document.createElement('input');
      nameInput.type = "text";
      nameInput.name = "name";
      nameInput.placeholder = "닉네임";
      nameInput.value = name;
      nameInput.disabled = true;
      

      inputBox.append(nameInput);

      submitInput.addEventListener("click", function(){
        event.preventDefault();
        if(event.target.closest('.commentBox__inner').querySelector('.crud_on').innerText == "수정"){
          var result = confirm("댓글을 수정 하시겠습니까?");
        }else{
          var result = confirm("댓글을 삭제 하시겠습니까?");
        }
        
             if(result){
               console.log("확인");
              checkUserPassword();
             }else{}
      });
    }

    
    // 비밀번호 입력창 생성
    pwInput = document.createElement('input');
    pwInput.type = "password";
    pwInput.name = "password";
    pwInput.placeholder = "비밀번호 (수정 및 삭제 시 사용)";
    
    inputBox.append(pwInput);

    formBox.append(submitInput);
    pwInput.focus();
  }
}

function updateComments(idx, content){
  const fetchInit = {
    method:"GET"
  }
  fetch('../work_php/update_comments.php?'+ "idx=" + idx + "&" + "content=" + content, fetchInit)
  // body 로 값넣기
  .then(
    function (response){
      response.text().then(function(text){
        console.log(text);
        if(text == "true"){
          selectComments();
          alert("댓글을 수정하였습니다.");
        }else{
          alert("수정에 실패하였습니다.");
        }
      })
    }
  )
}

function deleteComments(idx){
  const fetchInit = {
    method:"GET"
  }
  fetch('../work_php/delete_comments.php?'+ "idx=" + idx, fetchInit)
  .then(
    function (response){
      response.text().then(function(text){
        console.log(text);
        if(text == "true"){
          selectComments();
          alert("댓글을 삭제하였습니다.");
        }else{
          alert("삭제에 실패하였습니다.");
        }
      })
    }
  )
}

function checkUserPassword(){
  var idx = event.target.closest('.commentBox__inner').parentNode.dataset.num;
  var inputs = event.target.parentNode.querySelectorAll(".commentBox__inner--replies-inputBox input");
  var content, password;

  inputs.forEach(function(input){
    if(input.name == "password"){
      password = input.value;
    }
  })

  if(event.target.parentNode.querySelector("textarea")){
    content = event.target.parentNode.querySelector("textarea").value;
  }
  const fetchInit = {
    method:"GET"
  }

  fetch('../work_php/user_check.php?'+ "idx=" + idx + "&" + "password=" + password, fetchInit)
  // body 로 값넣기
  .then(
    function (response){
      response.text().then(function(text){
        console.log(text);
        console.log(text == "true");
        console.log(text == true);
        if(text == "true"){
          console.log(document.querySelector('.crud_on').innerText);
          if(document.querySelector('.crud_on').innerText == "수정"){
            updateComments(idx, content);
          }else{
            deleteComments(idx);
          }
          
        }else{
          alert("비밀번호가 다릅니다.");
        }
      })
    }
  )
}

function stringToDate(date){
  var yy = date.substr(2, 2);
  var mm = date.substr(5, 2);
  var dd = date.substr(8, 2);
  return `${mm}.${dd}.${yy}`;
}