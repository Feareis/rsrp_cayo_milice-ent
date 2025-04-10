import { createContext, useContext, useEffect, useState } from "react";
import { supabaseCantina, supabasePericave } from "./supabaseClients";

type Employee = {
  grade: string;
  first_name: string;
  last_name: string;
};

type DataContextType = {
  employeesCantina: Employee[];
  employeesPericave: Employee[];
  loading: boolean;
};

const DataContext = createContext<DataContextType>({
  employeesCantina: [],
  employeesPericave: [],
  loading: true,
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [employeesCantina, setEmployeesCantina] = useState<Employee[]>([]);
  const [employeesPericave, setEmployeesPericave] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    setLoading(true);

    const [cantinaRes, pericaveRes] = await Promise.all([
      supabaseCantina.from("employees").select("grade, first_name, last_name"),
      supabasePericave.from("employees").select("grade, first_name, last_name"),
    ]);

    if (!cantinaRes.error && cantinaRes.data) setEmployeesCantina(cantinaRes.data);
    if (!pericaveRes.error && pericaveRes.data) setEmployeesPericave(pericaveRes.data);

    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <DataContext.Provider value={{ employeesCantina, employeesPericave, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
