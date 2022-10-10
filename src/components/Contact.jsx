import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Discutons de votre projet"
      className="overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24"
    >
      <Container className="relative mx-auto max-w-xl">
        <svg
          className="absolute left-full translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-primary-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <svg
          className="absolute right-full bottom-0 -translate-x-1/2 transform"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-primary-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={404}
            fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
          />
        </svg>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Parlez moi de votre projet
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Vous avez un projet et vous souhaitez savoir si nous pourrions le
            réaliser ensemble ?
            <br />
            Dites m&apos;en plus sur vous et sur votre projet, je vous réponds
            au plus vite !
          </p>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Prénom
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary-300 focus:ring-primary-300"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Nom
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary-300 focus:ring-primary-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700"
              >
                Société / Association
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary-300 focus:ring-primary-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary-300 focus:ring-primary-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium text-gray-700"
              >
                Numéro de téléphone
              </label>
              <div className="mt-1">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary-300 focus:ring-primary-300"
                  placeholder="+33 6 01 02 03 04"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 shadow-sm focus:border-primary-300 focus:ring-primary-300"
                  defaultValue={''}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              {/* className="    border border-transparent focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 " */}
              <Button className="w-full px-6 py-3" color="primary" disabled>
                Envoyer
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
