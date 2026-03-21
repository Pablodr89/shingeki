import { redirect } from "next/navigation";
import { AppRoutes } from "../../AppRoutes";

export default function Home() {
  redirect(AppRoutes.home);
}
