let stories = [
  { type: "image", src: "FirstDate.jpg", title: "How We Met ❤️", text: "On that beautiful trip, our paths crossed for the first time… and from that very moment, my love story quietly began." },
  { type: "video", src: "photo2.mp4", title: "Our First Video Moment 🎥", text: "This memory is forever special..." },
  { type: "image", src: "photo3.jpg", title: "Beautiful Days 🌸", text: "Standing outside her PG, under the falling rain, my heart was racing. And in that magical moment, as raindrops touched the earth, she gave me her answer — the most beautiful ‘yes’ I had ever heard. Soon after, we captured our first photoshoot together… freezing not just smiles, but the beginning of forever." },
  { type: "image", src: "photo4.jpg", title: "Where Our Hearts Wandered💞", text: "Our first trek together wasn’t just a journey through nature, but a step closer to each other — a beautiful memory we’ll cherish forever." },
  { type: "image", src: "photo5.jpg", title: "When She Took My Breath Away💞", text: "She wore a saree at one of the company’s events, and I was completely mesmerized. Seeing her like that fulfilled a wish I had long held — in that moment, I felt like I was looking at the most beautiful girl on earth.✨💕" },
  { type: "image", src: "photo6.jpg", title: "Konkan Memories🌴", text: "Our first Konkan trip was pure joy — every moment spent exploring together made our bond even stronger." },
  { type: "video", src: "photo7.mp4", title: "Reel Love in Konkan💖", text: "On the shores of Konkan, we filmed our first romantic couple reel — with countless retakes, laughter echoing with the waves, and pure fun filling every frame.🌊🎥💞" },
  { type: "image", src: "photo8.jpg", title: "Mumbai, Us, Forever", text: "Our unplanned Mumbai trip turned into a journey of little moments, where every glance and gesture showed how much we cared for each other🌆💞." },
  { type: "video", src: "photo9.mp4", title: "Nature & Us🌿", text: "Our Torna Fort trek together made us realize the depth of our love for each other. Surrounded by breathtaking nature, we also filmed our second couple reel, capturing our laughter, love, and adventure in every frame.🌄🎥💞" },
  { type: "image", src: "photo10.jpg", title: "Unbreakable Us💖", text: "Now these are we — after a lot of fights, a lot of bad days, we are still together because we are not giving up on each other. Every fight makes us realize we cannot live without each other. Even when the world seemed against us, and the days felt heavy, our love held us close. Each disagreement, each tough moment, only taught us how strong we are together. And now, every laugh, every shared silence, every stolen glance reminds us that choosing each other is the best choice we’ve ever made.❤️✨" }
];

let index = 0;

/* Next Story Function */
function nextStory() {
  index = (index + 1) % stories.length;

  let mediaContainer = document.getElementById("mediaContainer");
  let storyTitle = document.getElementById("storyTitle");
  let storyText = document.getElementById("storyText");

  let current = stories[index];

  // Switch Media
  if (current.type === "image") {
    mediaContainer.innerHTML = `<img src="${current.src}" alt="Memory">`;
  } else {
    mediaContainer.innerHTML = `
      <video controls muted autoplay>
        <source src="${current.src}" type="video/mp4">
      </video>
    `;
  }

  // Update Title & Text
  storyTitle.innerText = current.title;
  storyText.innerText = current.text;

  // Scroll card to top
  document.querySelector(".story-card").scrollTop = 0;
}
