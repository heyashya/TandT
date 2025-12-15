import React from "react";
import { motion } from "framer-motion";
import Trip1 from "../assets/Rajstan.png";
import Trip2 from "../assets/Kerala.png";
import Trip3 from "../assets/ghat.png";
import Trip4 from "../assets/goa.png";
import Trip5 from "../assets/safari.png";
import Trip6 from "../assets/temple.png";
import Trip7 from "../assets/himalya.png";
import Trip8 from "../assets/banaras.png";
import Trip9 from "../assets/Konkan.png";
import Trip10 from "../assets/odisha.png";
import Trip11 from "../assets/Darjeeling.png";
import Trip12 from "../assets/sikkim.png";

const trips = [
  {
    image: Trip1,
    heading: "Mystical Rajasthan",
    text: "Experience the vibrant culture of Rajasthan with majestic forts, serene lakes, and mesmerizing sand dunes.",
  },
  {
    image: Trip2,
    heading: "Kerala Backwaters Bliss",
    text: "Cruise through Kerala's tranquil backwaters on traditional houseboats and explore lush green landscapes.",
  },
  {
    image: Trip3,
    heading: "Trekking the Western Ghats",
    text: "Discover hidden waterfalls, dense forests, and serenity through trekking adventures in the Western Ghats.",
  },
  {
    image: Trip4,
    heading: "Bustling Mumbai to Peaceful Goa",
    text: "From Mumbai's streets to Goa's beaches, experience the perfect contrast of urban chaos and coastal calmness.",
  },
  {
    image: Trip5,
    heading: "Wildlife Safari in Jim Corbett",
    text: "Encounter majestic tigers and diverse flora in the untamed beauty of Jim Corbett National Park.",
  },
  {
    image: Trip6,
    heading: "Temple Trails of Tamil Nadu",
    text: "Explore intricate Dravidian temple architecture and the spiritual aura of Tamil Nadu's ancient religious sites.",
  },
  {
    image: Trip7,
    heading: "Himalayan Heights in Himachal",
    text: "Ascend into snow-capped peaks, pristine lakes, and charming mountain villages in Himachal Pradesh.",
  },
  {
    image: Trip8,
    heading: "Cultural Kaleidoscope in Varanasi",
    text: "Immerse yourself in Varanasi's spiritual rituals and the sacred Ganges River for a cultural experience.",
  },
  {
    image: Trip9,
    heading: "Coastal Charms of Konkan",
    text: "Explore Konkan's sun-kissed beaches, rustic fishing villages, and delicious local seafood.",
  },
  {
    image: Trip10,
    heading: "Historical Odyssey in Hampi",
    text: "Step back in time amidst the evocative ruins of Hampi and marvel at intricate stone carvings.",
  },
  {
    image: Trip11,
    heading: "Tea Gardens of Darjeeling",
    text: "Relax amidst rolling tea gardens, savor fragrant teas, and enjoy panoramic Himalayan views.",
  },
  {
    image: Trip12,
    heading: "Sikkim's Enchanted Forests",
    text: "Explore pristine forests, serene monasteries, and breathtaking vistas in the lap of the Eastern Himalayas.",
  },
];

export default function Trip() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="px-6 lg:px-24 py-16 bg-gradient-to-b from-yellow-50 to-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-800">
          Recent Trips
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Discover unique destinations and experiences across India.
        </p>
      </motion.div>

      {/* Trip Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {trips.map((trip, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="overflow-hidden h-56">
              <img
                src={trip.image}
                alt={trip.heading}
                className="w-full h-full object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {trip.heading}
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                {trip.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
