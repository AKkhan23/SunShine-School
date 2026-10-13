/** Server component that emits a JSON-LD block for the page. */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Data is authored in this repository (no user input), so serialising it
      // here cannot introduce an injection vector.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}