import { useState } from "react";
import {
  BlueTableCell,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleCheckBig, CircleStop } from "lucide-react";
import problems from "@/data/problems";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationDropDown } from "../ui/paginationDropDown";
import Paginations from "@/data/pagination"

export default function Problems() {
  const [problemsPerPage, setProblemsPerPage] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(problems.length / problemsPerPage);

  // Get the current page's problems
  const startIndex = (currentPage - 1) * problemsPerPage;
  const currentProblems = problems.slice(
    startIndex,
    startIndex + problemsPerPage
  );

  // Handle page change
  const handlePageChange = (page:number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle problems per page change
  const handleProblemsPerPageChange = (ppp:string) => {    
    setProblemsPerPage(parseInt(ppp.split("/")[0]));
    setCurrentPage(1); // Reset to the first page when problems per page change
  };

  return (
    <div className="mt-3">

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Acceptance</TableHead>
            <TableHead>Difficulty</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentProblems.map((problem, index) => (
            <TableRow key={index}>
              <TableCell>
                {problem.status === "Completed" ? (
                  <CircleCheckBig
                    className="mx-auto"
                    color="teal"
                    fontSize={900}
                    size={20}
                  />
                ) : problem.status === "Attempted" ? (
                  <CircleStop
                    className="mx-auto"
                    color="yellow"
                    fontSize={900}
                    size={20}
                  />
                ) : (
                  <></>
                )}
              </TableCell>
              <BlueTableCell>{problem.title}</BlueTableCell>
              <TableCell>{problem.acceptance}</TableCell>
              <TableCell
                className={
                  problem.difficulty === "Easy"
                    ? "text-[#00B8A3]"
                    : problem.difficulty === "Medium"
                    ? "text-[#FFC01E]"
                    : "text-[#FF375F]"
                }
              >
                {problem.difficulty}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex">

        <PaginationDropDown title={`${problemsPerPage}/page`} handleProblemsPerPageChange={handleProblemsPerPageChange}  frameworks={Paginations} />

      {/* Pagination */}
      
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                className={currentPage === page ? "font-bold" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      </div>

    </div>
  );
}
