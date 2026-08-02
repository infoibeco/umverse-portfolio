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
  },
  {
    id: "companion",
    title: "Companion",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/companion.png",
  },
{
    id: "the-gum",
    title: "The Gum",
    logline: "Bubble gum that reveals emotions in color.",
    imageUrl: "/emotion-gum.jpg",
    // teaserUrl: "https://youtu.be/xxxxxxxx", // 티저 완성되면 여기에 링크 추가
  },
  {
    id: "the-dispenser",
    title: "The Dispenser",
    logline: "A peaceful world is a form that conceals human cruelty.",
    imageUrl: "/the-dispenser.jpg",
  },
  {
    id: "amniotic-rain",
    title: "Amniotic Rain",
    logline: "A controlled birth within a quiet system.",
    imageUrl: "/amniotic-rain.jpg",
  },
  {
    id: "social-balance-unit",
    title: "Social Balance Unit",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/social-balance-unit.png",
  },
  {
    id: "companion",
    title: "Companion",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/companion.png",
  },
  {
    id: "social-balance-unit",
    title: "Social Balance Unit",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/social-balance-unit.png",
  },
  {
    id: "companion",
    title: "Companion",
    logline: "A short-form IP foundation series within the UMVERSE system.",
    imageUrl: "/companion.png",
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
