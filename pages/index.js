import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="text-center mt-20">
        <h1 className="text-5xl font-bold">DSRT</h1>
        <p className="text-xl mt-4">Digital Smart Revise Technology</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg">
          Get Started
        </button>
      </main>
      <Footer />
    </div>
  );
    }
