const posts = [
  {
    slug: 'view-model-4-plus-1',
    title: '4+1 View Model',
    author: 'Duc Huynh',
    publishedAt: '2026-04-10',
    tags: ['Architecture', 'System Design', '4+1 Model'],
    excerpt:
      'System thinking approach to align business, architecture, and engineering decisions with the 4+1 view model.',
    thumbnailPath: '/images/contents/viewmodel41.jpg',
    markdownFile: 'view-model-4-plus-1.md',
    diagramUrl:
      'https://app.diagrams.net/#G1AAlXmt3FFN_swo7wdeb_vIAClN8IADNx#%7B%22pageId%22%3A%22duIAM8N-wbyZ1FDbEobV%22%7D'
  },
  {
    slug: 'adr-architecture-decision-record',
    title: 'ADR - Architecture Decision Record',
    author: 'Duc Huynh',
    publishedAt: '2026-04-11',
    tags: ['Architecture', 'Documentation', 'Decision Making'],
    excerpt:
      'A practical way to document architecture decisions, trade-offs, and constraints for long-term maintainability.',
    thumbnailPath: '/images/contents/ADRs.png',
    markdownFile: 'adr-architecture-decision-record.md'
  },
  {
    slug: 'rfc-request-for-comments',
    title: 'RFC - Request for Comments',
    author: 'Duc Huynh',
    publishedAt: '2026-04-12',
    tags: ['Team Process', 'Engineering Culture', 'Communication'],
    excerpt:
      'A lightweight RFC workflow to improve communication quality and reduce decision conflicts in engineering teams.',
    thumbnailPath: '/images/contents/RFCs.jpg',
    markdownFile: 'rfc-request-for-comments.md'
  },
  {
    slug: 'view-model-4-plus-1-diagram',
    title: '4+1 View Model Diagram',
    author: 'Duc Huynh',
    publishedAt: '2026-04-13',
    tags: ['Diagram', 'Architecture', 'draw.io'],
    excerpt:
      'A visual architecture diagram for 4+1 View Model. This post links directly to the editable draw.io source.',
    thumbnailPath: '/images/contents/viewmodel_41_diagram.png',
    externalUrl:
      'https://app.diagrams.net/#G1AAlXmt3FFN_swo7wdeb_vIAClN8IADNx#%7B%22pageId%22%3A%22duIAM8N-wbyZ1FDbEobV%22%7D'
  }
]

export const allPosts = posts

export const getPostBySlug = slug => posts.find(post => post.slug === slug)
