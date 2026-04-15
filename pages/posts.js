import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumb41ViewModel from '../public/images/contents/viewmodel41.jpg'
import thumb41ViewModelDiagram from '../public/images/contents/viewmodel_41_diagram.png'
import thumbADR from '../public/images/contents/ADRs.png'
import thumbRFC from '../public/images/contents/RFCs.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="4+1 View Model"
            thumbnail={thumb41ViewModel}
            href="https://docs.google.com/document/d/1M2rGJ8NZNVBC_gUQsPOhWFyzeAI7mjtm8YwmsKhBGpQ/edit?pli=1&tab=t.0"
          />
          <GridItem
            title="4+1 View Model Diagram"
            thumbnail={thumb41ViewModelDiagram}
            href="https://app.diagrams.net/#G1AAlXmt3FFN_swo7wdeb_vIAClN8IADNx#%7B%22pageId%22%3A%22duIAM8N-wbyZ1FDbEobV%22%7D"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="ADR – Architecture Decision Record"
            thumbnail={thumbADR}
            href="https://docs.google.com/document/d/1M2rGJ8NZNVBC_gUQsPOhWFyzeAI7mjtm8YwmsKhBGpQ/edit?pli=1&tab=t.qpqtw8lw94vc"
          />
          <GridItem
            title="RFC – Request for Comments"
            thumbnail={thumbRFC}
            href="https://docs.google.com/document/d/1M2rGJ8NZNVBC_gUQsPOhWFyzeAI7mjtm8YwmsKhBGpQ/edit?pli=1&tab=t.2zkosajz4zk"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
