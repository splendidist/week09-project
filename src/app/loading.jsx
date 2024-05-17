export default function Loading() {
  return (
    <div className="flex flex-col h-screen justify-center content-center">
      {/* <div style="width:100%;height:0;padding-bottom:133%;position:relative;"> */}
      <iframe
        src="https://giphy.com/embed/gHbwSKq2Ns9SssS7vs"
        width="100%"
        height="30%"
        // style="position:absolute"
        allowFullScreen
        className="pointer-events-none"
      ></iframe>
      <p className="p-3 text-white text-xl self-center">Page Loading...</p>
    </div>
  );
}
