// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Menu documents */
interface MenuDocumentData {
    /**
     * Menu Items field in *Menu*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.menu_items[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    menu_items: prismicT.GroupField<Simplify<MenuDocumentDataMenuItemsItem>>;
}
/**
 * Item in Menu → Menu Items
 *
 */
export interface MenuDocumentDataMenuItemsItem {
    /**
     * Label field in *Menu → Menu Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.menu_items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *Menu → Menu Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: menu.menu_items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link: prismicT.KeyTextField;
}
/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<MenuDocumentData>, "menu", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Name field in *Navigation*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Slice Zone field in *Navigation*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<NavigationDocumentDataSlicesSlice>;
}
/**
 * Slice for *Navigation → Slice Zone*
 *
 */
type NavigationDocumentDataSlicesSlice = NavigationItemSlice;
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for page documents */
interface PageDocumentData {
    /**
     * Title field in *page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Slice Zone field in *page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = CoverImageSlice;
/**
 * page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = MenuDocument | NavigationDocument | PageDocument;
/**
 * Primary content in CoverImage → Primary
 *
 */
interface CoverImageSliceDefaultPrimary {
    /**
     * Title field in *CoverImage → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: cover_image.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *CoverImage → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: cover_image.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *CoverImage → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: cover_image.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for CoverImage Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CoverImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CoverImageSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CoverImageSliceDefaultPrimary>, never>;
/**
 * Slice variation for *CoverImage*
 *
 */
type CoverImageSliceVariation = CoverImageSliceDefault;
/**
 * CoverImage Shared Slice
 *
 * - **API ID**: `cover_image`
 * - **Description**: `CoverImage`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CoverImageSlice = prismicT.SharedSlice<"cover_image", CoverImageSliceVariation>;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavigationItemSliceDefaultPrimary {
    /**
     * Name field in *NavigationItem → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Item in NavigationItem → Items
 *
 */
export interface NavigationItemSliceDefaultItem {
    /**
     * Child Link field in *NavigationItem → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].child_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    child_link: prismicT.LinkField;
    /**
     * Child Name field in *NavigationItem → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].child_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    child_name: prismicT.RichTextField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavigationItemSliceDefaultPrimary>, Simplify<NavigationItemSliceDefaultItem>>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSlice = prismicT.SharedSlice<"navigation_item", NavigationItemSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { MenuDocumentData, MenuDocumentDataMenuItemsItem, MenuDocument, NavigationDocumentData, NavigationDocumentDataSlicesSlice, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, CoverImageSliceDefaultPrimary, CoverImageSliceDefault, CoverImageSliceVariation, CoverImageSlice, NavigationItemSliceDefaultPrimary, NavigationItemSliceDefaultItem, NavigationItemSliceDefault, NavigationItemSliceVariation, NavigationItemSlice };
    }
}
