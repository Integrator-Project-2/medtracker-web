import { Header } from "@/components/Header";
import styles from "./page.module.css";
import { CustomTable } from "@/components/Table";

export default function Home() {
  return (
    <>
      <Header />
      <main>

        <CustomTable />
      </main>
    </>
  );
}
