import ItemList from "@/app/components/MealList";
import PageTitle from "@/app/components/PageTitle";
import { data } from "@/data";
import React from "react";

export default function page() {
  const lista = data.Sobremesas;
  return (
    <>
      <PageTitle title="Sobremesas" />

      <ItemList data={lista} />
    </>
  );
}
