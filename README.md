# 🚀 Code Sanvaad - Real-Time Collaborative Code Editor

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat-square&logo=react)](https://reactjs.org/) [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)]() [![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)]() [![Socket.IO](https://img.shields.io/badge/Socket.IO-v4.8.1-black?style=flat-square&logo=socket.io)](https://socket.io/) [![Monaco Editor](https://img.shields.io/badge/Monaco%20Editor-v4.7.0-blue?style=flat-square)](https://microsoft.github.io/monaco-editor/)

A real-time collaborative code editor that allows multiple users to code together in the same workspace. Perfect for pair programming, teaching, or collaborative problem-solving.


## ✨ Features

- 🔄 Real-time code synchronization
- 👥 Multiple users can join a room
- 💻 Monaco Editor with syntax highlighting
- 🌙 Dark/Light theme support
- 📝 Code persistence within rooms
- 🚪 Easy room creation and joining
- 👤 User presence indicators

## 🚀 Deployment

The application is deployed on Render. Visit [Live Demo](https://codesanvaad.onrender.com)

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **monaco-editor/react** - Code editor component
- **Socket.IO Client** - Real-time communication
- **chakra-ui/react** - UI components
- **react-router-dom** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Socket.IO** - WebSocket communication
- **CORS** - Cross-origin resource sharing

## 🗂️ Project Structure

```
code-sanvaad/
├── public/
├── src/
│   ├── components/
│   │   ├── Editor.jsx         # Monaco editor component
│   │   └── Clients.jsx        # Connected users component
│   ├── pages/
│   │   ├── HomePage.jsx       # Landing page with room creation
│   │   └── EditorPage.jsx     # Main editor page
│   ├── socket.config.js       # Socket.IO configuration
│   └── App.js                 # Main application component
├── server.js                  # Express & Socket.IO server
└── package.json
```

## 🌐 WebSocket Communication Flow

1. **Room Creation/Joining**
   - Client emits: `join` event with roomId and username
   - Server broadcasts: `joined` event to all room members
   - Server broadcasts: `sync-code` when a new client join the room  

2. **Code Synchronization**
   - Client emits: `code-change` with updated code
   - Server broadcasts: Changes to all users in the room

3. **User Management**
   - Server tracks: Connected users in userSocketMap
   - Server broadcasts: User join/leave events

## � Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/PARVE5H/codesanvaad.git
   cd codesanvaad
   ```

2. Install dependencies
   ``` 
   bash
   npm install
   ```

3. Start the development server
   ```
   bash
   npm run dev
   ```

4. Open ```http://localhost:3000``` in your browser

## 📸 Screenshots

### Home Page
![Home Page](./screenshots/home.png)
*Landing page with room creation/joining options*

### Editor Page
![Editor Page](./screenshots/editor.png)
*Collaborative editor with real-time sync*

### Multiple Users
![Multiple Users](./screenshots/users.png)
*Multiple users editing simultaneously*

## 🌟 Key Dependencies

- **@monaco-editor/react**: ^4.7.0
- **@chakra-ui/react**: ^3.22.0
- **socket.io**: ^4.8.1
- **socket.io-client**: ^4.8.1
- **react**: ^19.1.0
- **express**: ^5.1.0



## 👨‍💻 Author

**Parvesh Bansal**  

Final-year MCA student with a strong foundation in full-stack web development, specializing in modern technologies like React.js, Node.js, MongoDB, and Mongoose ORM. I have hands-on experience building scalable web applications, SaaS platforms, secure authentication systems, and deploying production-ready apps with Vercel and Render.

Currently expanding my skill set into mobile application development with React Native, aiming to build cross-platform, high-performance mobile apps alongside web solutions. Passionate about solving real-world problems through technology, with a focus on clean, maintainable code and user-centric design.

Open to internship opportunities, remote work, and freelance projects in both web and mobile development. Eager to collaborate with innovative teams and contribute to impactful projects.

## 📬 Contact Me

Feel free to connect or collaborate:

🔗 [LinkedIn Profile](https://www.linkedin.com/in/parvesh-bansal)  
📂 [GitHub Profile](https://github.com/PARVE5H)  
📧 [Email](mailto:parveshbansal063@gmail.com)  
✖️ [X (formerly Twitter)](https://x.com/parve5h)  
📷 [Instagram](https://instagram.com/parve5h)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Monaco Editor](https://microsoft.github.io/monaco-editor/) by Microsoft
- [Socket.IO](https://socket.io/) for real-time capabilities
- [Chakra UI](https://chakra-ui.com/) for the beautiful components About Me

---