export const animals = [
  {
    id: "sahiwal-bull",
    name: "Sahiwal Bull",
    breed: "Sahiwal",
    age: "3 years",
    weight: "520 kg",
    location: "Rajshahi",
    price: 125000,
    tone: "from-amber-100 to-orange-100",
    color: "Light red",
    gender: "Male",
    farm: "Green Valley Agro",
    vaccination: "Completed",
    healthStatus: "Healthy and active",
    description:
      "Strong body frame and balanced weight gain with routine veterinary care from a certified farm.",
    imageUrl:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "friesian-cow",
    name: "Friesian Cow",
    breed: "Friesian",
    age: "2.5 years",
    weight: "470 kg",
    location: "Sirajganj",
    price: 110000,
    tone: "from-cyan-100 to-sky-100",
    color: "Black and white",
    gender: "Female",
    farm: "Padma Dairy Farm",
    vaccination: "Completed",
    healthStatus: "Healthy and calm",
    description:
      "Well-maintained cattle with proper feeding history and regular health screening reports.",
    imageUrl: "/friesian-cow.jpg",
  },
  {
    id: "deshi-black",
    name: "Deshi Black",
    breed: "Deshi",
    age: "2 years",
    weight: "390 kg",
    location: "Bogura",
    price: 95000,
    tone: "from-emerald-100 to-green-100",
    color: "Black",
    gender: "Male",
    farm: "North Bengal Livestock",
    vaccination: "Completed",
    healthStatus: "Healthy",
    description:
      "Popular local breed with strong adaptability and reliable body condition for qurbani season.",
    imageUrl:
      "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "red-chittagong",
    name: "Red Chittagong",
    breed: "Red Chittagong",
    age: "3.2 years",
    weight: "540 kg",
    location: "Chattogram",
    price: 135000,
    tone: "from-rose-100 to-pink-100",
    color: "Deep red",
    gender: "Male",
    farm: "Hillview Cattle Hub",
    vaccination: "Completed",
    healthStatus: "Excellent",
    description:
      "Large-size premium cattle with complete vaccination and monitored nutrition program.",
    imageUrl:
      "https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "brahman-prime",
    name: "Brahman Prime",
    breed: "Brahman",
    age: "3.5 years",
    weight: "580 kg",
    location: "Pabna",
    price: 145000,
    tone: "from-indigo-100 to-blue-100",
    color: "Grey",
    gender: "Male",
    farm: "Delta Agro Ranch",
    vaccination: "Completed",
    healthStatus: "Excellent",
    description:
      "Top-tier breed known for size and stamina, raised in a controlled and hygienic environment.",
    imageUrl: "/brahman-prime.jpg",
  },
  {
    id: "local-white",
    name: "Local White",
    breed: "Deshi",
    age: "2.1 years",
    weight: "420 kg",
    location: "Mymensingh",
    price: 98000,
    tone: "from-lime-100 to-emerald-100",
    color: "White",
    gender: "Male",
    farm: "Mymensingh Cattle Point",
    vaccination: "Completed",
    healthStatus: "Healthy",
    description:
      "Affordable local option with verified age and weight details and consistent feed history.",
    imageUrl:
      "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=1400&q=80",
  },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getAnimals() {
  await delay(700);
  return animals;
}

export async function getAnimalById(id) {
  await delay(700);
  return animals.find((animal) => animal.id === id) || null;
}

