import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="shadow-[0px_3px_8px_0px_rgba(0,0,0,0.08)] bg-white flex w-full items-center gap-5 justify-between px-9 py-[7px] max-md:max-w-full max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true"
        className="aspect-[4.65] object-contain w-[274px] self-stretch shrink-0 max-w-full"
        alt="Company Logo"
      />
      <nav className="self-stretch flex gap-3.5 text-base text-[#596C8C] font-normal tracking-[0.08px] leading-[1.1] my-auto">
        <Link to="/" className="self-stretch gap-2.5 whitespace-nowrap px-3 py-[11px] rounded-lg hover:bg-gray-100">
          Home
        </Link>
        <Link to="/dashboard" className="self-stretch gap-2.5 whitespace-nowrap px-3 py-[11px] rounded-lg hover:bg-gray-100">
          Dashboard
        </Link>
        <Link to="/about" className="self-stretch gap-2.5 px-3 py-[11px] rounded-lg hover:bg-gray-100">
          About Us
        </Link>
        <Link to="/courses" className="self-stretch bg-[rgba(255,210,206,1)] gap-2.5 text-[#FE1300] px-3 py-[11px] rounded-lg">
          My Courses
        </Link>
      </nav>
      <div className="self-stretch flex items-center gap-4 my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/913b43c3de2a2483601568f6b71c61eadcfdaec621d601d2f28c21d8d3c8cf6b?placeholderIfAbsent=true"
          className="aspect-[0.98] object-contain w-10 self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px]"
          alt="Notification"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f99a6d39136027c369dad689f3c85d0107cdbb5e9e6994bedcd542da81394682?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
          alt="Settings"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a5d0634f820df315cad4dd8c60b8bea4b6bea378169619a7c52bdf00ad2f7753?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a5d0634f820df315cad4dd8c60b8bea4b6bea378169619a7c52bdf00ad2f7753?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a5d0634f820df315cad4dd8c60b8bea4b6bea378169619a7c52bdf00ad2f7753?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a5d0634f820df315cad4dd8c60b8bea4b6bea378169619a7c52bdf00ad2f7753?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a5d0634f820df315cad4dd8c60b8bea4b6bea378169619a7c52bdf00ad2f7753?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a5d0634f820df315cad4dd8c60b8bea4b6bea378169619a7c52bdf00ad2f7753?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a5d0634f820df315cad4dd8c60b8bea4b6bea378169619a7c52bdf00ad2f7753?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a5d0634f820df315cad4dd8c60b8bea4b6bea378169619a7c52bdf00ad2f7753?placeholderIfAbsent=true"
          className="aspect-[0.98] object-contain w-10 self-stretch shrink-0 my-auto rounded-lg"
          alt="Profile"
        />
      </div>
    </header>
  );
};

export default Header;