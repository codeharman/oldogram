const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/250px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        post: "https://hips.hearstapps.com/hmg-prod/images/vincent_van_gogh_self_portrait_painting_musee_dorsay_via_wikimedia_commons_promojpg.jpg",
        comment: "just took a few mushrooms lol",
        likes: 1232
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "https://ka-perseus-images.s3.amazonaws.com/5b93c28916f31b55a75bf7b9afcace662837d7bd.jpg",
        post: "https://d7hftxdivxxvm.cloudfront.net/?height=1200&quality=80&resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FTOt5tyR5PR_RbG3Pw6Fj6Q%252Fcustom-Custom_Size___1251px-Gustave_Courbet_-_Le_DeI%25CC%2580%25C2%2581sespeI%25CC%2580%25C2%2581reI%25CC%2580%25C2%2581.JPG&width=1200",
        comment: "i'm feelin a bit stressed tbh",
        likes: 120
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnpO-wwaWGyxHPlUC2pnhBfLdN0bjTeqaZg&s",
        post: "https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=50&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2Ff88jfCM8HiVpQIAaLE92Hg%2Fmain.jpg&width=782",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 232
    }
]

const section = document.querySelector("section")
const template = document.querySelector(".container")

  for (let post of posts) {
  const clone = template.cloneNode(true);

  clone.querySelector('.profile-picture').src = post.avatar
  clone.querySelector('.profile-id').textContent = post.name
  clone.querySelector('.location').textContent = post.location
  clone.querySelector('.main-photo').src = post.post
  clone.querySelector('.comments').textContent = post.comment
  clone.querySelector('.likes').textContent = post.likes

  const heart = clone.querySelector('.heart');
  const counte = clone.querySelector('.likes')

  let count = 0
  
  heart.addEventListener('click', () => {
    count++
    counte.textContent = post.likes + count
  })

  section.appendChild(clone)


  }

  // hide original empty template
  template.style.display = "none"


