import { promises } from "dns";
import { resolve } from "path";

export default async function about() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  })


  return (
    <div>
      <h3 className="ml-[35px] mt-[30px] text-black font-bold text-xl">ABOUT PAGE</h3>
    </div>
  );
}
