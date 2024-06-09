import {
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CubeIcon,
  StarIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/grp1.png";
import benefitTwoImg from "../../public/img/grp2.png";
import icon1 from "../../public/img/star-05.png";
import icon2 from "../../public/img/Icon.png";
import icon3 from "../../public/img/Group 35899.png";
import icon4 from "../../public/img/cube-02.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Budgeting Intervals",
      desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      icon: <CubeIcon />,
    },
    {
      title: "Budgeting Intervals",
      desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      icon: <StarIcon />,
    },
    {
      title: "Budgeting Intervals",
      desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
      icon: <ArrowsPointingOutIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Clever Notifications",
      desc: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
      icon: <SunIcon />,
    },
    // {
    //   title: "Powered by Next.js & TailwindCSS",
    //   desc: "This template is powered by latest technologies and tools.",
    //   icon: <AdjustmentsHorizontalIcon />,
    // },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};
const benefitThree = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Clever Notifications",
      desc: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
      icon: <SunIcon />,
    },
    // {
    //   title: "Powered by Next.js & TailwindCSS",
    //   desc: "This template is powered by latest technologies and tools.",
    //   icon: <AdjustmentsHorizontalIcon />,
    // },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};

export { benefitOne, benefitTwo, benefitThree };
