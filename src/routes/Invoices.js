import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = e => {
    const filter = e.target.value;

    if(filter) {
      setSearchParams({filter})
    } else {
      setSearchParams({});
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input 
          type="text"
          value={searchParams.get('filter') || ""}
          onChange={handleInputChange}
         />
        {invoices.filter((invoice) => {
          let filter = searchParams.get("filter");
          if(!filter) return true;

          let name = invoice.name.toLowerCase();

          return name.includes(filter.toLowerCase());
        }).map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div >
  );
}
