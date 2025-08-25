
import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });
  }, []);

  if (!user) return <p className="text-center mt-20">Please login to access dashboard.</p>;

  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome, {user.email}</h1>
        <p className="mt-4">Your projects and AI edits will appear here.</p>
      </main>
      <Footer />
    </div>
  );
}
