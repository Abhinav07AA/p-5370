import React from 'react';

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  progress?: number;
  chapters?: number;
  showProgress?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  image,
  title,
  description,
  progress,
  chapters,
  showProgress = false,
}) => {
  return (
    <div className="bg-white grow w-full pb-[25px] rounded-xl">
      <div className="flex flex-col relative aspect-[1.364] w-full pt-4 pb-[205px] px-[69px] rounded-xl max-md:pl-5 max-md:pb-[100px]">
        <img
          loading="lazy"
          srcSet={image}
          className="absolute h-full w-full object-cover inset-0"
          alt={title}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/e37e8ba2dfdd41b9a6fe45b2b676ee0a41f70e6f74f6f5bf95d77c054258fc6a?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-8 mb-[-41px] max-md:mb-2.5"
          alt="Course Icon"
        />
      </div>
      <div className="flex flex-col items-stretch mt-4 px-4">
        <h3 className="text-[#0E1116] text-base font-medium leading-[1.1] tracking-[0.08px]">
          {title}
        </h3>
        <p className="text-[#596C8C] text-xs font-normal leading-[13px] tracking-[0.05px] mt-2">
          {description}
        </p>
        {showProgress && progress !== undefined && (
          <div className="mt-[27px]">
            <div className="text-[#0E1116] text-xs font-normal leading-[1.1] tracking-[0.05px]">
              {progress}% completed
            </div>
            <div className="max-w-full w-[313px] mt-2 rounded-[100px]">
              <div className="bg-[rgba(217,217,217,1)] flex flex-col rounded-[100px]">
                <div
                  className="bg-[rgba(0,170,17,1)] flex h-1 rounded-[100px]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        )}
        {chapters !== undefined && (
          <div className="flex w-full items-stretch gap-5 justify-between mt-7">
            <div className="flex items-center gap-1 text-xs text-[#0E1116] font-normal tracking-[0.05px] my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/158dbe4d1a5a42d179c22261edf721fe13d1998fbb0d830509af195e1654ba3a?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                alt="Chapters Icon"
              />
              <div className="self-stretch my-auto">
                Chapters : <span className="font-medium text-[#0E1116]">{chapters}</span>
              </div>
            </div>
            <button className="self-stretch bg-[#FE1300] gap-2.5 text-sm text-white font-medium text-justify uppercase tracking-[0.18px] px-5 py-[13px] rounded-lg">
              Learn More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;