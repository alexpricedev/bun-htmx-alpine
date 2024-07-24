type H1Props = {
  content: string;
};

export const H1 = ({ content }: H1Props) => (
  <h1
    class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"
    hx-ext="event-tracker"
  >
    {content}
  </h1>
);
