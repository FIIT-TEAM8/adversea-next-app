import Logo from "@/components/atoms/Logo";
import SearchField from "@/components/molecules/SearchField";
import SearchResultItem from "@/components/molecules/SearchResultItem";
import { GenericPageProps } from "@/models/GenericPageProps";
import { SearchEntityResponse } from "@/models/SearchEntityResponse";
import * as amplitude from '@amplitude/analytics-node';

export default async function Page({ params, searchParams }: GenericPageProps) {
  // amplitude.init(`${process.env.AMPLITUDE_API_KEY}`);
  // amplitude.track('Page View', undefined, {
  //   user_id: 'user@amplitude.com',
  // });

  const method = "rough";
  const name = searchParams.name;

  let entities: SearchEntityResponse[] | undefined;

  if (name) {
    amplitude.track('Perform Search', undefined, {
      user_id: 'user@amplitude.com',
    });

    const res = await fetch(`${process.env.SEARCH_API_URL}/search?method=${method}&name=${encodeURIComponent(String(name))}`);
    entities = await res.json()
  } else {
    entities = undefined;
  }

  return (
    <div className="flex justify-center bg-white mt-20">
      <div className="p-5 w-[40rem] md:w-3/4 lg:w-2/4">
        <div className="w-full flex items-center justify-center mb-8">
          <Logo />
        </div>
        <SearchField defaultValue={name ? String(name) : ""} />
        <div className="p-1">
          {entities ? entities.map((entity, index) => (
            <div className="mt-8">
              <SearchResultItem key={`${index}-entity-result-item`} entity={entity} />
            </div>
          )) : null}
        </div>
      </div>
    </div>
  );
}