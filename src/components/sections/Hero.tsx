import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      
      <Image
        src="/logo.png"
        alt="Trader Kachi Logo"
        width={120}
        height={120}
        className="mb-6"
      />

      <h1 className="text-5xl font-bold">
        Master Forex. Build Wealth.
      </h1>

      <p className="text-gray-400 mt-4 max-w-xl">
        Join Trader Kachi elite trading mentorship and community.
      </p>

      <button className="mt-8 bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl">
        Join Community
      </button>

    </section>
  );
}
