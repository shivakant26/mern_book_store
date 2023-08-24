import cat1 from "../assets/images/cat1.png";
import cat2 from "../assets/images/cat2.png";
import cat3 from "../assets/images/cat3.png";
import cat4 from "../assets/images/cat4.png";
import cat5 from "../assets/images/cat5.png";
import cat6 from "../assets/images/cat6.png";
import ProfileImage  from "../assets/images/profile.jpg"
export const BookCategoryCardData = [
  {
    image: cat1,
    alt:"cat_1",
    title: "Textbooks",
    discription:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
  },
  {
    image: cat2,
    alt:"cat_2",
    title: "Science",
    discription:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
  },
  {
    image: cat3,
    alt:"cat_3",
    title: "History",
    discription:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
  },
  {
    image: cat4,
    alt:"cat_4",
    title: "Biography",
    discription:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
  },
  {
    image: cat5,
    alt:"cat_5",
    title: "Adventure",
    discription:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
  },
  {
    image: cat6,
    alt:"cat_6",
    title: "Fantasy",
    discription:
      "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
  },
];

export const whatSayData = [
    {
      description:
        "Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
        alt:"profile",
        profileImage:ProfileImage,
        profileName:"Jhon Mark",
        designation:"student"
    },
    {
      description:
        "Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
        alt:"profile",
        profileImage:ProfileImage,
        profileName:"Jhon Mark",
        designation:"student"
    },
    {
      description:
        "Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by",
        alt:"profile",
        profileImage:ProfileImage,
        profileName:"Jhon Mark",
        designation:"student"
    },
  ];

  export const MenuLinkData = [
    {
        labelName:"home",
        isScrollLink: false,
        routePath: "/" 
    },
    {
        labelName:"about",
        isScrollLink: true 
    },
    {
        labelName:"category",
        isScrollLink: true 
    },
    {
        labelName:"blog",
        isScrollLink: true 
    },
    {
        labelName:"contactus",
        isScrollLink: true 
    }
  ]
