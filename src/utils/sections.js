import sectionImage from "/section.png";

export const sections = new Array(300)
  .fill({
    id: 1,
    name: "Categories",
    image: sectionImage,
    link: "",
  })
  .map((a, n) => ({ ...a, id: n }));
