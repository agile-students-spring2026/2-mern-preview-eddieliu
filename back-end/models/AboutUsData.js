const AboutUsData = () => {
  return {
    title: "About Us",
    name: "Eddie Liu",
    img: {
      src: "http://localhost:5002/image/EddieLiuPhoto.jpg",
      alt: "A photo of Eddie Liu"
    },
    bio: "Eddie Liu is an AI & Backend Developer exploring agentic AI and rapid prototyping while continuing to grow his full-stack skills.",
    hobbies: "When he's not staring at a terminal, he likes reading📚, working out💪, playing guitar🎸, or learning new languages🌍.",
  }
}

// export the about us data so other modules can import it
module.exports = {
  aboutUsData: AboutUsData(),
}