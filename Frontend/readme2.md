/* Reset & font */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Code', monospace;
}

body {
  background: #0f0f0f;
  color: #ffffff;
  min-height: 100vh;
  overflow-x: hidden;
}

/* Scrollbar Styling */
*::-webkit-scrollbar {
  width: 6px;
}
*::-webkit-scrollbar-thumb {
  background: #00c6ff;
  border-radius: 5px;
}

/* Main wrapper */
#main {
  padding: 25px 5%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

/* Header */
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 15px 25px;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 30px;
  font-weight: bold;
  background: linear-gradient(to right, #00c6ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Button */
.btn {
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  color: white;
  padding: 10px 22px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 114, 255, 0.4);
  transition: all 0.3s ease;
}
.btn:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

/* Container */
.container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

/* Code + Output Cards */
.left, .right {
  flex: 1 1 48%;
  min-width: 300px;
  max-width: 48%;
  height: 500px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 20px;
  overflow: auto;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Code editor styling */
.code {
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #444;
  color: #00ff90;
  overflow: auto;
}

/* Explanation output */
.right {
  color: #b2f2ff;
  line-height: 1.6;
}

.left, .right {
  flex: 1 1 48%;
  min-width: 300px;
  max-width: 48%;
  height: 500px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 20px;
  overflow: auto;

  /* 🔥 Soft glow effect like shadow */
  box-shadow: 0 8px 32px rgba(0, 255, 170, 0.15), 
              0 4px 12px rgba(0, 255, 255, 0.2);
}


.left:hover, .right:hover {
  box-shadow: 0 8px 32px rgba(0, 255, 170, 0.25), 
              0 4px 12px rgba(0, 255, 255, 0.3);
  transition: box-shadow 0.3s ease;
}


/* Responsive adjustments */
@media (max-width: 900px) {
  .container {
    flex-direction: column;
  }

  .left,
  .right {
    max-width: 100%;
    width: 100%;
  }

  .header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  .btn {
    align-self: flex-end;
  }
}
