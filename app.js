// Using ES6 syntax and async function
document
  .getElementById("subscribe-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message");

    try {
      // Simulate async Ajax call with fetch (you can replace with actual endpoint)
      const response = await fakeAjaxCall(email);
      message.textContent = response;
      message.style.color = "green";
    } catch (error) {
      message.textContent = "Subscription failed. Try again.";
      message.style.color = "red";
    }
  });

// Simulated Ajax function
function fakeAjaxCall(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.includes("@")) {
        resolve("Subscribed successfully!");
      } else {
        reject("Invalid email.");
      }
    }, 1000);
  });
}

// Fetch real data from public API and update the DOM
function fetchPostsWithJQuery() {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts?_limit=5",
    method: "GET",
    success: function (posts) {
      const list = $("#posts-list");
      posts.forEach((post) => {
        list.append(`<li>${post.title}</li>`);
      });
    },
    error: function () {
      console.error("Failed to fetch posts");
    },
  });
}

fetchPostsWithJQuery();

fetchPosts();

// jQuery usage example
$(document).ready(function () {
  console.log("jQuery is ready!");
});
