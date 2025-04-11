import React, { useEffect, useState, useMemo } from "react";
import Table from "../components/Table";
import { useData } from "../context/DataContext";
import { Heart } from "lucide-react";


const Home = () => {
  const { employeesCantina, employeesPericave, loading } = useData();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCantina = employeesCantina.filter(emp =>
    `${emp.first_name} ${emp.last_name} ${emp.grade}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const filteredPericave = employeesPericave.filter(emp =>
    `${emp.first_name} ${emp.last_name} ${emp.grade}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );


  return (
    <div className="min-h-screen flex flex-col bg-[#263238] text-white">

      {/* Header */}
      <header className="py-6 text-center">
        <p className="text-3xl text-gray-400 font-bold">Tableau de Bord Employés - Entreprises de Cayo Perico</p>
      </header>

      {/* Barre de recherche */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Rechercher un employé..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-4 rounded-xl shadow-xl border border-gray-600 w-[60%] max-w-lg bg-[#37474f] placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Deux colonnes (gauche/droite) */}
      <main className="flex flex-row gap-12 px-8 py-8 my-8 justify-center">
        <div className="w-[30%] bg-[#37474f] p-4 rounded-2xl shadow-2xl border border-gray-500">
          <p className="text-center text-2xl font-bold text-purple-300/80 py-2">Le Tabarico</p>
          <div></div>
        </div>
        <div className="w-[30%] bg-[#37474f] p-4 rounded-2xl shadow-2xl border border-gray-500">
          <p className="text-center text-2xl font-bold text-cyan-300/80 py-2">La Cantina</p>
          <Table users={filteredCantina} />
        </div>
        <div className="w-[30%] bg-[#37474f] p-4 rounded-2xl shadow-2xl border border-gray-500">
          <p className="text-center text-2xl font-bold text-amber-300/80 py-2">La Pericave</p>
          <Table users={filteredPericave} />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-row justify-center items-center mt-auto py-8 text-center text-gray-400 gap-2 text-lg font-bold">
        <p>Made with</p>
        <Heart size={16} className="text-red-400" />
        <p>by Feareis 'Mr O'</p>
      </footer>
    </div>
  );
};

export default Home;
