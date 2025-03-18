import Header from '../layout'; // Adjust the import path as necessary
import Footer from '../navigation/footer'; // Adjust the import path as necessary

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="pt-16 min-h-screen">
                <section className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <p className="mb-4">We would love to hear from you! Please fill out the form below or reach us at:</p>
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">Contact Information</h2>
                        <p>Address: Kitale Town, Trans Nzoia County, Kenya</p>
                        <p>Phone: +254 712 345 678</p>
                        <p>Email: info@citamkitale.org</p>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-1">Name</label>
                            <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">Email</label>
                            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1">Message</label>
                            <textarea id="message" className="w-full p-2 border border-gray-300 rounded" rows="4" required></textarea>
                        </div>
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send Message</button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    );
}
