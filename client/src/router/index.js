import { Route, Routes } from 'react-router-dom';
import { CreatePosts, ListPosts } from '../pages/Posts';
import { CreateComments, ListComments } from '../pages/Comments';
import Home from '../pages/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='posts' element={<ListPosts />} />
			<Route path='create/posts' element={<CreatePosts />} />
			<Route path='comments' element={<ListComments />} />
			<Route path='create/comments' element={<CreateComments />} />
		</Routes>
	);
};

export default Router;
