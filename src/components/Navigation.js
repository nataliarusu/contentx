import { PrismicLink, PrismicRichText } from "@prismicio/react";

export function Navigation({ navigation }) {
  console.log(navigation);
  return (
    <nav>
      <ul>
        {/* Renders top-level links. */}
        {navigation.data.slices.map((slice) => {
          return (
            <li key={slice.id}>
              <PrismicLink field={slice.primary.link}>
                <PrismicRichText field={slice.primary.name} />
              </PrismicLink>

              {/* Renders child links, if present. */}
              {slice.items.length > 0 && (
                <ul>
                  {slice.items.map((item) => {
                    return (
                      <li key={JSON.stringify(item)}>
                        <PrismicLink field={item.child_link}>
                          <PrismicRichText field={item.child_name} />
                        </PrismicLink>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
