const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function render() {
    let postsContainer = document.getElementById("posts")

    for (let i = 0; i < posts.length; i++) {
        var post = posts[i]
        postsContainer.innerHTML += `
        <section class="post">
            <section class="author-info">
                <img src="${post.avatar}" class="author-avatar">
                <div>
                    <p class="author-name">${post.name}</p>
                    <p class="location">${post.location}</p>
                </div>
            </section>
            <section>
                <img src="${post.post}" alt="post image"  class="post-image" data-postid="${i}">
            </section>
            <section class="post-icons">
                <button class="like-btn"><img src="images/icon-heart.png" alt="" data-postid="${i}"></button>
                <button class="comment-btn"><img src="images/icon-comment.png" alt=""></button>
                <button class="dm-btn"><img src="images/icon-dm.png" alt=""></button>
            </section>
            <section class="post-content">
                <p class="likes" id="likes${i}">${post.likes} likes</p>
                <p class="comment"><span class="author-name">${post.username}</span> ${post.comment}</p>
            </section>  
        </section>
        `
    }
    
}

function increaseLikes(postId) {
    let likes = document.getElementById(`likes${postId}`)
    posts[postId].likes += 1
    likes.textContent = `${posts[postId].likes} likes` 
}

render()

const likeBtns = document.querySelectorAll(".like-btn")
const postImages = document.querySelectorAll(".post-image")

for (let i = 0; i < likeBtns.length; i++) {
    var btn = likeBtns[i]
    btn.addEventListener('click', function(e) {
        let postId = e.target.dataset.postid
        increaseLikes(postId)
        
    })
}

for (let i = 0; i < postImages.length; i++) {
    var img = postImages[i]
    img.addEventListener('dblclick', function(e) {
        let postId = e.target.dataset.postid
        increaseLikes(postId)
    })
}



