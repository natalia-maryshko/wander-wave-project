import {
  Navigate,
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { PostsPage } from './pages/PostsPage';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { NewPostPage } from './pages/NewPostPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { AuthorPage } from './pages/AuthorPage/AuthorPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { ProfilePage } from './pages/ProfilePage';
import {SubscribersList} from "./pages/SubscribersList";
import {SubscriptionsList} from "./pages/SubscriptionsList";

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path=":postId" element={<PostDetailsPage />} />
          <Route path=":postId/:author-profile" element={<AuthorPage />} />
        </Route>
        <Route path="newpost" element={<NewPostPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="my-profile" element={<ProfilePage />} />
        <Route path="my-profile/subscribers" element={<SubscribersList />} />
        <Route path="my-profile/subscriptions" element={<SubscriptionsList />} />
        {/*<Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  </Router>
);
