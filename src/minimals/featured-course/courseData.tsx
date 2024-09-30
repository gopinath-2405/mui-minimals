
interface Course{
  id: number,
  name: string ,
  source: string,
  duration: string,
  users: number ,
  fees: string
}



const courseData: Course[] = [
  {
    id: 1,
    name:  "Introduction to Python Programming " ,
    source: "https://assets.minimals.cc/public/assets/images/mock/course/course-7.webp" ,
    duration: "1h 40m ",
    users: 497,
    fees: "83.74" ,
  },
  { 
    id: 2, 
    name: "Digital Marketing Fundamentals"  ,
    source: "https://assets.minimals.cc/public/assets/images/mock/course/course-8.webp" ,
    duration:"1h 50m" ,
    users: 763,
    fees:"97.14" ,
  },
  {
    id: 3,
    name: "Data Science with R "  ,
    source: "https://assets.minimals.cc/public/assets/images/mock/course/course-9.webp" ,
    duration:"1h 30m" ,
    users: 684,
    fees: "68.71" ,
  },


]

export default courseData;