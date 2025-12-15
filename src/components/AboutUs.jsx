import React from "react";
import { motion } from "framer-motion";
import beachImg from "../assets/beaach.jpg";
import templeImg from "../assets/temple.jpg";

import {
  FaMapMarkedAlt,
  FaUsers,
  FaLeaf,
  FaSuitcaseRolling,
  FaHeadset,
} from "react-icons/fa";

 

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.25, duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-gradient-to-b from-yellow-50  to-gray-500 py-20 px-6 lg:px-24">
      {/* HEADER */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-800">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to{" "}
          <span className="font-extrabold text-yellow-700">AWtravles</span> —
          your trusted partner in discovering India's hidden gems and
          uncharted beauty.
        </p>
      </motion.div>

      {/* IMAGE SECTION */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img src={beachImg} alt="Beach" className="w-full h-80 object-cover hover:scale-105 transition duration-700" />
          {/* <div className="h-80 bg-gray-200 flex items-center justify-center text-gray-500">
            Beach Image
          </div> */}
        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl">
          <img src={templeImg} alt="Mountains" className="w-full h-80 object-cover hover:scale-105 transition duration-700" />
          {/* <div className="h-80 bg-gray-300 flex items-center justify-center text-gray-600">
            Mountain Image
          </div> */}
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.div
        className="space-y-16 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* INTRO */}
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg leading-relaxed text-center"
        >
          Our journey began with a simple yet powerful belief — every corner of
          India has a story waiting to be explored. We are not just a travel
          agency; we are your companions in uncovering culture, heritage, and
          breathtaking landscapes.
        </motion.p>

        {/* MISSION */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To curate unforgettable journeys that go beyond tourist hotspots,
            immersing travelers in authentic Indian experiences through local
            traditions, nature, and culture.
          </p>
        </motion.div>

        {/* WHY CHOOSE US */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-8 text-center">
            Why Choose AWtravles?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FaMapMarkedAlt />,
                text: "Personalized Adventures tailored for every traveler.",
              },
              {
                icon: <FaUsers />,
                text: "Local Expertise to uncover hidden treasures.",
              },
              {
                icon: <FaLeaf />,
                text: "Responsible Tourism with eco-friendly practices.",
              },
              {
                icon: <FaSuitcaseRolling />,
                text: "Hassle-Free Planning from start to finish.",
              },
              {
                icon: <FaHeadset />,
                text: "24/7 Support before, during, and after travel.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-gray-50 hover:bg-yellow-50 transition"
              >
                <div className="text-yellow-500 text-2xl mt-1">
                  {item.icon}
                </div>
                <p className="text-gray-700 text-lg font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* JOIN US */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide mb-4">
            Join Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            From Kerala’s serene backwaters to Himachal’s remote villages,
            Odisha’s ancient temples, and the untamed Northeast — AWtravles
            transforms journeys into lifelong memories.
          </p>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-2xl shadow-xl p-10 text-center"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-4">
            Contact Us
          </h2>
          <p className="text-lg font-medium">
            Ready for your next adventure? Reach out today and let us craft a
            personalized itinerary. With AWtravles, every trip becomes a story
            worth telling.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
