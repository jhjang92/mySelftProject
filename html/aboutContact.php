<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/aboutContact.css" />
    <script src="../js/common.js"></script>
    <script src="../js/questionMail.js"></script>
    <script src="../js/aboutContact.js"></script>
    <title>Hyo Portfolio</title>
  </head>
  <body class="change">
    <header class="header change on"></header>
    <section class="section change on">
      <header class="section__header">
        <h2>ABOUT</h2>
      </header>
      <article class="section__content">
        <h3>장재혁</h3>
        <span>1992.11.10</span>

        <div class="section__content--box">
          <div class="section__content--box-text">
            <dl>
              <dt>노력해도 안되면 습관으로!</dt>
              <dd>
                언제나 노력합니다.<br />
                그 노력을 습관으로 만들어서<br />잘하는 개발자가 되고 싶습니다.
              </dd>
            </dl>
            <dl>
              <dt>원리를 알고쓰자.</dt>
              <dd>
                화려하고 편한 라이브러리, 프레임워크 등을, <br />원리를 알고
                쓰도록 노력합니다.
              </dd>
            </dl>
          </div>
          <div class="section__content--box-skill">
            <strong>SKILL</strong>
            <figure>
              <img src="../img/html.png" alt="HTML5">
              <figcaption>
              시맨틱 마크업을 생각하면서 코드를 작성합니다. </br>
              웹표준과 접근성을 신경씁니다.
              </figcaption>
            </figure>
            <figure>
              <img src="../img/css.png" alt="css3">
              <figcaption>
              BEM방식 등을 이용하여 깔끔한 css를 작성하기위해 고민합니다.
              </figcaption>
            </figure>
            <figure>
              <img src="../img/js.png" alt="javascript">
              <figcaption>
              코드의 재사용성을 신경씁니다. </br>
              코드의 확장성을 고민합니다.
              </figcaption>
            </figure>
            <figure>
              <img src="../img/sass.png" alt="sass">
              <figcaption>
              변수를 사용한 color값 일괄수정 등, </br> mixin을 사용하여 중복코드를 함수화 합니다.
              </figcaption>
            </figure>
            <figure>
              <img src="../img/php.png" alt="php">
              <figcaption>
                기초문법을 숙지하며, mySql을 사용한 동적업무를 처리합니다.
              </figcaption>
            </figure>
            <figure>
              <img src="../img/mysql.png" alt="mySql">
              <figcaption>
              SELECT, CREATE , UPDATE, DELETE 를 사용하여, 데이터를 관리합니다.
              </figcaption>
            </figure>
          </div>
        </div>
      </article>
      <article class="section__contact">
        <h3>문의하기 & 댓글쓰기</h3>
        <div class="section__contact--refresh">
        </div>
        <div class="section__contact--tabMenu">
          <button class="active">
            <strong>문의하기</strong>
            <spna>private</spna>
          </button>
          <button>
            <strong>한줄댓글</strong>
            <span>public</span>
          </button>
        </div>

        <form class="section__contact--form" action="../work_php/insert_comments.php" onsubmit="return false;">
          <h4>궁금하신 사항들을 문의해주세요.</h4>
          <label for="contactNickName">*닉네임</label>
          <input id="contactNickName" type="text" name="name" value="" maxlength="9"/>

          <label for="contactEmail">*이메일</label>
          <input id="contactEmail" type="text" name="email" value="" maxlength="30"/>

          <label for="contactTit">*제목</label>
          <input id="contactTit" type="text" name="title" value="" maxlength="100"/>

          <label for="contactContent">*내용</label>
          <textarea name="content" id="contactContent" cols="30" rows="10" maxlength="5000"></textarea>

          <input class="questionHidden" type="hidden" name="typeCheck" value="questionMail">
          <input class="questionBtn" type="submit" value="전송하기" />
        </form>

        <article class="section__contact--comment">
          <h4>
            구경하시면서 불편했던 사항이나 </br> 피드백 남겨주시면 감사합니다.
            <span>-지적 및 피드백 환영합니다.</span>
          </h4>

          <button class="refreshBtn"><img src="../img/-.png" alt="새로고침"></button>
          <!-- 댓글 입력 폼 -->
          <form action="" class="commentForm" onsubmit="return false;">
            <div class="inputBox">
              <input type="text" name="name" placeholder="닉네임" value="" maxlength="5">
              <input type="password" name="password" placeholder="비밀번호 (수정 및 삭제 시 사용)" value="" maxlength="15">
            </div>
            <textarea type="text" placeholder="댓글을 입력해주세요." name="content" maxlength="100" ></textarea>
          <input class="commentHidden" type="hidden" name="typeCheck" value="commentAdd">
            <input class="commentBtn" type="submit" value="등록" />
          </form>

          <p class="section__contact--comment--count">아직 댓글이 없습니다.</p>
        </article>
      </article>
    </section>

    <div class="line change on">
      <span class="off"></span>
      <span class="off"></span>
      <span class="off"></span>
      <span class="off"></span>
      <span class="off"></span>
      <span class="off"></span>
      <span class="off"></span>
      <span class="off"></span>
    </div>
  </body>
</html>
