import { Container } from '@/components/Container';

const faqs = [
  [
    {
      question: 'Quelles missions peut-on vous confier ?',
      answer: (
        <>
          L&apos;étendue des activités qui peuvent être prise en charge est
          relativement large, et comprend entre autres :
          <ul className="list-inside list-disc">
            <li>
              <span className="font-semibold">architecture logicielle</span>{' '}
              (microservices, hexagonale, monolithique, ...)
            </li>
            <li>
              mise en place d&apos;un workflow{' '}
              <span className="font-semibold">Git</span>
            </li>
            <li>
              <span className="font-semibold">développement</span> d&apos;une
              application <span className="font-semibold">Web ou mobile</span>,
              du <span className="font-semibold">Backend</span> (Base de
              données, API Rest, GraphQL, ...) au{' '}
              <span className="font-semibold">Frontend</span> (React,
              Javascript, HTML, CSS, ...)
            </li>
            <li>
              écriture de <span className="font-semibold">tests</span>{' '}
              (unitaires, intégration, e2e)
            </li>
            <li>
              mise en place de pipelines de{' '}
              <span className="font-semibold">CI/CD</span> (Intégration et
              Déploiement continus)
            </li>
            <li>
              rédaction de <span className="font-semibold">documentation</span>{' '}
              et schémas techniques
            </li>
            <li>
              <span className="font-semibold">management</span> de projet ou
              d&apos;équipe
            </li>
            <li>
              <span className="font-semibold">formation</span> technique
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Qu'est-ce que vous ne savez pas ou ne souhaitez pas faire ?",
      answer: (
        <>
          Mon domaine de prédilection est le développement logiciel, et j&apos;aime
          participer à toutes les phases d&apos;un projet.
          <br />
          <span className="font-semibold">
            Mais ce que je ne souhaite pas faire :
          </span>{' '}
          Faire exclusivement de la gestion de projet ou d&apos;équipe, sans prendre
          part aux aspects techniques.
          <br />
          <span className="font-semibold">
            Et ce que je ne sais pas faire :
          </span>{' '}
          Si on reste dans le cadre de la réalisation technique d&apos;un projet, il
          y a certains aspects que je ne pourrais pas traiter, tel que le
          graphisme, les illustrations, l&apos;UI/UX. Et même si ces domaines
          m&apos;intéressent, je préfère les sous-traiter afin que le résultat soit à
          la hauteur du reste du projet.
        </>
      ),
    },
  ],
  [
    {
      question: 'Quels sont vos langages / frameworks de prédilection ?',
      answer: (
        <>
          Le langage de programmation choisi n&apos;est pas une fin en soit, et doit
          correspondre au context, aux problématiques du projet, et aux
          connaissances de l&apos;équipe.
          <br />
          Toutefois, voici quelques langages et frameworks que j&apos;aime utiliser
          (même si j&apos;en connais d&apos;autres) :
          <ul className="list-inside list-disc">
            <li>Java</li>
            <li>Kotlin</li>
            <li>Spring (et Spring boot)</li>
            <li>Javascript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS (Sass)</li>
            <li>Et bien d&apos;autres...</li>
          </ul>
        </>
      ),
    },
    {
      question: 'Dans quelle région travaillez-vous ?',
      answer: (
        <>
          J&apos;ai fait le choix du{' '}
          <span className="font-semibold">remote à 100%</span> (télétravail)
          pour des raisons d&apos;organisation personnelle et d&apos;écologie, mais je
          suis situé à côté de Rouen (76), donc je peux venir vous recontrer{' '}
          <span className="font-semibold">
            ponctuellement aux alentours de Rouen ou Paris
          </span>
          .
        </>
      ),
    },
  ],
  [
    {
      question: 'Combien coute un Freelance ?',
      answer: (
        <>
          En bon normand 🍏, je dirais que ça dépend...
          <br />
          Le prix peut varier par exemple en fonction de la durée du projet, de
          sa complexité, du temps à y passer ou encore du délai de réalisation
          souhaité.
          <br />
          Il existe plusieurs modes de tarification :
          <ul className="list-inside list-disc">
            <li>
              <span className="font-semibold">
                En régie : Facturation à la journée.
              </span>
              <br />
              Nous convenons ensemble d&apos;un Tarif Journalier (TJ) en fonction du
              type de mission (complexité, durée, ...).
              <br />
              Mais on peut considérer un Tarif Journalier Moyen (TJM) d&apos;environ
              600€ HT.
              <br />
              Il s&apos;agit ici d&apos;un engagement de moyens.
            </li>
            <li>
              <span className="font-semibold">
                Au forfait : Prix fixe pour l&apos;ensemble de la prestation.
              </span>
              <br />
              Le prix est fixé en fonction du cahier des charges (context,
              scope, délai, livrable,...) et tant que rien ne change, le prix
              fixé au départ restera celui que vous paierez.
              <br />
              Il s&apos;agit ici d&apos;un engagement de résultats (à périmètre constant).
            </li>
            <li>
              <span className="font-semibold">
                Le value pricing : Facturation à la valeur
              </span>
              <br />
              Ce mode de tarification est moins répandu mais néanmoins très
              intéressant pour les deux parties. On peut parler de tarification
              gagnant/gagnant.
              <br />
              Si la tache doit vous apporter un ROI elevé, alors il est
              normal/raisonnable que vous la payiez plus chère. A l&apos;inverse, si
              le ROI que vous en retirerez est faible, elle vous en coutera
              également moins cher.
            </li>
          </ul>
          Dans tous les cas,{' '}
          <span className="font-semibold">contactez moi</span> pour discuter de
          votre projet, et nous fixerons le prix de la prestation en fonction.
        </>
      ),
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-500 pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          {/* FIXME: There is multiple H2 in the same page */}
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            FAQ - Questions fréquentes
          </h2>

          <p className="mt-6 text-lg tracking-tight text-primary-050">
            Vous vous demandez peut-être si travailler avec un Freelance
            répondrait à votre besoin, ou comment se déroule et une mission, et
            pour quel type de mission ?
            <br />
            Si la réponse à votre question ne figure pas ci-dessous, prenons
            contact 👋
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-7 text-white">
                      {faq.question}
                    </h3>
                    <div className="mt-4 text-sm text-primary-050">
                      {faq.answer}
                    </div>
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
