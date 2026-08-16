// Concept Grid data
//
// 스틸컷이 나올 때마다 이 배열에 항목을 하나씩 추가하면
// 홈페이지 Concept Grid 섹션에 자동으로 반영됩니다.
//
// imageUrl: client/public/concepts/ 폴더에 이미지를 넣고 "/concepts/파일명.jpg" 로 지정하세요.
// teaserUrl: 유튜브/비메오 등 티저 영상 링크가 있으면 넣고, 없으면 생략(undefined) 가능합니다.

export interface Concept {
  id: string;
  title: string;
  logline: string;
  imageUrl: string;
  teaserUrl?: string;
}

export const concepts: Concept[] = [
  {
    id: "social-balance-unit",
    title: "Social Balance Unit",
    logline: "In a society where a device measures who holds power in every relationship, a woman who has always occupied the lowest social position survives a luxury-cruise disaster and slowly becomes the most dangerous of six people stranded on an island where wealth and status no longer matter.",
    imageUrl: "/social-balance-unit.png",
    teaserUrl: "https://youtu.be/Gx5zQgu6V-M",
  },
  {
    id: "companion",
    title: "Companion",
    logline: "Genetically engineered “companion humans” are created to ease human loneliness—and programmed to die before the age of twenty. A young scientist races to discover the genetic code that could save the girl he has loved as his sister since childhood.",
    imageUrl: "/companion.png",
teaserUrl: "https://youtu.be/2T9VjpR2qq4",
  },
  {
    id: "purple",
    title: "Purple Eyes, Purple Phobia",
    logline: "A boy terrified of the color purple befriends a girl treated like a spectacle because of her violet eyes, and through a pair of glasses that turns their world yellow, their brief friendship gives them both the courage to face what they fear most.",
    imageUrl: "/purple.png",
    teaserUrl: "https://youtu.be/_l7e8Jnz4HM",   
},





   {
    id: "arm",
    title: "The Printed Body",
    logline: "After receiving a 3D-printed arm, a man falls in love with a woman whose transplanted ear bears the same model number—then discovers a body beneath the hospital with both of their missing parts cut from it.",
    imageUrl: "/arm.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
 {
    id: "gamguma",
    title: "Gamguma",
    logline: "When a genetically engineered hybrid crop that restores youth and protects against disease is hoarded by the wealthy, a desperate woman joins a band of modern-day raiders who break into the bunkers of the rich to save her dying sister.",
    imageUrl: "/gamguma.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
{
    id: "cicada-sleep",
    title: "Cicada Sleep",
    logline: "People who have endured years of failure and isolation begin attaching themselves to building walls and awakening to brief, spectacular success, but an unemployed young man discovers that the miracle consumes their entire remaining lifespan in a single brilliant season.",
    imageUrl: "/cicada-sleep.png",
    teaserUrl: "https://youtu.be/8CqO602xURk",
  },






{
    id: "imagine",
    title: "Don't Imagine",
    logline: "A woman raised to believe she suffers from a severe memory disorder stops taking her medication and discovers that she was never ill—her family and doctors have been suppressing her ability to make anything she imagines become real.",
    imageUrl: "/imagine.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
  {
    id: "pants",
    title: "What happened to my pants?",
    logline: "A politician who lives a richer and more perfect life in virtual reality loses the trousers from his avatar, and when he ventures into the neglected real world to repair his hacked account, he becomes the only person capable of stopping a cyberattack that could kill millions.",
    imageUrl: "/pants.png",
teaserUrl: "https://youtu.be/x6d26p-IlQ0"
  },
{
    id: "ear",
    title: "Eyes, Ears, Nose and Mouth",
    logline: "Four children who each lose a different sense in a building collapse learn to function as a single extraordinary team, and when they uncover the identity of a serial killer, they become the world’s most incomplete group of superheroes.",
    imageUrl: "/ear.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },





{
    id: "zombie",
    title: "Zombie Bugs",
    logline: "A swarm of flesh-eating insects that emerges only once every few months attacks a wedding, trapping two friends inside an isolated villa where they must survive until sunrise—but when daylight arrives, the sound of the insects does not stop.",
    imageUrl: "/zombie.png",
  },
{
    id: "jellyfish",
    title: "Jellyfish",
    logline: "A lonely girl discovers a transparent creature that can transform into anything it consumes, and in her desperation to create the perfect companion, she murders the boy she loves and feeds him to it.",
    imageUrl: "/jellyfish.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  }, 
 {
    id: "hero",
    title: "Hedgehog Man",
    logline: "A reclusive man tormented by the hard quills covering his body turns himself into an online vigilante called Hedgehog Man, allowing viewers to vote on the punishment of criminals—until a real criminal organization decides to hunt him down.",
    imageUrl: "/hero.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },




 
 {
    id: "village",
    title: "Village Sunsong",
    logline: "In a warm rural community populated by war survivors whose bodies have been replaced with machinery, the only child born entirely of flesh discovers that the village’s harvest festival requires a human sacrifice—and that this year, the offering is him.",
    imageUrl: "/village.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
  {
    id: "glass",
    title: "Beneath the Glass Floor",
    logline: "After humanity covers the Earth with a glass floor to separate civilization from the protected wilderness below, an unemployed zookeeper accepts a job at an idyllic international cultural center—only to discover that humans are being prepared as the next museum exhibit.",
    imageUrl: "/glass.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  }, 
{
    id: "the-gift",
    title: "The Gift",
    logline: "An ordinary man hides an alien that crash-lands in his garden in exchange for extraordinary abilities, but as success turns him into the alien’s captor, he discovers that he was never a gifted human—only a test subject in preparation for an invasion.",
    imageUrl: "/the-gift.png",
  },




{
    id: "romeo-juliet",
    title: "Romeo and Juliet Alpha",
    logline: "Juliet is an Alpha whose brain implant has enhanced reason at the expense of emotion, while Romeo is a Normal who lives entirely through his feelings; when the heirs of two rival political families fall in love, they flee both their parents and a deadly neurological virus.",
    imageUrl: "/romeo-juliet.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  }, 
{
    id: "hair",
    title: "Begging Hair",
    logline: "A woman undergoing an experimental treatment for hair loss grows beautiful living hair that feeds on blood, and the more desperately she tries to preserve her appearance, the more her hair evolves into an independent predator.",
    imageUrl: "/hair.png",
  },
 {
    id: "reset",
    title: "Reset",
    logline: "A mysterious countdown appears in the sky and every person on Earth struggles to ensure their own survival, but when the clock reaches zero, humanity discovers that its entire world is merely a computer file scheduled for deletion.",
    imageUrl: "/reset.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },





{
    id: "dispenser",
    title: "The dispenser",
    logline: "A boy raised in a peaceful town where animal slaughter has been abolished and meat comes from automated dispensers escapes across a forbidden forest after an air raid and witnesses exactly where the machines obtain their meat.",
    imageUrl: "/dispenser.png",
  },
  {
    id: "amniotic",
    title: "Amniotic Rain",
    logline: "In a world where babies fall from the sky and are raised by the state as numbers, a young man classified as a dangerous dissident attempts to escape execution—until the rain stops and a government that has always calculated the value of human life is forced to change its rules.",
    imageUrl: "/amniotic.png",
  },
  {
    id: "emotion-gum",
    title: "The Gum",
    logline: "In a society that diagnoses abnormal emotions through the color of chewing-gum bubbles, an emotionally deficient factory worker is confined to a state hospital—only to fall in love and produce a color so intense that he realizes the government is not treating illness, but erasing humanity.",
    imageUrl: "/emotion-gum.png",
  },
 



  // 아래는 템플릿 예시입니다. 스틸컷이 나오는 대로 복사해서 채워주세요.
  // {
  //   id: "concept-slug",
  //   title: "Concept Title",
  //   logline: "One-line logline.",
  //   imageUrl: "/concepts/concept-slug.jpg",
  //   teaserUrl: "https://youtu.be/xxxxxxxx",
  // },
];
