import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Rebo Education">
    <Container>
      <Title>
        Rebo Education <Badge>2024 - Present</Badge>
      </Title>

      <P>
        Corporate education ecosystem website representing products, digital
        learning solutions and nationwide transformation initiatives.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://rebo.edu.vn" target="_blank">
            rebo.edu.vn <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Role</Meta>
          <span>Engineering Contributor</span>
        </ListItem>

        <ListItem>
          <Meta>Focus</Meta>
          <span>Web Platform, Branding, Product Ecosystem</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/rebo_01.png" alt="Rebo Education" />
      <WorkImage src="/images/works/rebo_02.png" alt="Rebo Education" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'