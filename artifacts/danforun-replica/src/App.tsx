function App() {
  return (
    <iframe
      className="game-frame"
      title="Danfo Run"
      src="/danforun.html"
      allow="autoplay; fullscreen; gamepad; pointer-lock"
      sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-forms allow-modals allow-downloads"
    />
  );
}

export default App;
