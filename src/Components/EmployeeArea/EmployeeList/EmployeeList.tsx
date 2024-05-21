import { useEffect, useState } from "react";
import "./EmployeeList.css";
import { employeeService } from "../../../Services/EmployeeService";
import { EmployeeModel } from "../../../Models/EmployeeModel";
import { notify } from "../../../Utils/notify";

export function EmployeeList(): JSX.Element {

    const [employees, setEmployees] = useState<EmployeeModel[]>([]);

    useEffect(() => {
        employeeService.getAllEmployees()
            .then(dbEmployees => setEmployees(dbEmployees))
            .catch(error => {notify.error(error)});
    }, []);

    if (employees.length === 0) {
        return <div className="EmployeeList">No employees found</div>
    }

    return (
        <div className="EmployeeList">
            <table>
                <thead>
                    <tr>
                        {Object.keys(employees[0] || {}).map((attr) => (
                            attr !== "id" && <th key={attr}>{attr}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {employees.map(e => (
                        <tr key={e.id}>
                            {Object.entries(e).map((attr, value) => (
                                attr[0] !== "id" && (
                                    <td key={attr[0]}>
                                        {attr[0] === "imageUrl" ? <img src={attr[1]} alt="Employee"/> : attr[1]}
                                    </td>
                                )
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
