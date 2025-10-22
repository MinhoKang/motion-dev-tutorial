import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button variant="contained" color="primary">
        <Link href="/spring">Spring</Link>
      </Button>
    </div>
  );
}
