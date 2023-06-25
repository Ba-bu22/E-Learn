function displayPost(dept) {
  var postsKey = dept + "_posts";
  var posts = JSON.parse(localStorage.getItem(postsKey)) || [];
  console.log(posts);
  createCard(posts);
}
//Create Cards
function createCard(post){
  console.log("IN CREATE CARD");
  var post_section = document.getElementById("post-section-cse");
  console.log(post_section);
  for(var i=0; i < post.length; i++){
    
    var card = document.createElement("div");
    card.className = "card";

    var thumbnail = document.createElement("img");
    thumbnail.className = "thumbnail";
    thumbnail.src = post[i].image || "images/default_card_image_new.png";
    thumbnail.alt = "Thumbnail";

    var cardContent = document.createElement("div");
    cardContent.className = "card-content";

    var title = document.createElement("h3");
    title.className = "card-title";
    title.textContent = post[i].title;

    var text = document.createElement("p");
    text.className = "card-text";
    text.textContent = post[i].content;

    cardContent.appendChild(title);
    cardContent.appendChild(text);

    card.appendChild(thumbnail);
    card.appendChild(cardContent);

    post_section.appendChild(card);
  }
}
displayPost("cse");