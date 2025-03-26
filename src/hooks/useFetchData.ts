import { useEffect, useState } from 'react';

interface Leadership {
  id: number; // Added id property
  name: string;
  title: string;
  image: string;
  bio: string;
}


interface Testimonial {
  id: number; // Added id property
  quote: string;
  author: string;
  role: string;
  image: string;
}


const useFetchData = () => {
  const [leadership, setLeadership] = useState<Leadership[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock API calls
        const leadershipResponse = await fetch('/api/leadership'); // Replace with actual API endpoint
        const testimonialsResponse = await fetch('/api/testimonials'); // Replace with actual API endpoint

        if (!leadershipResponse.ok || !testimonialsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const leadershipData = await leadershipResponse.json();
        const testimonialsData = await testimonialsResponse.json();

        setLeadership(leadershipData);
        setTestimonials(testimonialsData);
      } catch (err) {
        setError((err as Error).message);

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { leadership, testimonials, loading, error };
};

export default useFetchData;
