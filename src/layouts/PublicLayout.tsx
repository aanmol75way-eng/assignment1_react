import { Outlet} from "react-router";
import Header from "../components/Header";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}
