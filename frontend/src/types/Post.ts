export interface Post {
  id: number;
  username: string;
  photo: string;
  location: {
    id: number;
    country: string;
    city: string;
    name: string;
  };
  title: string;
  content: string;
  likes_count: number;
  comments_count: number;
  hashtags: {
    id: number;
    name: string;
  }[];
  created_at: string;
  updated_at: string;
}
