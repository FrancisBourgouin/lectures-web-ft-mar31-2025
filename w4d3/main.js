$(document).ready(() => {
  $(".no-javascript").remove();
  
  $("a").click((event) => event.preventDefault());

  $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
  })
    .then((data) => appendAllPosts(data))
    .catch((err) => console.error(err));

  $("form").on("submit", handleFormSubmission);
});
