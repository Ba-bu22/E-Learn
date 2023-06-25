// Save to Local Storage
function saveToLocalStorage(dept, image, title, content) {
  var existingPosts = JSON.parse(localStorage.getItem(dept + "_posts")) || [];
  var post = {
    image: image,
    title: title,
    content: content
  };
  existingPosts.push(post);
  localStorage.setItem(dept + "_posts", JSON.stringify(existingPosts));
}


//Event listener for form submission
const post = document.getElementById("post-form")
if(post){
  post.addEventListener("submit", function(event) {
    event.preventDefault();
    var image = document.getElementById("image-input").files[0];
    var title = document.getElementById("title-input").value;
    var dept = document.getElementById("dept-input").value;
    var content = document.getElementById("content-input").value;
  
    saveToLocalStorage(dept,image,title,content);
    console.log("POST SAVED");
    event.stopPropagation();
  });
}

function clearStorage(dept) {
  localStorage.removeItem(dept + "_posts");
}

// //Event listener for form submission
// const post = document.getElementById("post-form")
// if(post){
//   post.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let imgUrl;
//     var file = document.getElementById("image-input");
//     file.addEventListener("change",function(e){
//       console.log("hi");
//       const image = e.target.files[0];
//       const reader = new FileReader();
//       reader.readAsDataURL(image);
//       reader.addEventListener('load', () => {
//         imgUrl = reader.result;
//         console.log(imgUrl);
//     });
//     });
//     var title = document.getElementById("title-input").value;
//     var dept = document.getElementById("dept-input").value;
//     var content = document.getElementById("content-input").value;
//     console.log(imgUrl);
//     saveToLocalStorage(dept,imgUrl,title,content);
//     console.log("POST SAVED");
//     event.stopPropagation();
//   });
// }
