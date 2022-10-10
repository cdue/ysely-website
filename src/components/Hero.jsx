import Image from 'next/future/image';

import { Container } from '@/components/Container';
import logoOneprepaid from '@/images/logos/oneprepaid.svg';
import logoBearstudio from '@/images/logos/bearstudio.svg';
import logoFastflatfee from '@/images/logos/fastflatfee.svg';

export function Hero() {
  return (
    <Container className="pt-10 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Besoin d&apos;un
        <span className="bg-gradient-to-r from-primary-500 via-primary-500 to-ternary-400 bg-clip-text text-transparent">
          {' '}
          développeur Full-Stack
        </span>{' '}
        pour votre projet Web ou Mobile ?
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Je suis <span className="font-bold">Cédric Dué</span>, gérant de la
        société <span className="font-bold">Ysely</span> et{' '}
        <span className="font-bold">développeur Full-Stack</span> depuis plus de
        10 ans. Je vous accompagne dans la co-construction de votre projet{' '}
        <span className="font-bold">Web ou Mobile</span>. <br />
        Passons ensemble de l&apos;idée à la réalisation 🚀
      </p>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-lg font-medium">
          Nous avons collaboré sur de beaux projets :
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              {
                name: 'One-Prepaid',
                logo: logoOneprepaid,
                website: 'https://www.one-prepaid.com/',
              },
              {
                name: 'BearStudio',
                logo: logoBearstudio,
                website: 'https://www.bearstudio.fr/',
              },
              {
                name: 'fastflatfee',
                logo: logoFastflatfee,
                website: 'https://fastflatfee.com/',
              },
            ],
            [],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <a href={company.website} target="blank">
                      <Image src={company.logo} alt={company.name} />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
