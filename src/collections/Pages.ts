import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "someField",
  },
  fields: [
    {
      /**
       * Rows of the website content. We want to use rows so we can provide range of consistent styling options.
       * Each row can contain multiple (BLOCKS) content components as well as bigger more complex components that can contain blocks (NESTED blocks).
       * So for example we can build-up one row with orange background and contained width that groups multiple smaller components.
       */
      name: "Rows",
      type: "array",
      fields: [
        {
          type: "group",
          name: "style",
          fields: [
            {
              name: "width",
              type: "radio",
              options: [
                {
                  value: 'full',
                  label: 'Full-width'
                },
                {
                  value: 'container',
                  label: 'Contained'
                }
              ]
            },
            {
              name: "backgroundColor",
              type: "text",
            },
          ],
        },
        /**
         * Each row can contain either simple or more complex blocks:
         * Simple-components row:
         *  "header" (text + text) + "text" (richtext) + "buttons" (relationships).
         *
         * Complex-component row:
         *  "jumbo" (blocks)      <=========================== This throws an error
         *      > "header" (text + text) + "claim" (textarea) + "socials" (group)
         */
        {
          type: "blocks",
          name: "content",
          localized: true,            //  <=================== This fails
          blocks: [
            {
              slug: 'header',
              fields: [
                {
                  type: 'text',
                  name: 'title',
                },
                {
                  type: 'text',
                  name: 'subtitle'
                }
              ]
            },
            {
              slug: "richtext",
              fields: [
                {
                  type: 'richText',
                  name: 'Text'
                }
              ]
            },
            /**
             *    ...
             */
            {
              slug: "homepage",
              fields: [
                {
                  name: "title",
                  type: "text",
                },
                {
                  name: "content",
                  type: "blocks",
                  blocks: [
                    {
                      slug: "richtext",
                      fields: [
                        {
                          name: "content",
                          type: "richText",
                        },
                        {
                          name: "socials",
                          type: "group",
                          fields: [],
                        },
                        {
                          name: "image",
                          type: "text",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Pages;
