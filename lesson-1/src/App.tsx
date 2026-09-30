import { useState } from "react";
import Counter from "./components/Counter";
import PostCounter from "./components/PostCounter";
import "./assets/scss/App.scss";

interface Todo {
	id: number;
	title: string;
	likes: number;
}

function App() {
	// let counter = 0;  // stateless
	const [msg, setMsg] = useState("Hi mom!");
	const [posts, setPosts] = useState<Todo[]>([
		{ id: 1, title: "React Rocks 🎸!", likes: 1337 },
		{ id: 2, title: "JSX Rocks Even Moar 🤘🏻!", likes: 42 },
		{ id: 3, title: "Got state? 🚓", likes: 3 },
	]);
	const [salary, setSalary] = useState(10);

	const handleChangeSalary = (amount: number) => {
		if (salary + amount < 5) {
			setSalary(5);
			return;
		}

		// Or just use Math.max(5, salary + amount) below
		setSalary(salary + amount);
	}

  const increaseLikes = (postId: number) => {
    setPosts(prevPosts => prevPosts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
  }

  const deletePost = (postId: number) => {
    if (!postId) return;
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  }

	console.log("App is rendering...");

	return (
		<div className="container py-2">
			<h1>01-react-basics</h1>

			<Counter />

			<Counter />

			<hr />

			<p>{msg}</p>

			<button className="btn btn-primary" onClick={() => setMsg("Hi dad!")}>Hi dad?</button>

			<hr />

			<h2>Salary</h2>

			<p>Salary per hour: {salary} &euro;</p>

			{salary < 10 && (
				<div className="alert alert-warning">
					You might want to change job?
				</div>
			)}

			<div className="buttons">
				<div className="mb-1">
					<button
						className="btn btn-primary btn-lg"
						onClick={() => handleChangeSalary(1)}
					>
						Raise 1 &euro; 🤑
					</button>
					<button
						disabled={salary === 5}
						className="btn btn-warning btn-lg"
						onClick={() => handleChangeSalary(-1)}
					>
						Decrease 1 &euro; 😢
					</button>
				</div>

				<div className="mb-1">
					<button
						className="btn btn-primary btn-lg"
						onClick={() => handleChangeSalary(5)}
					>
						Raise 5 &euro; 🤑🤑🤑
					</button>
					<button
						disabled={salary - 5 < 5}
						className="btn btn-warning btn-lg"
						onClick={() => handleChangeSalary(-5)}
					>
						Decrease 5 &euro; 😢😢😢
					</button>
				</div>
			</div>

			<hr />

			<h2>Posts</h2>
			<ul>
        {posts.length > 0 && (
				  posts.map(post =>
				  	<li key={post.id}>
				  		{post.title} ({post.likes} likes)
				  		<button className="ms-1 btn btn-sm btn-success" onClick={() => increaseLikes(post.id)}>❤️</button>
				  		<button className="ms-1 btn btn-sm btn-danger" onClick={() => deletePost(post.id)}>💣</button>
				  	</li>
				  )
        )}
        {posts.length === 0 && (
          <li>No posts available.</li>
        )}
			</ul>

			<PostCounter count={posts.length} />
		</div>
	);
}

export default App;
