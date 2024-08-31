import { Header } from "@/components/Header";
import { CustomTable } from "@/components/Table";
import { Title } from "@/components/Title";
import { LayoutContainer } from "@/components/LayoutContainer";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
          <LayoutContainer>
            <Title>
              <Button 
                icon="plus-icon.svg"
                padding="13px 20px"
                borderRadius="8px"
              >
                New patient
              </Button>
            </Title>
            <CustomTable />
          </LayoutContainer>
      </main>
    </>
  );
}
