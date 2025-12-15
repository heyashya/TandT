import { motion } from "framer-motion";

import Zero1 from "../assets/ziro1.png";
import Zero2 from "../assets/ziro2.png";
import Spiti1 from "../assets/spiti1.png";
import Spiti2 from "../assets/spiti2.png";
import gorkana1 from "../assets/gorkana1.png";
import gorkana2 from "../assets/gorkana2.png";
import Dz1 from "../assets/dz1.png";
import Dz2 from "../assets/dz2.png";

const destinations = [
  {
    title: "Ziro Valley, Arunachal Pradesh",
    subtitle: "Land of Rice Fields & Tribal Culture",
    text:  "Nestled in the northeastern region of Arunachal Pradesh, Ziro Valley offers a tranquil escape into nature's embrace. The landscape here is characterized by emerald-green hills, terraced rice fields, and the unique Apatani tribe's cultural heritage. Away from the tourist crowds, Ziro Valley beckons travelers with its serene ambiance and opportunities for immersive experiences. Trekking through the pristine terrain, exploring the Apatani way of life, and witnessing the traditional architecture create lasting memories. It's an off-the-beaten-path gem for those seeking authenticity and natural beauty.",
    highlights: ["Apatani Tribe", "Music Festival", "Rice Terraces"],
    img1: Zero1,
    img2: Zero2,
    reverse: false,
  },
  {
    title: "Spiti Valley, Himachal Pradesh",
    subtitle: "Cold Desert of the Himalayas",
    text: "Tucked away in the remote Himalayan region, Spiti Valley's stark beauty captivates with its arid deserts, craggy mountains, and ancient monasteries. Less frequented than its neighbor, Ladakh, Spiti offers a quieter escape into the Himalayas. The rugged landscapes, dotted with centuries-old monastic complexes, make it a paradise for explorers seeking solitude and breathtaking vistas. With its pristine lakes and untouched wilderness, Spiti presents an opportunity to connect with nature in its rawest form.",
    highlights: ["Key Monastery", "High Altitude", "Stargazing"],
    img1: Spiti1,
    img2: Spiti2,
    reverse: true,
  },
  {
    title: "Gokarna, Karnataka",
    subtitle: "Sacred Beaches & Sunset Views",
    text:  "Gokarna, a tranquil coastal town in Karnataka, offers a serene getaway along the Arabian Sea. Its idyllic beaches, such as Om Beach and Kudle Beach, beckon with soft sands and clear waters, devoid of the tourist frenzy found in more popular destinations. The town's charm lies in its simplicity, where travelers can enjoy long walks along pristine shores, explore ancient temples, and immerse themselves in the laid-back coastal culture. Gokarna is an understated gem for those seeking a peaceful beachside escape.",
    highlights: ["Om Beach", "Temple Town", "Sunsets"],
    img1: gorkana1,
    img2: gorkana2,
    reverse: false,
  },
  {
    title: "Dzukou Valley, Nagaland",
    subtitle: "Hidden Valley of Flowers",
    text:  "Hidden away in the northeastern state of Nagaland, Dzukou Valley remains a well-kept secret. It reveals rolling hills adorned with seasonal flowers, including the famed Dzukou lily. The valley's pristine beauty and untouched terrain beckon trekkers and nature enthusiasts. Here, travelers can embark on soul-soothing hikes and immerse themselves in the tranquility of the region. Dzukou Valley offers a chance to experience a lesser-known facet of India's northeastern charm, away from the tourist trail, where natural beauty takes center stage.",
    highlights: ["Dzukou Lily", "Trekking", "Mist Views"],
    img1: Dz1,
    img2: Dz2,
    reverse: true,
  },
];

 
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

// Text animation
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Image from left
const imageLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Image from right
const imageRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Destination = () => {
  return (
    <section className="px-6 lg:px-24 py-20 bg-gradient-to-b from-white to-gray-500">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Popular Destinations
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Discover India's most scenic escapes — untouched valleys, sacred
          coastlines, and high-altitude wonders.
        </p>
      </motion.div>

      {/* DESTINATIONS */}
      <div className="space-y-36">
        {destinations.map((item, index) => (
          <motion.div
            key={index}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className={`flex flex-col lg:flex-row items-center gap-16 ${
              item.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* TEXT */}
            <motion.div
              variants={textVariant}
              className="lg:w-[65%] bg-white p-3 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-2">{item.title}</h2>
              <h3 className="text-sm uppercase tracking-widest text-yellow-500 mb-4">
                {item.subtitle}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {item.text}
              </p>

              <div className="flex flex-wrap gap-3">
                {item.highlights.map((tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* IMAGES */}
            <div className="relative lg:w-[60%] flex justify-between">
              <motion.img
                src={item.img1}
                alt="destination"
                variants={item.reverse ? imageRight : imageLeft}
                className="w-[48%] h-[360px] object-cover rounded-2xl shadow-2xl"
              />

              <motion.img
                src={item.img2}
                alt="destination"
                variants={item.reverse ? imageLeft : imageRight}
                className="w-[48%] h-[360px] object-cover rounded-2xl shadow-2xl
                           absolute top-[-12%] right-0"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destination;
