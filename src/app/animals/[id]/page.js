import { redirect } from "next/navigation";

export default async function AnimalDetailsPage({ params }) {
  const { id } = await params;
  redirect(`/details-page/${id}`);
}
