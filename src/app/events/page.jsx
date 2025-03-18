import Header from '../layout'; // Adjust the import path as necessary
import Footer from '../navigation/footer'; // Adjust the import path as necessary

const events = [
    {
        id: 1,
        name: "Sunday Service",
        date: "Every Sunday",
        time: "8:00 AM - 10:00 AM",
        description: "Join us for our Sunday service filled with worship and fellowship.",
        registrationLink: "/register/sunday-service"
    },
    {
        id: 2,
        name: "Midweek Prayer",
        date: "Wednesdays",
        time: "5:30 PM - 7:00 PM",
        description: "Come together for a time of prayer and intercession.",
        registrationLink: "/register/midweek-prayer"
    },
    {
        id: 3,
        name: "Community Outreach",
        date: "Last Saturday of the Month",
        time: "10:00 AM - 2:00 PM",
        description: "Join us as we serve our community and share the love of Christ.",
        registrationLink: "/register/community-outreach"
    },
];

export default function EventsPage() {
    return (
        <>
            <Header />
            <main className="pt-16 min-h-screen">
                <section className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
                    <ul className="space-y-4">
                        {events.map(event => (
                            <li key={event.id} className="border p-4 rounded">
                                <h2 className="text-xl font-semibold">{event.name}</h2>
                                <p><strong>Date:</strong> {event.date}</p>
                                <p><strong>Time:</strong> {event.time}</p>
                                <p>{event.description}</p>
                                <a href={event.registrationLink} className="text-primary underline">Register</a>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    );
}
