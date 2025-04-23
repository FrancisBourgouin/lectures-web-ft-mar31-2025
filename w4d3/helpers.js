const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};

const sanitizeValue = (value) => {
  const $p = $("<p>");

  $p.text(value);

  return $p.text();
};

const createPostElement = (postData) => {
  const { id, title, userId, body } = postData;

  const postContent = `
      <article>
        <h1>POST #${id} : ${title}</h1>
        <h2>By author: ${userId}</h2>
        <p>${sanitizeValue(body)}</p>
      </article>
  `;

  return postContent;
};

const createPostElementButBetter = (postData) => {
  const { id, title, userId, body } = postData;

  const $article = $("<article>");
  const $h1 = $("<h1>");
  const $h2 = $("<h2>");
  const $p = $("<p>");

  $h1.text(`POST #${id} : ${title}`);
  $h2.text(`By author: ${userId}`);
  $p.text(body);

  $article.append($h1);
  $article.append($h2);
  $article.append($p);

  $($article).click((event) => {
    const color = generateRandomColor();
    $(event.target).css("background-color", color);
  });

  return $article;
};

const appendAllPosts = (postList) => {
  for (const post of postList) {
    // const postElement = createPostElement(post);
    const postElement = createPostElementButBetter(post);
    $("main").append(postElement);
  }
};

const handleFormSubmission = (event) => {
  event.preventDefault();

  const formData = $(event.target).serialize();

  console.log(event);
  $.ajax({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: formData,
  })
    .then((data) => {
      const postElement = createPostElement(data);
      $("main").prepend(postElement);
      $("form").trigger("reset")
      // $("input").val("")
      // $("textarea").val("")
      // $("select").val("")
    })
    .catch((err) => console.error(err));
};