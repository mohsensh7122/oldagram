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


let container = document.getElementById('container');

posts.forEach(post => {
    let html = '';
    html += `
    <section>

    <div class="user d-flex align-items-center">
        <img src="${post.avatar}" alt="${post.name}'s portrait" class="user-img rounded-circle mx-2">
        <div class="user-info d-flex flex-column">
            <p class="my-0 bold">${post.name}</p>
            <p class="my-0">${post.location}</p>
        </div>
    </div>
    <img src="${post.post}" alt="A portrait of ${post.name}" class="image-bg img-fluid mt-2">
    <div class="icons"">
        <img src="images/icon-heart.png" alt="heart icon">
        <img src="images/icon-comment.png" alt="comment icon">
        <img src="images/icon-dm.png" alt="DM icon">
    </div>
    <p class="my-2">${post.likes} likes</p>
    <p class="mt-2"><span class="bold"> ${post.username} </span><span class="comment">${post.comment}</span></p>
    </section>
    <hr>`

    container.innerHTML += html;
})

