import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
  return (
    //prettier-ignore
    <nav className="nav">
      <div className="navLeft">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/vscode-extensions">VS Code Extensions</Link></li>
          <li><Link to="/vscode-shortcuts">VS Code Shortcuts</Link></li>
          <li><Link to="/github">Git/GitHub</Link></li>
          {/* <li><Link to="/youtube">YouTube Playlists</Link></li> */}
          <li><Link to="/documentation">Documentation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
      <div className="navRight">
        {/* Any right-side content here */}
      </div>
    </nav>
  );
}
