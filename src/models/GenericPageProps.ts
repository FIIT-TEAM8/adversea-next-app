export type GenericPageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}