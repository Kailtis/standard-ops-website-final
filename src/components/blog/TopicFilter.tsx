import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Utility for conditional classes

interface TopicFilterProps {
  topics: string[];
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
}

const TopicFilter = ({ topics, selectedTopic, onSelectTopic }: TopicFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {topics.map((topic) => (
        <Button
          key={topic}
          variant={selectedTopic === topic ? "default" : "outline"}
          onClick={() => onSelectTopic(topic)}
          className={cn(
            "rounded-full px-4 py-1 text-sm transition-colors duration-200",
            selectedTopic === topic
              ? "bg-gradient-to-r from-standardOps-purple to-[#FF7E5F] text-white border-transparent hover:opacity-90"
              : "text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
          )}
        >
          {topic}
        </Button>
      ))}
    </div>
  );
};

export default TopicFilter;
