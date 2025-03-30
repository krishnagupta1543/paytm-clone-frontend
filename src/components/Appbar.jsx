import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Appbar() {
  const navigate = useNavigate();

  const handleButton = () => {
    const loading = toast.loading("⏳ Signing out...");
    localStorage.removeItem("token");
    toast.update(loading, {
      render: "✅You’re signed out! Come back anytime.",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    })
    navigate('/');
  };

  return (
    <div className="shadow-xl h-16 flex justify-between items-center p-6">
      <Logo title="PayTM App" onclick={() => navigate('/signup')} />
      <div className="flex items-center gap-4">
        <p className="text-lg mr-4">Hello</p>
        <div className="rounded-full h-10 w-10 bg-green-800 text-white flex items-center justify-center text-lg">
          U
        </div>
        <Button onclick={handleButton} />
      </div>
    </div>
  );
}

function Button({ onclick }) {
  return (
    <button
      onClick={onclick}
      className="bg-green-800 text-white rounded hover:bg-green-600 transition-all py-2 px-3"
    >
      Sign Out
    </button>
  );
}

function Logo({ title, onclick }) {
  return (
    <button className="text-2xl font-bold" onClick={onclick}>
      {title}
    </button>
  );
}
