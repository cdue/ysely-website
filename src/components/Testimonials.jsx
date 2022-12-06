import Image from 'next/future/image';

import { Container } from '@/components/Container';
// import avatarStephaneAssuid from '@/images/avatars/avatarStephaneAssuid.webp';
import avatarFabienEssid from '@/images/avatars/avatarFabienEssid.webp';
import avatarSebastienLeclerc from '@/images/avatars/avatarSebastienLeclerc.webp';
// import avatarAlinZdroba from '@/images/avatars/avatarAlinZdroba.webp';
// import avatarGuillaumeGregoire from '@/images/avatars/avatarGuillaumeGregoire.webp';

const testimonials = [
  [
    // {
    //   content: 'Lorem ipsum...',
    //   author: {
    //     name: 'Stéphane Assuid',
    //     role: 'CEO chez One-Prepaid',
    //     image: avatarStephaneAssuid,
    //   },
    // },
    {
      content: (
        <>
          J&apos;ai eu le plaisir de travailler avec Cédric sur les projets de
          refonte de l&apos;extranet de notre solution principale 3P et de
          réalisation d&apos;une offre de boutiques en ligne en marque blanche
          destinée à la vente de cartes cadeaux pour les marchés BtoC et BtoB.
          Cédric a mis en place des architectures modernes et robustes pour le
          développement futur de nos offres. Le travail réalisé était de très
          bonne qualité et apprécié. Il a par ailleurs diffusé au sein de nos
          équipes les bonnes pratiques actuelles en matière de développement
          logiciel. A recommander sans hésitation sur des missions dans ses
          nombreux domaines d&apos;expertise.
        </>
      ),
      author: {
        name: 'Sébastien Leclerc',
        role: (
          <>
            CPO @{' '}
            <a
              href="https://www.one-prepaid.com/"
              className="underline"
              target="blank"
            >
              One-Prepaid
            </a>
          </>
        ),
        image: avatarSebastienLeclerc,
      },
    },
  ],
  [
    {
      content: (
        <span>
          Grâce à son expérience et son expertise poussée dans de nombreux
          domaines: gestion de projets, développement front-end, développement
          back-end ou encore administration des systèmes, Cédric est un atout
          indispensable au sein d&apos;une équipe projet. Les missions sur
          lesquelles nous avons collaboré ont été menées d&apos;une main de
          maître grâce à ses compétences, ce qui m&apos;a permis de gagner moi
          aussi en expérience. Son investissement et sa volonté de pousser le
          projet dans la bonne direction sont des forces. C&apos;est toujours un
          réel plaisir pour moi, et un gage de qualité à venir, que
          d&apos;intervenir sur une mission avec Cédric.
        </span>
      ),
      author: {
        name: 'Fabien Essid',
        role: (
          <>
            Développeur @{' '}
            <a
              href="https://www.bearstudio.fr/"
              className="underline"
              target="blank"
            >
              BearStudio
            </a>
          </>
        ),
        image: avatarFabienEssid,
      },
    },
    // {
    //   content: 'Lorem ipsum...',
    //   author: {
    //     name: 'Alin Zdroba',
    //     role: 'CEO at FastFlatFee',
    //     image: avatarAlinZdroba,
    //   },
    // },
  ],
  // [
  //   {
  //     content: 'Lorem ipsum...',
  //     author: {
  //       name: 'Guillaume Grégoire',
  //       role: 'Chef de projet chez One-Prepaid',
  //       image: avatarGuillaumeGregoire,
  //     },
  //   },
  // ],
];

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Quelques mots de clients et partenaires"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Quelques mots de clients et partenaires
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Travailler avec des clients et partenaires investis dans la réussite
            de leurs projets conduit souvent à de belles rencontres.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
