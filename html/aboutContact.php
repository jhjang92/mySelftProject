<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/aboutContact.css" />
    <script src="../js/common.js"></script>
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
          <div class="section__content--box-graph">
            <strong>SKILL</strong>
            차트영역차트영역차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역차트영역차트영역<br />
            차트영역차트영역차트영역차트영역차트영역차트영역차트영역차트영역<br />
          </div>
          <p>
            첫번째 SKILL의 대한 내용 입니다. 이 내용은 저의 역량을 text화
            해놓은것으로써 차트를 보다 읽기 쉽게 도와줍니다.
          </p>
        </div>
      </article>
      <article class="section__contact">
        <h3>문의하기 & 댓글쓰기</h3>
        <div class="section__contact--refresh">
          <button><img src="../img/-.png" alt="새로고침"></button>
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

        <form class="section__contact--form" action="">
          <h4>궁금하신 사항들을 문의해주세요.</h4>
          <label for="contactNickName">*닉네임</label>
          <input id="contactNickName" type="text" name="name" value="" />

          <label for="contactEmail">*이메일</label>
          <input id="contactEmail" type="text" name="email" value="" />

          <label for="contactTit">*제목</label>
          <input id="contactTit" type="text" name="title" value="" />

          <label for="contactContent">*내용</label>
          <textarea
            name="content"
            id="contactContent"
            cols="30"
            rows="10"
          ></textarea>

          <input type="submit" value="전송하기" />
        </form>

        <article class="section__contact--comment">
          <h4>
            구경하시면서 불편했던 사항이나 </br> 피드백 남겨주시면 감사합니다.
            <span>-지적 및 피드백 환영합니다.</span>
          </h4>

          <!-- 댓글 입력 폼 -->
          <form action="../work_php/insert_comments.php" method="post" class="commentForm"  onsubmit="return false;">
            <div class="inputBox">
              <input type="text" name="name" placeholder="닉네임" value="">
              <input type="password" name="password" placeholder="비밀번호 (수정 및 삭제 시 사용)" value="">
            </div>
            <textarea
              type="text"
              placeholder="댓글을 입력해주세요."
              name="content"
            ></textarea>
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
