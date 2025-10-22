import { Button } from "@mui/material";
import Link from "next/link";

const PAGES = [
  {
    name: "Spring",
    href: "/spring",
  },
  {
    name: "Drag",
    href: "/drag",
  },
];

export default function Home() {
  return (
    <div>
      {PAGES.map((page) => (
        <Button variant="contained" color="primary" key={page.href}>
          <Link href={page.href}>{page.name}</Link>
        </Button>
      ))}
    </div>
  );
}
