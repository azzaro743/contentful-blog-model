module.exports = function (migration) {
  const blogPost = migration.createContentType('blogPost').name('Blog Post').description('').displayField('headline');

  blogPost
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField('seo')
    .name('SEO')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['seo'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blogPost
    .createField('heroImage')
    .name('Hero Image')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ['image'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Asset');

  blogPost
    .createField('headline')
    .name('Headline')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField('body')
    .name('Body')
    .type('RichText')
    .localized(false)
    .required(true)
    .validations([
      {
        enabledMarks: ['bold', 'italic', 'underline', 'code', 'superscript', 'subscript'],
        message: 'Only bold, italic, underline, code, superscript, and subscript marks are allowed',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'heading-4',
          'heading-5',
          'heading-6',
          'ordered-list',
          'unordered-list',
          'hr',
          'blockquote',
          'embedded-entry-block',
          'embedded-asset-block',
          'table',
          'hyperlink',
          'entry-hyperlink',
          'asset-hyperlink',
          'embedded-entry-inline',
        ],

        message:
          'Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed',
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField('publicationDate')
    .name('Publication Date')
    .type('Date')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  blogPost
    .createField('authors')
    .name('Authors')
    .type('Array')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',

      validations: [
        {
          linkContentType: ['author'],
        },
      ],

      linkType: 'Entry',
    });

  blogPost
    .createField('category')
    .name('Category')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['category'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  blogPost
    .createField('topics')
    .name('Topics')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',

      validations: [
        {
          linkContentType: ['topic'],
        },
      ],

      linkType: 'Entry',
    });

  blogPost
    .createField('relatedArticles')
    .name('Related Articles')
    .type('Array')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Link',

      validations: [
        {
          linkContentType: ['blogPost'],
        },
      ],

      linkType: 'Entry',
    });

  blogPost.changeFieldControl('internalName', 'builtin', 'singleLine', {});
  blogPost.changeFieldControl('slug', 'builtin', 'slugEditor', {});
  blogPost.changeFieldControl('seo', 'builtin', 'entryCardEditor', {});
  blogPost.changeFieldControl('heroImage', 'builtin', 'assetLinkEditor', {});
  blogPost.changeFieldControl('headline', 'builtin', 'singleLine', {});
  blogPost.changeFieldControl('body', 'builtin', 'richTextEditor', {});
  blogPost.changeFieldControl('publicationDate', 'builtin', 'datePicker', {});
  blogPost.changeFieldControl('authors', 'builtin', 'entryLinksEditor', {});
  blogPost.changeFieldControl('category', 'builtin', 'entryLinkEditor', {});
  blogPost.changeFieldControl('topics', 'builtin', 'entryLinksEditor', {});
  blogPost.changeFieldControl('relatedArticles', 'builtin', 'entryLinksEditor', {});
  const category = migration.createContentType('category').name('Category').description('').displayField('name');

  category
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  category
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  category
    .createField('seo')
    .name('SEO')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['seo'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  category
    .createField('name')
    .name('Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  category
    .createField('description')
    .name('Description')
    .type('Text')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  category.changeFieldControl('internalName', 'builtin', 'singleLine', {});
  category.changeFieldControl('slug', 'builtin', 'slugEditor', {});
  category.changeFieldControl('seo', 'builtin', 'entryCardEditor', {});
  category.changeFieldControl('name', 'builtin', 'singleLine', {});
  category.changeFieldControl('description', 'builtin', 'multipleLine', {});
  const topic = migration.createContentType('topic').name('Topic').description('').displayField('name');

  topic
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  topic
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  topic
    .createField('seo')
    .name('SEO')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['seo'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  topic
    .createField('name')
    .name('Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  topic
    .createField('description')
    .name('Description')
    .type('Text')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  topic.changeFieldControl('internalName', 'builtin', 'singleLine', {});
  topic.changeFieldControl('slug', 'builtin', 'slugEditor', {});
  topic.changeFieldControl('seo', 'builtin', 'entryCardEditor', {});
  topic.changeFieldControl('name', 'builtin', 'singleLine', {});
  topic.changeFieldControl('description', 'builtin', 'multipleLine', {});
  const author = migration.createContentType('author').name('Author').description('').displayField('fullName');

  author
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  author
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  author
    .createField('seo')
    .name('SEO')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ['seo'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Entry');

  author
    .createField('avatarImage')
    .name('Avatar Image')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ['image'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Asset');

  author
    .createField('jobTitle')
    .name('Job Title')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  author
    .createField('fullName')
    .name('Full Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  author
    .createField('biography')
    .name('Biography')
    .type('RichText')
    .localized(false)
    .required(false)
    .validations([
      {
        enabledMarks: ['bold', 'italic', 'underline', 'code', 'superscript', 'subscript'],
        message: 'Only bold, italic, underline, code, superscript, and subscript marks are allowed',
      },
      {
        enabledNodeTypes: [
          'heading-1',
          'heading-2',
          'heading-3',
          'heading-4',
          'heading-5',
          'heading-6',
          'ordered-list',
          'unordered-list',
          'hr',
          'blockquote',
          'embedded-entry-block',
          'embedded-asset-block',
          'table',
          'hyperlink',
          'entry-hyperlink',
          'asset-hyperlink',
          'embedded-entry-inline',
        ],

        message:
          'Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed',
      },
      {
        nodes: {},
      },
    ])
    .disabled(false)
    .omitted(false);

  author.changeFieldControl('internalName', 'builtin', 'singleLine', {});
  author.changeFieldControl('slug', 'builtin', 'slugEditor', {});
  author.changeFieldControl('seo', 'builtin', 'entryCardEditor', {});
  author.changeFieldControl('avatarImage', 'builtin', 'assetLinkEditor', {});
  author.changeFieldControl('jobTitle', 'builtin', 'singleLine', {});
  author.changeFieldControl('fullName', 'builtin', 'singleLine', {});
  author.changeFieldControl('biography', 'builtin', 'richTextEditor', {});
  const seo = migration.createContentType('seo').name('SEO').description('').displayField('pageTitle');

  seo
    .createField('internalName')
    .name('Internal Name')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  seo
    .createField('pageTitle')
    .name('Page Title')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true,
      },
    ])
    .disabled(false)
    .omitted(false);

  seo
    .createField('pageDescription')
    .name('Page Description')
    .type('Text')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  seo
    .createField('keywords')
    .name('Keywords')
    .type('Array')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: 'Symbol',
      validations: [],
    });

  seo
    .createField('canonicalUrl')
    .name('Canonical URL')
    .type('Symbol')
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  seo
    .createField('ogImage')
    .name('OG Image')
    .type('Link')
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ['image'],
      },
    ])
    .disabled(false)
    .omitted(false)
    .linkType('Asset');

  seo
    .createField('indexing')
    .name('Indexing')
    .type('Boolean')
    .localized(false)
    .required(false)
    .validations([])
    .defaultValue({
      'en-US': false,
    })
    .disabled(false)
    .omitted(false);

  seo
    .createField('following')
    .name('Following')
    .type('Boolean')
    .localized(false)
    .required(false)
    .validations([])
    .defaultValue({
      'en-US': false,
    })
    .disabled(false)
    .omitted(false);

  seo.changeFieldControl('internalName', 'builtin', 'singleLine', {});
  seo.changeFieldControl('pageTitle', 'builtin', 'singleLine', {});
  seo.changeFieldControl('pageDescription', 'builtin', 'multipleLine', {});
  seo.changeFieldControl('keywords', 'builtin', 'tagEditor', {});
  seo.changeFieldControl('canonicalUrl', 'builtin', 'slugEditor', {});
  seo.changeFieldControl('ogImage', 'builtin', 'assetLinkEditor', {});
  seo.changeFieldControl('indexing', 'builtin', 'boolean', {});

  seo.changeFieldControl('following', 'builtin', 'boolean', {
    trueLabel: 'Yes',
    falseLabel: 'No',
  });
};
