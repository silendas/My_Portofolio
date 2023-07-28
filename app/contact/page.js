import Image from "next/image";

export default function Contact() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="p-3">
          <div className="flex">
            <Image
              src={"/contact/home.png"}
              alt="Location"
              width={30}
              height={0}
              className="rounded-full hidden md:flex"
            />
            <Image
              src={"/contact/home.png"}
              alt="Location"
              width={25}
              height={0}
              className="rounded-full flex md:hidden"
            />
            <div className="flex items-center ms-2">
              <div className="font-sans text-sm md:text-lg">
                <p>Bogor City, West Java, Indonesia</p>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <Image
              src={"/contact/github.png"}
              alt="Location"
              width={30}
              height={0}
              className="rounded-full hidden md:flex"
            />
            <Image
              src={"/contact/github.png"}
              alt="Location"
              width={25}
              height={0}
              className="rounded-full flex md:hidden"
            />
            <div className="flex items-center ms-2">
              <a
                href="https://github.com/silendas"
                target="_blank"
                className="font-sans text-sm underline md:text-lg"
              >
                <p>Muhamad Yasmin Nul Hakim</p>
              </a>
            </div>
          </div>
          <div className="flex mt-2">
            <Image
              src={"/contact/email.png"}
              alt="Location"
              width={30}
              height={0}
              className="rounded-none hidden md:flex"
            />
            <Image
              src={"/contact/email.png"}
              alt="Location"
              width={25}
              height={0}
              className="rounded-none flex md:hidden"
            />
            <div className="flex items-center ms-2">
              <a
                href="mailto:muhammadyasminnulhakim34@gmail.com"
                target="_blank"
                className="font-sans text-xs underline md:text-lg"
              >
                <p>muhammadyasminnulhakim34@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full isolate px-3 md:px-0 mb-3 md:mb-5">
          <div className="block bg-neutral-100 rounded-lg p-3 md:p-5 md:shadow-md w-full">
            <div className="p-2 flex w-full justify-center">
              <span className="font-send">Contact me</span>
            </div>
            <form
              action="mailto:muhammadyasminnulhakim34@gmail.com"
              method="post"
              encType="text/plain"
              className="block w-full"
            >
              <div className="block md:flex gap-10">
                <div className="mb-4 w-full md:w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Your name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="mail"
                  >
                    Your email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="mail"
                    name="mail"
                    type="email"
                    placeholder="your_email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="comment"
                >
                  Your message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="comment"
                  name="comment"
                  type="text"
                  rows="10"
                  placeholder="Message..."
                  required
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
