import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sightingsData = [
  {
    id: 1,
    location: "Roswell, NM",
    date: "1947-07-07",
    description: "A mysterious crash in the desert.",
    image: "/images/sighting1.jpg",
  },
  {
    id: 2,
    location: "Phoenix, AZ",
    date: "1997-03-13",
    description: "Strange lights in the sky.",
    image: "/images/sighting2.jpg",
  },
  // Add more sightings as needed
];

const Sightings = () => {
  const [search, setSearch] = useState("");

  const filteredSightings = sightingsData.filter(
    (sighting) =>
      sighting.location.toLowerCase().includes(search.toLowerCase()) ||
      sighting.date.includes(search)
  );

  return (
    <div>
      <h1 className="text-3xl mb-4">Recent UFO Sightings</h1>
      <Input
        placeholder="Search by location or date"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSightings.map((sighting) => (
          <Card key={sighting.id}>
            <img src={sighting.image} alt={sighting.location} className="w-full h-48 object-cover" />
            <CardHeader>
              <CardTitle>{sighting.location}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{sighting.date}</p>
              <p>{sighting.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sightings;