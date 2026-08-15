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
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/social-balance-unit.png",
    teaserUrl: "https://youtu.be/Gx5zQgu6V-M",
  },
  {
    id: "companion",
    title: "Companion",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/companion.png",
teaserUrl: "https://youtu.be/2T9VjpR2qq4",
  },
  {
    id: "purple",
    title: "Purple Eyes, Purple Phobia",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/purple.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },



 {
    id: "reset",
    title: "Reset",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/reset.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
   {
    id: "arm",
    title: "The Printed Body",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/arm.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
 {
    id: "gamguma",
    title: "Gamguma",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/gamguma.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },




{
    id: "imagine",
    title: "Don't Imagine",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/imagine.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
  {
    id: "pants",
    title: "What happened to my pants?",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/pants.png",
  },
{
    id: "ear",
    title: "Eyes, Ears, Nose and Mouth",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/ear.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },



  {
    id: "dispenser",
    title: "The dispenser",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/dispenser.png",
  },
  {
    id: "amniotic",
    title: "Amniotic Rain",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/amniotic.png",
  },
  {
    id: "emotion-gum",
    title: "The Gum",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/emotion-gum.png",
  },
 



{
    id: "the-gift",
    title: "The Gift",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/the-gift.png",
  },
 {
    id: "hero",
    title: "Hedgehog Man",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/hero.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
{
    id: "jellyfish",
    title: "Jellyfish",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/jellyfish.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  }, 





 {
    id: "zombie",
    title: "Zombie Bugs",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/zombie.png",
  },
 {
    id: "village",
    title: "Village Sunsong",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/village.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  }, 
{
    id: "cicada-sleep",
    title: "Cicada Sleep",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/cicada-sleep.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },




  {
    id: "romeo-juliet",
    title: "Romeo and Juliet Alpha",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/romeo-juliet.png",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
{
    id: "hair",
    title: "Begging Hair",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/hair.png",
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
