import sellerImage from "@/assets/seller.png";

export const sellers = new Array(300)
  .fill({
    id: 1,
    name: "ملابس الصيرفي",
    image: sellerImage,
    reviewsNum: 121,
    totalProducts: 129,
  })
  .map((a, n) => ({ ...a, id: n }));
