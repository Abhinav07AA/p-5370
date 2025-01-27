import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[rgba(2,82,150,1)] flex w-full items-stretch gap-5 flex-wrap justify-between mt-[72px] px-9 py-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="min-h-[138px] my-auto max-md:max-w-full">
        <div className="items-stretch bg-white flex w-[310px] max-w-full flex-col overflow-hidden justify-center px-[18px] py-[9px] rounded-lg">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/d240415d77384d7d6058d5255176fcea9b97beb2279eca526ec40823e6934c21?placeholderIfAbsent=true"
            className="aspect-[4.65] object-contain w-full"
            alt="Company Logo"
          />
        </div>
        <p className="text-[#F7F5F2] text-justify text-sm font-normal leading-[15px] tracking-[0.04px] mt-4 max-md:max-w-full">
          Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <nav className="flex min-h-[170px] gap-9 text-sm text-[#F7F5F2] font-normal text-justify tracking-[0.04px] leading-[1.1]">
        {[1, 2, 3].map((column) => (
          <div key={column}>
            <div>Lorem ipsum</div>
            <div className="mt-4">dolor sit amet</div>
            <div className="mt-4">Lorem ipsum</div>
            <div className="mt-4">dolor sit amet</div>
            <div className="mt-4">Lorem ipsum</div>
            <div className="mt-4">dolor sit amet</div>
          </div>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;