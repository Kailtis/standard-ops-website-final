import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Using Shadcn Pagination

interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

// Basic pagination logic - can be enhanced for more complex scenarios
const PaginationComponent = ({ currentPage, totalPages, onPageChange }: PaginationComponentProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Simple page number generation (can be improved to show limited numbers and ellipsis)
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#" // Prevent default navigation
            onClick={(e) => { e.preventDefault(); handlePrevious(); }}
            className={currentPage === 1 ? "pointer-events-none opacity-50 text-gray-500" : "text-white hover:bg-gray-800"}
          />
        </PaginationItem>

        {/* Basic page number display */}
        {pageNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#" // Prevent default navigation
              onClick={(e) => { e.preventDefault(); onPageChange(page); }}
              isActive={currentPage === page}
              className={currentPage === page ? "bg-standardOps-purple text-white border-standardOps-purple" : "text-white hover:bg-gray-800"}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* Add Ellipsis logic here if needed for many pages */}

        <PaginationItem>
          <PaginationNext
            href="#" // Prevent default navigation
            onClick={(e) => { e.preventDefault(); handleNext(); }}
            className={currentPage === totalPages ? "pointer-events-none opacity-50 text-gray-500" : "text-white hover:bg-gray-800"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
