import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "PhonePal has revolutionized how I manage my calls. It's like having a personal assistant always ready to help!",
    name: "Alex Johnson",
    title: "Entrepreneur",
  },
  {
    quote: "The AI's ability to understand context is impressive. It makes every conversation feel natural and efficient.",
    name: "Samantha Lee",
    title: "Marketing Director",
  },
  {
    quote: "As someone who's always on the go, PhonePal's 24/7 availability is a game-changer for my business.",
    name: "Michael Chen",
    title: "Sales Manager",
  },
  {
    quote: "The voice recognition is spot-on, even with my accent. It's truly an inclusive piece of technology.",
    name: "Aisha Patel",
    title: "Software Engineer",
  },
  {
    quote: "I was skeptical about AI phone assistants, but PhonePal has completely won me over with its capabilities.",
    name: "Carlos Rodriguez",
    title: "Customer Service Rep",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900 rounded-lg shadow-xl mt-12 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          What Our Users Say
        </h2>
        <div className="cool-card-container">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="max-w-7xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}