import ItemList from "@/app/components/MealList";
import PageTitle from "@/app/components/PageTitle";
import { data } from "@/data";
import React from "react";

export default function page() {
  const lista = data.RefeicoesP2;
  return (
    <>
      <PageTitle title="Refeições P/2" />

      <ItemList data={lista} />
    </>
  );
}
