export class CourseService {
    courses = [
    { 
      id: 1, 
      title: "Web Development", 
      description: "Learn to build modern websites and apps.", 
      image: "assets/images/web-dev.jpg", 
      author: "John Doe", 
      duration: "25 Hours", 
      type: "Premium", 
      price: 120.00 
    },
    { 
      id: 2, 
      title: "Data Science", 
      description: "Master Python, ML, and AI techniques.", 
      image: "assets/images/data-science.jpg", 
      author: "Jane Smith", 
      duration: "40 Hours", 
      type: "Free", 
      price: 0.00 
    },
    { 
      id: 3, 
      title: "UI/UX Design", 
      description: "Design user-friendly and stunning interfaces.", 
      image: "assets/images/uiux.jpg", 
      author: "Alex Johnson", 
      duration: "30 Hours", 
      type: "Premium", 
      price: 95.00 
    }
  ];

  getAllCourses(): Promise<{id: number, title: string, description: string, image: string, author: string, duration: string, type: string, price: number}[]> {
    const courseList = new Promise<{id: number, title: string, description: string, image: string, author: string, duration: string, type: string, price: number}[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.courses)
      }, 1000)
    });
    return courseList;
  }
}