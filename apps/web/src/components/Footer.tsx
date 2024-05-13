import { Separator } from './ui/separator';
export const Footer = () => {
  return (
    <main>
      <footer className="bg-[#482954] text-white py-8 shadow-md sticky bottom-0 z-50">
        <div className=" flex flex-col md:flex-row justify-between px-4 py-2 items-center">
          <h3 className="text-lg font-bold">EVENTURA</h3>
          <ul className="list-none flex mt-3 gap-2 md:gap-5 justify-center">
            <li className="">
              <a
                href="#"
                className="text-white py-2 px-2 md:px-4 bg-blue-500 rounded hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Register
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-white py-2 px-2 md:px-4 bg-green-500 rounded hover:bg-green-600 transition duration-300 ease-in-out"
              >
                Attend
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-white py-2 px-2 md:px-4 bg-red-500 rounded hover:bg-red-600 transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-center">
          <p>Copyright©️ 2024 Eventura</p>
        </div>
      </footer>
    </main>
  );
};
