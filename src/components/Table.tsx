import React, { useEffect, useState, useMemo } from "react";


type Grade = "Patron" | "Co-Patron" | "RH" | "Responsable" | "CDI" | "CDD";

interface User {
  id: string;
  grade: string;
  first_name: string;
  last_name: string;
}

type TableProps = {
  users: User[];
};

const Table = ({ users = [], setUsers }: TableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value === "all" ? users.length : parseInt(event.target.value, 10);
    setRowsPerPage(value);
    setPage(0);
  };

  const gradePriority: Record<Grade, number> = {
    Patron: 1,
    "Co-Patron": 2,
    RH: 3,
    Responsable: 4,
    CDI: 5,
    CDD: 6,
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "Patron":
      case "Co-Patron":
        return "text-red-400";
      case "RH":
        return "text-violet-400";
      case "Responsable":
        return "text-yellow-400";
      case "CDI":
        return "text-blue-400";
      case "CDD":
        return "text-cyan-400";
      default:
        return "text-white";
    }
  };

  return (
    <div className="overflow-x-auto text-[#cfd8dc] rounded-lg px-2">
      {/* Table Header */}
      <div className="grid grid-cols-[1fr_1fr] gap-4 p-4 px-6 rounded-lg items-center text-xl font-semibold">
        {/* Column Headers */}
        <div className="text-center">Grade</div>
        <div>Prénom Nom</div>
      </div>

      {/* Table Separator */}
      <div className="w-full border border-gray-600"></div>

      {/* User List */}
      <div className="flex flex-col gap-y-2 py-4 px-2">
        {users.length === 0 ? (
          <div className="text-center py-4">Aucun utilisateur trouvé.</div>
        ) : (
          [...users]
            .sort((a, b) => (gradePriority[a.grade as Grade] ?? 99) - (gradePriority[b.grade as Grade] ?? 99))
            .slice(page * rowsPerPage, rowsPerPage === users.length ? users.length : page * rowsPerPage + rowsPerPage)
            .map((user) => (
              <div
                className="grid grid-cols-[1fr_1fr] gap-4 bg-[#263238] text-lg border border-gray-600 p-4 rounded-xl items-center
                transition-transform duration-150 hover:scale-102 hover:bg-[#2e3b42]"
                key={user.id}
              >
                {/* Grade with color */}
                <div className={`w-full text-center font-semibold ${getGradeColor(user.grade)}`}>
                  {user.grade}
                </div>

                {/* Name */}
                <div className="font-semibold text-gray-300/80">{`${user.first_name} ${user.last_name}`}</div>
              </div>
            ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        {/* Previous Page Button */}
        <button
          className="bg-[#263238] px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleChangePage(page - 1)}
          disabled={page === 0}
        >
          Précédent
        </button>

        {/* Current Page Info */}
        <span>
          Page {page + 1} sur {Math.ceil(users.length / rowsPerPage)}
        </span>

        {/* Next Page Button */}
        <button
          className="bg-[#263238] px-4 py-2 rounded disabled:opacity-50"
          onClick={() => handleChangePage(page + 1)}
          disabled={page >= Math.ceil(users.length / rowsPerPage) - 1}
        >
          Suivant
        </button>

        {/* Rows per page selection */}
        <select
          className="bg-[#263238] text-white pl-2 pr-4 py-2 rounded"
          value={rowsPerPage === users.length ? "all" : rowsPerPage.toString()}
          onChange={handleChangeRowsPerPage}
        >
          <option value="10">10 par page</option>
          <option value="all">Tous</option>
        </select>
      </div>
    </div>
  );
};

export default Table;
