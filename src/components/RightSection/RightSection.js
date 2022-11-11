import React, { useEffect } from "react";
import CustomRight from "./CustomRight";
import "./styles/RightSection.scss";

export default function RightSection() {
  // Sticky Menu Area
  //    useEffect(() => {
  //     window.addEventListener('scroll', isSticky);
  //     return () => {
  //         window.removeEventListener('scroll', isSticky);
  //     };
  // });
  /* Method that will fix header after a specific scrollable */
  //  const isSticky = (e) => {
  //       const rightAds = document.querySelector('.right_ads');
  //       const initialCoords = rightAds.getBoundingClientRect()
  //       const scrollTop = window.scrollY;
  //       console.log(initialCoords.top);
  //       console.log(scrollTop);
  //       // console.log(window.scrollY);
  //       scrollTop >initialCoords.top ? rightAds.classList.add('is-sticky') : rightAds.classList.remove('is-sticky');
  //   };

  return (
    <div className="right-section">
      <CustomRight
        src1="https://i1.wp.com/www.arise.tv/batman/2022/11/Elon-Musk-scaled.jpeg?resize=75%2C75&ssl=1"
        src2="https://www.arise.tv/batman/2022/11/North-Korea-Fires-Intercontinental-Ballistic-Missile--75x75.webp"
        src3="https://i0.wp.com/www.arise.tv/batman/2022/11/Trending-1.jpg?resize=75%2C75&ssl=1"
        src4="https://i2.wp.com/www.arise.tv/batman/2022/11/Adams-Oshiomhole-2.jpg?resize=75%2C75&ssl=1"
        header="TRENDING NEWS"
        textContent1="
        Musk: People Banned from Twitter Won't Be Restored for Weeks"
        textContent2="
        North Korea Fires Intercontinental Ballistic Missile"
        textContent3="
        Wike Berates Iyorchia Ayu, Donates 25 Cars To Benue PDP - Trending With Ojy Okpe"
        textContent4="Adams Oshiomhole: Unlike Other Candidates, Tinubu's Manifesto Addresses the 'How' in Providing Solutions"
      />
      <div className="right_ads">
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      <CustomRight
        src1="https://i2.wp.com/www.arise.tv/batman/2021/01/Yemi-Osinbajo-1-e1617797989158.jpg?resize=75%2C75&ssl=1"
        src2="https://i1.wp.com/www.arise.tv/batman/2021/05/Dangote-Refinery.jpg?resize=75%2C75&ssl=1"
        src3="https://www.arise.tv/batman/2022/08/Atiku-Abubakar-75x75.webp"
        src4="https://www.arise.tv/batman/2022/11/Shettima--75x75.webp"
        header="TOP STORIES"
        textContent1="
        Floods: Nigeria Approves Additional N260bn for Repair of East-West Road"
        textContent2="OPEC: Dangote's 650,000bpd Facility to Account for More Than Half of Africa's Additional Refining"
        textContent3="
        Atiku: Shettima's Statement Denigrates Business That Employs Thousands of Workers"
        textContent4="It's Payback Time, Shettima Tells Hausa Community in Lagos"
      />
      <div className="right_ads">
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      <CustomRight
        src1="https://i2.wp.com/www.arise.tv/batman/2022/11/Terver-Akase.jpg?resize=75%2C75&ssl=1"
        src2="https://i1.wp.com/www.arise.tv/batman/2022/11/British-Police-Officers-Deployed-.jpeg?resize=75%2C75&ssl=1"
        src3="https://i0.wp.com/www.arise.tv/batman/2022/11/North-and-South-Korea-Fire-Missiles-off-Each-Other.jpeg?resize=75%2C75&ssl=1"
        src4="https://i2.wp.com/www.arise.tv/batman/2022/11/Addax-Signs-Settlement-Deal-with-NNPC.jpg?resize=75%2C75&ssl=1"
        header="FEATURED"
        textContent1="
        It's Not too Late for the PDP to Unite, Arrogance Should Not Be Part of Negotiations - Terver Akase"
        textContent2="
        World Cup: British Police Officers Deployed in Qatar to Act as 'Buffers' Between Fans and Local Police"
        textContent3="
        North and South Korea Fire Missiles off Each Other's Coasts for First Time"
        textContent4="Addax Signs Settlement Deal with NNPC, Assets Revert to National Oil Company"
      />
      <div className="right_ads">
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
      <CustomRight
        src1="https://i2.wp.com/www.arise.tv/batman/2022/10/Buhari-with-Service-Chiefs.jpeg?resize=75%2C75&ssl=1"
        src2="https://i2.wp.com/www.arise.tv/batman/2022/10/Buhari-with-Service-Chiefs.jpeg?resize=75%2C75&ssl=1"
        src3="https://i1.wp.com/www.arise.tv/batman/2022/10/Nigeria-Floods-Bayelsa-IDP-Camps-.jpeg?resize=75%2C75&ssl=1"
        src4="https://i1.wp.com/www.arise.tv/batman/2022/10/Nigeria-Floods-Bayelsa-IDP-Camps-.jpeg?resize=75%2C75&ssl=1"
        header="PAST WEEK"
        textContent1="
        Buhari Summons Emergency Security Meeting on Monday"
        textContent2="
        NAFDAC: No Mercury Contaminated Vaccine Administered in Nigeria"
        textContent3="
        Nigeria Floods: Bayelsa IDP Camps Record 15 New Born Babies in Two Weeks"
        textContent4="Nigeria Floods: Bayelsa IDP Camps Record 15 New Born Babies in Two Weeks"
      />

      <div className="right_ads">
        New ADVERTISEMENT <br />
        New ADVERTISEMENT <br />
        New ADVERTISEMENT
        <i className="fa-solid fa-xmark cancel_btn"></i>
      </div>
    </div>
  );
}
