import { React, useState, useRef, useEffect } from 'react';
import Client from '../components/Client';
import Editor from '../components/Editor';
import { initSocket } from '../socket';
import ACTIONS from '../Action';
import { useLocation } from 'react-router-dom';



const EditorPage = () => {

	const socketRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		const init = async () => {
			socketRef.current = await initSocket();
			// socketRef.current.emit(ACTIONS.JOIN, {
			// 	roomId,
			// 	username: location.state?.username,
			// });
		};
		init();
	}, []);

	const [clients, setClients] = useState([
		{ socketId: 1, username: 'Rakesh K' },
		{ socketId: 2, username: 'Sayan' },
    { socketId: 3, username: 'John Doe' },
	]);

	return (
		<div className="mainWrap">
			<div className="aside">
				<div className="asideInner">
					<div className="logo">
						<img
							className="logo-image"
							src="/code-sync-logo.png"
							alt="code-sync"
						/>
					</div>

					<h3>Connected</h3>

					<div className="clientsList">
						{clients.map((client) => (
							<Client key={client.socketId} username={client.username} />
						))}
					</div>
				</div>

				<button className="btn copyBtn">Copy ROOM ID</button>
				<button className="btn leaveBtn">Leave</button>
			</div>

			<div className="editorWrap">
        <Editor />
      </div>
		</div>
	);
};

export default EditorPage;
