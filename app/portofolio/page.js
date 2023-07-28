import Image from "next/image";

export default function Portofotilo() {
  return (
    <div className="bg-white text-center">
      <div className="mx-auto max-w-7xl isolate px-6 bg-white md:bg-neutral-200 md:rounded-lg p-3 md:p-5 md:shadow-md">
        <div className="project block border md:border-none shadow-inner md:shadow-none rounded md:rounded-none p-2 pt-4 md:pt-0 md:p-0">
          <span className="text-sm md:text-lg font-project text-zinc-600">
            App API - Melamar Pekerjaan
          </span>
          <div className="mt-2 md:mt-3 flex justify-center">
            <div className="block md:flex md:gap-3">
              <div className="rounded max-w-xs bg-neutral-100 shadow-md md:shadow-lg mt-2 md:mt-0">
                <Image
                  src={"/project/APPWebsite-Melamar.png"}
                  alt="Website"
                  width={355}
                  height={0}
                  className="w-full rounded-t"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Website</div>
                  <p className="text-gray-700 text-base">
                    Aplikasi website menggunakan Laravel
                  </p>
                </div>
                <div className="px-6 py-2 flex justify-center">
                  <a
                    href="https://github.com/silendas/APP_Web_Melamar_Pekerjaan"
                    target="_blank"
                  >
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">
                      Lihat
                    </button>
                  </a>
                </div>
              </div>
              <div className="rounded max-w-xs bg-neutral-100 shadow-md md:shadow-lg mt-2 md:mt-0">
                <Image
                  src={"/project/APPMobile-Melamar.png"}
                  alt="Mobile"
                  width={300}
                  height={0}
                  className="w-full rounded-t"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Mobile App</div>
                  <p className="text-gray-700 text-base">
                    Aplikasi mobile Android/IOS menggunakan Ionic
                  </p>
                </div>
                <div className="px-6 py-2 flex justify-center">
                  <a
                    href="https://github.com/silendas/APP_Mobile_Melamar_Pekerjaan"
                    target="_blank"
                  >
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">
                      Lihat
                    </button>
                  </a>
                </div>
              </div>
              <div className="rounded max-w-xs bg-neutral-100 shadow-md md:shadow-lg mt-2 md:mt-0">
                <Image
                  src={"/project/Desktop-Melamar.png"}
                  alt="Desktop"
                  width={300}
                  height={0}
                  className="w-full rounded-t"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Desktop</div>
                  <p className="text-gray-700 text-base">
                    Aplikasi desktop menggunakan Visual Basic.Net
                  </p>
                </div>
                <div className="px-6 py-2 flex justify-center">
                  <a
                    href="https://github.com/silendas/APP_Desktop_Melamar_Pekerjaan"
                    target="_blank"
                  >
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">
                      Lihat
                    </button>
                  </a>
                </div>
              </div>
              <div className="rounded max-w-xs bg-neutral-100 shadow-md md:shadow-lg mt-2 md:mt-0">
                <Image
                  src={"/project/ServiceAPI-Melamar.png"}
                  alt="Website"
                  width={300}
                  height={0}
                  className="w-full rounded-t"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Service API</div>
                  <p className="text-gray-700 text-base">
                    Service API dibuat menggunakan Go Language
                  </p>
                </div>
                <div className="px-6 py-2 flex justify-center">
                  <a
                    href="https://github.com/silendas/Service_API_Melamar_Pekerjaan"
                    target="_blank"
                  >
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">
                      Lihat
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-2 md:mt-3 isolate px-6 bg-white md:bg-neutral-200 md:rounded-lg p-3 md:p-5 md:shadow-md mb-3">
        <div className="project block border md:border-none shadow-inner md:shadow-none rounded md:rounded-none p-2 pt-4 md:pt-0 md:p-0">
          <span className="text-sm md:text-lg font-project text-zinc-600">
            App Mobile - Kids Course
          </span>
          <div className="mt-2 md:mt-3 flex justify-center">
            <div className="block md:flex md:gap-3">
              <div className="rounded max-w-xs bg-neutral-100 shadow-md md:shadow-lg mt-2 md:mt-0">
                <Image
                  src={"/project/Kidscourse.png"}
                  alt="Website"
                  width={355}
                  height={0}
                  className="w-full rounded-t"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Kids Course</div>
                  <p className="text-gray-700 text-base">
                    Aplikasi mobile Android/IOS tentang les online untuk
                    anak-anak
                  </p>
                </div>
                <div className="px-6 py-2 flex justify-center">
                  <a
                    href="https://github.com/silendas/APK_Android_Kids_Course"
                    target="_blank"
                  >
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-3 border border-gray-400 rounded shadow">
                      Lihat
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
