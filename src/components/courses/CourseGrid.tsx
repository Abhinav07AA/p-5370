import React from 'react';
import CourseCard from './CourseCard';

interface Course {
  id: number;
  image: string;
  title: string;
  description: string;
  progress?: number;
  chapters?: number;
}

interface CourseGridProps {
  courses: Course[];
  showProgress?: boolean;
}

const CourseGrid: React.FC<CourseGridProps> = ({ courses, showProgress = false }) => {
  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
      {courses.map((course) => (
        <div key={course.id} className="w-3/12 max-md:w-full max-md:ml-0">
          <CourseCard
            image={course.image}
            title={course.title}
            description={course.description}
            progress={course.progress}
            chapters={course.chapters}
            showProgress={showProgress}
          />
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;