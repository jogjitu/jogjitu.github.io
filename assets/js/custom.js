document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const posts = document.querySelectorAll(".post");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      // Update active button
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter posts
      posts.forEach((post) => {
        console.log(post.getAttribute("filters"));
        // console.log(post.getAttribute("filters").includes(filter));
        if (filter === "all" || post.getAttribute("filters").includes(filter)) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });
});
