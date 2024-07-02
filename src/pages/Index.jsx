import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <div
        className="hero-section bg-cover bg-center h-96 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl text-white mb-4">Welcome to UFO Sightings</h1>
          <p className="text-lg text-white mb-6">
            Discover and report UFO sightings from around the world.
          </p>
          <Button variant="primary" size="lg">
            Report a Sighting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;