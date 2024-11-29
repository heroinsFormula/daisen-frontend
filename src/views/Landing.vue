<template>
  <div>
    <landing-page-navbar></landing-page-navbar>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 75vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style='background-image: url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80");'
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-5xl">
                  Daisen Disk
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  Vaše data jsou u nás v bezpečí
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gray-300 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center mt-16">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 class="text-3xl mb-2 font-bold leading-normal">
                Kdo jsme?
              </h3>
              <p
                class="text-lg font-normal leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Jsme fiktivní Česká firma která poskytuje firmám i jednotlivcům cloudové řešení.
              </p>
              <p
                class="text-lg font-normal leading-relaxed mt-0 mb-4 text-gray-700"
              ><!-- přepsat -->
                Náš cloudový systém je navržen tak, aby vám umožnil rychlý start.
                Přizpůsobte si nastavení, nahrávejte soubory a sdílejte je během pár minut.
              </p>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                class="font-bold text-gray-800 mt-8"
                >Zjistěte více o naší platformě!<!-- přepsat --></a
              >
            </div>
            <div class="w-full md:w-5/12 px-4 pt-8 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-600"
              >
                <img
                  alt="..."
                  src="../assets/img/servers.jpg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-red-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Špičkové cloudové služby <!-- přepsat -->
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Garantujeme vám dostupnost a stabilitu služeb po celý rok bez ohledu na okolní podmínky. <!-- přepsat -->
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative py-20">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="../assets/img/hard-drive.png"
              />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">


                <h3 class="text-3xl font-semibold">Bezpečnost je u nás na prvním místě</h3>
                <p class="mt-4 text-lg leading-relaxed text-gray-600">
                  Inspirujeme se Švýcarskými zákony o zabezpečení dat,
                  takže se nemusíte bát o vaše soubory.

                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-700 bg-red-400 mr-3"
                          ><i class="fas fa-fingerprint"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">
                          Pečlivě navržená infrastruktura <!-- přepsat -->
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-700 bg-red-400 mr-3"
                          ><i class="fab fa-html5"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Přehledná a intuitivní správa dat</h4> <!-- přepsat -->
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-700 bg-red-400 mr-3"
                          ><i class="far fa-paper-plane"></i
                        ></span>
                      </div>
                      <div>
                        <h4 class="text-gray-600">Flexibilní a škálovatelná řešení</h4><!-- přepsat -->
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="relative pb-20 pt-12 bg-gray-100">
          <div class="container mx-auto px-4">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-semibold">Naše Ceny</h2>
              <p class="text-lg text-gray-600 mt-4">Vyberte si plán, který nejlépe vyhovuje vašim potřebám.</p>
            </div>
            <div class="flex justify-center">
              <!-- Zadáčo Plan -->
            <div class="w-full md:w-4/12 px-4 mb-6">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-semibold text-gray-800">Zadáčo</h3>
                <p class="text-lg text-gray-600 mt-4">Vyzkoušejte si naše služby.</p>
                <div class="mt-6 text-4xl font-semibold text-gray-800">0kč/měsíc</div>
                <ul class="mt-6 text-left text-gray-600">
                  <li class="py-2">20 GB úložiště</li>
                  <li class="py-2">Bandwidth maximálně 10 MB/s</li>
                  <li class="py-2">Podpora e-mailem</li>
                  <li class="py-2">Základní šifrování</li>
                </ul>
                <button class="w-full mt-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none">
                  Vybrat plán
                </button>
              </div>
            </div>

            <!-- Basic Plan -->
            <div class="w-full md:w-4/12 px-4 mb-6">
              <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-2xl font-semibold text-gray-800">Základní</h3>
                <p class="text-lg text-gray-600 mt-4">Pro jednotlivce a malé týmy.</p>
                <div class="mt-6 text-4xl font-semibold text-gray-800">49.99kč/měsíc</div>
                <ul class="mt-6 text-left text-gray-600">
                  <li class="py-2">100 GB úložiště</li>
                  <li class="py-2">Bandwidth maximálně 50 MB/s</li>
                  <li class="py-2">Podpora e-mailem</li>
                  <li class="py-2">Základní šifrování</li>
                </ul>
                <button class="w-full mt-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 hover:scale-105 transition-all duration-300">Vybrat plán</button>
              </div>
            </div>

            <!-- Pro Plan -->
            <div class="w-full md:w-4/12 px-4 mb-6">
              <div class="bg-red-600 p-6 rounded-lg shadow-lg text-white">
                <h3 class="text-2xl font-semibold">Pro</h3>
                <p class="text-lg mt-4">Pro profesionály a týmy.</p>
                <div class="mt-6 text-4xl font-semibold">159.99kč/měsíc</div>
                <ul class="mt-6 text-left">
                  <li class="py-2">1 TB úložiště</li>
                  <li class="py-2">Bandwidth maximálně 100 MB/s</li>
                  <li class="py-2">24/7 podpora</li>
                  <li class="py-2">Pokročilé šifrování</li>
                </ul>
                <button class="w-full mt-6 bg-white text-blue-600 py-2 px-4 rounded-lg hover:bg-red-200 hover:scale-105 transition-all duration-300">Vybrat plán</button>
              </div>
            </div>

            <!-- Enterprise Plan -->
            <div class="w-full md:w-4/12 px-4 mb-6">
              <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
                <h3 class="text-2xl font-semibold">Enterprise</h3>
                <p class="text-lg mt-4">Pro velké firmy a korporace.</p>
                <div class="mt-6 text-4xl font-semibold">549.99kč/měsíc</div>
                <ul class="mt-6 text-left">
                  <li class="py-2">5 TB úložiště</li>
                  <li class="py-2">Neomezený Bandwidth</li>
                  <li class="py-2">Individuální podpora</li>
                  <li class="py-2">Vlastní šifrovací klíče</li>
                </ul>
                <button class="w-full border border-gray mt-6 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 hover:scale-105 transition-all duration-300">Vybrat plán</button>
              </div>
            </div>
          </div>
          </div>
      </section>
      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Seznamte se s naším týmem</h2>
              <p class="text-lg leading-relaxed m-4 text-gray-600"><!-- přepsat -->
                Naši specialisté se starají o hladký provoz a bezpečnost vašeho úložiště každý den.
              </p>
            </div>
          </div>
          <div class="flex flex-nowrap">
            <team-member-component
              :memberName="'Jan Valoušek'"
              :functionInTeam="'CEO'"
            ></team-member-component>
            <team-member-component
              :memberName="'Ondřej Rendl'"
              :functionInTeam="'Komunikace'"
            ></team-member-component>
            <team-member-component
              :memberName="'Lukáš Mareš'"
              :functionInTeam="'Technik'"
            ></team-member-component>
            <team-member-component
              :memberName="'Martin Sklenička'"
              :functionInTeam="'Obchodní ředitel'"
            ></team-member-component>
              <team-member-component
                :memberName="'Lukáš Ostrihoň'"
                :functionInTeam="'Administrativa'"
              ></team-member-component>
          </div>
        </div>
      </section>
      <section class="pb-20 relative block bg-gray-900">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto px-4 lg:pt-24 lg:pb-64">
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-gray-900">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div
                class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
              >
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">Máte otázky?</h4>
                  <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                    Kontaktujte nás
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name"
                      >Jméno a příjmení</label
                    ><input
                      type="text"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Jméno a příjmení"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email"
                      >Email</label
                    ><input
                      type="email"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message"
                      >Zpráva</label
                    ><textarea
                      rows="4"
                      cols="80"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Zadejte zprávu..."
                    ></textarea>
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style="transition: all 0.15s ease 0s;"
                    >
                      Odeslat
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import TeamMemberComponent from "../components/TeamMemberComponent.vue";
import LandingPageNavbar from "../components/LandingPageNavbar.vue";
export default {
  name: "landing-page",
  components: {
    LandingPageNavbar,
    TeamMemberComponent
  }
}
</script>
