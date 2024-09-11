export default function Parallax({ children }) {
  return (
    <div className="h-screen w-screen z-[-1] bg-slate-800 text-slate-100 flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
