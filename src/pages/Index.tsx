import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CourseGrid from '@/components/courses/CourseGrid';

const myCourses = [
  {
    id: 1,
    image: "https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/bf6ce19bd103dc10cb8df7aa12fd6b841ffac349c06e9bf216ef853f469596d8?placeholderIfAbsent=true",
    title: "HDFC Module 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    progress: 52
  },
  {
    id: 2,
    image: "https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1275bbb33fc4109d3abe6248583ca55680241b78f43b7d21588b1ecc7255d411?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1275bbb33fc4109d3abe6248583ca55680241b78f43b7d21588b1ecc7255d411?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1275bbb33fc4109d3abe6248583ca55680241b78f43b7d21588b1ecc7255d411?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1275bbb33fc4109d3abe6248583ca55680241b78f43b7d21588b1ecc7255d411?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1275bbb33fc4109d3abe6248583ca55680241b78f43b7d21588b1ecc7255d411?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1275bbb33fc4109d3abe6248583ca55680241b78f43b7d21588b1ecc7255d411?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1275bbb33fc4109d3abe6248583ca55680241b78f43b7d21588b1ecc7255d411?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1275bbb33fc4109d3abe6248583ca55680241b78f43b7d21588b1ecc7255d411?placeholderIfAbsent=true",
    title: "HDFC Module 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    progress: 0
  },
  {
    id: 3,
    image: "https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f5a45fc58bfadbbacb88541e5e6b38b8216abe112188c2b732f920f9901c0d71?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f5a45fc58bfadbbacb88541e5e6b38b8216abe112188c2b732f920f9901c0d71?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f5a45fc58bfadbbacb88541e5e6b38b8216abe112188c2b732f920f9901c0d71?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f5a45fc58bfadbbacb88541e5e6b38b8216abe112188c2b732f920f9901c0d71?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f5a45fc58bfadbbacb88541e5e6b38b8216abe112188c2b732f920f9901c0d71?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f5a45fc58bfadbbacb88541e5e6b38b8216abe112188c2b732f920f9901c0d71?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f5a45fc58bfadbbacb88541e5e6b38b8216abe112188c2b732f920f9901c0d71?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f5a45fc58bfadbbacb88541e5e6b38b8216abe112188c2b732f920f9901c0d71?placeholderIfAbsent=true",
    title: "HDFC Module 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    progress: 52
  },
  {
    id: 4,
    image: "https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f9c6d45a776131faeb8fc578a0e4b86d976a5af977e7927b976279f332311081?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f9c6d45a776131faeb8fc578a0e4b86d976a5af977e7927b976279f332311081?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f9c6d45a776131faeb8fc578a0e4b86d976a5af977e7927b976279f332311081?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f9c6d45a776131faeb8fc578a0e4b86d976a5af977e7927b976279f332311081?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f9c6d45a776131faeb8fc578a0e4b86d976a5af977e7927b976279f332311081?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f9c6d45a776131faeb8fc578a0e4b86d976a5af977e7927b976279f332311081?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f9c6d45a776131faeb8fc578a0e4b86d976a5af977e7927b976279f332311081?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f9c6d45a776131faeb8fc578a0e4b86d976a5af977e7927b976279f332311081?placeholderIfAbsent=true",
    title: "HDFC Module 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    progress: 52
  }
];

const otherCourses = myCourses.map(course => ({
  ...course,
  chapters: 4
}));

const Index = () => {
  return (
    <div className="bg-[rgba(247,245,242,1)] overflow-hidden">
      <Header />
      <main className="flex w-full flex-col items-stretch mt-6 px-9 max-md:max-w-full max-md:px-5">
        <nav className="flex flex-col items-stretch leading-[1.1]">
          <div className="flex gap-2 text-xs text-[#596C8C] font-normal tracking-[0.05px]">
            <div>Dashboard</div>
            <div>/</div>
            <div className="text-[#0E1116]">My Courses</div>
          </div>
          <h1 className="text-[#003B90] text-[33px] font-bold tracking-[0.08px] mt-1">
            My Courses
          </h1>
        </nav>

        <section className="mt-6">
          <h2 className="text-[#0E1116] text-sm font-normal leading-[1.1] tracking-[0.18px] uppercase">
            Course Overview
          </h2>
          
          <div className="flex text-sm text-[#0E1116] font-normal leading-[1.1] flex-wrap mt-3 max-md:max-w-full gap-3">
            <button className="items-stretch border border-[color:var(--Stroke,#DBDBDB)] shadow-[0px_6px_24px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.08)] bg-white flex whitespace-nowrap capitalize tracking-[0.18px] justify-center px-3 py-2 rounded-lg border-solid">
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <img src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/909e53409122fd7f578b763b80e24f32f5296a412559f7f877fcd27d8ca3e763?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 shrink-0" alt="Filter" />
                  <span>All</span>
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/9323fcd0a029a9e06c9451dbc84b310cb35145601682ec4c3684e6406d28facb?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 shrink-0" alt="Dropdown" />
              </div>
            </button>
            
            <div className="flex min-w-60 gap-3 tracking-[0.04px]">
              <button className="items-stretch border border-[color:var(--Stroke,#DBDBDB)] shadow-[0px_6px_24px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.08)] bg-white flex justify-center px-3 py-2 rounded-lg border-solid">
                <div className="flex gap-2">
                  <div className="flex gap-1">
                    <img src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a04d6a53858dfd91bfe1cee6f3ff158939ed3a4ee57a3b85df19d97bd92aab81?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 shrink-0" alt="Sort" />
                    <span>Sort by course name</span>
                  </div>
                  <img src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/f487cd9cdfe16d88493703f84d7476e0f957ed3f97d60057038a3a8dd5f2db93?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 shrink-0" alt="Dropdown" />
                </div>
              </button>
              
              <button className="items-stretch border border-[color:var(--Stroke,#DBDBDB)] shadow-[0px_6px_24px_0px_rgba(0,0,0,0.05),0px_0px_0px_1px_rgba(0,0,0,0.08)] bg-white flex whitespace-nowrap justify-center px-3 py-2 rounded-lg border-solid">
                <div className="flex gap-2">
                  <span>Card</span>
                  <img src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/8caa3fee832f6ca2d8623a0967494c73d57de77bbe9d47d66202ad04fe5b5c9c?placeholderIfAbsent=true" className="aspect-[1] object-contain w-4 shrink-0" alt="View" />
                </div>
              </button>
            </div>
          </div>

          <div className="border border-[color:var(--Stroke,#DBDBDB)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.12)_inset] bg-white flex w-full flex-col text-sm text-[#596C8C] font-normal whitespace-nowrap capitalize tracking-[0.18px] leading-[1.1] justify-center mt-4 px-4 py-3.5 rounded-xl border-solid max-md:max-w-full max-md:pr-5">
            <div className="flex items-center gap-3">
              <img src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/541afe37ff04309a3f98de6dcf6062b8ab5510c5f986e3d13a1a937ef2d577b0?placeholderIfAbsent=true" className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto" alt="Search" />
              <input 
                type="text" 
                placeholder="Search"
                className="bg-transparent border-none outline-none flex-1"
              />
            </div>
          </div>

          <div className="mt-8 max-md:max-w-full">
            <CourseGrid courses={myCourses} showProgress={true} />
          </div>
        </section>

        <section className="leading-[1.1] mt-12 max-md:mt-10">
          <h2 className="text-[#003B90] text-[33px] font-bold tracking-[0.08px]">
            Other Courses
          </h2>
          <p className="text-[#596C8C] text-sm font-normal tracking-[0.04px] mt-3">
            Explore our diverse range of courses.
          </p>
          <div className="mt-8 max-md:max-w-full">
            <CourseGrid courses={otherCourses} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;