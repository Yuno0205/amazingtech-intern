// coursesData.ts

export interface Mentor {
  name: string;
  image: string;
}

export interface Course {
  id: string;
  courseName: string;
  courseImage: string;
  courseDescription: string;
  level?: string;
  field?: string;
  form?: string;
  rate: number;
  countSession: number;
  price: number;
  countParticipant: number;
  mentor: Mentor;
}

const coursesData: Course[] = [
  {
    id: "1",
    courseName: "JavaScript",
    courseImage: "https://bsmart.edu.vn/files/CourseImage/java-script-SEO.jpg",
    courseDescription:
      "JavaScript là ngôn ngữ lập trình phổ biến nhất trên thế giới trong suốt 20 năm qua. Nó cũng là một trong số 3 ngôn ngữ chính của lập trình web.",
    level: "Medium",
    field: "Frontend",
    form: "Online",
    rate: 5,
    countSession: 18,
    price: 2500000,
    countParticipant: 18,
    mentor: {
      name: "Đỗ Minh Quân",
      image: "https://bsmart.edu.vn/files/Avatar_Mentor/qqq.webp",
    },
  },
  {
    id: "2",
    courseName: "Nhập Môn Kiểm Thử Phần Mềm",
    courseImage: "https://bsmart.edu.vn/files/testing%20foundation.jpg",
    courseDescription:
      "Nhập Môn Kiểm Thử Phần Mềm sẽ cung cấp cho bạn kiến thức có thể áp dụng vào công việc kiểm thử. Như viết test case, system test hay hiểu rõ quy trình thực hiện kiểm thử một phần mềm nào đó. Khóa học sẽ hướng đến Manual Testing đồng thời cung cấp khái niệm về Automation Testing.",
    level: "Medium",
    field: "Other",
    form: "Online",
    rate: 4.5,
    countSession: 12,
    price: 2500000,
    countParticipant: 22,
    mentor: {
      name: "Tô Lý Hữu Nhân",
      image:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-9a0071b969.webp",
    },
  },
  {
    id: "3",
    courseName: "Windows Form",
    courseImage: "https://bsmart.edu.vn/files/CourseImage/c-sharp.webp",
    courseDescription:
      "Khóa học Windows Forms là một khóa học chuyên về phát triển ứng dụng desktop sử dụng công nghệ Windows Forms của Microsoft. Windows Forms là một bộ công cụ phát triển ứng dụng trực quan và dễ sử dụng trong môi trường Windows, cho phép người phát triển xây dựng các ứng dụng Windows một cách nhanh chóng và hiệu quả.",
    level: "Medium",
    field: "Other",
    form: "Online",
    rate: 0,
    countSession: 0,
    price: 3000000,
    countParticipant: 0,
    mentor: {
      name: "Mentor Phan Nhật Tân",
      image:
        "https://bsmart.edu.vn/files/Avatar_Mentor/c8b543a9e0773c296566.webp",
    },
  },
  {
    id: "4",
    courseName: "Object-oriented programming (OOP)",
    courseImage:
      "https://bsmart.edu.vn/files/CourseImage/object-oriented-programming-oop.png",
    courseDescription:
      "Lập trình hướng đối tượng (OOP) là một kỹ thuật lập trình cho phép lập trình viên tạo ra các đối tượng trong code trừu tượng hóa các đối tượng.",
    level: "Medium",
    rate: 5,
    field: "Backend",
    form: "Online",
    countSession: 18,
    price: 3400000,
    countParticipant: 26,
    mentor: {
      name: "Nguyễn Viết Châu",
      image:
        "https://bsmart.edu.vn/files/Avatar_Mentor/z4269915579822-aeabe623ca8078c8fcc4fdf2780c3869.webp",
    },
  },
  {
    id: "5",
    courseName: "HTML & CSS _ Basic",
    courseImage: "https://bsmart.edu.vn/files/CourseImage/html-vs-css.png",
    courseDescription:
      "HTML hay HyperText Markup Language – Ngôn ngữ đánh dấu siêu văn bản, là ngôn ngữ được sử dụng cho các tài liệu web. ",
    level: "Easy",
    field: "Frontend",
    form: "Offline",
    rate: 5,
    countSession: 18,
    price: 30000000,
    countParticipant: 12,
    mentor: {
      name: "Đoàn Ngọc Trân Châu",
      image: "https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp",
    },
  },
  {
    id: "6",
    courseName: ".NET Core API",
    courseImage:
      "https://bsmart.edu.vn/files/CourseImage/t-com_netcore_770px.png",
    courseDescription:
      ".NET Core API là một framework được tạo ra bởi Microsoft để xây dựng các ứng dụng web API và microservices. Nó được thiết kế để hỗ trợ việc phát triển ứng dụng đa nền tảng, cho phép các nhà phát triển xây dựng ứng dụng trên nhiều nền tảng như Windows, macOS và Linux. Ứng dụng được phát triển bằng .NET Core API có thể hoạt động trên các nền tảng khác nhau một cách dễ dàng và không cần phải thực hiện các thủ tục phức tạp để chỉnh sửa mã nguồn.",
    level: "Hard",
    field: "Backend",
    form: "Offline",
    rate: 5,
    countSession: 15,
    price: 3000000,
    countParticipant: 148,
    mentor: {
      name: "Trần Hòa Hiệp",
      image:
        "https://bsmart.edu.vn/files/Avatar_Mentor/ezgif-1-860162a749.webp",
    },
  },
  {
    id: "7",
    courseName: "Database Fundamental",
    courseImage:
      "https://bsmart.edu.vn/files/CourseImage/ezgif-1-1b0fae0dff.webp",
    courseDescription:
      "Cơ sở dữ liệu (Database) là một hệ thống tổ chức và lưu trữ dữ liệu, cho phép người dùng truy cập và quản lý thông tin một cách hiệu quả. Môn học cơ sở dữ liệu (Database) được xem là một trong những môn học quan trọng trong lĩnh vực Công nghệ thông tin.",
    level: "Medium",
    field: "Database",
    form: "Offline",
    rate: 5,
    countSession: 18,
    price: 2500000,
    countParticipant: 17,
    mentor: {
      name: "Đoàn Ngọc Trân Châu",
      image: "https://bsmart.edu.vn/files/Avatar_Mentor/bbb.webp",
    },
  },
  //   {
  //     courseName: "",
  //     courseImage: "",
  //     courseDescription: "",
  //     level: "Medium",
  //     rate: 5,
  //     countSession: 18,
  //     price: 2500000,
  //     countParticipant: 18,
  //     mentor: {
  //       name: "",
  //       image: "",
  //     },
  //   },
  //   {
  //     courseName: "",
  //     courseImage: "",
  //     courseDescription: "",
  //     level: "Medium",
  //     rate: 5,
  //     countSession: 18,
  //     price: 2500000,
  //     countParticipant: 18,
  //     mentor: {
  //       name: "",
  //       image: "",
  //     },
  //   },
  //   {
  //     courseName: "",
  //     courseImage: "",
  //     courseDescription: "",
  //     level: "Medium",
  //     rate: 5,
  //     countSession: 18,
  //     price: 2500000,
  //     countParticipant: 18,
  //     mentor: {
  //       name: "",
  //       image: "",
  //     },
  //   },
];

export default coursesData;
