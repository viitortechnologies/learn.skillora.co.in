export type UserRole = "admin" | "student";

export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  enrolledCourseIds: string[];
  createdAt: string;
};

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  isFreePreview: boolean;
  videoFileName: string | null;
};

export type Module = {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  duration: string;
  rating: number;
  students: string;
  price: number;
  originalPrice: number;
  badge?: "New Course" | "Most Popular";
  thumbnail: string;
  banner: string;
  highlights: string[];
  learnings: string[];
  tools: string[];
  mentor: { name: string; title: string; experience: string };
  modules: Module[];
  validUntil: string;
};

export type EbookAuthor = {
  name: string;
  role: string;
  bio: string;
};

export type Ebook = {
  id: string;
  slug: string;
  title: string;
  description: string;
  cover: string;
  price: number;
  originalPrice: number;
  authors?: string[];
  publisher?: string;
  isbn?: string;
  publishedAt?: string;
  authorBios?: EbookAuthor[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  content: string;
};

export type Testimonial = {
  id: string;
  name: string;
  course: string;
  quote: string;
  trainer: string;
  photo: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
};

export type Database = {
  users: User[];
  courses: Course[];
  ebooks: Ebook[];
  blogs: BlogPost[];
  testimonials: Testimonial[];
  contacts: ContactMessage[];
};

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};
