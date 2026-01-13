import Button from "./Button";

export default function TopBarMobile() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow md:hidden">
      <div className="flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold">
          🐾 Ada<span className="text-btn-secondary">opte</span>
        </h1>

        <Button variant="secondary" size="sm">
          Don 🫶
        </Button>
      </div>
    </header>
  );
}
