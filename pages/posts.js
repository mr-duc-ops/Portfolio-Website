import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import thumb41ViewModel from '../public/images/contents/viewmodel41.jpg'
import thumb41ViewModelDiagram from '../public/images/contents/viewmodel_41_diagram.png'
import thumbADR from '../public/images/contents/ADRs.png'
import thumbRFC from '../public/images/contents/RFCs.jpg'
import thumbBlogSourceBase2026 from "../public/images/posts/blog-source-base/image_01.png"
import thumbBlogSourceBaseEveryTime from "../public/images/posts/blog-source-base/image_02.jpg"

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PostGridItem
            id="view-model-4-plus-1" 
            title="4+1 View Model"
            thumbnail={thumb41ViewModel}
          />
          <PostGridItem
            id="view-model-4-plus-1-diagram" 
            title="4+1 View Model Diagram"
            thumbnail={thumb41ViewModelDiagram}
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PostGridItem
            id="adr-architecture-decision-record" 
            title="ADR – Architecture Decision Record"
            thumbnail={thumbADR}
          />
          <PostGridItem
            id="rfc-request-for-comments" 
            title="RFC – Request for Comments"
            thumbnail={thumbRFC}
          />
        </SimpleGrid>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
        Blogs
      </Heading>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PostGridItem
            id="how-source-base-2026" 
            title="Cách tôi xây dựng backend codebase trong thời đại AI Agents"
            thumbnail={thumbBlogSourceBase2026}
          />
          <PostGridItem
            id="how-source-base-every-time" 
            title="Source Base trong trường hợp không có AI thì tôi sẽ nghĩ như thế nào?"
            thumbnail={thumbBlogSourceBaseEveryTime}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
