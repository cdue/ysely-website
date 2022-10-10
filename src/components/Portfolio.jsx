import { useEffect, useState } from 'react';
import Image from 'next/future/image';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import pppExtranet from '@/images/screenshots/3p-extranet.webp';
import picardPay from '@/images/screenshots/picard-pay.webp';
import fnacDarty from '@/images/screenshots/fnac-darty.webp';
import fastFlatFee from '@/images/screenshots/fastflatfee.webp';

const projects = [
  {
    title: 'Extranet de gestion de cartes cadeaux',
    description:
      'Application Web permettant à OnePrepaid et ses clients de configurer, créer, et obtenir des analyses statistiques sur leurs produits Cartes Cadeaux physiques ou virtuelles.',
    image: pppExtranet,
  },
  {
    title: 'Vente de cartes cadeaux virtuelles en B2C',
    description:
      'Site en marque blanche, personnalisable selon la charte graphique du client, et permettant la vente de cartes cadeaux virtuelles à destination des particulier',
    image: picardPay,
  },
  {
    title: 'Vente de cartes virtuelles et physiques en B2B',
    description:
      'Site en marque blanche, personnalisable selon la charte graphique du client, et permettant la vente de cartes cadeaux virtuelles à destination des particulier',
    image: fnacDarty,
  },
  {
    title: 'Vente de maisons aux USA & Canada',
    description:
      "Corrections d'anomalies et mise en production d'un site de vente de maisons aux USA et Canada",
    image: fastFlatFee,
  },
];

export function Portfolio() {
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="portfolio"
      aria-label="Quelques projets réalisés"
      className="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Quelques réalisations
          </h2>
          <p className="mt-6 text-lg tracking-tight text-primary-050">
            Voici quelques exemples de projets réalisés en collaboration avec
            nos clients préférés
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {projects.map((project, projectIndex) => (
                    <div
                      key={project.title}
                      className={clsx(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === projectIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === projectIndex
                              ? 'text-primary-400 lg:text-white'
                              : 'text-primary-050 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {project.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === projectIndex
                            ? 'text-white'
                            : 'text-primary-050 group-hover:text-white'
                        )}
                      >
                        {project.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {projects.map((project) => (
                  <Tab.Panel key={project.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {project.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-primary-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={project.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  );
}
