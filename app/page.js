import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-center">
      <div className="block mx-auto max-w-7xl isolate bg-white md:bg-neutral-200 px-6 md:rounded-lg p-3 md:p-5 md:shadow-md">
        <div className="flex justify-center">
          <Image
            src={"/Foto.jpg"}
            alt="Profile"
            width={352}
            height={40}
            className="rounded-md shadow-md hidden md:flex"
          />
          <Image
            src={"/Foto.jpg"}
            alt="Profile"
            width={202}
            height={40}
            className="rounded-md shadow flex md:hidden"
          />
        </div>
        <p className="mt-2 px-0 md:px-72 text-xs md:text-base text-zinc-600">
          As a student majoring in informatics engineering, I have a passion for
          technology and a passion for developing innovative solutions through
          programming and software development.
        </p>
      </div>
      <div className="block isolate bg-neutral-200 md:bg-transparent px-6 py-3 md:py-8">
        <div className="mx-auto max-w-full block">
          <div className="skill">
            <span className="text-lg font-skill text-zinc-600">My Skills</span>
          </div>

          {/* Desktop */}

          <div className="hidden md:flex justify-center gap-8 text-zinc-500 mt-0 md:mt-2">
            <div className="block">
              <a href="https://nextjs.org" target="_blank">
                <div className="flex justify-center">
                  <Image
                    src={"/Nextjs.png"}
                    alt="Nextjs"
                    width={102}
                    height={40}
                    className="p-1"
                  />
                </div>
                <span className="text-zinc-600 skills">Next.js</span>
              </a>
            </div>
            <div className="block">
              <a href="https://laravel.com/" target="_blank">
                <div className="flex justify-center">
                  <Image
                    src={"/Laravelphp.png"}
                    alt="Laravel"
                    width={102}
                    height={40}
                    className="p-1"
                  />
                </div>
                <span className="text-zinc-600 skills">Laravel</span>
              </a>
            </div>
            <div className="block">
              <a href="https://ionicframework.com/" target="_blank">
                <div className="flex justify-center">
                  <Image
                    src={"/IonicM.png"}
                    alt="Ionic"
                    width={102}
                    height={40}
                    className="p-1"
                  />
                </div>
                <span className="text-zinc-600 skills">Ionic</span>
              </a>
            </div>
            <div className="block">
              <a href="https://visualstudio.microsoft.com/" target="_blank">
                <div className="flex justify-center">
                  <Image
                    src={"/VBNet.png"}
                    alt="Visual Basic"
                    width={102}
                    height={40}
                    className="p-1"
                  />
                </div>
                <span className="text-zinc-600 skills">Visual Basic</span>
              </a>
            </div>
            <div className="block">
              <a href="https://go.dev/" target="_blank">
                <div className="flex justify-center">
                  <Image
                    src={"/Golang.png"}
                    alt="Go"
                    width={102}
                    height={40}
                    className="p-1"
                  />
                </div>
                <span className="text-zinc-600 skills">Go Language</span>
              </a>
            </div>
            <div className="block">
              <a href="https://www.mysql.com/" target="_blank">
                <div className="flex justify-center">
                  <Image
                    src={"/mysql.png"}
                    alt="My SQL"
                    width={102}
                    height={40}
                    className="p-1"
                  />
                </div>
                <span className="text-zinc-600 skills">MySQL</span>
              </a>
            </div>
          </div>

          {/* Mobile */}

          <div className="block md:hidden justify-center gap-5 text-zinc-500 mt-0 md:mt-2">
            <div className="flex justify-center gap-20 mt-3">
              <div className="block">
                <a href="https://nextjs.org" target="_blank">
                  <div className="flex justify-center">
                    <Image
                      src={"/Nextjs.png"}
                      alt="Nextjs"
                      width={102}
                      height={40}
                      className="p-1"
                    />
                  </div>
                  <span className="text-zinc-600 skills">Next.js</span>
                </a>
              </div>
              <div className="block">
                <a href="https://laravel.com/" target="_blank">
                  <div className="flex justify-center">
                    <Image
                      src={"/Laravelphp.png"}
                      alt="Laravel"
                      width={102}
                      height={40}
                      className="p-1"
                    />
                  </div>
                  <span className="text-zinc-600 skills">Laravel</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-20 mt-2">
              <div className="block">
                <a href="https://ionicframework.com/" target="_blank">
                  <div className="flex justify-center">
                    <Image
                      src={"/IonicM.png"}
                      alt="Ionic"
                      width={102}
                      height={40}
                      className="p-1"
                    />
                  </div>
                  <span className="text-zinc-600 skills">Ionic</span>
                </a>
              </div>
              <div className="block">
                <a href="https://visualstudio.microsoft.com/" target="_blank">
                  <div className="flex justify-center">
                    <Image
                      src={"/VBNet.png"}
                      alt="Visual Basic"
                      width={102}
                      height={40}
                      className="p-1"
                    />
                  </div>
                  <span className="text-zinc-600 skills">Visual Basic</span>
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-20 mt-0">
              <div className="block">
                <a href="https://go.dev/" target="_blank">
                  <div className="flex justify-center">
                    <Image
                      src={"/Golang.png"}
                      alt="Go"
                      width={102}
                      height={40}
                      className="p-1"
                    />
                  </div>
                  <span className="text-zinc-600 skills">Go Language</span>
                </a>
              </div>
              <div className="block">
                <a href="https://www.mysql.com/" target="_blank">
                  <div className="flex justify-center">
                    <Image
                      src={"/mysql.png"}
                      alt="My SQL"
                      width={102}
                      height={40}
                      className="p-1"
                    />
                  </div>
                  <span className="text-zinc-600 skills">MySQL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block isolate bg-white px-6 py-3 text-start">
        <div className="mx-auto max-w-full block">
          <div className="skill block p-1 md:p-5 md:pt-0">
            <div className="skill-bars">
              <div className="bar">
                <div className="info">
                  <span className="text-md font-present text-zinc-600">
                    Next.js
                  </span>
                </div>
                <div className="progress-line nextjs">
                  <span className="bg-gray-500"></span>
                </div>
              </div>
            </div>
            <div className="skill-bars">
              <div className="bar">
                <div className="info">
                  <span className="text-md font-present text-zinc-600">
                    Laravel
                  </span>
                </div>
                <div className="progress-line laravel">
                  <span className="bg-gray-500"></span>
                </div>
              </div>
            </div>
            <div className="skill-bars">
              <div className="bar">
                <div className="info">
                  <span className="text-md font-present text-zinc-600">
                    Ionic
                  </span>
                </div>
                <div className="progress-line ionic">
                  <span className="bg-gray-500"></span>
                </div>
              </div>
            </div>
            <div className="skill-bars">
              <div className="bar">
                <div className="info">
                  <span className="text-md font-present text-zinc-600">
                    Visual Basic.NET
                  </span>
                </div>
                <div className="progress-line vb">
                  <span className="bg-gray-500"></span>
                </div>
              </div>
            </div>
            <div className="skill-bars">
              <div className="bar">
                <div className="info">
                  <span className="text-md font-present text-zinc-600">
                    Go Language
                  </span>
                </div>
                <div className="progress-line golang">
                  <span className="bg-gray-500"></span>
                </div>
              </div>
            </div>
            <div className="skill-bars">
              <div className="bar">
                <div className="info">
                  <span className="text-md font-present text-zinc-600">
                    MySQL
                  </span>
                </div>
                <div className="progress-line mysql">
                  <span className="bg-gray-500"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
