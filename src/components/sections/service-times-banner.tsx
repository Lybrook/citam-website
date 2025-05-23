// @/components/sections/service-times-banner.tsx
"use client";


const ServiceTimesBanner: React.FC = () => {


  return (
    <section className="bg-red-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center md:text-left">
          <h3 className="text-xl font-bold">Join Us This Sunday</h3>
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
              <span className="font-semibold block">Intercession</span>
              <span>9:00 AM - 10:00 AM</span>
            </div>
            <div>
              <span className="font-semibold block">First Service</span>
              <span>10:00 AM - 12:00 PM</span>
            </div>
            {/* <div>
              <span className="font-semibold block">Youth Service</span>
              <span>10:30 AM - 12:30 PM</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimesBanner;
